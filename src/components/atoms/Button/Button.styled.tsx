import IVariant from "@/types/styles/IVariant"
import colored from "@/utils/colored"
import { Button as BaseButton } from "@adobe/react-spectrum"
import styled from "styled-components"

export const StyleButtonVar = styled.div`
    --padding-button: var(--size-2) var(--size-4);
`

export const StyledButton = colored(styled((props) => {
	return <BaseButton UNSAFE_className={props.className} {...props} />
})<{
	variant?: IVariant
	disabled?: boolean
	loading?: boolean
	children: React.ReactNode
}>`
    display: flex;
    align-items: center;
    justify-content: center;
    --padding-button: var(--size-2) var(--size-4);
    padding: var(--padding-button);

    --border-radius: var(--size-1);
    border-radius: var(--border-radius);
    
    transition: all 0.1s ease-in-out;


    ${({ disabled }) => {
			if (disabled) {
				return `
                    cursor: not-allowed !important;
                `
			}
			return `
                transition: all 0.1s ease-in-out;
                cursor: pointer !important;

                &:hover {
                    transform: scale(1.05);
                }
                &:active {
                    transform: scale(0.95);
                }
            `
		}}
            

    ${({ variant }) => {
			if (variant === IVariant.contained) {
				return `
                    background-color: hsla(
                        var(--color-hue),
                        var(--color-saturation),
                        var(--color-lightness),
                        var(--opacity)
                    ) !important;
                    color: var(--text-color) !important;
                    border: 1px solid var(--color) !important;
                    &:hover {
                        --color: hsla(
                            var(--color-hue),
                            calc(var(--color-saturation) - 5%),
                            calc(var(--color-lightness) - 5%),
                            var(--opacity)
                        );
                        
                    }
                    &:active {
                        --color: hsl(
                            var(--color-hue),
                            calc(var(--color-saturation) + 5%),
                            calc(var(--color-lightness) + 5%)
                        );
                    }
                `
			}

			if (variant === IVariant.outlined) {
				return `
                    border: 1px solid var(--color) !important;
                    color: var(--color) !important;
                    background-color: transparent !important;
                `
			}

			if (variant === IVariant.text) {
				return `
                    color: var(--color) !important;
                    background-color: transparent !important;
                    border: none !important;
                `
			}
			return ""
		}};

    ${({ disabled, loading }) => {
			if (disabled || loading) {
				return `
                    cursor: not-allowed !important;
                `
			}
			return ""
		}}
        
`)

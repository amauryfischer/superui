import IVariant from "@/types/styles/IVariant"
import colored from "@/utils/colored"
import { Button as BaseButton } from "react-aria-components"
import styled from "styled-components"

export const StyleButtonVar = styled.div`
    --padding-button: var(--size-2) var(--size-4);
`
export const ButtonContainer = styled.div`
    width: fit-content;
    height: fit-content;
`
export const StyledButton = colored(styled((props) => {
	return <BaseButton {...props} />
})<{
	variant?: IVariant
	disabled?: boolean
	loading?: boolean
	children: React.ReactNode
	noShadow?: boolean
}>`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    --padding-button: var(--size-2) var(--size-4);
    padding: var(--padding-button);

    --border-radius: var(--size-1);
    border-radius: var(--border-radius);
    
    transition: all 0.1s ease-in-out;
    &:hover {
        cursor: pointer !important;
    }
    &:focus {
        transform: scale(1.1);
    }


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
                    transform: scale(1.1);
                }
                &:active {
                    transform: scale(0.90);
                }
            `
		}}
            

    ${({ variant, noShadow }) => {
			if (variant === IVariant.contained) {
				return `
                    background-color: hsla(
                        var(--color-hue),
                        var(--color-saturation),
                        var(--color-lightness),
                        var(--opacity)
                    ) !important;
                    --shadow-color: var(--color-hue) var(--color-saturation) var(--color-lightness);
                    --shadow-active: var(--shadow-elevation-medium);
                    color: var(--text-color) !important;
                    border: 1px solid var(--color) !important;
                    box-shadow: var(--shadow-active) !important;
                    &:hover {
                        background-color: hsla(
                            var(--color-hue),
                            calc(var(--color-saturation) - 5%),
                            calc(var(--color-lightness) - 5%),
                            var(--opacity)
                        ) !important;
                        --shadow-active: var(--shadow-elevation-medium-elevated);
                        
                    }
                    &:active {
                        background-color: hsl(
                            var(--color-hue),
                            calc(var(--color-saturation) + 5%),
                            calc(var(--color-lightness) + 5%)
                        ) !important;
                    }
                    ${noShadow ? "box-shadow: none !important;" : ""}
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

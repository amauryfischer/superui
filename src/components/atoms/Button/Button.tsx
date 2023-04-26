import {
	Button as BaseButton,
	SpectrumButtonProps,
} from "@adobe/react-spectrum"
import { StyledButton } from "./Button.styled"
import IVariant, { VariantProp } from "@/types/styles/IVariant"
import Loading from "@/assets/icons/Loading"
import styled from "styled-components"

interface IButton extends Omit<SpectrumButtonProps, "variant"> {
	color?: string
	backgroundColor?: string
	children: JSX.Element | string
	variant?: VariantProp
	loading?: boolean
	onClick?: (e: Event) => void
	disabled?: boolean
}
const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    min-height: 20px;
`
const Button = ({ loading, children, onClick, ...otherProps }: IButton) => {
	const handleClick = (e: Event) => {
		if (loading) {
			return
		}
		if (onClick) {
			onClick(e)
		}
	}
	return (
		<StyledButton
			{...otherProps}
			loading={loading}
			onClick={handleClick}
			disabled={loading || otherProps.disabled}
		>
			{loading ? (
				<LoadingContainer>
					<Loading width="20px" color={otherProps.color} />
				</LoadingContainer>
			) : (
				children
			)}
		</StyledButton>
	)
}

export default Button

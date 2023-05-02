import Loading from "@/assets/icons/Loading"
import plungerImmediate from "@/assets/sounds/plunger-immediate.mp3"
import { VariantProp } from "@/types/styles/IVariant"
import styled from "styled-components"
import useSound from "use-sound"
import { ButtonContainer, StyledButton } from "./Button.styled"
import React, { useState } from "react"
import { useHover } from "react-aria"
import { ButtonProps } from "react-aria-components"
interface IButton extends Omit<ButtonProps, "variant"> {
	color?: string
	backgroundColor?: string
	children: JSX.Element | string
	variant?: VariantProp
	loading?: boolean
	onClick?: (e: Event) => void
	disabled?: boolean
	noShadow?: boolean
	noSound?: boolean
	startIcon?: JSX.Element
	endIcon?: JSX.Element
	buttonRef?: React.Ref<HTMLButtonElement>
}
const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    min-height: 20px;
`
const Button = ({
	loading,
	children,
	onClick,
	noSound,
	startIcon,
	endIcon,
	buttonRef,
	...otherProps
}: IButton) => {
	const [play] = useSound(plungerImmediate)

	let { hoverProps, isHovered: isHovering } = useHover({
		isDisabled: loading,
	})

	const handleClick = (e: Event) => {
		if (loading) {
			return
		}
		if (!noSound) {
			play()
		}
		if (onClick) {
			onClick(e)
		}
	}
	const mergedStartIconProps = {
		isHovering,
		...startIcon?.props,
	}

	const overrideStartIcon = startIcon
		? React.cloneElement(startIcon as React.ReactElement, mergedStartIconProps)
		: null

	return (
		<ButtonContainer {...hoverProps}>
			<StyledButton
				{...otherProps}
				ref={buttonRef}
				loading={loading}
				onPress={handleClick}
				disabled={loading || otherProps.disabled}
			>
				{overrideStartIcon ? <>{overrideStartIcon} </> : null}
				{loading ? (
					<LoadingContainer>
						<Loading width="25px" color={otherProps.color} />
					</LoadingContainer>
				) : (
					children
				)}
			</StyledButton>
		</ButtonContainer>
	)
}

export default Button

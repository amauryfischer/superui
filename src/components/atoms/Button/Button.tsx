import Loading from "@/assets/icons/Loading"
import plungerImmediate from "@/assets/sounds/plunger-immediate.mp3"
import { VariantProp } from "@/types/styles/IVariant"
import styled from "styled-components"
import useSound from "use-sound"
import { ButtonContainer, StyledButton } from "./Button.styled"
import React, { MouseEventHandler, RefObject, useRef, useState } from "react"
import { AriaButtonProps, useButton, useHover } from "react-aria"
import { ButtonProps } from "react-aria-components"
import type { PressEvent } from "@react-types/shared"
import Flex from "../Flex"
export interface IButton extends AriaButtonProps<"button"> {
	color?: string
	backgroundColor?: string
	children: React.ReactNode
	variant?: VariantProp
	loading?: boolean
	disabled?: boolean
	noShadow?: boolean
	noSound?: boolean
	startIcon?: JSX.Element
	endIcon?: JSX.Element
	buttonRef?: RefObject<any>
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
	onPress,
	noSound,
	startIcon,
	endIcon,
	buttonRef,
	...otherProps
}: IButton) => {
	let internalRef = useRef<Element>(null)
	let containerRef = useRef<HTMLDivElement>(null)
	let { buttonProps, isPressed } = useButton(
		{
			...otherProps,
			onPress,
			children,
		},
		buttonRef || internalRef,
	)

	const [play] = useSound(plungerImmediate)

	let { hoverProps, isHovered: isHovering } = useHover({
		isDisabled: loading,
	})

	const handleClick = (e: PressEvent) => {
		if (loading) {
			return
		}
		if (!noSound) {
			play()
		}
		if (onPress) {
			onPress(e)
		} // blur target element
	}
	const mergedStartIconProps = {
		isHovering,
		...startIcon?.props,
	}

	const overrideStartIcon = startIcon
		? React.cloneElement(startIcon as React.ReactElement, mergedStartIconProps)
		: null

	const overrideEndIcon = endIcon
		? React.cloneElement(endIcon as React.ReactElement, mergedStartIconProps)
		: null

	return (
		<>
			<ButtonContainer {...hoverProps} ref={containerRef}>
				<StyledButton
					{...otherProps}
					{...buttonProps}
					ref={buttonRef || internalRef}
					loading={loading}
					onPress={handleClick}
					disabled={loading || otherProps.disabled}
				>
					<Flex gap="size-2" alignItems="center">
						{overrideStartIcon ? <>{overrideStartIcon} </> : null}
						{loading ? (
							<LoadingContainer>
								<Loading width="25px" color={otherProps.color} />
							</LoadingContainer>
						) : (
							children
						)}
						{overrideEndIcon ? <> {overrideEndIcon} </> : null}
					</Flex>
				</StyledButton>
			</ButtonContainer>
		</>
	)
}

export default Button

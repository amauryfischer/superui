import { useRef } from "react"
import { DismissButton, Overlay, usePopover } from "react-aria"
import type { AriaPopoverProps } from "react-aria"
import type { OverlayTriggerState } from "react-stately"
import { PopoverContainer } from "./Popover.styled"

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
	children: React.ReactNode
	state: OverlayTriggerState
}

function Popover({ children, state, ...props }: PopoverProps) {
	let popoverRef = useRef(null)
	let { popoverProps, underlayProps } = usePopover(
		{
			...props,
			popoverRef,
		},
		{
			...state,
			isOpen: true,
		},
	)

	return (
		<Overlay>
			<div {...underlayProps} style={{ position: "fixed", inset: 0 }} />
			<PopoverContainer
				{...popoverProps}
				$isOpen={state.isOpen}
				ref={popoverRef}
				style={{
					...popoverProps.style,
				}}
			>
				<DismissButton onDismiss={state.close} />
				{children}
				<DismissButton onDismiss={state.close} />
			</PopoverContainer>
		</Overlay>
	)
}

export default Popover

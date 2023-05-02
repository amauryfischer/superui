import { Item, useSelectState } from "react-stately"
import { HiddenSelect, useSelect } from "react-aria"

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import { useRef } from "react"
import Button from "../Button/Button"
import ListBox from "./ListBox"
import Popover from "./Popover"
import SButton from "./SButton"

function Select(props: any) {
	// Create state based on the incoming props
	let state = useSelectState(props)

	// Get props for child elements from useSelect
	let ref = useRef(null)
	let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		props,
		state,
		ref,
	)
	return (
		<div style={{ display: "inline-block" }}>
			<div {...labelProps}>{props.label}</div>
			<HiddenSelect
				state={state}
				triggerRef={ref}
				label={props.label}
				name={props.name}
			/>
			<Button {...triggerProps} buttonRef={ref}>
				<span {...valueProps}>
					{state.selectedItem
						? state.selectedItem.rendered
						: "Select an option"}
				</span>
				<span aria-hidden="true" style={{ paddingLeft: 5 }}>
					▼
				</span>
			</Button>
			{state.isOpen && (
				<Popover state={state} triggerRef={ref} placement="bottom start">
					<ListBox {...menuProps} state={state} />
				</Popover>
			)}
			{state.isOpen.toString()}
		</div>
	)
}

export default Select

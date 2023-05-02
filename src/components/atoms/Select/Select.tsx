import { Item, useSelectState } from "react-stately"
import { HiddenSelect, useSelect } from "react-aria"

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import React, { useCallback, useEffect, useRef, useState } from "react"
import Button from "../Button/Button"
import ListBox from "./ListBox"
import ArrowDown from "@/assets/icons/ArrowDown"
import Popover from "@/components/atoms/Popover"
import { IItem } from "../Item"
import { Rotating } from "./Select.styled"

interface ISelect {
	children: (item: any) => JSX.Element
	items: Array<IItem>
	label: string
}
//children must be {(item) => <Item>{item}</Item>}
// items must be an array of objects { title: string, subTitle: string }

export const Context = React.createContext({
	selectedItemKey: "",
	setSelectedItemKey: (key: string) => {},
})
const Select = (props: ISelect) => {
	const [selectedItemKey, setSelectedItemKey] = useState<string>("1")

	const transformSelectChildren = (children: any) => {
		return function (item: any) {
			const baseItem = children(item)
			console.log("base item selectedItemId", baseItem.props.selectedItemId)
			return (
				<Item textValue={item.title}>{React.cloneElement(baseItem, item)}</Item>
			)
		}
	}
	const transformedProps = {
		...props,
		children: transformSelectChildren(props.children),
	}

	let state = useSelectState(transformedProps)

	// Get props for child elements from useSelect
	let ref = useRef(null)
	let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		transformedProps,
		state,
		ref,
	)
	const selectedItem = props.items.find(
		(item) => item.key === state.selectedItem?.key,
	)
	useEffect(() => {
		if (selectedItem && selectedItem.key !== selectedItemKey) {
			setSelectedItemKey(selectedItem.key)
		}
	}, [selectedItem])

	return (
		<Context.Provider value={{ selectedItemKey, setSelectedItemKey }}>
			<div style={{ display: "inline-block" }}>
				<div {...labelProps}>{transformedProps.label}</div>
				<HiddenSelect
					state={state}
					triggerRef={ref}
					label={transformedProps.label}
					name={transformedProps.label}
				/>
				<Button
					color="grey900"
					variant="outlined"
					{...triggerProps}
					buttonRef={ref}
					endIcon={<ArrowDown color="grey900" shouldRotate={state.isOpen} />}
				>
					{selectedItemKey}
					<span {...valueProps}>
						{selectedItem ? selectedItem?.title : "Select an option"}
					</span>
				</Button>
				{state.isOpen && (
					<Popover state={state} triggerRef={ref} placement="bottom start">
						<ListBox {...menuProps} state={state} />
					</Popover>
				)}
			</div>
		</Context.Provider>
	)
}

export default Select

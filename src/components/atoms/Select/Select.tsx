import { Item, useSelectState } from "react-stately"
import { HiddenSelect, useSelect } from "react-aria"

// Reuse the ListBox, Popover, and Button from your component library. See below for details.
import React, { useCallback, useEffect, useRef, useState } from "react"
import Button from "../Button/Button"
import ListBox from "./ListBox"
import ArrowDown from "@/assets/icons/ArrowDown"
import Popover from "@/components/atoms/Popover"
import { IItem } from "../Item"
import { Rotating, SelectTag } from "./Select.styled"
import useMultipleSelectState, { SelectState } from "./useMultipleSelectState"
import { SelectState as SingleSelectState } from "react-stately"
import _ from "lodash"
import Flex from "../Flex"
interface ISelect {
	children: (item: any) => JSX.Element
	items: Array<IItem>
	label: string
}
//children must be {(item) => <Item>{item}</Item>}
// items must be an array of objects { title: string, subTitle: string }

export const Context = React.createContext<{
	state: SelectState<IItem> | undefined
}>({
	state: undefined,
})
const Select = (props: ISelect) => {
	const transformSelectChildren = (children: any) => {
		return function (item: any) {
			const baseItem = children(item)

			return (
				<Item textValue={item.title}>{React.cloneElement(baseItem, item)}</Item>
			)
		}
	}
	const transformedProps = {
		...props,
		children: transformSelectChildren(props.children),
		selectionMode: "multiple",
		selectionBehavior: "toggle",
	}

	let state = useMultipleSelectState(
		transformedProps,
	) as unknown as SelectState<IItem>
	// Get props for child elements from useSelect
	let ref = useRef(null)
	let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		transformedProps,
		state as unknown as SingleSelectState<IItem>,
		ref,
	)

	return (
		<Context.Provider value={{ state }}>
			<div style={{ display: "inline-block" }}>
				<div {...labelProps}>{transformedProps.label}</div>
				<HiddenSelect
					state={state as unknown as SingleSelectState<IItem>}
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
					<span {...valueProps}>
						{!_.isEmpty(state.selectedItems) && (
							<Flex gap="size-1">
								{state.selectedItems.map((selectedItem) => (
									<SelectTag
										onClick={(e) => {
											debugger
											e.stopPropagation()
											e.preventDefault()
											return state.setSelectedKeys(
												state?.selectedKeys?.filter(
													(key) => key !== selectedItem.key,
												),
											)
										}}
									>
										<div>{selectedItem.textValue}</div>
										<div
											onClick={(e) => {
												debugger
												e.stopPropagation()
												e.preventDefault()
												return state.setSelectedKeys(
													state?.selectedKeys?.filter(
														(key) => key !== selectedItem.key,
													),
												)
											}}
										>
											X
										</div>
									</SelectTag>
								))}
							</Flex>
						)}
						{_.isEmpty(state.selectedItems) && "Select an option"}
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

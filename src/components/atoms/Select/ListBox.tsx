import React, { Key, RefObject, useRef } from "react"
import { useListBox, useOption } from "react-aria"
import type { AriaListBoxOptions, AriaOptionProps } from "react-aria"
import Checkbox from "../Checkbox/Checkbox"
import type { ListState } from "react-stately"
import type { Node } from "react-stately"
import { Selection } from "react-stately"
import { SelectState } from "./useMultipleSelectState"
function ListBox<T>(
	props: AriaListBoxOptions<T> & {
		state: SelectState<T>
		listBoxRef?: React.MutableRefObject<null>
	},
) {
	let ref = useRef(null)
	let { listBoxRef = ref, state } = props
	let { listBoxProps } = useListBox<T>(props, state, listBoxRef)

	return (
		<div {...listBoxProps} ref={listBoxRef}>
			{[...state.collection].map((item) => (
				<Option key={item.key} item={item} state={state} />
			))}
		</div>
	)
}

function Option<T>({ item, state }: { item: Node<T>; state: SelectState<T> }) {
	let ref = useRef(null)
	let { optionProps, isSelected, isFocused, isDisabled } = useOption(
		{ key: item.key },
		state,
		ref,
	)

	return (
		<div
			{...optionProps}
			onPointerUp={() => {
				//state.selectionManager.select(item.key)
				if (
					// @ts-ignore
					state?.selectedKeys?.length === 1 &&
					// @ts-ignore
					state?.selectedKeys?.[0] === item.key
				) {
					state.selectionManager.setSelectedKeys([])
					state.open()
					return
				}
				state.selectionManager.toggleSelection(item.key)
				state.open()
			}}
			ref={ref}
		>
			{item.rendered}
		</div>
	)
}

export default ListBox

import { RefObject, useRef } from "react"
import { useListBox, useOption } from "react-aria"
import type { AriaListBoxOptions, AriaOptionProps } from "react-aria"
import Checkbox from "../Checkbox/Checkbox"
import type { ListState } from "react-stately"
import type { Node } from "react-stately"
function ListBox<T>(
	props: AriaListBoxOptions<T> & {
		state: ListState<T>
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

function Option<T>({ item, state }: { item: Node<T>; state: ListState<T> }) {
	let ref = useRef(null)
	let { optionProps, isSelected, isFocused, isDisabled } = useOption(
		{ key: item.key },
		state,
		ref,
	)

	return (
		<div {...optionProps} ref={ref}>
			{item.rendered}
		</div>
	)
}

export default ListBox

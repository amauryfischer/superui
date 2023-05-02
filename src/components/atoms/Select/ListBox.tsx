import { useRef } from "react"
import { useListBox, useOption } from "react-aria"
import type { AriaListBoxOptions } from "react-aria"
function ListBox(props: any) {
	let ref = useRef(null)
	let { listBoxRef = ref, state } = props
	let { listBoxProps } = useListBox(props, state, listBoxRef)

	return (
		<ul
			{...listBoxProps}
			ref={listBoxRef}
			style={{
				margin: 0,
				padding: 0,
				listStyle: "none",
				maxHeight: 150,
				overflow: "auto",
				minWidth: 100,
				background: "lightgray",
			}}
		>
			{[...state.collection].map((item) => (
				<Option key={item.key} item={item} state={state} />
			))}
		</ul>
	)
}

function Option({ item, state }: any) {
	let ref = useRef(null)
	let { optionProps, isSelected, isFocused, isDisabled } = useOption(
		{ key: item.key },
		state,
		ref,
	)

	return (
		<li
			{...optionProps}
			ref={ref}
			style={{
				background: isFocused ? "gray" : "transparent",
				color: isDisabled ? "gray" : isFocused ? "white" : "black",
				padding: "2px 5px",
				outline: "none",
				cursor: "pointer",
				display: "flex",
				justifyContent: "space-between",
				gap: "10px",
			}}
		>
			{item.rendered}
			{isSelected ? <span>✓</span> : null}
		</li>
	)
}

export default ListBox

import { AriaButtonProps, useButton } from "react-aria"

function SButton(
	props: AriaButtonProps<"button"> & {
		buttonRef: React.MutableRefObject<null>
		style?: React.CSSProperties
	},
) {
	let ref = props.buttonRef
	let { buttonProps } = useButton(props, ref)
	return (
		<button {...buttonProps} ref={ref} style={props.style}>
			{props.children}
		</button>
	)
}

export default SButton

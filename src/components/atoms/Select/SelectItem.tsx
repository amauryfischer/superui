import { Item as BaseItem } from "react-stately"
import Flex from "../Flex"
import Checkbox from "../Checkbox/Checkbox"
import { useContext } from "react"
import { Context } from "../Select"
import { IItem } from "../Item"
import Item from "../Item/Item"

const SelectItem = (props: Omit<IItem, "isChecked">) => {
	const { state } = useContext(Context)
	let isSelected = false
	if (state?.selectedKeys === "all") {
		isSelected = true
	}
	// @ts-ignore
	if (state?.selectedKeys?.includes(props.id)) {
		isSelected = true
	}

	return <Item {...props} isChecked={isSelected} />
}

export default SelectItem

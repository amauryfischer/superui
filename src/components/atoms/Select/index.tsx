import SelectItem from "./SelectItem"
import Select from "./Select"
import { IItem } from "../Item"
export * from "./Select"

// Select.Item is SelectItem
export interface ISelect extends React.FC<ISelect> {
	Item: React.FC<Omit<IItem, "isChecked">>
}
;(Select as unknown as ISelect).Item = SelectItem

export default Select as typeof Select & {
	Item: typeof SelectItem
}

import { Item as BaseItem } from "react-stately"
import Flex from "../Flex"
import Checkbox from "../Checkbox/Checkbox"
import { useContext } from "react"
import { Context } from "../Select"
import { ItemContainer } from "./Item.styled"
import { SelectState } from "../Select/useMultipleSelectState"

export interface IItem {
	title: string
	subTitle: string
	key: string
	isCheckable?: boolean
	id: string
	isChecked?: boolean
}

const Item = ({ title, subTitle, isCheckable, isChecked }: IItem) => {
	return (
		<ItemContainer $isSelected={isChecked} color="caramel">
			<Flex gap="size-4">
				{isCheckable && <Checkbox isSelected={isChecked} />}
				<Flex direction="column">
					<div>{title}</div>
					<div>{subTitle}</div>
				</Flex>
			</Flex>
		</ItemContainer>
	)
}

export default Item

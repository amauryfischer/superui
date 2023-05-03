import { Item as BaseItem } from "react-stately"
import Flex from "../Flex"
import Checkbox from "../Checkbox/Checkbox"
import { useContext } from "react"
import { Context } from "../Select"
import { ItemContainer } from "./Item.styled"

export interface IItem {
	title: string
	subTitle: string
	key: string
	isCheckable?: boolean
	id: string
}

const Item = ({
	title,
	subTitle,
	isCheckable,
	key,
	id,
	...otherProps
}: IItem) => {
	const { selectedItemKey } = useContext<any>(Context)
	return (
		<ItemContainer $isSelected={selectedItemKey === id} color="caramel">
			<Flex gap="size-4">
				{isCheckable && <Checkbox isSelected={selectedItemKey === id} />}
				<Flex direction="column">
					<div>{title}</div>
					<div>{subTitle}</div>
				</Flex>
			</Flex>
		</ItemContainer>
	)
}

export default Item

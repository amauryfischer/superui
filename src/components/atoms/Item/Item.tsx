import {
	Button,
	Menu,
	MenuTrigger,
	Popover,
	Text,
	Item as BaseItem,
} from "react-aria-components"
import Checkbox from "../Checkbox/Checkbox"
import Flex from "../Flex"
import { Description, ItemContainer, StyledItem } from "./Item.styled"
import { useRef, useState } from "react"

const Item = ({
	hasCheckbox,
	title = "",
	subTitle = "",
	hasActions,
	...otherProps
}: React.ComponentProps<typeof StyledItem> & {
	title: string
	subTitle?: string
}) => {
	const [checked, setChecked] = useState(false)
	return (
		<BaseItem hasChildItems>
			<ItemContainer
				justifyContent="space-between"
				gap="size-4"
				onClick={() => {
					debugger
					return setChecked(!checked)
				}}
			>
				<Flex gap="size-2">
					{hasCheckbox && <Checkbox isSelected={checked} />}
					<Flex direction="column">
						<Text slot="label">
							{title} - {checked.toString()}
						</Text>
						<Description slot="description">{subTitle}</Description>
					</Flex>
				</Flex>
				<Flex gap="size-2">
					{hasActions && (
						<MenuTrigger>
							<Button aria-label="Menu">☰</Button>
							<Popover>
								<Menu onAction={alert}>
									<StyledItem id="open">Open</StyledItem>
									<StyledItem id="rename">Rename…</StyledItem>
									<StyledItem id="duplicate">Duplicate</StyledItem>
								</Menu>
							</Popover>
						</MenuTrigger>
					)}
				</Flex>
			</ItemContainer>
		</BaseItem>
	)
}

export default Item

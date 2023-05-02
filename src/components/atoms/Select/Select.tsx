import { Item, ListBox, ListView, Picker, Text } from "@adobe/react-spectrum"
import Button from "@/components/atoms/Button"
import { Overlay } from "react-aria"
import {
	Dialog,
	DialogTrigger,
	OverlayArrow,
	Popover,
} from "react-aria-components"
import Flex from "../Flex"
import styled from "styled-components"

const SItem = styled(Item)`
	& > * {
		min-width: 300px !important;
	}
`
const items = [
	{ id: 1, name: "Adobe Photoshop" },
	{ id: 2, name: "Adobe XD" },
	{ id: 3, name: "Adobe InDesign" },
	{ id: 4, name: "Adobe AfterEffects" },
	{ id: 5, name: "Adobe Illustrator" },
	{ id: 6, name: "Adobe Lightroom" },
	{ id: 7, name: "Adobe Premiere Pro" },
	{ id: 8, name: "Adobe Fresco" },
	{ id: 9, name: "Adobe Dreamweaver" },
]

const Select = (props: any) => {
	return (
		<>
			<Picker
				maxWidth="size-6000"
				height="500px"
				width="500px"
				aria-label="Dynamic ListView items example"
				label="Pick an animal"
				items={items}
				//onSelectionChange={setAnimalId}
			>
				<SItem key="rarely" textValue="Rarely">
					<Flex direction="column" gap="size-2">
						<Text slot="title">Rarely</Text>
						<Text slot="description">ok</Text>
					</Flex>
				</SItem>
				<Item key="sometimes">Sometimes</Item>
				<Item key="always">Always</Item>
			</Picker>
		</>
	)
}

export default Select

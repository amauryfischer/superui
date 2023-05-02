import { useState } from "react"
import Button from "@/components/atoms/Button/Button"
import GlobalStyle from "@/styles/GlobalStyle"
import IVariant from "./types/styles/IVariant"
import styled from "styled-components"
import Loading from "./assets/icons/Loading"
import Shop from "./assets/icons/Shop"
import Flex from "./components/atoms/Flex"
import { Item, ListView, Provider, defaultTheme } from "@adobe/react-spectrum"
import {
	Dialog,
	DialogTrigger,
	ListBox,
	OverlayArrow,
	Popover,
} from "react-aria-components"
import Select from "./components/atoms/Select/Select"

const BigButton = styled(Button)`
	--padding-button: var(--size-4) var(--size-8) !important;
`
const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding: var(--size-8);
`
const SListView = styled(ListView)`
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
const App = () => {
	const [loading, setLoading] = useState(false)
	return (
		<Provider theme={defaultTheme} colorScheme="light">
			<AppContainer>
				<Flex gap="size-4" direction="column">
					<Flex gap="size-4">
						<Button
							variant="contained"
							loading={loading}
							onClick={() => setLoading(!loading)}
							noShadow
						>
							Contained no shadow
						</Button>
						<BigButton
							color="cyan"
							variant="outlined"
							loading={loading}
							onClick={() => setLoading(!loading)}
						>
							Override style
						</BigButton>
						<Button
							color="cyan"
							variant="text"
							loading={loading}
							onClick={() => setLoading(!loading)}
						>
							Text
						</Button>
						<Button color="emerald800" variant="contained">
							Normal
						</Button>
						<Button color="emerald300" variant="outlined">
							outlined
						</Button>
						<Button color="emerald200" variant="contained">
							coucou
						</Button>
						<Button noSound>just no sound</Button>
						<Button startIcon={<Shop color="neutral900" width="24px" />}>
							start icon
						</Button>
						<Button color="grey" variant="contained">
							end icon
						</Button>
						<GlobalStyle />
					</Flex>
					<Flex gap="size-4">
						<Select></Select>
					</Flex>
				</Flex>
			</AppContainer>
		</Provider>
	)
}

export default App

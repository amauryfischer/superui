import Button from "@/components/atoms/Button/Button"
import Select from "@/components/atoms/Select"
import GlobalStyle from "@/styles/GlobalStyle"
import { ListView, Provider, defaultTheme } from "@adobe/react-spectrum"
import { useState } from "react"
import styled from "styled-components"
import Shop from "./assets/icons/Shop"
import Flex from "@/components/atoms/Flex"
import Item from "./components/atoms/Item/Item"
const BigButton = styled(Button)`
	--padding-button: var(--size-4) var(--size-8) !important;
`
const AppContainer = styled.div`
	width: 100vw;
	height: 100vh;
	padding: var(--size-8);
`

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
							onPress={() => setLoading(!loading)}
							noShadow
						>
							Contained no shadow
						</Button>
						<BigButton
							color="cyan"
							variant="outlined"
							loading={loading}
							onPress={() => setLoading(!loading)}
						>
							Override style
						</BigButton>
						<Button
							color="cyan"
							variant="text"
							loading={loading}
							onPress={() => setLoading(!loading)}
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
						<Select
							label="Favorite Color"
							items={[
								{
									key: "1",
									title: "red",
									subTitle: "red",
									id: "1",
									isCheckable: true,
								},
								{
									key: "2",
									title: "blue",
									subTitle: "blue",
									id: "2",
									isCheckable: true,
								},
								{
									key: "3",
									title: "green",
									subTitle: "green",
									id: "3",
									isCheckable: true,
								},
							]}
						>
							{(item: any) => {
								return <Select.Item {...item} />
							}}
						</Select>
					</Flex>
				</Flex>
			</AppContainer>
		</Provider>
	)
}

export default App

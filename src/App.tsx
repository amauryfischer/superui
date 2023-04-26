import { useState } from "react"
import Button from "@/components/atoms/Button/Button"
import GlobalStyle from "@/styles/GlobalStyle"
import IVariant from "./types/styles/IVariant"
import styled from "styled-components"
import { Flex } from "@adobe/react-spectrum"
import Loading from "./assets/icons/Loading"

const BigButton = styled(Button)`
	--padding-button: var(--size-4) var(--size-8) !important;
`

const App = () => {
	const [loading, setLoading] = useState(false)
	return (
		<Flex gap="size-4">
			<Button
				variant={"contained"}
				loading={loading}
				onClick={() => setLoading(!loading)}
			>
				coucou
			</Button>
			<BigButton
				color="cyan"
				variant="outlined"
				loading={loading}
				onClick={() => setLoading(!loading)}
			>
				coucou
			</BigButton>
			<Button
				color="cyan"
				variant="text"
				loading={loading}
				onClick={() => setLoading(!loading)}
			>
				coucou
			</Button>
			<Button color="emerald800" variant="contained">
				coucou
			</Button>
			<Button color="emerald300" variant="outlined">
				coucou
			</Button>
			<Button color="emerald200" variant="contained">
				coucou
			</Button>
			<GlobalStyle />
		</Flex>
	)
}

export default App

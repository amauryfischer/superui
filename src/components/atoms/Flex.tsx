import styled from "styled-components"

interface FlexProps {
	direction?: "row" | "column"
	alignItems?: "center" | "flex-start" | "flex-end"
	justifyContent?: "center" | "flex-start" | "flex-end" | "space-between"
	gap?: string
}

const Flex = styled.div<FlexProps>`
    display: flex;
    flex-direction: ${({ direction }) => direction ?? "row"};
    align-items: ${({ alignItems }) => alignItems ?? "initial"};
    justify-content: ${({ justifyContent }) => justifyContent ?? "initial"};
    gap: ${({ gap }) => gap && `var(--${gap})`};
    `

export default Flex

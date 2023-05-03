import { Item, Text } from "react-aria-components"
import styled, { css } from "styled-components"
import Flex from "../Flex"
import colored from "@/utils/colored"

export const StyledItem = styled(Item)``
export const Description = styled(Text)`
    color: var(--grey500);
    font-size: 0.8rem;
`
export const ItemContainer = colored(styled(Flex)<{ $isSelected?: boolean }>`
    --padding-item-container: var(--size-2) var(--size-4);
    padding: var(--padding-item-container);
    min-width: 200px;
    &:hover {
        cursor: pointer;
        background-color: hsl(var(--primary-hue), 100%, 95%);
    }
    ${({ $isSelected }) =>
			$isSelected &&
			css`
            border: 1px solid var(--primary);
            background-color: hsl(var(--primary-hue), 100%, 95%);
        `}
`)

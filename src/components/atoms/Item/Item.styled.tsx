import { Item, Text } from "react-aria-components"
import styled from "styled-components"
import Flex from "../Flex"

export const StyledItem = styled(Item)``
export const Description = styled(Text)`
    color: var(--grey500);
    font-size: 0.8rem;
`
export const ItemContainer = styled(Flex)`
    --padding-item-container: var(--size-2) var(--size-4);
    padding: var(--padding-item-container);
`

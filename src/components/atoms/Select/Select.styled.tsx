import shadow from "@/styles/shadow"
import {
	Select as BaseSelect,
	Button,
	Item,
	ListBox,
	Popover,
} from "react-aria-components"
import styled from "styled-components"

export const StyledSelect = styled(BaseSelect)`
    background-color: white;
`
export const StyledSelectButton = styled(Button)`
    --padding-button: var(--size-2) var(--size-4);
    padding: var(--padding-button);
    background-color: white;
    display: flex;
    align-items: center;
        gap: var(--size-2);
`
export const StyledArrowDownContainer = styled.div<{
	isActive: boolean
}>`
	// if is active transform 180deg
	transform: ${({ isActive }) => (isActive ? "rotate(180deg)" : "rotate(0deg)")};
	transition: transform 0.2s ease-in-out;
`

export const StyledListBox = styled(ListBox)`
--color: var(--grey800);
--color-hue: var(--grey-hue);
--color-saturation: var(--grey-lightness);
--color-lightness: var(--grey800-lightness);
	${shadow}
	background-color: white;
	border-radius: var(--size-1);
	box-shadow: var(--shadow-elevation-medium-elevated) !important;
	border: 1px solid var(--grey-300);
	width: 100%;
`

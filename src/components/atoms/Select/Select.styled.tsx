import ArrowDown from "@/assets/icons/ArrowDown"
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
export const Rotating = styled.div<{ isOpen: boolean }>`
	transition: transform 0.2s ease-in-out;
	transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")} !important;
`
export const SelectTag = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	border: 1px solid var(--grey900);
	padding: var(--size-1) var(--size-2);
	border-radius: var(--size-4);
	gap: var(--size-2);
	z-index: 9999;
`

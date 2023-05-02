import styled, { keyframes } from "styled-components"

const fadeIn = keyframes`
0% {
    opacity: 0;
    transform: translateZ(0px) scale(0.95);
}
60% {
    opacity: 0.75;
    backface-visibility: hidden;
    transform: translateZ(0px) scale(1.05);
}

100% {
    opacity: 1;
    transform: translateZ(0px) scale(1);
}
`
export const PopoverContainer = styled.div<{ $isOpen: boolean }>`
    transition: all 0.2s ease-in-out;
    animation-name: ${fadeIn};
    animation-timing-function: ease-out;
    animation-direction: normal;
    animation-duration: 300ms;
    animation-fill-mode: both;
    box-shadow: var(--shadow-elevation-medium);
    padding: var(--size-1);

`

import { createGlobalStyle } from "styled-components"
import colors from "./colors"
import size from "@/styles/size"
import shadow from "./shadow"

const GlobalStyle = createGlobalStyle`
    :root {
        ${colors}
        ${size}
    }
    * {
        stroke-width: 0.6rem !important;
    }

    .react-aria-Popover {
  --background-color: var(--page-background);
  --border-color: var(--spectrum-global-color-gray-400);

  border: 1px solid var(--border-color);
  box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
  border-radius: 6px;
  background: var(--background-color);
  outline: none;
  padding: 30px;
  max-width: 250px;

  .react-aria-OverlayArrow svg {
    display: block;
    fill: var(--background-color);
    stroke: var(--border-color);
    stroke-width: 1px;
  }

  &[data-placement=top] {
    margin-bottom: 6px;
    --origin: translateY(8px);
  }

  &[data-placement=bottom] {
    margin-top: 6px;
    --origin: translateY(-8px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(180deg);
    }
  }

  &[data-placement=right] {
    margin-left: 6px;
    --origin: translateX(-8px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(90deg);
    }
  }

  &[data-placement=left] {
    margin-right: 6px;
    --origin: translateX(8px);
    & .react-aria-OverlayArrow svg {
      transform: rotate(-90deg);
    }
  }

  &[data-entering] {
    animation: slide 200ms;
  }

  &[data-exiting] {
    animation: slide 200ms reverse ease-in;
  }
}

@keyframes slide {
  from {
    transform: var(--origin);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.react-aria-Dialog {
  outline: none;
}

.react-aria-Button {
  background: var(--spectrum-global-color-gray-50);
  border: 1px solid var(--spectrum-global-color-gray-400);
  border-radius: 4px;
  color: var(--spectrum-alias-text-color);
  appearance: none;
  vertical-align: middle;
  font-size: 1.2rem;
  text-align: center;
  margin: 0;
  outline: none;
  padding: 6px;
  transition: border-color 200ms;

  &[data-hovered] {
    border-color: var(--spectrum-global-color-gray-500);
  }

  &[data-pressed] {
    box-shadow: inset 0 1px 2px rgb(0 0 0 / 0.1);
    background: var(--spectrum-global-color-gray-100);
    border-color: var(--spectrum-global-color-gray-600);
  }

  &[data-focus-visible] {
    border-color: slateblue;
    box-shadow: 0 0 0 1px slateblue;
  }
}

@media (forced-colors: active) {
  .react-aria-Popover {
    --background-color: Canvas;
    --border-color: ButtonBorder;
  }
}

    
`

export default GlobalStyle

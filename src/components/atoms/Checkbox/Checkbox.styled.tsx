import { Checkbox } from "react-aria-components"
import styled from "styled-components"

export const StyledCheckbox = styled(Checkbox)`
  --label-color: var(--spectrum-alias-text-color);
  --deselected-color: gray;
  --deselected-color-pressed: dimgray;
  --selected-color: var(--primary);
  --selected-color-pressed: lch(from slateblue calc(l - 10%) c h);
  --checkmark-color: white;
  --invalid-color: var(--spectrum-global-color-static-red-600);
  --invalid-color-pressed: var(--spectrum-global-color-static-red-700);
  
  display: flex;
  align-items: center;
  gap: 0.571rem;
  font-size: 1.143rem;
  color: var(--label-color);

  .checkbox {
    width: 1.143rem;
    height: 1.143rem;
    border: 2px solid var(--deselected-color);
    border-radius: 4px;
    transition: all 200ms;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & svg {
    width: 1rem;
    height: 1rem;
    fill: none;
    stroke: var(--checkmark-color);
    stroke-width: 3px !important;
    stroke-dasharray: 22px;
    stroke-dashoffset: 66;
    transition: all 200ms;
  }
  & svg polyline {
    stroke-width: 3px !important;
    }

  &[data-pressed] .checkbox {
    border-color: var(--deselected-color-pressed);
  }

  &[data-selected],
  &[data-indeterminate] {
    .checkbox {
      border-color: var(--selected-color);
      background: var(--selected-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--selected-color-pressed);
      background: var(--selected-color-pressed);
    }

    & svg {
      stroke-dashoffset: 44;
    }
  }

  &[data-validation-state=invalid] {
    .checkbox {
      border-color: var(--invalid-color);
    }

    &[data-pressed] .checkbox {
      border-color: var(--invalid-color-pressed);
    }

    &[data-selected],
    &[data-indeterminate] {
      .checkbox {
        background: var(--invalid-color);
      }

      &[data-pressed] .checkbox {
        background: var(--invalid-color-pressed);
      }
    }
  }

  &[data-indeterminate] {
    & svg {
      stroke: none;
      fill: var(--checkmark-color);
    }
  }

  &[data-focus-visible] .checkbox {
    box-shadow: 0 0 0 2px var(--spectrum-alias-background-color-default), 0 0 0 4px var(--selected-color);
  }

  &[data-disabled] {
    opacity: 0.4;
  }


`

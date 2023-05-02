import { createGlobalStyle } from "styled-components"
import colors from "./colors"
import size from "@/styles/size"
import shadow from "./shadow"

const GlobalStyle = createGlobalStyle`
    :root {
        ${colors}
        ${size}
        --color-hue: 0;
        --color-saturation: 0%;
        --color-lightness: 0%;
        ${shadow}
    }
    * {
        stroke-width: 0.6rem !important;
    }
    
`

export default GlobalStyle

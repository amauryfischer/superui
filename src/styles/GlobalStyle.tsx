import { createGlobalStyle } from "styled-components"
import colors from "./colors"
import size from "@/utils/size"

const GlobalStyle = createGlobalStyle`
    :root {
        ${colors}
        ${size}

    }
`

export default GlobalStyle

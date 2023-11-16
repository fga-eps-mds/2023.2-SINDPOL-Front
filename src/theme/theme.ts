// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = {
  ...extendTheme({ config }),
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
    mono: "Inter, sans-serif",
    rubik: "Rubik, sans-serif",
    logo: "Archivo, Inter, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#F6F6F3",
        color: "#454545",
      },
    },
  },
  colors: {
    orange: "#FFA500",
    greenAccent: "#CBF8B6",
    softGreen: "#779E70",
    pinkAccent: "#F1B4BB",
    softRed: "#CF6E6E",
  },
}
export default theme

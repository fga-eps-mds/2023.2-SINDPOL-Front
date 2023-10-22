import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { ChakraProvider } from "@chakra-ui/react"
import { store } from "./app/store/store"
import App from "./App"
import "./index.css"
import theme from "./theme/theme"
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
)

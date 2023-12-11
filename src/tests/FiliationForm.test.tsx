import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import App from "../App"
import { MemoryRouter,Router } from 'react-router-dom';


test("renders learn react link", () => {
  const { getByText } = render(
    <MemoryRouter initialEntries={['/']}>
    <App />
  </MemoryRouter>
  )

})

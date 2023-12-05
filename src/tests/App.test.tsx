import { render } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import App from "../App"
import { MemoryRouter } from 'react-router-dom';
import { Router } from "react-router"


test('renders learn react link', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  
});

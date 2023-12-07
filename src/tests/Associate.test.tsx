import { render, screen, fireEvent} from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import Associates from "../pages/Associates"
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from 'react-router-dom';


describe("Associate page", () => {
  it('shoul render sindicalizados', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Associates />
        </MemoryRouter>
      </Provider>
    );

    screen.getByText('Sindicalizados');

  });

  it('shoul click in button cadastrar', () => {
    const{ getByText  }= render(
      <Provider store={store}>
        <MemoryRouter>
          <Associates />
        </MemoryRouter>
      </Provider>
    );

    const formbutton = getByText('Cadastrar');

    userEvent.click(formbutton);



  })



})

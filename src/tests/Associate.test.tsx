import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import Associates from "../pages/Associates"
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

})

import { render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import App from "../App"
import Associates from "../pages/Associates"

describe("Associate page", () => {
    it('shoul render sindicalizados', () => {
        render(<Associates />);

        screen.getByText('Sindicalizados');

    });

})

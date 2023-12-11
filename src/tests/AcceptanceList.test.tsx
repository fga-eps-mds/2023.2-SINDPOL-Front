import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import AceeptanceList from "../pages/AceeptanceList";
import { Provider } from "react-redux"
import { store } from "../app/store/store"
import { MemoryRouter, Router } from 'react-router-dom';
import userEvent from "@testing-library/user-event";




describe("AceeptanceList component", () => {
    it("renders AceeptanceList", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AceeptanceList />
                </MemoryRouter>
            </Provider>
        );

        screen.getAllByText('Aprovar cadastro de sindicalizados');

    });

    const mockAssociates = [
        {
            id: '1',
            fullName: 'Pedro',
            cpf: '12345678901',
            registration: '1234',
            birthDate: '2000-01-01',
            status: 'Active',
        },
    ];

    const worker = setupServer(
        http.get('http://localhost:8001/api/users', () => HttpResponse.json([{
            id: '1',
            fullName: 'Pedro',
            cpf: '12345678901',
            registration: '1234',
            birthDate: '2000-01-01',
            status: 'Active',
        }])
        ));

    beforeAll(() => {
        worker.listen()
    });

    it('renders Aceeptance page with provided data', async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <AceeptanceList />
                </MemoryRouter>
            </Provider>
        );


        await waitFor(() => {
            mockAssociates.forEach((associate) => {
                const fullNameElement = screen.getByText(associate.fullName);

                
                expect(fullNameElement).toBeInTheDocument();
            });
        });
    });
    it('should click the "Aprovar cadastro""', () => {


        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <AceeptanceList />
                </MemoryRouter>
            </Provider>
        );

        const formButton = getByText('Aprovar cadastro');
        userEvent.click(formButton);

    });

    it('should click the "Desaprovar cadastro""', () => {


        const { getByText } = render(
            <Provider store={store}>
                <MemoryRouter>
                    <AceeptanceList />
                </MemoryRouter>
            </Provider>
        );

        const formButton = getByText('Desaprovar cadastro');
        userEvent.click(formButton);

    });

});


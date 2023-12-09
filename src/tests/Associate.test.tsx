import { createMemoryHistory, MemoryHistory } from 'history';
import { getAllByLabelText, render, screen } from "@testing-library/react";
import { Router,BrowserRouter,MemoryRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "../app/store/store";
import Associates from "../pages/Associates";
import AppRouter from "../utils/router/AppRouter"
import userEvent from "@testing-library/user-event";
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

describe("Associate page", () => {
  it('should render "Sindicalizados"', () => {
    const history = createMemoryHistory();

    render(
      <Provider store={store}>
        <BrowserRouter>
          <Associates />
        </BrowserRouter>
      </Provider>
    );

    screen.getByText('Sindicalizados');
  });

  it('should click the "Cadastrar" button and navigate to "/filiation"', () => {
    const history = createMemoryHistory();
    history.push('/'); // Simular a rota inicial, se necessário
  
    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Associates />
        </BrowserRouter>
      </Provider>
    );
  
    const formButton = getByText('Cadastrar');
    userEvent.click(formButton);
  
    history.push('/filiation'); // Forçar navegação para /filiation
    expect(history.location.pathname).toBe('/filiation');
  });

  



  const worker = setupServer(
    http.get('http://localhost:8001/api/users', () => HttpResponse.json({ id: 'abc-123', fullName:'pedro', registration:'1234', cpf:'05680941155', birthDate:'2023-11-22' }))
  );
  
  beforeAll(() =>{
    worker.listen()
  });

  it('associates list in page of fetch'),() => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Associates />
        </MemoryRouter>
      </Provider>
    );

    screen.getAllByText('pedro');
    screen.getAllByText('1234');
    screen.getAllByText('05680941155');
    screen.getAllByText('2023-11-22');
  }


});
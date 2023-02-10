import { render, screen, waitFor } from '@testing-library/react';

import { Modal } from '../../components/Modal';
import { useFetchClaroData } from '../../hooks/useFetchClaroData';

// JEST MOCK FOR USING CUSTOM HOOK
jest.mock('../../hooks/useFetchClaroData');

// TESTING IN MODAL
describe('Pruebas en <Modal />', () => {
  test('Originalmente debe de aparecer la tabla de fallback', () => {
    // INITIALIZE CUSTOM HOOK
    useFetchClaroData.mockReturnValue({
      isLoading: true,
      error: null,
      msg: '',
      response: [],
    });
    const modalHandler = jest.fn();
    render(<Modal modalHandler={modalHandler} />);
    expect(screen.getByRole('table').className).toBe('fallback-table');
    // screen.debug()
  });

  test('Debe de mostrar el botón para cerrar el modal', () => {
    // INITIALIZE CUSTOM HOOK
    useFetchClaroData.mockReturnValue({
      isLoading: true,
      error: null,
      msg: '',
      response: [],
    });
    const modalHandler = jest.fn();
    render(<Modal modalHandler={modalHandler} />);
    expect(screen.getByRole('button').className).toBe('close-button');
    // screen.debug()
  });

  test('Debe de mostrar el header del modal', () => {
    // INITIALIZE CUSTOM HOOK
    useFetchClaroData.mockReturnValue({
      isLoading: true,
      error: null,
      msg: '',
      response: [],
    });
    const modalHandler = jest.fn();
    render(<Modal modalHandler={modalHandler} />);
    expect(screen.queryByTestId('modal-header')).toBeTruthy();
    // screen.debug()
  });

  test('Debe de mostrar un mensaje de error si no retorna nada el API', () => {
    // INITIALIZE CUSTOM HOOK
    useFetchClaroData.mockReturnValue({
      isLoading: false,
      error: null,
      msg: '',
      response: [],
    });
    const modalHandler = jest.fn();
    render(<Modal modalHandler={modalHandler} />);
    expect(screen.getByText('No response from the api')).toBeTruthy();
    // screen.debug()
  });

  test('Debe cargar el <FallbackTable /> debido al "Suspense" de React', async () => {
    // INITIALIZE CUSTOM HOOK
    useFetchClaroData.mockReturnValue({
      isLoading: false,
      error: null,
      msg: 'OK',
      response: {
        channels: [
          {
            id: '35357',
            name: 'CANAL 3 GT',
            number: '3',
            image: 'https://some-claro-img.png/',
            events: [
              {
                id: '1',
                name: 'NA',
                description: null,
                date_begin: '2021/08/12 20:02:56',
                date_end: '2021/08/12 21:02:56',
                duration: '01:00:00',
              },
            ],
          },
        ],
      },
    });
    const modalHandler = jest.fn();
    await render(<Modal modalHandler={modalHandler} />);
    await waitFor(() => {
      expect(screen.getByRole('table')).toBeTruthy();
    });
    // screen.debug()
  });
});

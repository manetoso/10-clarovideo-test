import { fireEvent, render, screen } from "@testing-library/react"

import App from "../App"

// TESTING IN APP
describe('Pruebas en <App />', () => {
	test('No debe de aparecer el modal al iniciar la app', () => {
		render(<App />)
		expect( screen.queryByTestId('modal') ).toBeNull()
		// screen.debug()
	})

	test('Debe de abrir el modal al hacer click en el botón de abrir', () => {
		render(<App />)
		const button = screen.getByRole('button')
		// FIRING CLICK EVENT
		fireEvent.click(button)
		
		expect( screen.getByTestId('modal') ).toBeTruthy()
		// screen.debug()
	})

	test('Debe de cerrar el modal al hacer click en el botón de cerrar', () => {
		render(<App />)
		const button = screen.getByRole('button')
		// FIRING CLICK EVENT
		fireEvent.click(button)

		const [_, closeButton] = screen.getAllByRole('button')
		// FIRING SECOND CLICK EVENT
		fireEvent.click(closeButton)
		
		expect( screen.queryByTestId('modal') ).toBeNull()
		// screen.debug()
	})
})
import { render, screen } from '@testing-library/react';

import Table from '../../components/Table';

// TESTING IN TABLE
describe('Pruebas en <Table />', () => {
  // FAKE DATA RESPONSE FROM THE API
  const fakeResponse = {
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
  };
  test('Debe de mostrar el canal con su número e imagen y sus eventos', () => {
    render(<Table response={fakeResponse} />);
		// screen.debug()
		expect( screen.getByText( fakeResponse.channels[0].number ).textContent ).toBeTruthy()
		expect( screen.getByTestId('channel-image').src ).toBe( fakeResponse.channels[0].image )
		expect( screen.getByTestId('channel-image').alt ).toBe( fakeResponse.channels[0].name )
		expect( screen.getByText( fakeResponse.channels[0].events[0].name ).textContent ).toBeTruthy()

		const [screenStartHour, screenEndHour] = screen.getByTestId('event-schedule').textContent.split('-')
		const dataStartHour = fakeResponse.channels[0].events[0].date_begin.split(' ')[1].substring(0, 5)
		const dataEndHour = fakeResponse.channels[0].events[0].date_end.split(' ')[1].substring(0, 5)
		
		expect( screenStartHour.substring(0, screenStartHour.length - 1) ).toBe( dataStartHour )
		expect( screenEndHour.substring(1, screenStartHour.length) ).toBe( dataEndHour )
  });
});

import { render, screen } from '@testing-library/react';

import { ModalHeader } from '../../components/Modal';
import { clearHeaderData, convertDateToTime, setHeaderData } from '../../utils/utils';

// TESTING IN UTILS.JS
describe('Pruebas en utils.js', () => {
  test('Debe de convertir una fecha en string a tiempo en string', () => {
    const dateInString = '2021/08/12 20:02:56';
    const dateReturned = '20:02';
    const date = convertDateToTime(dateInString);

    expect(date).toBe(dateReturned);
    // console.log(date);
  });

  test('Debe de escribir datos en <ModalHeader />', () => {
    const headerData = {
      date_begin: '2021/08/12 20:02:56',
      date_end: '2021/08/12 21:02:56',
      description: 'Some channel description',
      duration: '01:00:00',
      name: 'Some event name',
    };
    const [hours, seconds] = headerData.duration.split(':');
    const time = `${convertDateToTime(
      headerData.date_begin
    )}hrs a ${convertDateToTime(
      headerData.date_end
    )}hrs - ${hours}h ${seconds}min`;

    render(<ModalHeader />);
    setHeaderData(headerData);

    expect(screen.getByText(headerData.name)).toBeTruthy();
    expect(screen.getByText(headerData.description)).toBeTruthy();
    expect(screen.getByText(time)).toBeTruthy();
    // screen.debug();
  });

	test('Debe de limpiar la información del <ModalHeader />', () => {
    const headerData = {
      date_begin: '2021/08/12 20:02:56',
      date_end: '2021/08/12 21:02:56',
      description: 'Some channel description',
      duration: '01:00:00',
      name: 'Some event name',
    };
    const [hours, seconds] = headerData.duration.split(':');
    const time = `${convertDateToTime(
      headerData.date_begin
    )}hrs a ${convertDateToTime(
      headerData.date_end
    )}hrs - ${hours}h ${seconds}min`;

    render(<ModalHeader />);
    setHeaderData(headerData);
    clearHeaderData();
		
		expect( screen.queryByText(headerData.name) ).toBeNull()
    // screen.debug();
  });
});

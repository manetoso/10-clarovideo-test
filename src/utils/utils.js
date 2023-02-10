// CONVERTS A DATE TO TIME IN STRING
export const convertDateToTime = dateString => {
  const date = new Date(dateString);
  const options = { hour: '2-digit', minute: '2-digit' };
  return date.toLocaleTimeString('es-MX', options);
};

/**
 * SET DATA INTO THE HEADER WITH QUERYSELECTORS
 *  I TRIED TO CONTROLL THE METHOD WITH STATE
 *  MANAGEMENT BUT EVERY STATE CHANGE
 *  CAUSED A RE-RENDER THAT SLOW THE PC A LOT
 * 
 * USING PLAIN JAVASCRIPT IT IS MUCH FASTER
 */
export const setHeaderData = ({
  date_begin,
  date_end,
  description,
  duration,
  name,
}) => {
  const title = window.document.querySelector('#modal-header-title');
  const time = window.document.querySelector('#modal-header-time');
  const desc = window.document.querySelector('#modal-header-desc');
  const [hours, seconds] = duration.split(':');
  title.textContent = name;
  time.textContent = `${convertDateToTime(date_begin)}hrs a ${convertDateToTime(
    date_end
  )}hrs - ${hours}h ${seconds}min`;
  desc.textContent = description ||= 'Sin descripción';
};

// CLEAR HEADER DATA
export const clearHeaderData = () => {
  const title = window.document.querySelector('#modal-header-title');
  const time = window.document.querySelector('#modal-header-time');
  const desc = window.document.querySelector('#modal-header-desc');
  title.textContent = '';
  time.textContent = '';
  desc.textContent = '';
};

// OBJECT WITH THE TIMELINE FOR THE SCHEDULE HEADER-MENU
export const timeline = [
  { hour: '20:00' },
  { hour: '20:30' },
  { hour: '21:00' },
  { hour: '21:30' },
  { hour: '22:00' },
  { hour: '22:30' },
  { hour: '23:00' },
  { hour: '23:30' },
  { hour: '0:00' },
  { hour: '0:30' },
  { hour: '1:00' },
  { hour: '1:30' },
  { hour: '2:00' },
  { hour: '2:30' },
  { hour: '3:00' },
  { hour: '3:30' },
  { hour: '4:00' },
  { hour: '4:30' },
  { hour: '5:00' },
  { hour: '5:30' },
  { hour: '6:00' },
  { hour: '6:30' },
  { hour: '7:00' },
  { hour: '7:30' },
  { hour: '8:00' },
  { hour: '8:30' },
  { hour: '9:00' },
  { hour: '9:30' },
  { hour: '10:00' },
  { hour: '10:30' },
  { hour: '11:00' },
  { hour: '11:30' },
  { hour: '12:00' },
  { hour: '12:30' },
  { hour: '13:00' },
  { hour: '13:30' },
  { hour: '14:00' },
  { hour: '14:30' },
  { hour: '15:00' },
  { hour: '15:30' },
  { hour: '16:00' },
  { hour: '16:30' },
  { hour: '17:00' },
  { hour: '17:30' },
  { hour: '18:00' },
  { hour: '18:30' },
  { hour: '19:00' },
  { hour: '19:30' },
];

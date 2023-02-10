import { useCallback } from 'react';
import PropTypes from 'prop-types';

import {
  clearHeaderData,
  convertDateToTime,
  setHeaderData,
  timeline,
} from '../utils/utils';

import '../styles/components/table.css';

// SINGLE EVENT FORM CHANNEL
export function EventFromChannel({ event }) {
  // DESTRUCTURING EVENT DATA
  const { name, date_begin, date_end, description, duration } = event;

  // GETTING SCHEDULE OF THE EVENT
  const [startHour] = convertDateToTime(event.date_begin).split(':');
  const [finishHour] = convertDateToTime(event.date_end).split(':');

  /**
   * GETTING INDEXES OF SCHEDULE HEADER-MENU
   *  TO POSITION THE EVENT ON THE TABLE
   */
  const startIndex = timeline.findIndex(({ hour }) => {
    const [singleHour] = hour.split(':');
    return Number(singleHour) === Number(startHour);
  });
  const endIndex = timeline.findIndex(({ hour }) => {
    const [singleHour] = hour.split(':');
    return Number(singleHour) === Number(finishHour);
  });
  // SPAN CELL
  const span = startIndex === 46 ? 2 : endIndex - startIndex;
  return (
    <th
      className='event-cell'
      colSpan={span}
      onMouseEnter={() =>
        setHeaderData({ date_begin, date_end, description, duration, name })
      }
      onMouseLeave={clearHeaderData}>
      <h3 data-testid='event-name'>{event.name}</h3>
      <span data-testid='event-schedule'>
        {convertDateToTime(event.date_begin)} -{' '}
        {convertDateToTime(event.date_end)}
      </span>
    </th>
  );
}

EventFromChannel.propTypes = {
  event: PropTypes.object.isRequired,
};

// EPG TABLE
function Table({ response }) {
  /**
   * MEMOIZE THE EVENTS OF EACH CHANNEL
   *  BECAUSE REQUIRES A LOT OF TIME
   *  TO DISPLAYED IN THE SCREEN
   * 
   * A RE-RENDER WOULD SLOW DOWN THE PC A LOT!!!
   */
  const displayEvents = useCallback(
    ({ channel }) =>
      channel.events.map((event, i) => (
        <EventFromChannel key={i} event={event} />
      )),
    [response]
  );
  return (
    <table>
      <thead>
        <tr>
          <th>HOY</th>
          {/* SCHEDULE HEADER-MENU */}
          {timeline.map(({ hour }, i) => (
            <th key={i}>{hour}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {response.channels.map((channel, i) => (
          <tr key={i}>
            <th>
              <span data-testid='channel-number'>{channel.number}</span>
              <img data-testid='channel-image' src={channel.image} alt={channel.name} />
            </th>
            {displayEvents({ channel })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  response: PropTypes.object.isRequired,
};

export default Table;

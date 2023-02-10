import React, { Suspense } from 'react';
import PropTypes from 'prop-types';

import { useFetchClaroData } from '../hooks/useFetchClaroData';
import { timeline } from '../utils/utils';

import '../styles/components/modal.css';

// LAZY COMPONENT
const Table = React.lazy(() => import('./Table'));

// COMPONENT WHEN THE API RETURN AN UNEXPECTED VALUE
function NoResponse() {
  return <p>No response from the api</p>;
}
/**
 * COMPONENT FOR THE HEADER OF THE MODAL
 *  TO SHOW THE EVENT DATA
 */
export function ModalHeader() {
  return (
    <div className='modal-header' data-testid='modal-header'>
      <h2 id='modal-header-title'></h2>
      <span id='modal-header-time'></span>
      <p id='modal-header-desc'></p>
    </div>
  );
}

/**
 * FALLBACK COMPONENT FOR LAZY LOADING
 *  IMPROVES PERFORMANCE
 */
function FallbackTable() {
  return (
    <table className='fallback-table'>
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
        {[...Array(5).keys()].map(ele => (
          <tr key={ele}>
            <th></th>
            {[...Array(10).keys()].map(e => (
              <th key={e}></th>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// MODAL
export function Modal({ modalHandler }) {
  // REQUIRES DATA FROM THE CUSTOM HOOK
  const { response, msg, isLoading } = useFetchClaroData();
  return (
    <section id='modal' data-testid='modal'>
      <div className='modal-content'>
        {/* CLOSE BUTTON */}
        <button className='close-button' onClick={modalHandler}>
          X
        </button>
        <ModalHeader channelHovered={null} />
        {/*
          LOGIC TO RENDER FALLBACK TABLE,
          TABLE OR ERROR MESSAGE
         */}
        <div className='table-epg'>
          {isLoading ? (
            <FallbackTable />
          ) : msg === 'OK' ? (
            // SUSPENCE LOGIC
            <Suspense fallback={<FallbackTable />}>
              <Table response={response} />
            </Suspense>
          ) : (
            <NoResponse />
          )}
        </div>
      </div>
    </section>
  );
}

Modal.propTypes = {
  modalHandler: PropTypes.func.isRequired,
};

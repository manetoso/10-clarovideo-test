import { useState } from 'react';
import { Modal } from './components/Modal';
import './styles/app.css';

function App() {
  // MODAL FLAG STATE
  const [isOpenModal, setIsOpenModal] = useState(false);
  // MODAL HANDLER
  const modalHandler = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <div className='app-container'>
      <header>
        <h1>Claro Frontend Test</h1>
        <p>
          Para revisar el modal con la informaci&oacute;n hay que hacer click en el
          bot&oacute;n debajo.
        </p>
      </header>
      <main>
        <button onClick={() => setIsOpenModal(!isOpenModal)}>
          Mostrar EPG
        </button>
        {/* CONDITIONALLY RENDER MODAL */}
        {isOpenModal && <Modal modalHandler={modalHandler} />}
      </main>
    </div>
  );
}

export default App;

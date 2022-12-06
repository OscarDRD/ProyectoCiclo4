import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import MyForm from './MyForm';

function MyModal({show, handleClose}) {

  return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Por Favor Ingrese sus Datos</Modal.Title>
        </Modal.Header>
        <Modal.Body><MyForm></MyForm></Modal.Body>
      </Modal>
  );
}

export default MyModal;
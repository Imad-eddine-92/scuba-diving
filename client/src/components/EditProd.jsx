import { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { editProd } from '../JS/actions/prodAction';

function EditProd({ product }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [editedProd, setEditedProd] = useState({
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
    });
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setEditedProd({ ...editedProd, [e.target.name]: e.target.value });
    };

    const handleEdit = (e) => {
        e.preventDefault();
        dispatch(editProd(product._id, editedProd))
        handleClose();
    }

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter title" name = "title" value = {editedProd.title} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Enter description" name = "description" value = {editedProd.description} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="number" name = "price" value = {editedProd.price} onChange = {handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Image URL" name = "image" value = {editedProd.image} onChange = {handleChange} />
      </Form.Group>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditProd;
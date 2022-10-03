import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap-icons/font/bootstrap-icons.css";
function UpdateNote({ id, text, date, changeTitle, title, changeTextNew }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <i className="bi bi-pencil-square" onClick={handleShow}></i>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="noteNew">
            <div className="big-note-header">
              <h5>Title</h5>
              <input type="text" value={title} onChange={changeTitle}></input>
            </div>
            <textarea
              className="textarea-note"
              rows="8"
              cols="10"
              placeholder="Starts here for type to add a note..."
              value={text}
              onChange={changeTextNew}
            ></textarea>
            <div className="note-footer">
              <small>200 Remaining</small>
              <button className="save" onClick={handleClose}>
                Save
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UpdateNote;

import React from "react";
import { Modal } from "react-bootstrap";

function ButtonForm(props) {
  //const context = useContext(awscontext);
  return (
    <Modal
      style={{ fontWeight: "bold", fontSize: 13 }}
      show={props.show}
      onHide={props.handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>{props.Title ? props.Title : "Result"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children
          ? props.children
          : props.Body
          ? props.Body
          : "The transaction was completed successfully."}
      </Modal.Body>

      {props.children ? (
        ""
      ) : (
        <Modal.Footer>
          {!props.handleDelete ? (
            <React.Fragment>
              <button onClick={props.handleClose}>Close</button>
            </React.Fragment>
          ) : (
            <div className="d-flex flex-fill justify-content-between">
              <button
                className="btn btn-primary btn-sm"
                onClick={props.handleDelete}
                type="button"
              >
                Delete
              </button>
              <button
                className="btn btn-primary btn-sm"
                onClick={props.handleClose}
                type="button"
              >
                Cancel
              </button>
            </div>
          )}
        </Modal.Footer>
      )}
    </Modal>
  );
}
export default ButtonForm;
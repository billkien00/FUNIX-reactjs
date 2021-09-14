import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import React from "react";

function ModalComponent({ closeModal }) {
  return (
    <div>
      <h1>day la modalap</h1>
      <Modal>
        <ModalFooter>
          <Button color="primary">Do Something</Button>{" "}
          <Button color="secondary">Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalComponent;

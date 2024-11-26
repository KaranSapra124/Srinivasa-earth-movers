import React from "react";
import Modal from "../../Modals/Modal";
import EditCaseStudies from "./EditCaseStudies";

const EditCaseModal = ({ isOpen, setIsOpen, editItem }) => {
    console.log(editItem)
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <EditCaseStudies editItem={editItem} />
      </Modal>
    </>
  );
};

export default EditCaseModal;

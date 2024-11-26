import React, { useState } from "react";
import Modal from "../../Modals/Modal";
import CaseStudiesForm from "./CaseStudiesForm";

const AddCaseStudies = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <CaseStudiesForm />
      </Modal>
    </>
  );
};

export default AddCaseStudies;

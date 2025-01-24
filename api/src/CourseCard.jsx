
import React, { useState } from "react"
import Form from "./Form";
import { Modal } from "@mui/material";

const CourseCard = ({ title, fee, duration, onDelete, _id }) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <h1>{title}</h1>
      <h3>{fee}</h3>
      <p>{duration}:months</p>
      <button onClick={() => onDelete(_id)}>Delete</button>
      <button onClick={handleOpen}>Update</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        
      >
        
         <Form initialData={{ title, fee, duration, onDelete,_id}} />
      </Modal>
      <button onClick={handleClose}>close</button>
    </div>
  )
}

export default CourseCard

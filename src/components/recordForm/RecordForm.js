import React, {useEffect, useState} from 'react';
import {Box, Button, Modal, TextField} from "@mui/material";
import {render} from "react-dom";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RecordForm = ({
                      recordId = '',
                      recordData = {
                        title: '',
                        price: '',
                        description: ''
                      }
                    }) => {
  const [open, setOpen] = React.useState(false);
  const [id] = React.useState(recordId);
  const [data, setData] = useState(recordData)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  const submit = () => {
    const body = JSON.stringify(data)
    fetch(`http://localhost:3001/products/${id}`, {
      method: id ? 'PATCH' : 'POST',
      body,
      headers: {'Content-Type': 'application/json'},
    })
      .then(res => res.json())
      .then(json => setData(json))
      .catch(console.error)
  }

  return (
    <div>
      <Button
        color={"inherit"}
        variant="outlined"
        onClick={handleOpen}
      >
        {id ? 'Edit' : 'Create'}
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <TextField onChange={handleChange} value={data.title} id="title" label="Title" variant="outlined"/>
          <TextField onChange={handleChange} value={data.price} id="price" label="Price" variant="outlined"/>
          <TextField onChange={handleChange} value={data.description} id="description" label="Description"
                     variant="outlined"/>
          <Button onClick={submit} variant={"outlined"} color={"success"}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default RecordForm;
import React, {useState} from 'react';
import {Button, CardContent, Stack, Typography} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RecordForm from "../../recordForm/RecordForm";

const Product = ({
                   card, recordData = {
                      title: '',
                      price: '',
                      description: ''
                    },recordId
                 }) => {
  const [data, setData] = useState(recordData)
  const [id] = useState(recordId);

  const removeProduct = () => {
    const body = JSON.stringify(data)

    fetch(`http://localhost:3001/products/${id}`, {
      method: 'DELETE',
    })
      .then((result)=>{
        result.json().then(setData(result))
      })
  }
  return (
    <div>
      <CardContent
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
        }}
        align={'center'}
      >
        <Typography sx={{mt: 2, mb: 2, overflowX: 'hidden'}} component="div">
          {card.title}
        </Typography>
        <Stack sx={{mt: 2, mb: 2}} component="div">
          <Typography>
            Price: {card.price} $
          </Typography>
          <Typography sx={{overflowX: 'hidden'}}>
            Info: {card.description}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={1}
          justifyContent={"right"}
        >
          <RecordForm recordData={card} recordId={card.id}/>
          <Button
            variant="outlined"
            color={"error"}
            startIcon={<DeleteIcon/>}
            onClick={removeProduct}
          >
            Delete
          </Button>
          <Button variant="outlined" color={"success"}
                  startIcon={<ShoppingCartIcon/>}
          >To Card</Button>
        </Stack>
      </CardContent>
    </div>
  );
};

export default Product;
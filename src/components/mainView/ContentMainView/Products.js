import React, {useEffect, useState} from 'react';
import {Box, Grid, Pagination, Stack, TextField} from "@mui/material";
import Product from "./Product";

const BASE_URL = 'http://localhost:3001/products'

const Products = () => {
  const [products, setProducts] = useState([])
  const [valueInput, setValueInput] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(10)

//request data
  useEffect(() => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(json => setProducts(json))
      .catch(console.error)
  }, [])

  //filter search
  const filterCard = products.filter(products => {
    return products.title.toLowerCase().includes(valueInput.toLowerCase())
  })

  // custom pagination
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filterCard.slice(indexOfFirstProduct, indexOfLastProduct)

  //pagination count
  const pages = Math.ceil(filterCard.length / productsPerPage)

  //render cards
  const productItems = currentProducts.map((c, iter) =>
    <Box
      xs={12}
      sm={5}
      md={3}
      sx={{m: 2}}
      key={iter}>
      <Product key={c.id} card={c} products={products}/>
    </Box>
  )
//split into modules
  return (
    <Grid>
      <Grid
        sx={{m: 2}}
        container
        alignItems="center"
        justifyContent="center">
        <TextField
          color={'primary'}
          variant={'standard'}
          placeholder={'Search'}
          onChange={e => setValueInput(e.target.value)}
        />
      </Grid>
      <Grid container
            alignItems="center"
            justifyContent="center"
      >
        {productItems}
      </Grid>
      <Stack
        sx={{mt: 2, mb: 2}}
        alignItems="center"
        justifyContent="center"
        spacing={2}
      >
        <Pagination
          count={pages}
          page={currentPage}
          color="primary"
          onChange={(_, value) => setCurrentPage(value)}
        />
      </Stack>
    </Grid>

  );
};

export default Products;
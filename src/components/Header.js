import React from 'react';
import {AppBar, Box, Button, IconButton, Stack, Toolbar, Typography} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RecordForm from "./recordForm/RecordForm";

const Header = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{mr: 2}}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
            Test Case
          </Typography>
          <Stack direction="row"
                 spacing={1}>
            <RecordForm/>
            <Button
              color={"inherit"}
              variant="outlined"
              startIcon={<ShoppingCartIcon/>}
            >Card</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
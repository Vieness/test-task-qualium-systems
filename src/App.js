import MainView from "./components/mainView/MainView";
import {Grid} from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      sx={{
        backgroundColor: '#f8f8f8'
      }}>
      <Header/>
      <MainView/>
    </Grid>
  );
}

export default App;

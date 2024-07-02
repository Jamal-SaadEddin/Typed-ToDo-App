import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Grid container textAlign="center">
      <Grid item xs={12}>
        <Navbar />
      </Grid>
    </Grid>
  );
};

export default App;

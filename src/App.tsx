import { Divider, Grid } from "@mui/material";
import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ToDosList from "./components/ToDosList";
import todos from "./constants/todos";
import ToDo from "./entities/ToDo";

const App = () => {
  const [currentTodos, setCurrentTodos] = useState<ToDo[]>(todos);

  return (
    <Grid
      container
      textAlign="center"
      spacing={4}
      sx={{ px: { xs: 2, md: 10, lg: 15, xl: 60 } }}
    >
      <Grid item xs={12}>
        <Navbar currentTodos={currentTodos} setCurrentTodos={setCurrentTodos} />
      </Grid>
      <Grid item xs={12}>
        <Divider />
        <ToDosList
          currentTodos={currentTodos}
          setCurrentTodos={setCurrentTodos}
        />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;

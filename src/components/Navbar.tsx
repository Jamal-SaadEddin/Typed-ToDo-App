import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { useState } from "react";
import APP_LOGO from "../assets/todo-icon.png";
import ToDo from "../entities/ToDo";

let newToDoId: number = 16;
interface Props {
  currentTodos: ToDo[];
  setCurrentTodos: (todos: ToDo[]) => void;
}

const Navbar = ({ currentTodos, setCurrentTodos }: Props) => {
  const [newTodoContent, setNewTodoContent] = useState<string>("");

  const handleAdd = () => {
    const newTodo: ToDo = {
      id: newToDoId++,
      content: newTodoContent,
      completed: false,
    };
    setCurrentTodos([newTodo, ...currentTodos]);
    setNewTodoContent("");
  };

  return (
    <Stack spacing={4}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Box>
          <img src={APP_LOGO} width={100} />
        </Box>
        <Typography variant="h3">To Do App</Typography>
      </Stack>
      <Stack direction="row" justifyContent="center" spacing={5}>
        <Input
          placeholder="Add a new ToDo..."
          sx={{ width: { xs: "100%", lg: "50%" } }}
          value={newTodoContent}
          onInput={(e) =>
            setNewTodoContent((e.target as HTMLInputElement).value)
          }
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
        />
        <Button
          variant="contained"
          onClick={handleAdd}
          disabled={newTodoContent.replace(/\s/g, "") === ""}
        >
          Add
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;

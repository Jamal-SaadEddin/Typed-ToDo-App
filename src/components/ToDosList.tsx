import DeleteIcon from "@mui/icons-material/Delete";
import DoneIcon from "@mui/icons-material/Done";
import RedoIcon from "@mui/icons-material/Redo";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import ToDo from "../entities/ToDo";

interface Props {
  currentTodos: ToDo[];
  setCurrentTodos: (todos: ToDo[]) => void;
}

const ToDosList = ({ currentTodos, setCurrentTodos }: Props) => {
  const markAsCompleted = (id: number) => {
    const updatedTodos = currentTodos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setCurrentTodos(updatedTodos);
  };

  const handleDelete = (id: number) => {
    const filteredTodos = currentTodos.filter((todo) => todo.id !== id);
    setCurrentTodos(filteredTodos);
  };

  if (currentTodos.length === 0)
    return (
      <Typography variant="h6" mt={3}>
        No To-Do items available!
      </Typography>
    );

  return (
    <List>
      {currentTodos.map((todo) => (
        <React.Fragment key={todo.id}>
          <ListItem
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDelete(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <IconButton
                disableRipple
                sx={{ cursor: "pointer" }}
                onClick={() => markAsCompleted(todo.id)}
              >
                {todo.completed ? (
                  <RedoIcon color="primary" />
                ) : (
                  <DoneIcon color="success" />
                )}
              </IconButton>
            </ListItemAvatar>
            <ListItemText
              primary={todo.content}
              sx={{
                color: todo.completed ? "text.disabled" : "text.primary",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ToDosList;

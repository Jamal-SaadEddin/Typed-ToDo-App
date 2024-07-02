import DoneIcon from "@mui/icons-material/Done";
import RedoIcon from "@mui/icons-material/Redo";
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
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

  return (
    <List>
      {currentTodos.map((todo) => (
        <React.Fragment key={todo.id}>
          <ListItem>
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

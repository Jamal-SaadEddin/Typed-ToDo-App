import { Divider, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import ToDo from "../entities/ToDo";

interface Props {
  todos: ToDo[];
}

const ToDosList = ({ todos }: Props) => {
  return (
    <List>
      {todos.map((todo) => (
        <React.Fragment key={todo.id}>
          <ListItem>
            <ListItemText primary={todo.content} />
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ToDosList;

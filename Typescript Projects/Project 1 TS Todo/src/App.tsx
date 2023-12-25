import {
  AppBar,
  Button,
  Container,
  Stack,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import TodoItem from "./components/TodoItem";
import { getTodos, saveTodosInLocal } from "./utils/features";

const App = () => {
  const [todos, setTodos] = useState<TodoItemType[]>(getTodos());
  const [title, setTitle] = useState<TodoItemType["title"]>("");

  const completeHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      if (item.id === id) item.isCompleted = !item.isCompleted;
      return item;
    });

    setTodos(newTodos);
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const newTodos: TodoItemType[] = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const editHandler = (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ): void => {
    const newTodos: TodoItemType[] = todos.map((item) => {
      if (item.id === id) item.title = newTitle;
      return item;
    });

    setTodos(newTodos);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (title.trim() == "") return;
    const newTodo: TodoItemType = {
      title,
      isCompleted: false,
      id: String(Math.floor(Math.random() * 10000)),
    };

    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  useEffect(() => {
    saveTodosInLocal(todos);
  }, [todos]);

  return (
    <Container maxWidth="sm" sx={{ height: "100vh" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography>Todo App</Typography>
        </Toolbar>
      </AppBar>

      <Stack
        height={"70%"}
        direction={"column"}
        overflow={"auto"}
        spacing={"1rem"}
        p={"1rem"}
      >
        {todos.map((item) => {
          return (
            <TodoItem
              completeHandler={completeHandler}
              deleteHandler={deleteHandler}
              editHandler={editHandler}
              todo={item}
              key={item.id}
            />
          );
        })}
      </Stack>
      <form onSubmit={submitHandler}>
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          label="New Task"
        />
        <Button
          type="submit"
          sx={{ margin: "1rem 0" }}
          fullWidth
          variant="contained"
        >
          Add
        </Button>
      </form>
    </Container>
  );
};

export default App;

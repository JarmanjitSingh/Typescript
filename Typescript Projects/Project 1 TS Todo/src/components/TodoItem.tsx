import { Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

type PropsType = {
  todo: TodoItemType;
  completeHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
  editHandler: (
    id: TodoItemType["id"],
    newTitle: TodoItemType["title"]
  ) => void;
};

const TodoItem = ({
  todo,
  completeHandler,
  deleteHandler,
  editHandler,
}: PropsType) => {
  const [activeEdit, setActiveEdit] = useState<boolean>(false);
  const [textVal, setTextVal] = useState<TodoItemType["title"]>(todo.title);

  return (
    <>
      <Paper sx={{ padding: "1rem" }} variant="outlined">
        {" "}
        <Stack direction={"row"} alignItems={"center "}>
          {activeEdit ? (
            <TextField
              value={textVal}
              onChange={(e) => setTextVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key == "Enter" && textVal !== "") {
                  editHandler(todo.id, textVal);
                  setActiveEdit(false);
                }
              }}
            />
          ) : (
            <Typography marginRight={"auto"}>{todo.title}</Typography>
          )}
          <Checkbox
            checked={todo.isCompleted}
            onChange={() => completeHandler(todo.id)}
          />
          <Button onClick={() => setActiveEdit(true)}>
            <Edit />
          </Button>
          <Button onClick={() => deleteHandler(todo.id)}>
            <Delete />
          </Button>
        </Stack>
      </Paper>
    </>
  );
};

export default TodoItem;

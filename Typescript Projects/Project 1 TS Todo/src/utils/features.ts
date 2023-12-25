export const saveTodosInLocal = (todos: TodoItemType[]) => {
  localStorage.setItem("myTodos", JSON.stringify(todos));
};

export const getTodos = ():TodoItemType[] => {
  let todos =localStorage.getItem("myTodos");

  return todos ? JSON.parse(todos) : []
};

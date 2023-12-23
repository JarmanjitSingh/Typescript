"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
const todos = [];
const todosContainer = document.querySelector(".todosContainer");
const todoInput = document.getElementsByName("title")[0];
const myForm = document.getElementById("myForm");
myForm.onsubmit = (e) => {
    e.preventDefault();
    const todo = {
        title: todoInput.value,
        isCompleted: false,
        id: String(Math.random() * 1000),
    };
    todos.push(todo);
    todoInput.value = "";
    renderTodo(todos);
};
const generateTodoitem = (title, isCompleted, id) => {
    const todo = document.createElement('div');
    todo.className = "todo";
    //creating a checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');
    checkBox.className = "isCompleted";
    checkBox.checked = isCompleted;
    checkBox.onchange = () => {
        todos.find(item => {
            if (item.id === id) {
                item.isCompleted = !item.isCompleted;
            }
        });
        paragraph.className = checkBox.checked ? "textCut" : "";
    };
    //creating p for title
    const paragraph = document.createElement('p');
    paragraph.innerText = title;
    paragraph.className = isCompleted ? "textCut" : "";
    //creating a delete button
    const btn = document.createElement('button');
    btn.innerText = "X";
    btn.className = 'deleteBtn';
    btn.onclick = () => {
        deleteTodo(id);
    };
    //appending all to todoitem
    todo.append(checkBox, paragraph, btn);
    todosContainer.append(todo);
};
const deleteTodo = (id) => {
    const idexi = todos.findIndex(item => item.id === id);
    todos.splice(idexi, 1);
    renderTodo(todos);
};
const renderTodo = (todos) => {
    todosContainer.innerText = "";
    todos.forEach((item) => {
        generateTodoitem(item.title, item.isCompleted, item.id);
    });
};

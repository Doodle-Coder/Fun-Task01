import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
  showFinished: true,
};

const updateLocalStorage = (todos) => {
  localStorage.setItem("TodoList", JSON.stringify(todos));
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    loadTodos(state) {
      const savedTodos = JSON.parse(localStorage.getItem("TodoList")) || [];
      state.todos = savedTodos;
    },
    addTodo: (state, action) => {
      const newTodo = {
        id: uuidv4(),
        todo: action.payload,
        isCompleted: false,
      };
      state.todos.push(newTodo);
      updateLocalStorage(state.todos);
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
      updateLocalStorage(state.todos);
    },
    editTodo: (state, action) => {
      const { id, newTodo } = action.payload;
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, todo: newTodo } : todo
      );
      updateLocalStorage(state.todos);
    },
    toggleTodoCompletion(state, action) {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
      updateLocalStorage(state.todos);
    },
    toggleShowFinished(state) {
      state.showFinished = !state.showFinished;
    },
    setCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    clearCurrentTodo: (state) => {
      state.currentTodo = null;
    },
  },
});

export const {
  loadTodos,
  addTodo,
  deleteTodo,
  editTodo,
  toggleTodoCompletion,
  toggleShowFinished,
  setCurrentTodo,
  clearCurrentTodo,
} = todoSlice.actions;

export default todoSlice.reducer;

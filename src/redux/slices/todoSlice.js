import { createSlice } from "@reduxjs/toolkit";
import { formatDate } from "../../helpers/formatDate";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    ADD_TODO: (state, action) => {
      const newId = state.length === 0 ? 1 : state[state.length - 1].id + 1;

      const newTodo = {
        id: newId,
        created: formatDate(),
        value: action.payload,
      };

      return [...state, newTodo];
    },
    EDIT_TODO: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);

      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, value: action.payload.value };
        } else {
          return todo;
        }
      });
    },
    DELETE_TODO: (state, action) => {
      return state.filter((todo) => todo.id != action.payload.id);
    },
  },
});

// ACTIONS
export const { ADD_TODO, EDIT_TODO, DELETE_TODO } = todoSlice.actions;

// SELECTORS
export const selectTodos = (state) => state.todo;

// REDUCERS
export default todoSlice.reducer;

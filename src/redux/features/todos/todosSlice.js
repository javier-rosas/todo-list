import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      if (action.payload !== "") {
        state.push(action.payload)
      }
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo !== action.payload)
    }
  }
})

export const selectTodos = (state) => state.todos
export const { addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer
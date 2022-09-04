import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import TodoDataService from '../services/todoService'

// initial state
const initialState = {
  todos: [],
  status: 'idle',
  error: null
}


// get Todos
export const apiGetTodos = createAsyncThunk(
  'todos/getTodos', 
  async (payload, { rejectWithValue }) => {
    const {email, token} = payload
    try {
      const response = await TodoDataService.getTodos(email, token)
      return response
    } catch(e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
})

// add Todo
export const apiAddTodo = createAsyncThunk(
  'todos/addTodo', 
  async (payload, { rejectWithValue }) => {
    const {todo, token} = payload
    try {
      TodoDataService.addTodo(todo, token)
      .catch((e) => console.log(e))
      return todo
    } catch(e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
})

// authenticate User
export const apiAuthenticateUser = createAsyncThunk(
  'user/authenticate',
  async (payload, { rejectWithValue  }) => {
    try {
      const response = await TodoDataService.authenticateUser(payload)
      console.log("From the bakend", response.data.token);
      return response.data.token;
    } catch (e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
  }
)

// delete Todo
export const apiDeleteTodo = createAsyncThunk(
  'todos/deleteTodo', 
  async (payload, { rejectWithValue }) => {
    const {indexToDelete, token} = payload
    try {
      TodoDataService.deleteTodo(indexToDelete, token)
      .catch((e) => {console.error(e)})
      return indexToDelete
    } catch(e) {
      if (!e.response) throw e
      return rejectWithValue(e.response.data)
    }
})

// todoSlicer
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  extraReducers: {
    // getTodo
    [apiGetTodos.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiGetTodos.fulfilled] : (state, action) => {
      state.status = 'succeded'
      state.todos = action.payload
    },
    [apiGetTodos.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    // addTodo 
    [apiAddTodo.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiAddTodo.fulfilled] : (state, action) => {
      state.status = 'succeded'
      if (action.payload !== "") state.todos.push(action.payload)
    },
    [apiAddTodo.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    // deleteTodo
    [apiDeleteTodo.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiDeleteTodo.fulfilled] : (state, action) => {
      state.status = 'succeded'
      state.todos = state.todos.filter(todo => todo !== action.payload)
    },
    [apiDeleteTodo.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
     // deleteTodo
     [apiAuthenticateUser.pending] : (state, action) => {
      state.status = 'loading'
    },
    [apiAuthenticateUser.fulfilled] : (state, action) => {
      state.status = 'succeded'
       // token 
      localStorage.setItem("user_token", action.payload)
    },
    [apiAuthenticateUser.rejected] : (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

// state selector
export const selectTodos = (state) => state.todos.todos
export const getTodosStatus = (state) => state.todos.status
export const getTodosError = (state) => state.todos.error


export default todosSlice.reducer
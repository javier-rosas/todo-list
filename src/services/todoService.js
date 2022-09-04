import axios from 'axios'

// Auth0 Audience (https://localhost:5000/api/vi/todos)
const audience = 'http://localhost:5001/api/v1/todos'
const token = localStorage.getItem("user_token");
class TodoDataService {

  static async authenticateUser(userData) {
    return axios.post(`${audience}/authenticate`);
  }

  static async getTodos(email) {
    return axios.get(`${audience}/${email}`, 
                      { headers: { 'Authorization': `${token}` }})
  }

  static async addTodo(todo) {
    return axios.put(`${audience}/todo`, 
                       {todo: todo},
                       { headers: { "Authorization": `${token}` }})
  }

  static async deleteTodo(todo) {
    return axios.delete(`${audience}/todo`, 
                          {todo: todo}, 
                          {headers: { "Authorization": `${token}` }})
  }

}

export default TodoDataService

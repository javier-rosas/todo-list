import { useSelector } from 'react-redux'
import { selectTodos } from '../redux/todosSlice'
import { apiDeleteTodo } from '../redux/todosSlice'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Form from 'react-bootstrap/Form'



function TodoList() {

  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)
  const { getAccessTokenSilently } = useAuth0()

  const onCheck = async (e) => {
    if (e.target.checked) {
      const token = await getAccessTokenSilently()
      const indexToDelete = e.target.id
      const payload = { indexToDelete, token }
      dispatch( apiDeleteTodo(payload) )
      e.target.checked = false
    }
  }

  const renderedTodos = todos.map((todoItem, i) => (
    <div key={i} className="todo"> 
      <Form.Check
        className="switch"
        type="switch"
        id={todoItem}
        onChange={onCheck}
        />
      <p className="title-text">
        {todoItem}
      </p> 
    </div>
  ))

  return (
    <>
    {renderedTodos}
    </>
  )
}

export default TodoList
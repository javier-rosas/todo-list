import { useSelector } from 'react-redux'
import { selectTodos } from './todosSlice';
import { deleteTodo } from './todosSlice'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'


function TodoList() {

  const dispatch = useDispatch()
  const todos = useSelector(selectTodos)

  const onCheck = (e) => {
    if (e.target.checked) {
      dispatch( deleteTodo(e.target.id) )
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
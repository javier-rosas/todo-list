import { useState } from 'react'
import { addTodo } from '../redux/todosSlice'
import { useDispatch } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { BsFillPlusCircleFill } from "react-icons/bs"



function TodoForm() {

  const dispatch = useDispatch()

  const [todo, setTodo] = useState("")
  const [press, setPress] = useState(false)

  const onChange = (e) => {
    setTodo(e.target.value)
  }

  const onKeyEnter = (e) => {  
    if (e.key === "Enter") {
      e.preventDefault()
      dispatch( addTodo(todo) )
      setTodo("")
    }
  }

  const onClickPlusIcon = (e) => {
    setPress(true)
    dispatch( addTodo(todo) )
    setTimeout(() => setPress(false), 75)
    setTodo("")
  }


  return (
    <Form className="items">
      <BsFillPlusCircleFill
        className={press ? "add-btn-pressed" : "add-btn"}
        onClick={onClickPlusIcon}
      />
      <Form.Control 
        type="text" 
        placeholder="Enter todo"
        onChange={onChange}
        onKeyDown={onKeyEnter}
        value={todo}
        />
    </Form>
  )
}

export default TodoForm
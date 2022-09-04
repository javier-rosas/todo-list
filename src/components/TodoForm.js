import { useState } from 'react'
import { apiAddTodo } from '../redux/todosSlice'
import { useDispatch } from 'react-redux'
import { useAuth0 } from '@auth0/auth0-react'
import Form from 'react-bootstrap/Form'
import { BsFillPlusCircleFill } from "react-icons/bs"


function TodoForm() {

  const dispatch = useDispatch()

  const [todo, setTodo] = useState("")
  const [press, setPress] = useState(false)
  const { getAccessTokenSilently } = useAuth0()

  const onChange = (e) => {
    setTodo(e.target.value)
  }

  const onKeyEnter = async (e) => {  
    if (e.key === "Enter") {
      e.preventDefault()
      const token = await getAccessTokenSilently()
      const payload = { todo, token }
      dispatch( apiAddTodo(payload) )
      setTodo("")
    }
  }

  const onClickPlusIcon = async (e) => {
    setPress(true)
    const token = await getAccessTokenSilently()
    const payload = { 
      todo: todo, 
      token: token 
    }
    dispatch( apiAddTodo(payload) )
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
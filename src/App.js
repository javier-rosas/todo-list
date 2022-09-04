import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Badge from 'react-bootstrap/Badge';
import './styles/App.css';
import LogoutButton from './components/LogoutButton';
import { withAuthenticationRequired, useAuth0 } from '@auth0/auth0-react'
import { apiAuthenticateUser } from './redux/todosSlice'

function App() {
  const dispatch = useDispatch()

  const { isAuthenticated, user } = useAuth0()

  useEffect(() => {
    //make API  call to authentcate user if token isn't present
    if (!localStorage.getItem("user_token")) {
      //make the api call
      dispatch(apiAuthenticateUser)
    }
  }, [user])

  console.log(isAuthenticated, user)
  return (
    <div className="App">
    {
    isAuthenticated && (
      <>
      <LogoutButton />
      <div className="title"> 
        <Badge bg="primary">
          Todo List
        </Badge> 
      </div>
      <TodoList />
      <TodoForm />
      </>)
    }
    </div>
  )
}

export default withAuthenticationRequired(App)




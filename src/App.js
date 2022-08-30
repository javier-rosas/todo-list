import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Badge from 'react-bootstrap/Badge';
import './styles/App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from './components/LogoutButton';

function App() {

  const { isAuthenticated } = useAuth0()

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

export default App;

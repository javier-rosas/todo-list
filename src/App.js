import TodoList from './redux/features/todos/TodoList';
import TodoForm from './redux/features/todos/TodoForm';
import Badge from 'react-bootstrap/Badge';
import './styles/App.css';


function App() {

  return (
    <div className="App">
      <div className="title"> 
        <Badge bg="primary">
          Todo List
        </Badge> 
      </div>
      <TodoList />
      <TodoForm />
    </div>
  )
}

export default App;

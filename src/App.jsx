import { useState } from 'react';
import './App.css';
import Todo from "./components/Todo"
import Todoform from './components/Todoform';

function App() {
  const [todos, setTodos] = useState([
    {
      id:1,
      text:"Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id:2,
      text:"Fazer projeto web",
      category: "Faculdade",
      isCompleted: false,
    },
    {
      id:3,
      text:"Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id:4,
      text:"Arrumar casa",
      category: "Pessoal",
      isCompleted: false,
    },
  ])

  return(
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) =>(
          <Todo key={todo.id} todo={todo}/>
        ))}

      </div>
      <Todoform />
    </div>
  )
}

export default App

import TodoData from './component/todo/TodoData';
import TodoNew from './component/todo/TodoNew';
import './component/todo/todo.css';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React " },
    // { id: 2, name: "Watching Youtube" }
  ])

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name1: name
    }

    setTodoList([...todoList, newTodo])
  }

  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const deleteTodo = (thamsoIdtuTodoData) => {
    const newTodo = todoList.filter(item => item.id !== thamsoIdtuTodoData);
    setTodoList(newTodo);
    // console.log(">>>> Check", thamsoIdtuTodoData);
  }

  //{key:value}
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo1={deleteTodo}
        />
        :
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      }
    </div>
  )
}

export default App

import { observer } from "mobx-react-lite"
import { useState } from "react"
import todoStore from "./TodoStore"
import TodoBox from "./TodoBox"


const Todo = () => {
  const [todoInput, setTodoInput] = useState("")
  

  const addTodo = () => {
    if(todoInput){
      let trimedTodo = todoInput.trim().replace(/\s+/g, " ")
      todoStore.addTodo(trimedTodo)
    }
    setTodoInput("")
  }

  const setFilter = (filter) => {
    todoStore.setFilter(filter)
  }

  const setTextFilter = (e) => {
    todoStore.setTextFilter(e.target.value)
  }

  return(
    <div className="todo">
      <h2>Todo App</h2>
      <div className="form">
        <input className="addInput" placeholder="Add todo..." type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)}/>
        <button onClick={addTodo}>Add</button>
      </div>
      <div className="container">
        <div className="filter">
          <select onChange={(e) => setFilter(e.target.value)}>
            <option value={"all"}>All</option>
            <option value={"completed"}>Completed</option>
            <option value={"active"}>Active</option>
          </select>
          <input type="text" placeholder="Search...." onChange={setTextFilter}/>
        </div>
        <div className="todoList">
          {todoStore.isEmpty ? <p>Todo is empty!</p> : 
          todoStore.filteredTodos.length === 0 ? <p>Nothing found....</p>
          : (
              todoStore.filteredTodos.map(todo => (
                <TodoBox key={todo.id} todo={todo}/>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default observer(Todo)
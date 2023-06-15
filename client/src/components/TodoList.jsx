import React from 'react'
import Todo from './Todo.jsx'

export default function TodoList(props){
  const { todos } = props 
  return (
    <div className="todo-list">
      {todos.map(todo => <Todo {...todo} key={todo._id}/>)}
    </div>
  )
}
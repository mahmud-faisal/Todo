import React from 'react'

import Todo from './Todo'
import '../CSS/todos.css'

export default function Todos(props) {
    const todos = props.todo;
    // console.log(todos);
  return (
    <div className='tasksBody'>
    {todos.map((todo)=>
        <Todo task={todo} key={todo.id} onRemoveTodo ={props.onRemoveTodo}/>
    )
  }
    </div>
  )
}

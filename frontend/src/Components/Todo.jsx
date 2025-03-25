import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Button,Form } from 'react-bootstrap'
import '../CSS/todo.css'

export default function Todo(props) {
  // console.log(props.task)
  const {title,desc}=props.task.datas;
  const {id} = props.task;


  const handleDelete = () =>{
    props.onRemoveTodo(id);
  }
  
  if(title != '' || desc != '')
  return (
    <section className='todoItem my-2 px-2 rounded py-1 d-flex justify-content-between align-items-center'>
        <Button className='btn-success'><Form><Form.Check></Form.Check></Form></Button>
       <div className="taskContent">
       <h4 className='text-center'>{title}</h4>
        <p>{desc}</p>
       </div>
       <Button className='btn-danger' onClick={handleDelete} ><FontAwesomeIcon icon={faTrashCan} /></Button>
    </section>
  )
}

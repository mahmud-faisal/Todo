import React,{useState} from 'react'

import {Form,Button,Row,Col} from 'react-bootstrap'
import '../CSS/NewTodo.css'

export default function NewTodo(props) {

  const [todo,addTodo]=useState({id:0,title:"",desc:""});
  const {id , title , desc} = todo;

    const handleSubmit =(event) =>{
      event.preventDefault();
      props.onAddTodo(todo);
      addTodo({title:"",desc:""});
      
    }

   const handleChange= (event) =>{
    const {name,value} = event.target;
     addTodo((prevTodo) => ({...prevTodo,[name]:value}))  
   }

  return (
    <>
    <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
            <Form.Label column sm={2} className="h3 me-2 ">Title</Form.Label>
            <Col sm={9}>
            <Form.Control type="text" name='title' value={title} onChange={handleChange} />
            </Col>
        </Form.Group>
        <Form.Group as={Row} className="mt-2">
            <Form.Label column sm={2} className="h3 me-2">Description</Form.Label>
            <Col sm={9}>
            <Form.Control as="textarea" name='desc' rows={2} value={desc} onChange={handleChange} />
            </Col>
        </Form.Group>

        
        <div className="submitBtn d-flex justify-content-center mt-1">
        <Button type="submit" className="d-flex justify-content-center" >Add Todo</Button>
        </div>
    </Form>
    
    </>
  )
}

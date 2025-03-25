import React,{useState,useEffect} from 'react'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import '../CSS/home.css'
import NewTodo from './NewTodo'
import Todos from './Todos'



export default function Home() {

  // const datas=[
  //   {id:1,title:"Hello",desc:"Good Morning"},
  //   {id:2,title:"Hi",desc:"Good Eve"}
  // ]

  const [datas,setDatas] = useState([]);
  const API_URL = 'http://localhost:3001/api/todos';
  
  // Fetch todos on component mount
useEffect(()=>{
const fetchTodos = async()=>{
  try {
    const response = await axios.get(API_URL);
    setDatas(response.data);
  } catch (error) {
    console.log('Fetching error todos:',error)
  }
}
fetchTodos();
},[]);

  const handleNewDatas = async(newTodo) =>{
    // addDatas( prevDatas =>{
    //   return[...prevDatas,{id:uuidv4(),datas}]
    // })
    try {
      const response = await axios.post(API_URL,{
        title: newTodo.title,
        desc: newTodo.desc
      });
      setDatas(prevDatas =>[...prevDatas,response.data]);
    } catch (error) {
      console.log(`Erros adding todo:${error}`);
    }
  }

  const handleRemoveTodo = async(id) =>{
    // addDatas((prevDatas)=>{
    //   const filteredData = prevDatas.filter((datas)=>datas.id!== id);
    //   return filteredData;
    // })
    
    
    try {
      
      await axios.delete(`${API_URL}/${id}`);
      
      setDatas(prevDatas =>prevDatas.filter(todo=> todo._id!==id));
    } catch (err) {
      console.error(`Error deleting todo:`,err);
    }
  }


  return (
    <div className="appWrapper bg-success mx-auto">
        <div className="appContent d-flex flex-column align-items-center">
        <h1 className='text-white'>Todo</h1>
        <div className="newTodoWrapper p-2 rounded">
            <NewTodo onAddTodo={handleNewDatas}/>
        </div>
        <div className="todoWrapper">
            <Todos todo={datas} onRemoveTodo={handleRemoveTodo}/>
        </div>
        </div>
    </div>
  )
}

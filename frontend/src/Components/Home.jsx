import React,{useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

import '../CSS/home.css'
import NewTodo from './NewTodo'
import Todos from './Todos'


export default function Home() {

  // const datas=[
  //   {id:1,title:"Hello",desc:"Good Morning"},
  //   {id:2,title:"Hi",desc:"Good Eve"}
  // ]

  const [datas,addDatas] = useState([]);
   
  const handleNewDatas = (datas) =>{
    addDatas( prevDatas =>{
      return[...prevDatas,{id:uuidv4(),datas}]
    })
  }

  const handleRemoveTodo = (id) =>{
    addDatas((prevDatas)=>{
      const filteredData = prevDatas.filter((datas)=>datas.id!== id);
      return filteredData;
    })
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

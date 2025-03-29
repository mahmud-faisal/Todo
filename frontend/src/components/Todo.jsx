import React from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan ,faBusinessTime,faCalendarDays} from '@fortawesome/free-solid-svg-icons'
const Todo = (props) => {
    const {title,desc,taskDate,taskTime,_id}=props.datam;
    const handleRemoveTodo = async() =>{
      // addDatas((prevDatas)=>{
      //   const filteredData = prevDatas.filter((datas)=>datas.id!== id);
      //   return filteredData;
      // })
      
      
      try {
        const API_URL = 'http://localhost:3001/api/todos';
        await axios.delete(`${API_URL}/${_id}`);
        
        // setDatas(prevDatas =>prevDatas.filter(todo=> todo._id!==id));
        props.onTaskDeleted();
      } catch (err) {
        console.error(`Error deleting todo:`,err);
      }
    }
  return (
    <div className='bg-gray-400 p-4 my-2 rounded-2xl'>

        <div className="flex justify-between">
            <input type="checkbox" name="" id="" className='transform scale-200'/>
            <h2 className='font-bold text-xl'>{title}</h2>
            <FontAwesomeIcon icon={faTrashCan} onClick={handleRemoveTodo} className='text-xl text-red-600'/>
            </div>
        <p className='text-center p-1'>{desc}</p>
        <div className="flex ml-6">
        <FontAwesomeIcon icon={faBusinessTime} /> <p className='ml-1 mr-8'>{taskTime}</p>
        <FontAwesomeIcon icon={faCalendarDays} /><p className='ml-1 mr-8'>{taskDate}</p>
        </div>
    
    </div>
  )
}

export default Todo
import React from 'react';
import axios from 'axios';
import { FaTrashAlt, FaBusinessTime, FaCalendarAlt } from 'react-icons/fa';

const Todo = (props) => {
  console.log("Good Day!")
  console.log(props.datam)
  const { title, desc, taskDate, taskTime, _id } = props.datam;

  const handleRemoveTodo = async () => {
    try {
      const API_URL = 'http://localhost:3001/api/todos';
      await axios.delete(`${API_URL}/${_id}`);
      props.onTaskDeleted();
    } catch (err) {
      console.error('Error deleting todo:', err);
    }
  };

  return (
    <div className='bg-gray-100 p-4 my-2 rounded-2xl'>
      <div className="flex justify-between items-center">
        <input type="checkbox" className='transform scale-200' />
        <h2 className='font-bold text-xl flex-1 ml-4'>{title}</h2>
        <FaTrashAlt
          onClick={handleRemoveTodo}
          className='text-xl text-red-600 cursor-pointer'
        />
      </div>
      <p className='text-center p-1'>{desc}</p>
      <div className="flex ml-6 items-center">
        <FaBusinessTime />
        <p className='ml-1 mr-8'>{taskTime}</p>
        <FaCalendarAlt />
        <p className='ml-1'>{taskDate}</p>
      </div>
    </div>
  );
};

export default Todo;

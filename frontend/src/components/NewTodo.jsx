import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/todos';

export const NewTodo = ({onTaskAdded}) => {
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    date: '',
    time: ''
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNewTodo = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(API_URL, {
        title: formData.title,
        desc: formData.desc,
        taskDate: formData.date,
        taskTime: formData.time
      });
      
      setFormData({
        title: '',
        desc: '',
        date: '',
        time: ''
      });
      onTaskAdded();
      console.log("Todo added successfully:", response.data);
    } catch (error) {
      console.log("Error in post:", error.response?.data?.message || error.message);
    }
  };

  return (
    <form onSubmit={handleNewTodo} className='p-4 bg-green-100 rounded-2xl'>
      <div className="flex flex-col items-center">
        <label htmlFor="title" className='font-semibold text-center'>Title</label>
        <input 
          type="text" 
          name="title" 
          id="title"  
          value={formData.title} 
          onChange={handleOnChange} 
          className='w-full p-2 border-2 rounded'
          required
        />
      </div>
      <div className="flex flex-col items-center my-4">
        <label htmlFor="desc" className='text-center w-full font-semibold'>Description</label>
        <textarea 
          name="desc" 
          id="desc" 
          className='w-full p-2 border-2 rounded' 
          value={formData.desc} 
          onChange={handleOnChange}
          required
        />
      </div>
      <div className="flex w-full justify-between flex-wrap flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          <label htmlFor="date" className='mr-4 font-semibold'>Date</label>
          <input 
            type="date" 
            name="date" 
            id="date" 
            value={formData.date} 
            onChange={handleOnChange}
            className='p-2 border-2 rounded w-full'
            required
          />
        </div>
        <div className="w-full md:w-1/2 my-2 md:my-0">
          <label htmlFor="time" className='mr-4 font-semibold'>Time</label>
          <input 
            type="time" 
            name="time" 
            id="time" 
            value={formData.time} 
            onChange={handleOnChange}
            className='p-2 border-2 rounded w-full'
            required
          />
        </div>
      </div>
      <div className="w-full flex justify-center p-4">
        <button type="submit" className='bg-green-600 text-white font-bold px-4 py-2 rounded-4xl mt-2'>
          Add Task
        </button>
      </div>
    </form>
  );
}
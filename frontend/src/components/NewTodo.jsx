import React, { useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/todos';

export const NewTodo = ({ onTaskAdded }) => {
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

      setFormData({ title: '', desc: '', date: '', time: '' });
      onTaskAdded();
      console.log("Todo added successfully:", response.data);
    } catch (error) {
      console.log("Error in post:", error.response?.data?.message || error.message);
    }
  };

  return (
    <form 
      onSubmit={handleNewTodo} 
      className="bg-green-100 rounded-2xl p-6 shadow-md w-full"
    >
      <h2 className="text-xl font-bold text-center mb-4 text-gray-800">Add a New Task</h2>

      {/* Title */}
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold mb-1">Title</label>
        <input 
          type="text"
          name="title"
          id="title"
          value={formData.title}
          onChange={handleOnChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          required
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label htmlFor="desc" className="block font-semibold mb-1">Description</label>
        <textarea
          name="desc"
          id="desc"
          value={formData.desc}
          onChange={handleOnChange}
          className="w-full p-2 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          rows="3"
          required
        ></textarea>
      </div>

      {/* Date & Time */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label htmlFor="date" className="block font-semibold mb-1">Date</label>
          <input 
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
        <div className="flex-1">
          <label htmlFor="time" className="block font-semibold mb-1">Time</label>
          <input 
            type="time"
            name="time"
            id="time"
            value={formData.time}
            onChange={handleOnChange}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center">
        <button 
          type="submit" 
          className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-full transition-all"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

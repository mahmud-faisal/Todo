import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Todos from '../components/Todos';
import { NewTodo } from '../components/NewTodo';


const Home = () => {
  const API_URL = 'http://localhost:3001/api/todos';
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prev => !prev); // Toggle refresh to refetch todos
  };

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
      } catch (error) {
        console.error(`Fetching error: ${error.message}`);
      }
    };
    fetchTodo();
  }, [refresh]);

  console.log(data);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">
          Todo App
        </h1>

        {/* New Todo Form */}
        <div className="mb-6">
          <NewTodo onTaskAdded={handleRefresh} />
        </div>

        {/* Todo List */}
        <Todos data={data} onTaskDeleted={handleRefresh} />
      </div>
    </div>
  );
};

export default Home;

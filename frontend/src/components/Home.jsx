import React, { useEffect,useState } from 'react'
import { NewTodo } from './NewTodo'
import axios from 'axios'

import Todos from './Todos'

const Home = () => {
  const API_URL = 'http://localhost:3001/api/todos';
  const [data,setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const handleRefresh = () => {
    setRefresh(prev => !prev); // Toggle refresh state to trigger useEffect
  }
  useEffect(()=>{
    const fetchTodo =async()=>{
      try {
        const response = await axios.get(API_URL);
        setData(response.data);
        
      } catch (error) {
        console.log(`Fetchinng error:${error.message}`);
      }
    }
    fetchTodo();
  },[refresh]);



  return (
    <>
  <NewTodo onTaskAdded={handleRefresh} />
  <Todos data={data} onTaskDeleted={handleRefresh} />
    </>
  )
}


export default Home;
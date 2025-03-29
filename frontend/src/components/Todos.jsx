import React from 'react'

import Todo from './Todo'




const Todos = ({ data, onTaskDeleted }) => {



  return (
    <>
    <div className="my-6 bg-lime-200 px-2 py-6 rounded-4xl">
        <h2 className='py-2 text-center font-bold text-3xl '>Your Tasks</h2>
    {data.map((datam,index)=>
        <Todo key={index} datam = {datam} onTaskDeleted={onTaskDeleted }/>
    )

    }
    </div>
    </>
  )
}

export default Todos
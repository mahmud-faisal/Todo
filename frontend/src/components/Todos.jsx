import React from 'react';
import Todo from './Todo';


const Todos = ({ data, onTaskDeleted }) => {
  const dataItems= data.data;
  console.log(dataItems)

  return (
    <div className="my-6 bg-lime-100 px-4 py-6 rounded-3xl shadow-md">
      <h2 className="text-center font-bold text-2xl md:text-3xl text-gray-800 mb-4">
        Your Tasks
      </h2>

      <div className="flex flex-col gap-4">
        {dataItems.length > 0 ? (
          dataItems.map((datam, index) => 

            {
            console.log("Mapped")
          return  <Todo key={index} datam={datam} onTaskDeleted={onTaskDeleted} />
          }
          )
        ) : (
          <p className="text-center text-gray-600">No tasks found. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default Todos;

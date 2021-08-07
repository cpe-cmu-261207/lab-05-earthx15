import React from 'react';
import { useState } from 'react';
import TodoList from './teee/TodoList';
import './App.css'
function App() {

  return (
    <div>

      {/* header section */}
      <div className='flex justify-center items-end space-x-2'>
        <span className='text-center italic my-2 text-2xl'>Minimal Todo List </span>
        <span className='text-gray-400 italic my-2 text-xl'>by Konthakarn Fukam 630610719</span>
      </div>

      {/* todo section */}
      <div >

        <TodoList></TodoList>
       
        

        {/* tasks section */}
        <div>
          {/* task example */}
          {/* Please convert this into a task component */}
          {/* <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am a task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div> */}

          {/* another task example */}
         {/*  <div
            className="flex justify-between h-8 items-center py-6 border-b"
          >
            <span className="text-2xl"> I am another task </span>
            <div className="flex space-x-1 items-center">
              <button className="bg-green-400 w-24 text-2xl" >Done</button>
              <button className="bg-red-400 w-24 text-2xl" >Delete</button>
            </div>
          </div> */}

        </div>
      </div>
      
      {/* footer section */}
      <p className='text-center text-gray-400'> Copyright © 2021 </p>
    </div>

  );
}

export default App;

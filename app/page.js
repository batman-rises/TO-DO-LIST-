"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e) => {
      e.preventDefault()
      setmainTask([...mainTask, { title, desc }]) // important note bana lio
      settitle("")
      setdesc("")
  }

  // {t.title} ...prop usage zara dekh lena

  const deleteHandler = (i) => { // i idhar id ko represent kar rha particular task ka
      let copytask = [...mainTask]
      copytask.splice(i, 1) // deleting the task at index i
      setmainTask(copytask)
  }

  let renderTask = <h2>No task available</h2>
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className='flex justify-between mb-5 w-2/3'>
            <h5 className='text-2xl font-semibold'>{t.title}</h5>
            <p className='text-lg font-medium'>{t.desc}</p>
          </div>
          <button 
            onClick={() => deleteHandler(i)} // automatically call na ho ye delete handler so hum function ko aise likhenge
            className='bg-red-400 text-white rounded font-bold px-4 py-2'>
            Delete
          </button>
        </li>
      )
    })
  }

  return (
    <>
      <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>Binayak's TODO List</h1>
      
      <form onSubmit={submitHandler}>
        <input 
          required
          type="text" 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Task Title'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        
        <input 
          required
          type="text" 
          className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
          placeholder='Enter Task Description'
          value={desc}
          onChange={(e) => setdesc(e.target.value)}
        />
        
        <button className='bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5'>Add Task</button>
      </form>
      
      <hr/>
      
      <div className='p-8 bg-slate-200'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page

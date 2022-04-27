import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTasks, postTask } from '../features/taskSlice'
import NewTask from './NewTask'
import Tasks from './Tasks'

export default function Home() {



  // Vars
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.task.tasks)

  // Fetch tasks on load
  useEffect(() => {
    dispatch(fetchTasks())
  }, [])

  return (
    <div>
      <Tasks tasks={tasks} />
      <br /> =====================<br />
      <NewTask />
    </div>
  )
}
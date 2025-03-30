# TO-DO-LIST-

A simple TODO APP USING REACT (ONLY FRONTEND)
https://nayakstodo.netlify.app/

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Todo List Application - Quick Reference

## Overview
A simple React Todo List app that allows adding, viewing, and deleting tasks with titles and descriptions.

## State Management
- `title`: Stores task title input (string)
- `desc`: Stores task description input (string)
- `mainTask`: Array of task objects `[{title, desc}, ...]`

## Core Functions

### Add Task
```javascript
const submitHandler = (e) => {
    e.preventDefault()
    setmainTask([...mainTask, { title, desc }])
    settitle("")
    setdesc("")
}
```

### Delete Task
```javascript
const deleteHandler = (i) => {
    let copytask = [...mainTask]
    copytask.splice(i, 1)
    setmainTask(copytask)
}
```

## Rendering Logic
- Default: Shows "No task available" when `mainTask` is empty
- When tasks exist: Maps through tasks, displaying title, description, and delete button
- Key implementation note: Delete handler uses arrow function to prevent automatic execution

## UI Components
- Header with app title
- Form with two required inputs and submit button
- Task list section with conditional rendering
- Individual task items with delete functionality

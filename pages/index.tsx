import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage<{ foo: number }> = (props) => {
  const [todos, setTodos] = useState([
    { id: Math.random(), label: "TODO1", isDone: true },
    { id: Math.random(), label: "TODO2", isDone: true },
    { id: Math.random(), label: "TODO3", isDone: true },
    { id: Math.random(), label: "TODO4", isDone: false },
  ]);

  const toggle = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo;
      })
    });
  }

  return (
    <div className='w-96 mx-auto p-20'>
      <h1 className='text-xl font-bold'>Todo</h1>
      <div className='flex gap-x-2'>
        <input type="text" className='border border-black' />
        <button className='border border-black shrink-0 px-2'>追加</button>
      </div>
      <ul className='mt-4 y-2'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label className='flex items-center gap-x-2'>
              <input type="checkbox" value={todo.id} checked={todo.isDone} onChange={toggle} />
              <span>{todo.label}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home;

import type { NextPage } from 'next'
import { useState } from 'react';

const Home: NextPage<{ foo: number }> = (props) => {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const toggle = (e) => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === Number(e.target.value)) {
          return { ...todo, isDone: !todo.isDone }
        }
        return todo;
      })
    });
  };

  const input = (e) => {
    setText(e.target.value);
  };

  const add = () => {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random(), label: text, isDone: false }
      ]
    });
    setText("");
  };

  return (
    <div className='w-96 mx-auto p-20'>
      <h1 className='text-xl font-bold'>Todo</h1>
      <div className='flex gap-x-2'>
        <input type="text" value={text} onChange={input} className='border border-black' />
        <button onClick={add} className='border border-black shrink-0 px-2'>追加</button>
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

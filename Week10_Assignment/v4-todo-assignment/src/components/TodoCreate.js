import { useState, useContext } from 'react'
import TodosContext from '../context/todos'

export default function TodoCreate() {
  const [title, setTitle] = useState('')
  const { createTodo } = useContext(TodosContext)

  const handleSubmit = (e) => {
    //prevent auto refresh
    e.preventDefault()
    //avoid empty glyphs
    const cleaned = title.trim()
    if (!cleaned) return
    createTodo(cleaned)
    //reset
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 mr-2"
        placeholder="Add Todo"
      />
      <button className="bg-blue-500 text-white px-3 py-1 rounded">Add</button>
    </form>
  )
}

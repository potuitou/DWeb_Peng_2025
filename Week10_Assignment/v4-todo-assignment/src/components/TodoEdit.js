import { useState } from 'react'

export default function TodoEdit({ todo, onSubmit }) {
  const [title, setTitle] = useState(todo.title)

  const handleSubmit = (e) => {
    e.preventDefault()
    //submit the title to TodoItem, and the real change is done by context
    onSubmit(todo.id, title)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-1 mr-2"
      />
      <button className="bg-green-500 text-white px-3 py-1 rounded">
        Save
      </button>
    </form>
  )
}

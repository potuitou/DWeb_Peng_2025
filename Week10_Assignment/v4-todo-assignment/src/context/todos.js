import { createContext, useState } from 'react'
import axios from 'axios'

const TodosContext = createContext()

function Provider({ children }) {
  const [todos, setTodos] = useState([])

  // READ
  const fetchTodos = async () => {
    const res = await axios.get('http://localhost:3001/todos')
    setTodos(res.data)
  }

  // CREATE
  const createTodo = async (title) => {
    const res = await axios.post('http://localhost:3001/todos', { title })
    setTodos([...todos, res.data])
  }

  // UPDATE
  const editTodoById = async (id, newTitle) => {
    const res = await axios.put(`http://localhost:3001/todos/${id}`, {
      title: newTitle,
    })
    const updated = todos.map((t) =>
      t.id === id ? { ...t, ...res.data } : t
    )
    setTodos(updated)
  }

  // DELETE
  const deleteTodoById = async (id) => {
    await axios.delete(`http://localhost:3001/todos/${id}`)
    setTodos(todos.filter((t) => t.id !== id))
  }

  const value = {
    todos,
    fetchTodos,
    createTodo,
    editTodoById,
    deleteTodoById,
  }

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  )
}

export { Provider }
export default TodosContext

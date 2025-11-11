//app is solely responsible for layout, todos/ crud comes from context
import { useEffect, useContext } from 'react'
import TodosContext from './context/todos'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {
  //fetch todos from context
  const { fetchTodos } = useContext(TodosContext)

  useEffect(() => {
    fetchTodos() // only once
  }, []) // avoid infinite loop

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-semibold mb-4">Todo App (V4)</h1>
      <TodoCreate />
      <TodoList />
    </div>
  )
}

export default App

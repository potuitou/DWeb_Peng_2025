import { useEffect, useContext } from 'react'
import TodosContext from '../context/todos'
import TodoCreate from '../components/TodoCreate'
import TodoList from '../components/TodoList'
import Panel from '../components/Panel'

const TodosPage = () => {
  const { fetchTodos } = useContext(TodosContext)

  useEffect(() => {
    fetchTodos()         // call once on load
  }, [])                 // per notes: empty deps to avoid re-fetch loop

  return (
    <Panel>
      <h1 className="text-xl mb-4">Todos (V4: Context + API)</h1>
      <TodoCreate />
      <TodoList />
    </Panel>
  )
}

export default TodosPage

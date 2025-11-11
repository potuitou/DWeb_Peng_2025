import { useContext } from 'react'
import TodosContext from '../context/todos'
import TodoItem from './TodoItem'

export default function TodoList() {
  const { todos } = useContext(TodosContext)

  // get unique id
  const rendered = todos.map((todo) => (
    <TodoItem key={todo.id} todo={todo} />
  ))

  return <div>{rendered}</div>
}

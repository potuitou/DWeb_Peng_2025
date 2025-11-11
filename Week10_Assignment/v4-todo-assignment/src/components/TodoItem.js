import { useState, useContext } from 'react'
import TodosContext from '../context/todos'
import TodoEdit from './TodoEdit'

export default function TodoItem({ todo }) {
  //local
  const [showEdit, setShowEdit] = useState(false)

  //define act on context
  const { deleteTodoById, editTodoById } = useContext(TodosContext)

  const handleDelete = () => deleteTodoById(todo.id)
  const handleToggleEdit = () => setShowEdit(!showEdit)

  const handleSubmit = (id, newTitle) => {
    editTodoById(id, newTitle)
    setShowEdit(false)
  }

  return (
    <div className="border p-2 my-2">
      {showEdit ? (
        <TodoEdit todo={todo} onSubmit={handleSubmit} />
      ) : (
        <>
          <span>{todo.title}</span>
          <button
            onClick={handleDelete}
            className="ml-3 text-red-500"
          >
            Delete
          </button>
          <button
            onClick={handleToggleEdit}
            className="ml-2 text-blue-500"
          >
            Edit
          </button>
        </>
      )}
    </div>
  )
}

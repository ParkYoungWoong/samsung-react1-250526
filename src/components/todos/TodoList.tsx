import { useEffect } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoList() {
  const todos = useTodoStore(state => state.todos)
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  useEffect(() => {
    init()
  }, [])

  async function init() {
    await fetchTodos()
    // ...
  }

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </div>
  )
}

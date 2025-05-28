import TodoCreator from '@/components/todos/TodoCreator'
import TodoList from '@/components/todos/TodoList'
import { useTodoStore } from '@/stores/todo'
import { useEffect } from 'react'

export default function Todos() {
  const message = useTodoStore(state => state.message)

  useEffect(() => {
    if (message) {
      alert(message)
    }
  }, [message])

  return (
    <>
      <TodoCreator />
      <TodoList />
    </>
  )
}

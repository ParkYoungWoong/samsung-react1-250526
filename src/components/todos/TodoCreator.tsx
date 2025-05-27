import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  const fetchTodos = useTodoStore(state => state.fetchTodos)

  return (
    <div>
      <input />
      <button>추가</button>
    </div>
  )
}

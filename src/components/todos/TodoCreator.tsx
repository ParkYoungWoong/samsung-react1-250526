import { useState } from 'react'
import { useTodoStore } from '@/stores/todo'

export default function TodoCreator() {
  const [title, setTitle] = useState('')
  const createTodo = useTodoStore(state => state.createTodo)

  async function handleCreateTodo() {
    await createTodo(title)
    setTitle('')
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value)
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return
    if (event.key === 'Enter') {
      handleCreateTodo()
    }
  }

  return (
    <div>
      <input
        value={title}
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => handleCreateTodo()}>추가</button>
    </div>
  )
}

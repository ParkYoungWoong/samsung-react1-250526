import { useState } from 'react'
import { useTodoStore } from '@/stores/todo'
import Button from '@/components/Button'

export default function TodoCreator() {
  const [title, setTitle] = useState('')
  const createTodo = useTodoStore(state => state.createTodo)
  const isLoading = useTodoStore(state => state.isLoading)

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
    <div className="flex gap-1">
      <input
        className="h-[30px] rounded-md border-2 border-gray-300 px-2 duration-200 outline-none focus:border-blue-500"
        value={title}
        placeholder="할 일을 입력하세요."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button
        loading={isLoading}
        onClick={() => handleCreateTodo()}>
        추가
      </Button>
    </div>
  )
}

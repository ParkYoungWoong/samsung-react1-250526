import { useState } from 'react'
import { useTodoStore } from '@/stores/todo'
import Button from '@/components/Button'
import Input from '@/components/Input'

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
      <Input
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

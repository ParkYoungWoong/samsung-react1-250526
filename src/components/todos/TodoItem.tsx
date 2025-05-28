import { useState, useRef } from 'react'
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'
import Input from '@/components/Input'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement | null>(null)

  // const el = document.querySelector('input')
  // console.log()

  function handleSave() {}
  function handleCancel() {
    setIsEditing(false)
    setTitle(todo.title)
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.nativeEvent.isComposing) return
    if (event.key === 'Enter') {
      handleSave()
    }
    if (event.key === 'Escape') {
      handleCancel()
    }
  }

  return (
    <li>
      {isEditing ? (
        <div>
          <Input
            ref={inputRef}
            value={title}
            onChange={event => setTitle(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleCancel}>취소</Button>
          <Button
            color="primary"
            onClick={() => {}}>
            저장
          </Button>
          <Button
            color="danger"
            onClick={() => {}}>
            삭제
          </Button>
        </div>
      ) : (
        <div>
          <div>{todo.title}</div>
          <Button
            color="primary"
            onClick={() => setIsEditing(true)}>
            수정
          </Button>
        </div>
      )}
    </li>
  )
}

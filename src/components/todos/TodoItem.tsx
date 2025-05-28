import { useState, useRef, useEffect } from 'react'
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'
import Input from '@/components/Input'
import { useTodoStore } from '@/stores/todo'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(todo.title)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const updateTodo = useTodoStore(state => state.updateTodo)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  function handleSave() {
    if (title == )
    updateTodo({
      ...todo,
      title
    })
  }
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




// console.log(1 === '1') // false
// console.log(1 == '1') // true
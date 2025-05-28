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
  const isLoading = useTodoStore(state => state.isLoading)
  const deleteTodo = useTodoStore(state => state.deleteTodo)
  const isLoadingForDelete = useTodoStore(state => state.isLoadingForDelete)

  // useEffect(실행할함수, 의존성배열)
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus()
    }
  }, [isEditing])

  async function handleSave() {
    if (title === todo.title) return
    await updateTodo({
      ...todo,
      title
    })
    handleCancel(title)
    // setIsEditing(false)
    // console.log('todo:title', todo.title)
  }
  function handleDelete() {
    deleteTodo(todo)
  }
  function handleCancel(title: string = todo.title) {
    setIsEditing(false)
    setTitle(title)
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
        <div className="align-center flex gap-1">
          <Input
            ref={inputRef}
            value={title}
            onChange={event => setTitle(event.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button onClick={handleCancel}>취소</Button>
          <Button
            loading={isLoading}
            color="primary"
            onClick={handleSave}>
            저장
          </Button>
          <Button
            loading={isLoadingForDelete}
            color="danger"
            onClick={handleDelete}>
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

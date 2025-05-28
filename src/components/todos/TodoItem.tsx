import { useState } from 'react'
import type { Todo } from '@/stores/todo'
import Button from '@/components/Button'

export default function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false)
  return (
    <li>
      {isEditing ? (
        <div>
          <input />
          <Button onClick={() => {}}>취소</Button>
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

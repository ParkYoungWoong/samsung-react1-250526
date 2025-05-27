import { create } from 'zustand'
import { combine } from 'zustand/middleware'
import axios from 'axios'

export type Todos = Todo[]
export interface Todo {
  id: string // 할 일 ID
  order: number // 할 일 순서
  title: string // 할 일 제목
  done: boolean // 할 일 완료 여부
  createdAt: string // 할 일 생성일
  updatedAt: string // 할 일 수정일
}

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todos
    },
    set => ({
      fetchTodos: async () => {
        // Axios
        const { data: todos = [] } = await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
        })
        set({ todos })
      }
    })
  )
)

// const a = (x: number) => x + 1

// function a(x: number) {
//   return x + 1
// }

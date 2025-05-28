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
      todos: [] as Todos,
      isLoading: false
    },
    (set, get) => ({
      fetchTodos: async () => {
        // Axios
        const { data: todos = [] } = await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT8_ParkYoungWoong'
          }
        })
        set({ todos })
      },
      createTodo: async (title: string) => {
        const { todos, isLoading } = get()
        if (isLoading) return
        if (!title.trim()) return
        set({ isLoading: true })
        await new Promise(resolve => setTimeout(resolve, 3000))
        const { data: createdTodo } = await axios({
          url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            apikey: 'KDT8_bcAWVpD8',
            username: 'KDT8_ParkYoungWoong'
          },
          data: {
            title
          }
        })

        set({
          todos: [createdTodo, ...todos],
          isLoading: false
        })
      }
    })
  )
)

// const arr = [1, 2, 3]
// const newArr = [7, ...arr]
// [7,1,2,3]

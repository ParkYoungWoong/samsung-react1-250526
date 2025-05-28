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

const requestTodo = axios.create({
  baseURL: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
  headers: {
    'Cache-Control': 'no-store',
    'content-type': 'application/json',
    apikey: 'KDT8_bcAWVpD8',
    username: 'KDT8_ParkYoungWoong'
  }
})

export const useTodoStore = create(
  combine(
    {
      todos: [] as Todos,
      isLoading: false,
      isLoadingForDelete: false
    },
    (set, get) => {
      async function fetchTodos() {
        const { data: todos = [] } = await requestTodo.get('/')
        set({ todos })
      }
      async function createTodo(title: string) {
        const { todos, isLoading } = get()
        if (isLoading) return
        if (!title.trim()) return
        set({ isLoading: true })
        await new Promise(resolve => setTimeout(resolve, 3000))
        const { data: createdTodo } = await requestTodo.post('/', { title })

        set({
          todos: [createdTodo, ...todos],
          isLoading: false
        })
      }
      async function updateTodo(todo: Todo) {
        const { isLoading } = get()
        if (isLoading) return
        set({ isLoading: true })
        await requestTodo.put(`/${todo.id}`, {
          title: todo.title,
          done: todo.done
        })
        await fetchTodos()
        set({ isLoading: false })
      }
      async function deleteTodo(todo: Todo) {
        const { isLoadingForDelete } = get()
        if (isLoadingForDelete) return
        set({ isLoadingForDelete: true })
        await requestTodo.delete(`/${todo.id}`)
        await fetchTodos()
        set({ isLoadingForDelete: false })
      }

      return {
        fetchTodos,
        createTodo,
        updateTodo,
        deleteTodo
      }
    }
  )
)

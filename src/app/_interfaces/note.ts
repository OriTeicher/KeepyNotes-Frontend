export interface Note {
  _id: string
  title: string
  color: string
  type: string
  createdAt: string
  timestamp: number
  txt?: string
  todos?: TodoItem[]
  imgUrl?: string
  canvas?: string
}

export interface TodoItem {
  _id: string
  createdAt: Date
  content: string
  isDone: boolean
}

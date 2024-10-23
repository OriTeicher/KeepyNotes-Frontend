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
  labels?: NoteLabel[]
}

export interface TodoItem {
  _id: string
  createdAt: Date
  content: string
  isDone: boolean
}

export interface NoteLabel {
  _id: string
  title: string
  color?: string
}

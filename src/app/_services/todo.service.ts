import { TodoItem } from '../_interfaces/note'
import { makeId } from './util.service'

export const todoService = {
  updateTodo,
  getEmptyTodo,
}

async function updateTodo() {
  try {
  } catch (err) {
    console.error(err)
  }
}

function getEmptyTodo(): TodoItem {
  return {
    _id: makeId('t-'),
    createdAt: new Date(),
    content: '',
    isDone: false,
  }
}

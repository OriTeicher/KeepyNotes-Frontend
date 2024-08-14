import { Note, TodoItem } from '../_interfaces/note'
import { dbService } from './db.service'
import { unsplashService } from './unsplash.service'
import { getRandomIntInclusive, makeId, makeSentence } from './util.service'

export const noteService = {
  getDemoNotes,
  getDemoNote,
}

export const NOTE_COLORS = ['white', 'pink', 'lightcoral', 'lightskyblue', 'lightsteelblue', 'lightseagreen']

const DEMO_IMG = 'https://gdm-catalog-fmapi-prod.imgix.net/ProductScreenshot/faab797a-b8cb-4ec3-a641-3a69dda8e0f9.png'

export const NOTES_GRADIENTS = [
  'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
  'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
  'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
  'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
  'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
  'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
]

async function getDemoNotes(amount: number = 10): Promise<Note[]> {
  let notes = []
  for (let i = 0; i < amount; i++) {
    notes.push(await getDemoNote())
  }
  return notes
}

async function getDemoNote() {
  const randColorIdx = getRandomIntInclusive(0, 5)
  const titles = ['Meeting', 'Shopping', 'Project', 'Workout Plan', 'Recipe']
  const types = ['txt', 'todo', 'img']
  const title = titles[Math.floor(Math.random() * titles.length)]
  const randTime = Date.now() - getRandomIntInclusive(100000, 100000000)
  const type = types[Math.floor(Math.random() * types.length)]
  const createdAt = formatDate(new Date(randTime))
  const color = randColorIdx % 2 === 0 ? NOTE_COLORS[randColorIdx] : NOTES_GRADIENTS[randColorIdx]
  let newNote: Note = {
    _id: '',
    title,
    type,
    createdAt,
    color,
    timestamp: Date.now(),
  }
  newNote = await _getRandomNoteItemsByType(newNote)
  const docRef = await dbService.addNoteWithAutoId(newNote)
  newNote._id = docRef.id
  await dbService.updateNoteId(docRef.id, newNote._id)

  return newNote
}

async function _getRandomNoteItemsByType(note: Note): Promise<Note> {
  switch (note.type) {
    case 'todo':
      note.todos = getRandomTodos(getRandomIntInclusive(3, 5))
      break
    case 'img':
      note.imgUrl = await getRandomImg(note.title)
      break
    case 'txt':
    default:
      note.txt = makeSentence(5)
      break
  }
  return note
}

function getRandomTodos(numberOfTasks: number): TodoItem[] {
  const tasks = ['Buy groceries', 'Finish report', 'Call the bank', 'Schedule appointment', 'Clean the house', 'Prepare presentation', 'Read a book', 'Exercise', 'Plan the trip', 'Pay bills']
  const randomTodos: TodoItem[] = []
  for (let i = 0; i < numberOfTasks; i++) {
    const randomTask = tasks[Math.floor(Math.random() * tasks.length)]
    const todoItem: TodoItem = {
      _id: makeId('t-'),
      createdAt: new Date(Date.now()),
      content: randomTask,
      isDone: getRandomIntInclusive(0, 1) ? true : false,
    }
    randomTodos.push(todoItem)
  }

  return randomTodos
}

function getRandomImg(task: string) {
  return unsplashService.fetchPhotoFromUnsplash(1, task)
}

export function getEmptyNote(title: string = 'Title...', txt: string = 'Description...', type: string = 'txt'): Note {
  return {
    _id: '',
    title,
    txt,
    type,
    createdAt: formatDate(new Date()),
    color: '#FFF',
    timestamp: Date.now(),
  }
}

function formatDate(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  return `${hours}:${minutes} ${day}/${month}`
}

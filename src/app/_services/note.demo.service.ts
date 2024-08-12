import { Note } from '../_interfaces/note';
import { dbService } from './db.service';
import { getRandomIntInclusive, makeSentence } from './util.service';

export const noteService = {
  getDemoNotes,
  getDemoNote,
};

export const NOTE_COLORS = [
  'white',
  'pink',
  'lightcoral',
  'lightskyblue',
  'lightsteelblue',
  'lightseagreen',
];

export const NOTES_GRADIENTS = [
  'linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)',
  'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)',
  'linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)',
  'linear-gradient(45deg, #FBDA61 0%, #FF5ACD 100%)',
  'linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)',
  'linear-gradient(0deg, #08AEEA 0%, #2AF598 100%)',
];

async function getDemoNotes(amount: number = 10): Promise<Note[]> {
  let notes = [];
  for (let i = 0; i < amount; i++) {
    notes.push(await getDemoNote());
  }
  return notes;
}

async function getDemoNote() {
  const randColorIdx = getRandomIntInclusive(0, 5);
  const titles = ['Meeting', 'Shopping', 'Project', 'Workout Plan', 'Recipe'];
  const types = ['text', 'todo', 'img', 'video', 'canvas'];
  const title = titles[Math.floor(Math.random() * titles.length)];
  const txt = makeSentence(getRandomIntInclusive(1, 10));
  const type = types[Math.floor(Math.random() * types.length)];
  const createdAt = formatDate(new Date());
  const color =
    randColorIdx % 2 === 0
      ? NOTE_COLORS[randColorIdx]
      : NOTES_GRADIENTS[randColorIdx];

  // Create a note object without _id
  const newNote: Note = {
    _id: '', // Will be updated with the actual Firestore ID
    title,
    txt,
    type,
    createdAt,
    color,
    timestamp: Date.now(),
  };

  // Add the note to Firestore and get the document reference
  const docRef = await dbService.addNoteWithAutoId(newNote);

  // After the document is created, update the _id field with the generated doc.id
  newNote._id = docRef.id;

  // Optionally, you can update the document in Firestore to include the _id field
  await dbService.updateNoteId(docRef.id, newNote._id);

  return newNote;
}

export function getEmptyNote(
  title: string = 'Title...',
  txt: string = 'Description...',
  type: string = 'txt'
) {
  return {
    _id: '',
    title,
    txt,
    type,
    createdAt: formatDate(new Date()),
    color: '#FFF',
    timestamp: Date.now(),
  };
}

function formatDate(date: Date): string {
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  return `${hours}:${minutes} ${day}/${month}`;
}

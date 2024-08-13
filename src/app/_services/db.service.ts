import {
  addDoc,
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
} from 'firebase/firestore'
import { Note } from '../_interfaces/note'

import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { environment } from '../../environments/environment'

const app = initializeApp(environment.firebaseConfig)
export const db = getFirestore(app)

export const dbService = {
  addNote,
  loadNotes,
  removeNote,
  updateNote,
  addNoteWithAutoId,
  updateNoteId,
}

const NOTES_COLLECTION_KEY = 'notes'
const ID_INITIALS = 'n-'
const notesCollection = collection(db, NOTES_COLLECTION_KEY)

async function addNote(note: Note): Promise<any> {
  try {
    const doc = await addDoc(notesCollection, note)
    return doc.id
  } catch (e) {
    console.error('Error adding note: ', e)
  }
}

async function loadNotes(): Promise<Note[]> {
  try {
    const notesFromCollection = await getDocs(notesCollection)
    const adjustedNotes = notesFromCollection.docs.map((doc) => ({
      ...doc.data(),
      _id: doc.id,
    })) as Note[]
    console.log('adjustedNotes', adjustedNotes)
    return adjustedNotes.sort((n1, n2) => n2.timestamp - n1.timestamp)
  } catch (e) {
    console.error('Error loading notes: ', e)
    return []
  }
}

async function removeNote(noteId: string): Promise<void> {
  try {
    const noteDoc = doc(db, NOTES_COLLECTION_KEY, noteId)
    await deleteDoc(noteDoc)
    // if (noteDoc.id.includes(ID_INITIALS)) {
    //   removeNoteByIdField(noteId)
    //   return
    // } else await deleteDoc(noteDoc)
  } catch (e) {
    console.error('Error removing note: ', e)
  }
}
async function removeNoteByIdField(noteId: string): Promise<void> {
  try {
    const q = query(notesCollection, where('_id', '==', noteId))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach(async (documentSnapshot) => {
      const docRef = doc(db, NOTES_COLLECTION_KEY, documentSnapshot.id)
      await deleteDoc(docRef)
      console.log(`Deleted document with ID: ${documentSnapshot.id}`)
    })
  } catch (e) {
    console.error('Error removing note: ', e)
  }
}

async function updateNote(
  noteId: string,
  updatedFields: Partial<Note>
): Promise<void> {
  try {
    const noteDoc = doc(db, NOTES_COLLECTION_KEY, noteId)
    await updateDoc(noteDoc, updatedFields)
  } catch (e) {
    console.error('Error updating note: ', e)
  }
}

function addNoteWithAutoId(note: Note) {
  const notesRef = collection(db, 'notes')
  return addDoc(notesRef, note)
}

function updateNoteId(docId: string, noteId: string) {
  const docRef = doc(db, 'notes', docId)
  return updateDoc(docRef, { _id: docRef.id })
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Note } from '../_interfaces/note';
import { dbService } from './db.service';
import { noteService } from './note.demo.service';
@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private notesSubject = new BehaviorSubject<Note[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  notes$ = this.notesSubject.asObservable();
  loading$ = this.loadingSubject.asObservable();
  originalNotes: Note[] = [];

  async loadNotes(): Promise<void> {
    this.loadingSubject.next(true);
    try {
      const notes = await dbService.loadNotes();
      if (!notes.length) {
        this.setNotes(await noteService.getDemoNotes(10));
        return;
      }
      this.setNotes(notes);
    } catch (e) {
      console.error('Error loading notes: ', e);
    } finally {
      this.loadingSubject.next(false);
    }
  }

  getNoteById(noteId: string): Note | undefined {
    return this.notesSubject.value.find((note) => noteId === note._id);
  }

  setNotes(notes: Note[]): void {
    this.notesSubject.next(notes);
    this.originalNotes = [...notes];
  }

  async addNote(noteToAdd: Note): Promise<void> {
    this.loadingSubject.next(true);
    try {
      await dbService.addNote(noteToAdd);
      const currentNotes = [...this.notesSubject.value];
      currentNotes.unshift(noteToAdd);
      this.notesSubject.next(currentNotes);
      this.originalNotes.unshift(noteToAdd);
    } catch (e) {
      console.error('Error adding note: ', e);
    } finally {
      this.loadingSubject.next(false);
    }
  }

  async updateNote(noteToUpdate: Note): Promise<void> {
    this.loadingSubject.next(true);
    try {
      await dbService.updateNote(noteToUpdate._id, noteToUpdate);
      const currentNotes = [...this.notesSubject.value];
      const noteIdx = currentNotes.findIndex(
        (note) => note._id === noteToUpdate._id
      );
      currentNotes[noteIdx] = { ...noteToUpdate };
      this.notesSubject.next(currentNotes);

      const originalNoteIdx = this.originalNotes.findIndex(
        (note) => note._id === noteToUpdate._id
      );
      this.originalNotes[originalNoteIdx] = { ...noteToUpdate };
    } catch (e) {
      console.error('Error updating note: ', e);
    } finally {
      this.loadingSubject.next(false);
    }
  }

  async removeNoteById(noteId: string): Promise<void> {
    this.loadingSubject.next(true);
    try {
      await dbService.removeNote(noteId);
      const currentNotes = this.notesSubject.value.filter(
        (note) => note._id !== noteId
      );
      this.notesSubject.next(currentNotes);
      this.originalNotes = this.originalNotes.filter(
        (note) => note._id !== noteId
      );
    } catch (e) {
      console.error('Error removing note: ', e);
    } finally {
      this.loadingSubject.next(false);
    }
  }

  filterNotes(searchTerm: string): void {
    this.loadingSubject.next(true);
    const lowerCaseTerm = searchTerm.toLowerCase();
    const filteredNotes = this.originalNotes.filter((note) =>
      note.title.toLowerCase().includes(lowerCaseTerm)
    );

    this.notesSubject.next(filteredNotes);

    setTimeout(() => {
      this.loadingSubject.next(false);
    }, 500);
  }

  getFilteredNotes(searchTerm: string): Note[] {
    return this.originalNotes.filter((note) =>
      note.title.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }
}

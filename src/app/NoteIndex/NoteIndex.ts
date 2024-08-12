import { CommonModule } from '@angular/common'
import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core'
import { NoteService } from '../_services/note.service'
import { NoteBottomActionsComponent } from '../NoteBottomActions/NoteBottomActions'
import { Note } from '../_interfaces/note'
import {
  ADD_UPDATE_NOTE_ACTION,
  COLOR_NOTE_ACTION,
  COPY_NOTE_ACTION,
  REMOVE_NOTE_ACTION,
} from '../_services/consts.service'
import { ColorPickerComponent } from '../ColorPicker/ColorPicker'
import { HoverDirective } from '../_directives/note.hover.directive'
import { AddNoteComponent } from '../AddNote/AddNote'
import { NoteAction } from '../_interfaces/NoteAction'
import { Router, RouterModule } from '@angular/router'
import { Subscription } from 'rxjs'
import { Loader } from '../Loader/Loader'
import { makeId } from '../_services/util.service'

@Component({
  selector: 'note-index',
  standalone: true,
  imports: [
    Loader,
    CommonModule,
    NoteBottomActionsComponent,
    ColorPickerComponent,
    AddNoteComponent,
    HoverDirective,
    RouterModule,
  ],
  templateUrl: './NoteIndex.html',
  styleUrls: ['./NoteIndex.scss', '../../main.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoteIndexComponent implements OnInit, OnDestroy {
  notes!: Note[]
  selectedNote!: Note | null
  isColorPickerOpen!: boolean
  colorPickerTimeout!: number
  isLoadingNotes: boolean = false
  private subscription!: Subscription

  constructor(
    private notesService: NoteService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.isLoadingNotes = true
    this.subscription = this.notesService.notes$.subscribe((notes) => {
      this.notes = notes
      this.isLoadingNotes = false
      this.cdr.markForCheck()
    })

    this.notesService.loadNotes()
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  getNoteIdxById(noteId: string): number {
    return this.notes.findIndex((note) => note._id === noteId)
  }

  async addUpdateNote(noteId?: string, noteToAdd?: Note): Promise<void> {
    if (noteId) {
      await this.notesService.updateNote({ ...noteToAdd!, _id: noteId })
    } else {
      await this.notesService.addNote({ ...noteToAdd!, _id: makeId() })
    }
  }

  async removeNote(noteId: string): Promise<void> {
    await this.notesService.removeNoteById(noteId)
  }

  async duplicateNote(noteId: string): Promise<void> {
    const noteToCopy = this.notesService.getNoteById(noteId)
    if (!noteToCopy) return
    const noteCopy: Note = { ...noteToCopy, _id: makeId() }
    await this.notesService.addNote(noteCopy)
  }

  async paintNote(color: string, noteId: string): Promise<void> {
    const noteToUpdate = this.notesService.getNoteById(noteId)
    if (noteToUpdate) {
      await this.notesService.updateNote({
        ...noteToUpdate,
        color: color,
      })
    }
  }

  toggleColorPicker(): void {
    this.isColorPickerOpen = !this.isColorPickerOpen
    if (this.isColorPickerOpen) {
      setTimeout(() => {
        this.isColorPickerOpen = false
      }, 2500)
    }
  }

  displayNoteEditor(noteId: string): void {
    this.router.navigate(['notes', noteId])
  }

  async onNoteAction(action: NoteAction): Promise<void> {
    this.selectedNote = action.noteId
      ? this.notes[this.getNoteIdxById(action.noteId)]
      : null
    switch (action.type) {
      case ADD_UPDATE_NOTE_ACTION:
        await this.addUpdateNote(action.noteId, action.data)
        break
      case REMOVE_NOTE_ACTION:
        await this.removeNote(action.noteId!)
        break
      case COPY_NOTE_ACTION:
        await this.duplicateNote(action.noteId!)
        break
      case COLOR_NOTE_ACTION:
        action.data
          ? await this.paintNote(action.data, action.noteId!)
          : this.toggleColorPicker()
        break
    }
  }
}

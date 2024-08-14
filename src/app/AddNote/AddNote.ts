import { Component, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ADD_UPDATE_NOTE_ACTION, DEFAULT_NOTE_TYPE, EMPTY_STR } from '../_services/consts.service'
import { Note } from '../_interfaces/note'
import { getEmptyNote, noteService } from '../_services/note.demo.service'
import { NoteAction } from '../_interfaces/NoteAction'
import { NoteBottomActionsComponent } from '../NoteBottomActions/NoteBottomActions'
import { NgIconComponent, provideIcons } from '@ng-icons/core'

import { matColorLens, matViewList, matImage, matTextFormat } from '@ng-icons/material-icons/baseline'
import axios from 'axios'
import { cloudinaryService } from '../_services/cloudinary.service'

@Component({
  selector: 'add-note',
  standalone: true,
  imports: [FormsModule, NoteBottomActionsComponent, NgIconComponent],
  templateUrl: './AddNote.html',
  styleUrls: ['./AddNote.scss'],
  providers: provideIcons({
    matImage,
    matColorLens,
    matViewList,
    matTextFormat,
  }),
})
export class AddNoteComponent {
  title!: string
  description!: string
  type!: string
  imgUrl!: string
  isEditorActive!: boolean
  icons = [
    { type: 'txt', svg: 'matTextFormat' },
    { type: 'todo', svg: 'matViewList' },
    { type: 'img', svg: 'matImage' },
    { type: 'color', svg: 'matColorLens' },
  ]
  @Output() addNote = new EventEmitter<NoteAction>()

  ngOnInit() {
    this.resetEditor()
    this.isEditorActive = false
  }

  setTitle(ev: any): void {
    this.title = ev.target.value
  }

  setType(noteType: string) {
    if (noteType === 'color') return
    this.type = noteType
  }

  setDescription(ev: any): void {
    this.description = ev.target.value
  }

  handleFileInput(event: any): void {
    const file: File = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e: any) => {
        this.imgUrl = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  resetEditor(): void {
    this.title = EMPTY_STR
    this.description = EMPTY_STR
    this.imgUrl = EMPTY_STR
    this.type = DEFAULT_NOTE_TYPE
  }

  async handleImgUpload(noteToAdd: Note): Promise<Note> {
    if (!this.imgUrl) return noteToAdd
    try {
      const res = await cloudinaryService.uploadPhotoToCloud(this.imgUrl)
      return { ...noteToAdd, imgUrl: res.data.secure_url }
    } catch (error) {
      console.error('Image upload failed:', error)
      return noteToAdd // Return the original noteToAdd even if the upload fails
    }
  }

  async handleAddNote(ev: Event): Promise<void> {
    try {
      ev.preventDefault()
      let noteToAdd = getEmptyNote(this.title, this.description, this.type)
      noteToAdd = await this.handleImgUpload(noteToAdd)
      this.addNote.emit({ noteId: EMPTY_STR, type: ADD_UPDATE_NOTE_ACTION, data: noteToAdd })
      this.resetEditor()
    } catch (err) {
      console.error(err)
    }
  }
}

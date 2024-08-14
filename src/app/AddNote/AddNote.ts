import { Component, Output, EventEmitter } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { ADD_UPDATE_NOTE_ACTION, COLOR_NOTE_TYPE, DEFAULT_NOTE_TYPE, EMPTY_STR, IMG_NOTE_TYPE, TODO_NOTE_TYPE, TXT_NOTE_TYPE } from '../_services/consts.service'
import { Note, TodoItem } from '../_interfaces/note'
import { NOTE_COLORS, getEmptyNote, noteService } from '../_services/note.demo.service'
import { NoteAction } from '../_interfaces/NoteAction'
import { NoteBottomActionsComponent } from '../NoteBottomActions/NoteBottomActions'
import { NgIconComponent, provideIcons } from '@ng-icons/core'

import { matColorLens, matViewList, matImage, matTextSnippet } from '@ng-icons/material-icons/baseline'
import { cloudinaryService } from '../_services/cloudinary.service'
import { todoService } from '../_services/todo.service'
import { ColorPickerComponent } from '../ColorPicker/ColorPicker'

@Component({
  selector: 'add-note',
  standalone: true,
  imports: [FormsModule, NoteBottomActionsComponent, NgIconComponent, ColorPickerComponent],
  templateUrl: './AddNote.html',
  styleUrls: ['./AddNote.scss', '../ColorPicker/ColorPicker.scss'],
  providers: provideIcons({
    matImage,
    matColorLens,
    matViewList,
    matTextSnippet,
  }),
})
export class AddNoteComponent {
  title!: string
  description!: string
  type!: string
  imgUrl!: string
  todos!: TodoItem[]
  noteToAdd!: Note
  isEditorActive!: boolean
  isImgLoading!: boolean
  isColorPickerOpen: boolean = false
  colors = NOTE_COLORS
  selectedColor: string = '#fff'
  editorIcons = [
    { type: COLOR_NOTE_TYPE, svg: 'matColorLens' },
    { type: TXT_NOTE_TYPE, svg: 'matTextSnippet' },
    { type: IMG_NOTE_TYPE, svg: 'matImage' },
    { type: TODO_NOTE_TYPE, svg: 'matViewList' },
  ]

  @Output() addNote = new EventEmitter<NoteAction>()

  ngOnInit() {
    this.resetEditor()
    this.isEditorActive = false
    this.type = 'todo'
  }

  setTodoContent(ev: any, todoId: string) {
    const todoIdx = this.todos.findIndex((todo) => todo._id === todoId)
    this.todos[todoIdx].content = ev.target.value
  }

  setTitle(ev: any): void {
    this.title = ev.target.value
  }

  setSelectedColor(color: string) {
    this.selectedColor = color
  }

  setType(noteType: string) {
    if (noteType === COLOR_NOTE_TYPE) {
      this.isColorPickerOpen = !this.isColorPickerOpen
      return
    }
    this.resetEditor()
    this.type = noteType
  }

  setDescription(ev: any): void {
    this.description = ev.target.value
  }

  addTodo() {
    const newTodo = todoService.getEmptyTodo()
    this.todos.push(newTodo)
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

  removeTodo(todoId: string) {
    console.log('todoId', todoId)
    this.todos = this.todos.filter((todo) => todo._id !== todoId)
    console.log('this.todos AFTER REMOVE ', todoId, this.todos)
  }

  resetEditor(): void {
    this.isColorPickerOpen = false
    this.title = EMPTY_STR
    this.description = EMPTY_STR
    this.imgUrl = EMPTY_STR
    this.type = DEFAULT_NOTE_TYPE
    this.selectedColor = '#fff'
    this.todos = [todoService.getEmptyTodo()] as TodoItem[]
    this.noteToAdd = getEmptyNote()
  }

  async handleImgUpload(): Promise<void> {
    if (!this.imgUrl) return
    try {
      const res = await cloudinaryService.uploadPhotoToCloud(this.imgUrl)
      this.noteToAdd.imgUrl = res.data.secure_url
    } catch (error) {
      console.error('Image upload failed:', error)
    }
  }

  handleTodos() {
    if (!this.todos) return
    this.noteToAdd.todos = [...this.todos]
    this.noteToAdd.todos.forEach((todo, idx) => (!todo.content ? (todo.content = `Task number #00${idx + 1}`) : null))
  }

  setNoteDetails() {
    this.noteToAdd.title = this.title
    this.noteToAdd.type = this.type
    this.noteToAdd.txt = this.description
    this.noteToAdd.color = this.selectedColor
  }

  async handleAddNote(ev: Event): Promise<void> {
    try {
      ev.preventDefault()
      this.setNoteDetails()
      this.handleTodos()
      await this.handleImgUpload()
      this.addNote.emit({ noteId: EMPTY_STR, type: ADD_UPDATE_NOTE_ACTION, data: this.noteToAdd })
      this.resetEditor()
    } catch (err) {
      console.error(err)
    }
  }
}

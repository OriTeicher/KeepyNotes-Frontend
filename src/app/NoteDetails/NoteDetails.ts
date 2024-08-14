import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Note } from '../_interfaces/note'
import { NoteService } from '../_services/note.service'
import { FormsModule } from '@angular/forms'
import { DEFAULT_NOTE_TYPE } from '../_services/consts.service'
@Component({
  selector: 'App-note-details',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './NoteDetails.html',
  styleUrls: ['../AddNote/AddNote.scss', '../DynamicNote/DynamicNote.scss', './NoteDetails.scss'],
})
export class NoteDetailsComponent implements OnInit {
  noteToEdit!: Note
  noteId!: string

  constructor(private route: ActivatedRoute, private router: Router, private noteService: NoteService) {}

  async ngOnInit(): Promise<void> {
    try {
      this.route.paramMap.subscribe((paramMap) => {
        this.noteId = paramMap.get('noteId')!!
        this.noteToEdit = this.noteService.getNoteById(this.noteId)!
        if (!this.noteToEdit) this.router.navigate(['notes'])
      })
    } catch (err) {
      console.log(err)
    }
  }

  setTodoContent(event: any, todoId: string) {
    if (!this.noteToEdit.todos) return
    const todoIdx = this.noteToEdit.todos?.findIndex((todo) => todo._id === todoId)
    this.noteToEdit.todos[todoIdx].content = event.target.value
    this.noteService.updateNote(this.noteToEdit)
  }

  async toggleIsDone(todoId: string) {
    if (!this.noteToEdit.todos) return
    const todoToUpdateIdx = this.noteToEdit.todos?.findIndex((todo) => todo._id === todoId)!
    this.noteToEdit.todos[todoToUpdateIdx].isDone = !this.noteToEdit.todos[todoToUpdateIdx].isDone
    await this.noteService.updateNote(this.noteToEdit)
  }

  onUpdateNote(ev: Event) {
    ev.preventDefault()
    if (!this.noteToEdit) return
    const form = ev.target as HTMLFormElement
    const titleInput = form.elements.namedItem('title') as HTMLInputElement
    const txtInput = form.elements.namedItem(DEFAULT_NOTE_TYPE) as HTMLTextAreaElement
    this.noteToEdit.title = titleInput.value
    if (this.noteToEdit.type === DEFAULT_NOTE_TYPE) this.noteToEdit.txt = txtInput.value
    this.noteService.updateNote(this.noteToEdit)
    this.router.navigate(['notes'])
  }

  closeDialog(): void {
    this.router.navigate(['notes'])
  }
}

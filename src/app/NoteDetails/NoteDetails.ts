import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { Note } from '../_interfaces/note'
import { NoteService } from '../_services/note.service'
import { FormsModule } from '@angular/forms'
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

  async toggleIsDone(todoId: string) {
    console.log('todoId', todoId)
    if (!this.noteToEdit.todos) return
    const todoToUpdateIdx = this.noteToEdit.todos?.findIndex((todo) => todo._id === todoId)!
    this.noteToEdit.todos[todoToUpdateIdx].isDone = !this.noteToEdit.todos[todoToUpdateIdx].isDone
    console.log('this.noteToEdit.todos[todoToUpdateIdx]', this.noteToEdit.todos[todoToUpdateIdx])
    await this.noteService.updateNote(this.noteToEdit)
  }

  onUpdateNote(ev: Event) {
    ev.preventDefault()
    if (!this.noteToEdit) return
    const form = ev.target as HTMLFormElement
    const titleInput = form.elements.namedItem('title') as HTMLInputElement
    const txtInput = form.elements.namedItem('txt') as HTMLTextAreaElement
    this.noteToEdit.title = titleInput.value
    this.noteToEdit.txt = txtInput.value
    this.noteService.updateNote(this.noteToEdit)
    this.router.navigate(['notes'])
  }

  closeDialog(): void {
    this.router.navigate(['notes'])
  }
}

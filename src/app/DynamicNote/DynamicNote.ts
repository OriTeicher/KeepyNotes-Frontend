import { Component, Input } from '@angular/core'
import { Note, TodoItem } from '../_interfaces/note'
import { CommonModule } from '@angular/common'
import { TimestampToDatePipe } from '../_pipes/timestamp-to-date.pipe'
import { NoteService } from '../_services/note.service'
@Component({
  standalone: true,
  imports: [CommonModule, TimestampToDatePipe],
  selector: 'dynamic-note',
  templateUrl: './DynamicNote.html',
  styleUrls: ['./DynamicNote.scss'],
})
export class DynamicNoteComponent {
  @Input() note!: Note

  constructor(private noteService: NoteService) {}

  async toggleIsDone(todoId: string) {
    if (!this.note.todos) return
    const todoToUpdateIdx = this.note.todos?.findIndex((todo) => todo._id === todoId)!
    this.note.todos[todoToUpdateIdx].isDone = !this.note.todos[todoToUpdateIdx].isDone
    await this.noteService.updateNote(this.note)
  }

  handleEventClick(event: any) {
    event.stopPropagation()
  }
}

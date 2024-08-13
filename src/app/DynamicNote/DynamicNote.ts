import { Component, Input } from '@angular/core'
import { Note } from '../_interfaces/note'
import { CommonModule } from '@angular/common'
import { TimestampToDatePipe } from '../_pipes/timestamp-to-date.pipe'
@Component({
  standalone: true,
  imports: [CommonModule, TimestampToDatePipe],
  selector: 'dynamic-note',
  templateUrl: './DynamicNote.html',
  styleUrls: ['./DynamicNote.scss'],
})
export class DynamicNoteComponent {
  @Input() note!: Note

  toggleIsDone(todoId: string) {
    const todoToUpdate = this.note.todos?.find((todo) => todo._id === todoId)!
    todoToUpdate.isDone = !todoToUpdate.isDone
  }

  handleEventClick(event: any) {
    event.stopPropagation()
  }
}

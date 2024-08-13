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
  handleEv(event: Event) {
    console.log('event', event)
    event.preventDefault()
    event.stopPropagation()
    return
  }
}

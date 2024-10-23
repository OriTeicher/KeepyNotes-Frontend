import { Component, Input } from '@angular/core'
import { Note, NoteLabel } from '../_interfaces/note'
import { DEFAULT_NOTE_COLOR } from '../_services/consts.service'
import { matPlus } from '@ng-icons/material-icons/baseline'
import { provideIcons } from '@ng-icons/core'
import { NgIcon } from '@ng-icons/core'
import { NoteService } from '../_services/note.service'
import { getRandomColor, makeId } from '../_services/util.service'
@Component({
  selector: 'labels-editor',
  standalone: true,
  imports: [NgIcon],
  templateUrl: './LabelsEditor.html',
  styleUrl: './LabelsEditor.scss',
  providers: provideIcons({ matPlus }),
})
export class LabelsEditorComponent {
  @Input() selectedNote!: Note
  @Input() isLabelsEditorOpen!: boolean
  @Input() noteId!: string
  selectedColor: string = DEFAULT_NOTE_COLOR
  labels: string[] = []
  constructor(private noteService: NoteService) {}

  onSubmit(ev: SubmitEvent) {
    ev.preventDefault()
    ev.stopPropagation()
    const noteToUpdate = { ...this.noteService.getNoteById(this.noteId) }
    if (!noteToUpdate.labels) noteToUpdate.labels = []
    console.log('noteToUpdate', noteToUpdate)
    const labelTitle = (ev.target as HTMLFormElement).querySelector('input')?.value || 'Untitled'
    noteToUpdate.labels.push({ _id: `${makeId('L-')}`, color: getRandomColor(), title: labelTitle })
    console.log('noteToUpdate.labels', noteToUpdate.labels)
    this.noteService.updateNote(noteToUpdate as Note)
  }

  onInputClick(ev: MouseEvent) {
    ev.stopPropagation()
  }

  setLabelColor(ev: Event): void {
    const target = ev.target as HTMLInputElement | null
    if (target) this.selectedColor = target.value
  }
}

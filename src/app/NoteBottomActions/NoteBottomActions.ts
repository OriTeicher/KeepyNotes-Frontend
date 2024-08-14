import { Component, Input, Output, EventEmitter } from '@angular/core'
import { NgIconComponent, provideIcons } from '@ng-icons/core'
import { matDeleteForever, matContentCopy, matColorLens, matDone } from '@ng-icons/material-icons/baseline'
import { matContentCopyRound } from '@ng-icons/material-icons/round'
import { NoteAction } from '../_interfaces/NoteAction'
import { COLOR_NOTE_ACTION, COPY_NOTE_ACTION, REMOVE_NOTE_ACTION } from '../_services/consts.service'
@Component({
  selector: 'note-bottom-actions',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      matDeleteForever,
      matContentCopy,
      matColorLens,
      matContentCopyRound,
    }),
  ],
  templateUrl: './NoteBottomActions.html',
  styleUrl: './NoteBottomActions.scss',
})
export class NoteBottomActionsComponent {
  @Input() noteId: string | null = null
  @Output() noteAction = new EventEmitter<NoteAction>()

  icons = [
    { type: REMOVE_NOTE_ACTION, svg: 'matDeleteForever' },
    { type: COPY_NOTE_ACTION, svg: 'matContentCopyRound' },
    { type: COLOR_NOTE_ACTION, svg: 'matColorLens' },
  ]

  handleNoteAction(ev: Event, type: string) {
    ev.preventDefault()
    ev.stopPropagation()
    if (this.noteId) this.noteAction.emit({ noteId: this.noteId, type })
  }
}

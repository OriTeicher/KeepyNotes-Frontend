import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core'
import { noteService } from '../_services/note.demo.service'
import { getEmptyNote } from '../_services/note.demo.service'
@Component({
  selector: 'note-canvas',
  standalone: true,
  imports: [],
  templateUrl: './NoteCanvas.html',
  styleUrls: ['./NoteCanvas.scss'],
})
export class NoteCanvasComponent implements AfterViewInit {
  @ViewChild('canvasElement', { static: false }) canvasElement!: ElementRef<HTMLCanvasElement>
  canvasImgUrl!: string
  private ctx!: CanvasRenderingContext2D
  private drawing = false

  ngAfterViewInit() {
    const canvas = this.canvasElement.nativeElement
    this.ctx = canvas.getContext('2d')!
    this.resizeCanvas()
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeCanvas()
  }

  resizeCanvas() {
    const canvas = this.canvasElement.nativeElement
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, canvas.width, canvas.height)
  }

  startDrawing(event: MouseEvent) {
    this.drawing = true
    this.draw(event)
  }

  stopDrawing() {
    this.drawing = false
    this.ctx.beginPath()
    this.saveCanvas()
  }

  draw(event: MouseEvent) {
    if (!this.drawing) return

    this.ctx.lineWidth = 10
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = 'black'

    this.ctx.lineTo(event.clientX, event.clientY)
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(event.clientX, event.clientY)
  }

  saveCanvas() {
    const canvas = this.canvasElement.nativeElement
    this.canvasImgUrl = canvas.toDataURL('image/png')
    console.log('this.canvasImgUrl', this.canvasImgUrl)
  }
}

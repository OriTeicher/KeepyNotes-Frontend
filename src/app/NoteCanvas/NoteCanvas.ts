import { Component, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core'

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

  strokeWidth: number = 10
  strokeColor: string = 'black'

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
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width
    canvas.height = rect.height
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

    const canvas = this.canvasElement.nativeElement
    const rect = canvas.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    this.ctx.lineWidth = this.strokeWidth
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = this.strokeColor

    this.ctx.lineTo(x, y)
    this.ctx.stroke()
    this.ctx.beginPath()
    this.ctx.moveTo(x, y)
  }

  saveCanvas() {
    const canvas = this.canvasElement.nativeElement
    this.canvasImgUrl = canvas.toDataURL('image/png')
    console.log('this.canvasImgUrl', this.canvasImgUrl)
  }

  setStrokeWidth(width: number) {
    this.strokeWidth = width
  }

  setStrokeColor(color: string) {
    this.strokeColor = color
  }
}

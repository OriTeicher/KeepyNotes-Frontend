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

    canvas.addEventListener('touchstart', this.startDrawing.bind(this), false)
    canvas.addEventListener('touchmove', this.draw.bind(this), false)
    canvas.addEventListener('touchend', this.stopDrawing.bind(this), false)
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

  startDrawing(event: MouseEvent | TouchEvent) {
    this.drawing = true
    this.draw(event)
  }

  stopDrawing() {
    this.drawing = false
    this.ctx.beginPath()
    this.saveCanvas()
  }

  draw(event: MouseEvent | TouchEvent) {
    if (!this.drawing) return

    event.preventDefault()

    const canvas = this.canvasElement.nativeElement
    const rect = canvas.getBoundingClientRect()

    let x: number, y: number

    if (event instanceof MouseEvent) {
      x = event.clientX - rect.left
      y = event.clientY - rect.top
    } else if (event instanceof TouchEvent) {
      const touch = event.touches[0]
      x = touch.clientX - rect.left
      y = touch.clientY - rect.top
    } else {
      return
    }

    x = x ?? 0
    y = y ?? 0

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

import { Directive, ElementRef, Input, OnChanges } from '@angular/core'
import { EMPTY_STR } from '../_services/consts.service'

@Directive({
  selector: '[svgName]',
  standalone: true,
})
export class SvgDirective implements OnChanges {
  constructor(private el: ElementRef) {}
  @Input() svgName?: string

  ngOnChanges(): void {
    if (this.svgName) {
      this.loadSvgByName(this.svgName)
    }
  }

  private async loadSvgByName(svgName: string): Promise<void> {
    try {
      const svgUrl = `../../assets/svgs/${svgName}.svg`
      this.el.nativeElement.innerHTML = `<img src="${svgUrl}" alt="${svgName}"/>`
    } catch (err) {
      console.error(`Error loading SVG icon: ${svgName}`, err)
      this.el.nativeElement.innerHTML = EMPTY_STR
    }
  }
}

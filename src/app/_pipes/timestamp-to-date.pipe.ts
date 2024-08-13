import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'timestampToDate',
  standalone: true,
})
export class TimestampToDatePipe implements PipeTransform {
  transform(value: { seconds: number; nanoseconds: number } | Date, format: string = 'medium'): string {
    let date: Date

    if (value instanceof Date) {
      date = value
    } else if (value && value.seconds !== undefined && value.nanoseconds !== undefined) {
      const milliseconds = value.seconds * 1000 + Math.floor(value.nanoseconds / 1000000)
      date = new Date(milliseconds)
    } else {
      return ''
    }

    return new Intl.DateTimeFormat('en-US', {
      dateStyle: format === 'short' ? 'short' : 'medium',
      timeStyle: format === 'short' ? 'short' : 'medium',
    }).format(date)
  }
}

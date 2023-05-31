import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, unit: string = 'C'): string {
    return `${value.toFixed(0)}\xB0${unit}`;
  }
}
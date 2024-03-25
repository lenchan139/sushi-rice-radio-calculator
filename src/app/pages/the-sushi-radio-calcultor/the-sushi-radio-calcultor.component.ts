import { Component, ElementRef, ViewChild } from '@angular/core';
import { evaluate, round } from 'mathjs';

@Component({
  selector: 'app-the-sushi-radio-calcultor',
  standalone: true,
  imports: [],
  templateUrl: './the-sushi-radio-calcultor.component.html',
  styleUrl: './the-sushi-radio-calcultor.component.less',
})
export class TheSushiRadioCalcultorComponent {
  @ViewChild('selectX') selectXRef: ElementRef<HTMLSelectElement> | undefined;
  @ViewChild('inputX') inputXRef: ElementRef<HTMLInputElement> | undefined;
  mapItemNumbers = new Map<string, number>([
    ['rice', 3],
    ['water', 3.6],
    ['rice vineger', 7],
    ['sugar', 2],
    ['salt', 2],
  ]);
  outputMaps = new Map<string, number>([
    ['rice', 3],
    ['water', 3.6],
    ['rice vineger', 7],
    ['sugar', 2],
    ['salt', 2],
  ]);
  currentV = '';
  arrConstAllCookingItem = ['rice', 'water', 'rice vineger', 'sugar', 'salt'];
  changeValue(key: string) {
    if (key) {
      const newValue = prompt(`Enter your new value of ${key}`);
      if (newValue && !Number.isNaN(parseFloat(newValue))) {
        const nValue = parseFloat(newValue || '0') || 0;
        this.mapItemNumbers.set(key, nValue);
      } else {
        alert('enter a valid number.');
      }
    }
  }
  onSelectChange(v: Event) {
    console.log('changeing select', v?.target);
    if (v?.target) {
      const s = <HTMLSelectElement>v?.target;
      console.log('new value', s.value);
      if (s.value) {
      }
    }
  }
  startCalculate() {
    if (
      this.inputXRef?.nativeElement?.value &&
      this.selectXRef?.nativeElement?.value
    ) {
      let total = 0;
      let percentageCollector = new Map<string, number>();
      const currentKey = this.selectXRef?.nativeElement?.value;
      const cNum = this.inputXRef?.nativeElement?.value;
      const cRate = this.mapItemNumbers.get(currentKey) || 0;
      for (const x of this.mapItemNumbers.entries())
        total = evaluate(`${total} + ${x[1]}`);
      for (const y of this.mapItemNumbers.entries()) {
        let p = 0;
        if (y[1] > 0) {
          p = evaluate(`${y[1]} / ${cRate}`);
        }
        percentageCollector.set(y[0], p);
      }
      console.log('total', total);
      console.log('perc', percentageCollector);
      for (const k of this.arrConstAllCookingItem) {
        if (k != currentKey) {
          const oldV = this.mapItemNumbers.get(k);
          let newV = 0;
          const p = percentageCollector.get(k);
          if (oldV && oldV > 0 && p && p > 0) {
            newV = round(evaluate(` ${cNum}  * ${p} `), 3);
          }
          this.outputMaps.set(k, newV);
        }else{
          this.outputMaps.set(k,parseFloat(cNum))
        }
      }
      console.log('new radio map', this.outputMaps);
    } else {
      console.log('v none');
    }
  }
}

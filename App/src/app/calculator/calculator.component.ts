import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent {
  plusOrConcatResult!: Number | string;

  addNumsOrConcatStrings(valueOne: string, valueTwo: string) {
    if (parseFloat(valueOne) && parseFloat(valueTwo)) {
      this.plusOrConcatResult = parseFloat(valueOne) + parseFloat(valueTwo);
    } else {
      this.plusOrConcatResult = valueOne + ' ' + valueTwo;
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  calculationResult = 0;

  calculate(valueOne: string, valueTwo: string) {
    this.calculationResult = parseInt(valueOne) + parseInt(valueTwo);
    if (!this.calculationResult) {
      this.calculationResult = 0;
    }
  }
}

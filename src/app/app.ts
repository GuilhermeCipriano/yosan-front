import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoanCalculatorComponent} from './loan-calculator-component/loan-calculator-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoanCalculatorComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
}

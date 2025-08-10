import {Component, OnInit} from '@angular/core';
import {YosanBackService} from '../yosan-back.service';
import {LoanRequest} from './LoanRequest';
import {LoanResponse} from './LoanResponse';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NgxMaskDirective} from 'ngx-mask';


//Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import {dateOrderValidator} from '../validators/date.validator';


function toISODate(dateString: string | null | undefined): string {
  console.log(`Função toISODate recebeu: '${dateString}'`);

  // 1. Validação simples: verifica se a string não é nula e tem 8 caracteres.
  if (!dateString || dateString.length !== 8) {
    console.warn('Valor inválido ou incompleto. Retornando null.');
    return '';
  }

  // 2. "Fatia" a string para extrair dia, mês e ano.
  // Ex: '01012024'
  const day = dateString.substring(0, 2);   // Pega os 2 primeiros caracteres -> '01'
  const month = dateString.substring(2, 4); // Pega do 3º ao 4º caractere -> '01'
  const year = dateString.substring(4, 8);  // Pega do 5º ao 8º caractere -> '2024'

  // 3. Monta a string no formato ISO yyyy-mm-dd.
  const isoDate = `${year}-${month}-${day}`;

  console.log(`Conversão bem-sucedida para: ${isoDate}`);
  return isoDate;
}

@Component({
  selector: 'yosan-loan-calculator-component',
  imports: [
    CurrencyPipe,
    ReactiveFormsModule,
    NgxMaskDirective,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
  ],
  templateUrl: './loan-calculator-component.html',
  styleUrl: './loan-calculator-component.css'
})
export class LoanCalculatorComponent implements OnInit {


  public responseData: LoanResponse | null = null;
  public isLoading: boolean = false;
  public errorMessage: string | null = null;
  public loanForm!: FormGroup;
  public displayedColumns: string[] = ['date', 'installmentNumber', 'taxValue', 'paidDebtValue', 'remainingBalance'];



  constructor(private formBuilder: FormBuilder,
              private yosanBackService: YosanBackService) {
  }


  ngOnInit(): void {
    this.loanForm = this.formBuilder.group({
      initialDate: ['',  [Validators.required, Validators.pattern(/^\d{8}$/)]],
      endDate: ['',  [Validators.required, Validators.pattern(/^\d{8}$/)]],
      firstPaymentDate: ['',  [Validators.required, Validators.pattern(/^\d{8}$/)]],
      loanValue: ['', Validators.required],
      taxRate: ['', Validators.required]
    }, {
      validators: dateOrderValidator('initialDate', 'endDate', 'firstPaymentDate')
    });
  }

  protected calculateLoan(): void {
    if (this.loanForm.invalid) {
      return;
    }

    const formValues = this.loanForm.getRawValue();

    const loanRequest: LoanRequest = {
      loanValue: formValues.loanValue,
      taxRate: formValues.taxRate,
      initialDate: toISODate(formValues.initialDate),
      endDate:toISODate(formValues.endDate),
      firstPaymentDate: toISODate(formValues.firstPaymentDate)

    }

    const rawLoanValue = formValues.loanValue || '';
    loanRequest.loanValue = (parseInt(rawLoanValue.replace(/\D/g, ''), 10) / 100).toFixed(2);



    this.isLoading = true;
    this.errorMessage = null;


    this.yosanBackService.calculateLoan(loanRequest).subscribe({
      next: (response) => {
        this.responseData = response;
        this.isLoading = false;
      },
      error: (erro) => {
        this.errorMessage = 'Não foi possível carregar os dados do empréstimo. Por favor, tente novamente mais tarde.';
        this.isLoading = false;
      }
    });
  }
}

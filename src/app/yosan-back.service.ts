import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LoanRequest} from './loan-calculator-component/LoanRequest';
import {LoanResponse} from './loan-calculator-component/LoanResponse';

@Injectable({
  providedIn: 'root'
})
export class YosanBackService {
  private uri = '/api/yosan';
  private sac_loan_uri = '/calculate-sac-loan'

  constructor(private http: HttpClient) {

  }

  calculateLoan(loanRequest: LoanRequest): Observable<LoanResponse> {
    console.log("Enviando para o backend:", loanRequest); // Verifique se o objeto aparece corretamente no console do navegador

    return this.http.post<LoanResponse>(this.uri + this.sac_loan_uri, loanRequest);
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
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

  calculateLoan(loanRequest: LoanRequest): Observable<HttpResponse<LoanResponse>> {
    console.log("Sending to backend:", loanRequest);

    return this.http.post<LoanResponse>(this.uri + this.sac_loan_uri, loanRequest, {observe: 'response'});
  }

}

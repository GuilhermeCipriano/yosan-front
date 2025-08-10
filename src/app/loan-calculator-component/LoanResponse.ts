import {LoanInstallment} from './LoanInstallment';

export class LoanResponse {

  private _loanValue: string = "";
  private _initialDate: string = "";
  private _endDate: string = "";
  private _firstPaymentDate: string = "";
  private _taxRate: string = "";
  private _installmentList: Array<LoanInstallment> = [];

  // constructor(){}

  constructor(loanValue: string, initialDate: string, endDate: string, firstPaymentDate: string, taxRate: string, installmentList: Array<LoanInstallment>) {
    this._loanValue = loanValue;
    this._initialDate = initialDate;
    this._endDate = endDate;
    this._firstPaymentDate = firstPaymentDate;
    this._taxRate = taxRate;
    this._installmentList = installmentList;
  }

  get loanValue(): string {
    return this._loanValue;
  }

  set loanValue(value: string) {
    this._loanValue = value;
  }

  get initialDate(): string {
    return this._initialDate;
  }

  set initialDate(value: string) {
    this._initialDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get firstPaymentDate(): string {
    return this._firstPaymentDate;
  }

  set firstPaymentDate(value: string) {
    this._firstPaymentDate = value;
  }

  get taxRate(): string {
    return this._taxRate;
  }

  set taxRate(value: string) {
    this._taxRate = value;
  }

  get installmentList(): Array<LoanInstallment> {
    return this._installmentList;
  }

  set installmentList(value: Array<LoanInstallment>) {
    this._installmentList = value;
  }
}

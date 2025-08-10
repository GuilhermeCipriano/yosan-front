export interface LoanRequest {
  initialDate: string;
  endDate: string;
  firstPaymentDate: string;
  loanValue: string;
  taxRate: string;

  // constructor(initialDate: string, endDate: string, firstPaymentDate: string, loanValue: string, taxRate: string) {
  //   this.initialDate = initialDate;
  //   this.endDate = endDate;
  //   this.firstPaymentDate = firstPaymentDate;
  //   this.loanValue = loanValue;
  //   this.taxRate = taxRate;
  // }
  //
  // get initialDate(): string {
  //   return this._initialDate;
  // }
  //
  // set initialDate(value: string) {
  //   this._initialDate = value;
  // }
  //
  // get endDate(): string {
  //   return this._endDate;
  // }
  //
  // set endDate(value: string) {
  //   this._endDate = value;
  // }
  //
  // get firstPaymentDate(): string {
  //   return this._firstPaymentDate;
  // }
  //
  // set firstPaymentDate(value: string) {
  //   this._firstPaymentDate = value;
  // }
  //
  // get loanValue(): string {
  //   return this._loanValue;
  // }
  //
  // set loanValue(value: string) {
  //   this._loanValue = value;
  // }
  //
  // get taxRate(): string {
  //   return this._taxRate;
  // }
  //
  // set taxRate(value: string) {
  //   this._taxRate = value;
  // }
}

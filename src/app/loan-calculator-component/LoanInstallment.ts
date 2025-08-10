export class LoanInstallment {
  private _installmentNumber: string;
  private _date: string;
  private _installmentValue: string; //valor total da parcela
  private _taxValue: string; //juros
  private _paidDebtValue: string; //amortizacao
  private _remainingBalance: string; //saldo total restante


  constructor(installmentNumber: string, date: string, installmentValue: string, taxValue: string, paidDebtValue: string, remainingBalance: string) {
    this._installmentNumber = installmentNumber;
    this._date = date;
    this._installmentValue = installmentValue;
    this._taxValue = taxValue;
    this._paidDebtValue = paidDebtValue;
    this._remainingBalance = remainingBalance;
  }

  get installmentNumber(): string {
    return this._installmentNumber;
  }

  set installmentNumber(value: string) {
    this._installmentNumber = value;
  }

  get date(): string {
    return this._date;
  }

  set date(value: string) {
    this._date = value;
  }

  get installmentValue(): string {
    return this._installmentValue;
  }

  set installmentValue(value: string) {
    this._installmentValue = value;
  }

  get taxValue(): string {
    return this._taxValue;
  }

  set taxValue(value: string) {
    this._taxValue = value;
  }

  get paidDebtValue(): string {
    return this._paidDebtValue;
  }

  set paidDebtValue(value: string) {
    this._paidDebtValue = value;
  }

  get remainingBalance(): string {
    return this._remainingBalance;
  }

  set remainingBalance(value: string) {
    this._remainingBalance = value;
  }
}

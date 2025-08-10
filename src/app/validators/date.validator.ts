import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateOrderValidator(
  initialDateControlName: string,
  endDateControlName: string,
  firstPaymentDateControlName: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    console.log('Validador de data executado!');

    const initialDateControl = group.get(initialDateControlName);
    const endDateControl = group.get(endDateControlName);
    const firstPaymentDateControl = group.get(firstPaymentDateControlName);

    if (!initialDateControl || !endDateControl || !firstPaymentDateControl) {
      return null;
    }

    const parseDate = (dateString: string): Date | null => {
      if (!dateString || dateString.length !== 8 || !/^\d{8}$/.test(dateString)) {
        return null;
      }

      const day = Number(dateString.substring(0, 2));
      const month = Number(dateString.substring(2, 4));
      const year = Number(dateString.substring(4, 8));

      if (month < 1 || month > 12 || day < 1 || day > 31) {
        return null;
      }

      return new Date(year, month - 1, day);
    };

    const initialDate = parseDate(initialDateControl.value);
    const endDate = parseDate(endDateControl.value);
    const firstPaymentDate = parseDate(firstPaymentDateControl.value);
    console.log('Data Inicial Parseada:', initialDate);
    console.log('Data Final Parseada:', endDate);

    if (!initialDate) {

      return null;
    }

    // Validação da Data Final
    if (endDate && endDate < initialDate) {
      console.log(`Comparação: A data final (${endDate.toLocaleDateString()}) é menor que a inicial (${initialDate.toLocaleDateString()})?`, endDate < initialDate);

      // Seta o erro no controle específico para podermos mostrar a mensagem no campo certo
      endDateControl.setErrors({ 'dateOrder': 'The end date cannot be earlier than the start date..' });
    } else if (endDateControl.hasError('dateOrder')) {
      // Limpa o erro se a condição for resolvida
      endDateControl.setErrors(null);
    }

    // Validação da Data do Primeiro Pagamento
    if (firstPaymentDate && firstPaymentDate < initialDate) {
      console.error('ERRO DETECTADO: Data final é inválida!'); // <-- LOG DE ERRO

      firstPaymentDateControl.setErrors({ 'dateOrder': 'The first payment cannot be made before the start date.' });
    } else if (firstPaymentDateControl.hasError('dateOrder')) {
      firstPaymentDateControl.setErrors(null);
    }

    return null;
  };
}

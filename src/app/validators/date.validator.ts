import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateOrderValidator(
  initialDateControlName: string,
  endDateControlName: string,
  firstPaymentDateControlName: string
): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {

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

    if (!initialDate) {
      return null;
    }

    if (endDate && endDate < initialDate) {
      endDateControl.setErrors({ 'dateOrder': 'The end date cannot be earlier than the start date..' });
    } else if (endDateControl.hasError('dateOrder')) {
      // Limpa o erro se a condição for resolvida
      endDateControl.setErrors(null);
    }
    if (firstPaymentDate && firstPaymentDate < initialDate) {
      firstPaymentDateControl.setErrors({ 'dateOrder': 'The first payment cannot be made before the start date.' });
    } else if (firstPaymentDateControl.hasError('dateOrder')) {
      firstPaymentDateControl.setErrors(null);
    }

    return null;
  };
}

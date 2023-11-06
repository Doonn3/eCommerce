import { create, test, enforce } from 'vest';

export const textRuls = create((val: string, fieldName: string) => {
  test(fieldName, `${fieldName} is required`, () => {
    enforce(val).isNotBlank();
  });

  test(fieldName, `${fieldName} must be at least 3 characters long`, () => {
    enforce(val).longerThan(2);
  });

  test(fieldName, `${fieldName} no numeric`, () => {
    enforce(val).matches(/^[a-zA-Za-яА-ЯёЁ\s]*$/);
  });
});

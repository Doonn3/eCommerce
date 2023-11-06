import { create, test, enforce } from 'vest';

export const passwordRuls = create((data: { password: string }, fieldName: string) => {
  const password = data.password;

  test(fieldName, 'Password is required', () => {
    enforce(password).isNotBlank();
  });

  test(fieldName, 'Password must be at least 7 characters long', () => {
    enforce(password).longerThan(6);
  });

  test(fieldName, 'Minimum 1 capital letter required', () => {
    enforce(password).matches(/[A-Z]/);
  });

  test(fieldName, 'Minimum 1 digit or special character required', () => {
    enforce(password).matches(/[0-9\W]/);
  });
});

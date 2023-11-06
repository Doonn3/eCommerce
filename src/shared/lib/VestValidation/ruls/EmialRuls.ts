import { create, test, enforce } from 'vest';
import 'vest/enforce/email';

export const emailRuls = create((data: { email: string }, fieldName: string) => {
  const email = data.email;

  test(fieldName, 'Email is required', () => {
    enforce(email).isNotBlank();
  });

  test(fieldName, 'Incorect email format example@example.com', () => {
    enforce(email).isEmail();
  });
});

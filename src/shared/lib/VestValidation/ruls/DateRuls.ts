import { create, test, enforce } from 'vest';
import 'vest/enforce/date';

export const dateRuls = create((data: { date: string }, fieldName: string) => {
  const date = data.date;

  test(fieldName, 'Date is required', () => {
    enforce(date).isNotBlank();
  });
});

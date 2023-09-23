import { CustomerType } from '../Types';

export type CustomerReferenceType = {
  id: string;
  typeId: string;
  obj: CustomerType;
};

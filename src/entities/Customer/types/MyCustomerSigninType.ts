type AnonymousCartSignInMode = 'MergeWithExistingCustomerCart' | 'UseAsNewActiveCustomerCart';

export type MyCustomerSigninType = {
  email: string;
  password: string;
  activeCartSignInMode?: AnonymousCartSignInMode;
  updateProductData?: boolean;
};

import { defineStore } from 'pinia';
import { fetchUserSignUp, fetchUserSignin } from '../api/fetchUserAuth';
import type { CustomerSignInResultType } from '../types/CustomerSignInResultType';
import { computed, ref } from 'vue';
import type { MyCustomerDraftType } from '../types/MyCustomerDraftType';
import { useLocalStorage } from '@/shared/lib/composables';

import { useAlertMessage } from '@/shared/State/AlertStateMessage';
import { useRouter } from 'vue-router';
import { authController } from '@/auth';

const NAME_SPACE = 'useCustomer';

export const useCustomer = defineStore(NAME_SPACE, () => {
  const router = useRouter();
  const alert = useAlertMessage();
  const ls = useLocalStorage();

  const user = ref<CustomerSignInResultType | null>(null);
  const userName = ref<string | null>(ls.load('user-name') ?? null);
  const isLoadingRef = ref(false);

  const IsLoading = computed(() => isLoadingRef.value);

  const GetUser = computed(() => user.value?.customer);

  const GetUserName = computed(() => userName.value);

  const GetUserCart = computed(() => user.value?.cart);

  async function SignUp(draft: MyCustomerDraftType) {
    isLoadingRef.value = true;
    const res = await fetchUserSignUp(draft);

    let isError = false;

    if (res instanceof Error) {
      isError = true;
      alert.AddMessage({ status: 'error', message: res.message });
    } else {
      user.value = res;
      userName.value = res.customer.firstName ?? null;
      ls.set('user-name', userName.value);
      alert.AddMessage({ status: 'success', message: 'Success Sign Up' });
      const result = await authController.PasswordFlowCommand.execute(draft.email, draft.password);
      if (result instanceof Error) {
        isError = true;
        isLoadingRef.value = false;
        alert.AddMessage({ status: 'error', message: result.message });
      }
    }
    isLoadingRef.value = false;
    return { data: res, isError, isLoading: isLoadingRef.value };
  }

  async function SignIn(email: string, password: string) {
    isLoadingRef.value = true;
    const res = await fetchUserSignin({ email, password });

    let isError = false;

    if (res instanceof Error) {
      isError = true;
      alert.AddMessage({ status: 'error', message: res.message });
    } else {
      user.value = res;
      userName.value = res.customer.firstName ?? null;
      ls.set('user-name', userName.value);
      alert.AddMessage({ status: 'success', message: 'Success Sign In' });

      const result = await authController.PasswordFlowCommand.execute(email, password);

      if (result instanceof Error) {
        isError = true;
        alert.AddMessage({ status: 'error', message: result.message });
      } else {
        router.push({ name: 'catalog' });
      }
    }

    isLoadingRef.value = false;
    return { data: res, isError, isLoading: isLoadingRef.value };
  }

  async function SignOut() {
    const result = await authController.LogoutFlowCommand.execute();
    if (result instanceof Error) {
      alert.AddMessage({ status: 'error', message: result.message });
    } else {
      ls.remove('user-name');
    }
  }

  return { SignIn, SignUp, SignOut, GetUser, GetUserCart, IsLoading, GetUserName };
});

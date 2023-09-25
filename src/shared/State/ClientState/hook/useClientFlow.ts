import { fetchClientFlowToken } from '../../../api/refactor/fetch/fetchClientFlowToken';
import { ref } from 'vue';
import { ErrorToken } from '../../../api/refactor/model/ErrorToken';
import { Token } from '../../../api/refactor/model/Token';

type StatusType = {
  status: 'error' | 'success' | 'init';
  messsage: string;
  result?: Token;
};

export async function useClientFlow() {
  const status = ref<StatusType>({ status: 'init', messsage: '' });

  const clientFlowToken = await fetchClientFlowToken();

  if (clientFlowToken instanceof Error) {
    status.value.status = 'error';
    status.value.messsage = clientFlowToken.message;
    return;
  }

  if (clientFlowToken instanceof ErrorToken) {
    status.value.status = 'error';
    status.value.messsage = clientFlowToken.Data.message;
    return;
  }

  status.value.status = 'success';
  status.value.messsage = 'Токен Успешно Получен';
  status.value.result = clientFlowToken;

  return { status };
}

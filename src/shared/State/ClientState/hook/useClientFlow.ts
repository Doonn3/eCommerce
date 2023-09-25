import { fetchClientFlowToken } from '../../../api/refactor/fetch/fetchClientFlowToken';
import { ref } from 'vue';
import { ErrorToken } from '../../../api/refactor/model/ErrorToken';
import { Token } from '../../../api/refactor/model/Token';

type StatusType = {
  status: 'error' | 'success' | 'init';
  statusCode: number;
  messsage: string;
  result?: Token;
};

export function useClientFlow() {
  const status = ref<StatusType>({ status: 'init', messsage: '', statusCode: 0 });

  const flowToken = async () => {
    const clientFlowToken = await fetchClientFlowToken();

    if (clientFlowToken instanceof Error) {
      status.value.status = 'error';
      status.value.messsage = clientFlowToken.message;
      return status;
    }

    if (clientFlowToken instanceof ErrorToken) {
      status.value.status = 'error';
      status.value.messsage = clientFlowToken.Data.message;
      status.value.statusCode = clientFlowToken.Data.statusCode;
      return status;
    }

    status.value.status = 'success';
    status.value.messsage = 'Токен Успешно Получен';
    status.value.result = clientFlowToken;
    status.value.statusCode = 200;
    return status;
  };

  return { status, flowToken };
}

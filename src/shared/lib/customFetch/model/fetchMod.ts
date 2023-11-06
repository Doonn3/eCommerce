interface IInterceptor {
  requestInterceptor?: (request?: RequestInit) => RequestInit | undefined;
  responceInterceptor?: (responce: Response) => Promise<Response>;
}

const setupInterceptor: IInterceptor = {
  requestInterceptor: undefined,
  responceInterceptor: undefined
};

export function setupCustomFetch(interceptor: IInterceptor) {
  setupInterceptor.requestInterceptor = interceptor.requestInterceptor;
  setupInterceptor.responceInterceptor = interceptor.responceInterceptor;
}

type OptionsType = {
  input: RequestInfo;
  init?: RequestInit;
};

export async function customFetch(options: OptionsType) {
  const { input } = options;
  let { init } = options;
  try {
    if (setupInterceptor.requestInterceptor) {
      init = setupInterceptor.requestInterceptor(init);
    }

    let responce = await fetch(input, init);

    if (setupInterceptor.responceInterceptor) {
      responce = await setupInterceptor.responceInterceptor(responce);
    }

    return responce;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    throw error;
  }
}

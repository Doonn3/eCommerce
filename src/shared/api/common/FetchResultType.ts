export type FetchResultType<T> = {
  statusCode?: number;
  statusText: 'error' | 'ok';
  message: string;
  result?: T;
};

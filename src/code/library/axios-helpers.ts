import Axios, { AxiosError, AxiosResponse } from 'axios';

export function printAxiosResponse<T>(x: AxiosResponse<T>) {
  const printableAxiosResponse = {
    data: x.data,
    status: x.status,
    statusText: x.statusText,
  };

  console.log(JSON.stringify(printableAxiosResponse));
}

export function printAxiosError<T>(x: AxiosError<T>) {
  const printableAxiosError = {
    code: x.code,
    message: x.message,
    data: x.response ? x.response.data : undefined,
    status: x.response ? x.response.status : undefined,
    statusText: x.response ? x.response.statusText : undefined,
  };

  console.error(JSON.stringify(printableAxiosError));
}


export function callAxiosGet<T>(endpoint: string) {
  return Axios.get<T>(endpoint)
    .then((response: AxiosResponse<T>) => { printAxiosResponse(response); return response; })
    .catch((error: AxiosError) => { printAxiosError(error); throw new Error(error.message); });
}

export function callAxiosPost<T>(endpoint: string, body: any) {
  return Axios.post<T>(endpoint, body)
    .then((response: AxiosResponse<T>) => { printAxiosResponse(response); return response; })
    .catch((error: AxiosError) => { printAxiosError(error); throw new Error(error.message); });
}

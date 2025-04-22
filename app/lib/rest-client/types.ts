export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HttpOptions = {
  headers?: Headers;
  method: HttpMethod;
  body?: string | FormData;
};

export type HttpPostData = Record<string, unknown> | FormData;

export type HttpParams = Record<string, string>;

export type HttpResponse = {
  map(arg0: (book: any) => string): unknown;
  data?: [] | object;
  meta?: Record<string, unknown>;
  error?: Record<string, unknown> | Error;
  success?: boolean;
  message?: string;
};

import {
  HttpMethod,
  HttpOptions,
  HttpParams,
  HttpPostData,
  HttpResponse,
} from "~/lib/rest-client/types";

type RequestProps = {
  endpoint: string;
  method: HttpMethod;
  data?: HttpPostData;
  params?: HttpParams;
  headers?: Headers;
};

class RestClient {
  // Base URL for the API server
  private readonly baseURL: string;

  // Optional authorization token for making authenticated requests
  private token: string | undefined;

  /**
   * Constructor to initialize the RestClient with a base URL and an optional token.
   * @param baseURL - The base URL of the API server (required).
   * @param token - The initial authorization token (optional).
   */
  constructor(baseURL?: string, token: string | undefined = undefined) {
    if (!baseURL) {
      // Throw an error if the baseURL is not provided
      throw new Error("baseURL is required");
    }

    this.baseURL = baseURL;
    this.token = token;
  }

  /**
   * Method to set or update the authorization token.
   * @param token - The new token to be used for future requests.
   */
  setToken(token?: string) {
    this.token = token;
  }

  /**
   * General-purpose method for making API requests.
   * @param endpoint - The API endpoint to call (relative to the base URL).
   * @param method - HTTP method (e.g., GET, POST, PUT, DELETE).
   * @param data - Optional payload for POST or PUT requests.
   * @param params - Optional query parameters to append to the URL.
   * @param headers - Optional additional headers to include in the request.
   * @returns A response object with success status, data, or error information.
   */
  async request({
    endpoint,
    method,
    data,
    params = {},
    headers = new Headers(),
  }: RequestProps): Promise<HttpResponse> {
    // Construct the full URL by appending the endpoint to the base URL
    const url = new URL(`${this.baseURL}${endpoint}`);

    // Append query parameters to the URL if provided
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key]),
    );

    // Initialize default headers
    const _headers = new Headers();
    _headers.append("Content-Type", "application/json");

    // Include Authorization header if a token is set
    if (this.token) {
      _headers.append("Authorization", `Bearer ${this.token}`);
    }

    // Add any custom headers passed in the request
    for (const [key, value] of headers.entries()) {
      _headers.append(key, value);
    }

    // Configure the HTTP request options
    const options: HttpOptions = {
      method, // HTTP method (GET, POST, etc.)
      headers: _headers, // Merged headers
    };

    // Add the request body and modify headers if data is provided
    if (data) {
      // Handle JSON data
      options.body = JSON.stringify(data);

      // Handle multipart/form-data (e.g., file uploads)
      if (data instanceof FormData) {
        // Must delete Content-Type headers (https://muffinman.io/blog/uploading-files-using-fetch-multipart-form-data/)
        options.headers?.delete("Content-Type");
        options.body = data;
      }
    }

    try {
      // Make the API request using fetch
      const response = await fetch(url, options);

      // Handle non-2xx responses as errors
      if (!response.ok) {
        const { error } = await response.json();

        // Return error information
        return {
          success: false,
          error,
          message: error.message || response.statusText,
        };
      }

      // Return the successful response data
      return await response.json();
    } catch (error) {
      // Log the error and return a failure response
      console.error(`API Request Failed: ${(error as Error).message}`);

      return {
        success: false,
        error,
        message: (error as Error).message,
      } as HttpResponse;
    }
  }

  /**
   * Helper method to perform a GET request.
   * @param endpoint - The API endpoint to call.
   * @param params - Optional query parameters to include.
   * @returns The API response.
   */
  async get(endpoint: string, params?: HttpParams) {
    return this.request({ endpoint, method: "GET", params });
  }

  /**
   * Helper method to perform a POST request.
   * @param endpoint - The API endpoint to call.
   * @param data - Optional payload to send in the request body.
   * @param headers - Optional additional headers to include.
   * @returns The API response.
   */
  async post(endpoint: string, data?: HttpPostData, headers?: Headers) {
    return this.request({ endpoint, method: "POST", data, headers });
  }

  /**
   * Helper method to perform a PUT request.
   * @param endpoint - The API endpoint to call.
   * @param data - Optional payload to send in the request body.
   * @returns The API response.
   */
  async put(endpoint: string, data?: Record<string, unknown>) {
    return this.request({ endpoint, method: "PUT", data });
  }

  /**
   * Helper method to perform a DELETE request.
   * @param endpoint - The API endpoint to call.
   * @returns The API response.
   */
  async delete(endpoint: string) {
    return this.request({ endpoint, method: "DELETE" });
  }
}

export default RestClient;

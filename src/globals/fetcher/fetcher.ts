/**
 * Fetcher utility function for making HTTP requests with authentication.
 *
 * This function simplifies API calls by handling authentication tokens and request options.
 *
 * @interface FetcherParams
 * @property {string} url - The API endpoint to fetch data from.
 * @property {RequestInit} [options] - Optional configurations such as method, headers, and body.
 *
 * @param {FetcherParams} params - The request parameters, including the URL and optional fetch options.
 * @returns {Promise<any>} A promise that resolves to the JSON response, including a `status` property indicating success.
 *
 * @throws {Error} Throws an error if the response status is not OK (non-2xx HTTP status).
 *
 * @example
 * ```ts
 * const data = await fetcher({
 *   url: "https://api.example.com/data",
 *   options: {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json"
 *     },
 *     body: JSON.stringify({ key: "value" })
 *   }
 * });
 * ```
 */

// utils
import { ConfigConstants } from "../config/config";

export interface FetcherParams {
  url: string;
  options?: RequestInit; // Options with method, headers, body, etc.
}

export const fetcher = async ({ url, options }: FetcherParams) => {
  const baseUrl = ConfigConstants.webServiceName;
  // const baseUrl = import.meta.env.VITE_API_URL;
  const token = await localStorage.getItem("Token");

  // Configuración base de la solicitud
  const fetchOptions: RequestInit = {
    method: options?.method ?? "GET",
    headers: {
      Accept: "application/json",
      Authorization: token ? `Token ${token}` : "",
      ...options?.headers, // Extiende los headers personalizados
    },
    body: options?.body ? options.body : undefined,
  };

  const response = await fetch(`${baseUrl}${url}`, fetchOptions);

  const json = await response.json();
  json.status = response.ok;
  return json;
};

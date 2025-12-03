import { ConfigConstants } from "../config/config";

interface ApiData {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  credentials?: 'include' | 'same-origin' | 'omit';
  body?: any;
  form?: string;
  token?: string | null;
}

interface ApiResponse {
  status: boolean;
  [key: string]: any;
}

export const asyncSendApis = async (
  url: string,
  data: ApiData
): Promise<ApiResponse> => {
  const method = data.method ?? 'GET';

  console.log('method ', method);

  let headers: Record<string, string> = {
    'Accept': 'application/json',
    //'Content-Type': 'application/json'
  };

  if (data.token) {
    headers['Authorization'] = `Token ${data.token}`;
  }

  if (data.form) {
    headers['Content-Type'] = data.form;
  } else {
    headers['Content-Type'] = 'application/json';
  }

  console.log('headers ', headers);

  const fullUrl = ConfigConstants.webServiceName + url;
  console.log(fullUrl);

  let body: BodyInit | null = null;
  if (data.body) {
    if (data.form) {
      const formData = new FormData();
      for (let key in data.body) {
        formData.append(key, data.body[key]);
      }
      body = formData;
      console.log('Body enviado como JSON:', data.body);
    } else {
      console.log('Body enviado como JSON:', data.body);
      body = JSON.stringify(data.body);
    }
  }

  const response = await fetch(fullUrl, {
    method: method,
    headers: headers,
    body: body,
    credentials: 'omit'
  });

  const json: ApiResponse = await response.json();
  json.status = response.ok;
  return json;
};

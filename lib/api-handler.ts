// Third-party packages
import { API } from "@/app/api";
import { AxiosHeaders } from "axios";

// Custom packages

type HandlerOptions = {
  /** URL of the API */
  path: string;
  /** Query parameter of the API */
  params?: object;
  /** Payload of the API */
  data?: object;
  /** Header of the API */
  headers?: AxiosHeaders;
  /** timeout for API calls */
  timeout?: number;
};

export class ApiHandler {
  path: string;
  params?: object;
  data?: object;
  headers?: AxiosHeaders;
  timeout?: number;

  constructor(object: HandlerOptions) {
    this.path = object.path ?? "";
    this.params = object.params ?? {};
    this.data = object.data ?? undefined;
    this.headers = object.headers ?? undefined;
    this.timeout = object.timeout ?? 30000;
  }

  private fetchToken(): Promise<string> {
    return new Promise((resolve) => {
      const token: string | null = localStorage.getItem("access_token_js");
      resolve(token ? `Bearer ${token}` : "");
    });
  }

  async get() {
    try {
      const token = await this.fetchToken();
      const response = await API.get(this.path, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        timeout: this.timeout,
        params: this.params,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during GET call");
    }
  }

  async post() {
    try {
      const token = await this.fetchToken();
      const response = await API.post(this.path, this.data, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        timeout: this.timeout,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during GET call");
    }
  }

  async patch() {
    try {
      const token = await this.fetchToken();
      const response = await API.patch(this.path, this.data, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        timeout: this.timeout,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during PATCH call");
    }
  }

  async put() {
    try {
      const token = await this.fetchToken();
      const response = await API.put(this.path, this.data, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        timeout: this.timeout,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during PUT call");
    }
  }

  async delete() {
    try {
      const token = await this.fetchToken();
      const response = await API.delete(this.path, {
        headers: {
          ...this.headers,
          Authorization: token,
        },
        timeout: this.timeout,
      });
      return response;
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      } else throw new Error("Error occured during DeLETE call");
    }
  }
}

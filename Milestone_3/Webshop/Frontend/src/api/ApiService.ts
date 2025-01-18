type Headers = Record<string, string>;

class ApiService {
  private static baseUrl: string = import.meta.env.VITE_API_BASE_URL || "http://localhost";
  private static port: string = import.meta.env.VITE_API_PORT || "3000";

  private static get fullUrl(): string {
    return `${this.baseUrl}:${this.port}/api`;
  }

  private static async handleResponse(response: Response): Promise<unknown> {
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API-Error: ${response.status} - ${errorText}`);
    }
    return response.json();
  }

  public static async get(endpoint: string, headers: Headers = {}): Promise<unknown> {
    try {
      const response = await fetch(`${this.fullUrl}${endpoint}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return await this.handleResponse(response);
    } catch (error) {
      console.error("GET Request Error:", error);
      throw error;
    }
  }

  public static async post(endpoint: string, body: Record<string, unknown>, headers: Headers = {}): Promise<unknown> {
    try {
      const response = await fetch(`${this.fullUrl}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });
      return await this.handleResponse(response);
    } catch (error) {
      console.error("POST Request Error:", error);
      throw error;
    }
  }

  public static async put(endpoint: string, body: Record<string, unknown>, headers: Headers = {}): Promise<unknown> {
    try {
      const response = await fetch(`${this.fullUrl}${endpoint}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(body),
      });
      return await this.handleResponse(response);
    } catch (error) {
      console.error("PUT Request Error:", error);
      throw error;
    }
  }

  public static async delete(endpoint: string, headers: Headers = {}): Promise<unknown> {
    try {
      const response = await fetch(`${this.fullUrl}${endpoint}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return await this.handleResponse(response);
    } catch (error) {
      console.error("DELETE Request Error:", error);
      throw error;
    }
  }
}

export default ApiService;

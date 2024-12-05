import { AxiosInstance } from "axios";
import { authResponseSchema, authResponseType, loginFormType, signupFormType } from "../schemas/auth.schema";
import axiosInstance from "../api/axiosInstance";


class AuthService {
  constructor(private readonly client: AxiosInstance) {
    this.client = client;
  }

  async login(data: loginFormType): Promise<authResponseType> {
    const response = await this.client.post('/auth/login', data);
    return authResponseSchema.parse(response.data);
  }

  async signup(data: signupFormType): Promise<authResponseType> {
    const response = await this.client.post('/auth/signup', data);
    return authResponseSchema.parse(response.data);
  }

  async refresh(): Promise<authResponseType> {
    const response = await this.client.get('/token/refresh');
    return authResponseSchema.parse(response.data);
  }

  async logout(): Promise<void> {
    await this.client.get('/auth/logout');
  }
}

export default new AuthService(axiosInstance);

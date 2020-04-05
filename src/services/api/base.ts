import Vue from "vue";
import axios, { AxiosInstance, AxiosResponse } from "axios";

export class BaseApiService {
  private baseUrl = process.env.VUE_APP_API_BASE_URL;
  static _instance: BaseApiService;
  http: AxiosInstance;
  constructor() {
    this.http = axios.create({
      baseURL: this.baseUrl,
    });
    this.http.defaults.headers.common = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
      "Content-Type": "application/json",
      Accept: "application/json",
    };
  }
  static get instance() {
    if (!this._instance) {
      this._instance = new BaseApiService();
    }
    return this._instance;
  }

  read = async (resource: string = ""): Promise<AxiosResponse> => {
    return await this.http.get(resource);
  };

  update = async (resource: string, params: {}): Promise<AxiosResponse> => {
    return await this.http.put(resource, params);
  };

  create = async (resource: string = "", data: {}): Promise<AxiosResponse> => {
    return await this.http.post(resource, data);
  };

  delete = async (resource: string): Promise<AxiosResponse> => {
    return await this.http.delete(resource);
  };
}

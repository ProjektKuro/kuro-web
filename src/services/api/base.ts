import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

const baseUrl = process.env.VUE_APP_API_BASE_URL;

export class BaseApiService {
  private static _instance: BaseApiService;
  private constructor() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = baseUrl;
    Vue.axios.defaults.headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, GET, PUT, OPTIONS, DELETE",
      "Access-Control-Allow-Headers":
        "Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type",
      "Content-Type": "application/json",
      Accept: "application/json"
    };
  }
  static get instance() {
    if (!this._instance) {
      this._instance = new BaseApiService();
    }
    return this._instance;
  }

  get = async (resource: string = ""): Promise<void> =>{
    return await Vue.axios.get(resource);
  };

  post = async <T>(resource: string = "", data: {}): Promise<void> => {
    return await Vue.axios.post(resource, data);
  };

  update = async (resource:string, params: {}): Promise<void> => {
    return await Vue.axios.put(resource, params);
  };

  delete = async (resource): Promise<void> => {
    return await Vue.axios.delete(resource);
  }
}

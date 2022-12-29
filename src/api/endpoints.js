import {http} from "./index.js";
class Api{
    async request(config) {
        const {data} = await http.request(config);
        return data;
    }
}
export const api = new Api()
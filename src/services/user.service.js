import axios from "axios";
import {baseApiUrl} from '../config/api';

const instance = axios.create({
    baseURL:baseApiUrl,
    headers: {
      'content-type': 'application/json',
    },
});

export const userApi = {
    login: (mobileNumber) => {
        return instance({
            method: 'POST',
            url: `/v1/users/login`,
            data: {
                mobileNumber,
            },
        })
    },
}
  
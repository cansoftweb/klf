import axios from "axios";
import { logout, refreshToken } from "./auth";

export const BASE_URL = 'http://fclow.welldayshop.gethompy.com/api';

// axios 인스턴스 설정
const axiosApi = (url:any, options?:any) => {
    return axios.create({ baseURL: url, ...options });
};

/*
 * 로그인 api
*/

// auth axios 인스턴스 설정
const authApi = axios.create({ baseURL: BASE_URL });


// 헤더에 토큰 전송
authApi.interceptors.request.use(
	async (config: any) => {
		// console.log(config, isLoggedIn())
		
		// let storage = browser && localStorage.getItem('login')
		// let json = JSON.parse(storage)
        let json:any  = {}

		const res = localStorage.getItem('user');
		const accessToken = localStorage.getItem('accessToken');
        if (res) {
		    json = JSON.parse(res)
        }
		

		if(json?.memberId){
			let token = accessToken
			// console.log(token)
			config.headers.Authorization = `Bearer ${token}`;
		} 
			
		return config;
	},
	err => {
	  /* 
	  request를 보낼 때에 error 발생 경우, 여기서 catch 가능
	  */
	  console.log(err)
	  return Promise.reject(err);
	},
);

// 토큰 만료시 갱신
authApi.interceptors.response.use(
    async response => {
		// console.log(response)
		if(response.data.result == 'expire'){
			refreshToken()
		} else if(response.data.result == 'empty'){
			logout();
			location.href= '/'
		} else if(response.data.result == 'error'){
			logout();
			location.href= '/'
		}
		return response
	},
    error => {
		console.log(error)
      	return Promise.reject(error);
    }
);


export const instanceWithDefault = axiosApi(BASE_URL);

export const instanceWithAuth = authApi;
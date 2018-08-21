import axios from '@/libs/api.request'

//get请求参数加在params里面：params: {token}，post请求直接写为第二个参数

export const login = ({
	userName,
	password
}) => {
	const data = {
		user_id: userName,
		password
	}
	return axios.request({
		url: '/api/login/getToken', //'login',
		data,
		method: 'post'
	})
}

export const getUserInfo = (token) => {
	const data = {
		token
	}
	return axios.request({
		url: '/api/login/getAccount', //get_info',
		data,
		params: {
			token
		},
		method: 'post'
	})
}

export const logout = (token) => {
	return axios.request({
		url: 'logout',
		method: 'post'
	})
}
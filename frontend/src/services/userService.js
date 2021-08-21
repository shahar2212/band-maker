import http from './httpService';
import { apiUrl } from '../config/config.json';
import jwtDecode from 'jwt-decode'


const tokenKey = "token";

export function logout() {
    localStorage.removeItem(tokenKey);
}

export function me() {
    return http.get(`${apiUrl}/users/me`);
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}

export async function login(email, password) {
    const { data } = await http.post(`${apiUrl}/auth`, { email: email, password: password }); //can disable the double name and value, but i leave it here so i remember
    localStorage.setItem(tokenKey, data.token)
}

const ex = {
    login: login,
    getCurrentUser: getCurrentUser,
    logout: logout,
    me: me
}

export default ex;
import jwt_decode from "jwt-decode";
import { Navigate } from "react-router-dom";




export const setToken = (token) => {
    localStorage.setItem('token', token);
};

export const getToken = () => {
    return localStorage.getItem('token');
};

export const removeToken = () => {
    localStorage.removeItem('token');
};


export const isAdministrator = () => {
    const token = getToken();
    if (!token) {
        return false;
    }

    const decoded = jwt_decode(token);
    // Check asp identity role is admin.
    return decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] === 'Admin';
}
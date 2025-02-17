// import { env } from '@configs';
// import axios from 'axios';

// import {
//   ACCESS_TOKEN_KEY,
//   DEVICE_ID,
//   REFRESH_TOKEN_KEY,
//   USER_KEY,
// } from '@/constants';

// // Create an axios instance
// const axiosInstance = axios.create({
//   baseURL: env.apiUrl,
// });

// const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
// if (accessToken) {
//   axiosInstance.defaults.headers.Authorization = `Bearer ${accessToken}`;
// }

// export const clearAxiosConfig = () => {
//   delete axiosInstance.defaults.headers.Authorization;
//   delete axiosInstance.defaults.headers.common.Authorization;
// };

// export const setAuthorizationHeader = (token: string) => {
//   axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
//   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   localStorage.setItem(ACCESS_TOKEN_KEY, token);
// };

// export const setRefreshToken = (refreshToken: string) => {
//   localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
// };
// export const setDeviceId = (deviceId: string) => {
//   localStorage.setItem(DEVICE_ID, deviceId);
// };

// export const getDeviceId = () => {
//   return localStorage.getItem(DEVICE_ID) ?? '';
// };

// export const setAxiosInstanceBaseURL = (baseURL: string) => {
//   axiosInstance.defaults.baseURL = baseURL;
// };

// export const setUsersToLocalStorage = (user: any) => {
//   localStorage.setItem(USER_KEY, JSON.stringify(user));
// };

// export default axiosInstance;

export const dummy = "";

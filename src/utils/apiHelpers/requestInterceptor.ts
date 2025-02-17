// import { LOGOUT_ROUTE } from '@routes/routePaths';
// import { AxiosInstance } from 'axios';
// import { toast } from 'react-toastify';

// import { userApi } from '@/apiConfigs/users';
// import { REFRESH_TOKEN_KEY } from '@/constants';

// import axiosInstance, {
//   getDeviceId,
//   setAuthorizationHeader,
//   setRefreshToken,
// } from './apiHelpers';

// let isRefreshing = false;
// let refreshSubscribers: ((token: string, instance: AxiosInstance) => void)[] =
//   [];

// const onRefreshed = (token: string, instance: AxiosInstance) => {
//   refreshSubscribers.forEach((callback) => callback(token, instance));
//   refreshSubscribers = [];
// };

// const addSubscriber = (
//   callback: (token: string, instance: AxiosInstance) => void
// ) => {
//   refreshSubscribers.push(callback);
// };

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     if (error.response?.status === 401 && !originalRequest._retry) {
//       if (!isRefreshing) {
//         isRefreshing = true;
//         originalRequest._retry = true;

//         try {
//           const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

//           if (!refreshToken) {
//             return;
//           }
//           const deviceId = getDeviceId();
//           const config = userApi.refreshToken({ refreshToken });
//           const headers = {
//             ...(deviceId ? { 'X-Device-Id': deviceId } : {}),
//           };

//           const response = await axiosInstance({
//             ...config,
//             headers,
//           });

//           const newAccessToken = response.data.data.accessToken;

//           setAuthorizationHeader(newAccessToken);
//           setRefreshToken(response.data.data.refreshToken);

//           onRefreshed(newAccessToken, axiosInstance);
//           isRefreshing = false;

//           originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
//           if (originalRequest?.url?.includes('logout')) {
//             originalRequest.data = JSON.stringify({
//               refreshToken: response.data.data.refreshToken,
//             });
//           }
//           return axiosInstance(originalRequest); // Retry the original request
//         } catch (refreshError) {
//           isRefreshing = false;
//           toast.warn('Your session has expired. Please login again.');
//           window.location.href = `${LOGOUT_ROUTE}?reason=JWT_EXPIRED`;
//           return Promise.reject(refreshError);
//         }
//       }

//       return new Promise((resolve) => {
//         addSubscriber((token, instance) => {
//           originalRequest.headers.Authorization = `Bearer ${token}`;

//           resolve(instance(originalRequest));
//         });
//       });
//     }

//     return Promise.reject(error);
//   }
// );

// export default axiosInstance;

export const dummy = "";

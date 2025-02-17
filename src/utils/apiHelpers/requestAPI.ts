// import { LOGOUT_ROUTE } from '@routes/routePaths';
// import axios, { AxiosHeaders } from 'axios';
// import { toast } from 'react-toastify';

// import axiosInstance from './requestInterceptor';
// export type MethodType =
//   | 'get'
//   | 'post'
//   | 'delete'
//   | 'patch'
//   | 'put'
//   | 'head'
//   | 'options';

// export type ParamsType = {
//   page?: number;
//   limit?: number;
//   [key: string]: any;
// };

// export type ConfigType = {
//   url: string;
//   method: MethodType;
//   data?: any;
//   params?: ParamsType;
//   headers?: AxiosHeaders;
//   config?: {
//     showToast?: boolean;
//     signal?: AbortSignal;
//     deviceId?: string;
//   };
// };

// let showingNetworkError = false;

// const requestAPI = async (
//   config: ConfigType,
//   options?: { enablePagination?: boolean; enableMessage?: boolean }
// ): Promise<any> => {
//   try {
//     const headers = {
//       ...(config.data instanceof FormData
//         ? {
//             'Content-Type': 'multipart/form-data',
//             ...(config?.config?.deviceId
//               ? { 'X-Device-Id': config.config.deviceId }
//               : {}),
//             ...(config?.headers ? config.headers : {}),
//           }
//         : {
//             ...(config?.config?.deviceId
//               ? { 'X-Device-Id': config.config.deviceId }
//               : {}),
//             ...(config?.headers ? config.headers : {}),
//           }),
//     };
//     const result = await axiosInstance({
//       ...config,
//       ...(config.config?.signal ? { signal: config.config.signal } : {}),
//       headers,
//     });

//     if (options?.enablePagination) {
//       return {
//         data: result?.data?.data || result?.data || result,
//         pagination: result?.data?.pagination,
//         ...(options?.enableMessage
//           ? {
//               message: result?.data?.message,
//             }
//           : {}),
//       };
//     }
//     if (options?.enableMessage) {
//       return {
//         data: result?.data?.data || result?.data || result,
//         message: result?.data?.message,
//         ...(options?.enablePagination
//           ? {
//               pagination: result?.data?.pagination,
//             }
//           : {}),
//       };
//     }
//     return result?.data?.data || result?.data || result;
//   } catch (error: any) {
//     if (axios.isCancel(error)) {
//       console.error('Request canceled:', error.message);
//       return; // Do not handle canceled requests
//     }
//     if (
//       error?.response?.data?.name === 'JWT Expired' ||
//       error?.response?.status === 401
//     ) {
//       toast.warn('Your token has expired. Please login again.');
//       window.location.href = `${LOGOUT_ROUTE}?reason=JWT_EXPIRED`;
//     }

//     if (error.code === 'ERR_NETWORK') {
//       if (!showingNetworkError) {
//         toast.error('Server Connection Failed. Please try again later.');
//         showingNetworkError = true;

//         setTimeout(() => {
//           showingNetworkError = false;
//         }, 3000);
//       }
//       return;
//     }

//     if (!error.response) {
//       if (!showingNetworkError) {
//         toast.warn('Network Error: Please check your internet connection.');
//         showingNetworkError = true;

//         setTimeout(() => {
//           showingNetworkError = false;
//         }, 3000);
//       }
//       return;
//     }

//     // Handle HTTP errors
//     const status = error.response.status;
//     let message = 'On request something went wrong.';
//     if (status >= 400 && status < 500) {
//       message = error.response.data.message || error.message || 'Client Error';
//     } else if (status >= 500) {
//       message = error.response.data.message || error.message || 'Server Error';
//       toast.error(message);
//     }

//     if (status === 403) {
//       message =
//         error.response?.data?.message ||
//         error?.message ||
//         'Your access is revoked.';
//       toast.error(message);

//       // Redirect after a short delay to ensure the toast is visible
//       setTimeout(() => {
//         window.location.href = '/logout';
//       }, 2000); // 2-second delay
//     }
//     // Rethrow the error
//     throw new Error(message);
//   }
// };

// export default requestAPI;

export const dummy = "";

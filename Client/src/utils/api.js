import axios from 'axios';

const isLocalHost = ['localhost', '127.0.0.1'].includes(window.location.hostname);
const API_BASE_URL = isLocalHost
    ? 'http://localhost:5000'
    : 'https://ikigai4teens.onrender.com';

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

// Add a response interceptor for consistent error handling
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Clear local storage and redirect to login if unauthorized
            localStorage.clear();
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default api;

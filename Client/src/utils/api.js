import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000',
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
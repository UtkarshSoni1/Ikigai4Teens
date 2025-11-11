const axios = require('axios');

const api = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});

async function testAuth() {
    try {
        // Try to login
        const loginResponse = await api.post('/login', {
            email: "test@test.com",
            password: "test123"
        });
        console.log('Login response:', loginResponse.data);

        // Try to access chat
        const chatResponse = await api.post('/chat', {
            message: "Hello"
        });
        console.log('Chat response:', chatResponse.data);
    } catch (error) {
        console.error('Error:', {
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
    }
}

testAuth();
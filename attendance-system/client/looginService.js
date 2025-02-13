export async function login(username, password) {
    const API_URL = 'http://localhost:8080/api/login';

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.token) {
                return data;
            } else {
                throw new Error('Invalid credentials');
            }
        } else {

            const errorData = await response.json();
            throw new Error(errorData.error || 'Login failed');
        }
    } catch (error) {
        throw new Error('Login failed: ' + error.message);
    }
}
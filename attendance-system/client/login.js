document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const user = await login(username, password);

        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = 'home.html'; //Redirect to home page
        } else {

            alert('Invalid username or password');
        }
    } catch (error) {
        alert('Login failed: ' + error.message);
    }
});
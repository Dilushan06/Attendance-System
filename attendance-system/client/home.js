const user = JSON.parse(localStorage.getItem('user'));

if (!user) {
    window.location.href = 'login.html';
} else {
    document.getElementById('username').textContent = user.username;
}


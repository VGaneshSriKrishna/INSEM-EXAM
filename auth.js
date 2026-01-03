document.addEventListener('DOMContentLoaded', () => {

    // Check if we are on the login page
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            alert('Login successful! (This is a demo)');
            
            // Redirect to the main resource library
            window.location.href = 'index.html'; 
        });
    }

    // Check if we are on the signup page
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Passwords do not match. Please try again.');
            } else {
                alert('Account created successfully! (This is a demo)');
                
                window.location.href = 'login.html';
            }
        });
    }

});
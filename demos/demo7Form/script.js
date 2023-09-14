
function login() {
    // const loginForm = document.forms['loginForm'];
    const loginForm = document.loginForm;
    console.log(loginForm);
    if (loginForm.username.value.trim() === '') {
        console.log('Wrong name');
        return;
    }
    if (loginForm.password.value.length < 6) {
        console.log('Wrong password');
        return;
    }
    loginForm.submit();
    console.log('OK');
}
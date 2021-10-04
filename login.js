document.getElementById('submit-button').addEventListener('click', function () {
    // console.log('Submit button is clicked.');
    // user email:
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;

    // user password:
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;


    if (userEmail == 'dnaimurrahaman@gmail.com' && userPassword == '12345Naim') {
        window.location.href = 'bank-site.html';
    }
});
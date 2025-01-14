function register(){

    var firstname = document.getElementById('firstname');
    var lastname = document.getElementById('lastname');
    var email = document.getElementById('email');
    var createpw = document.getElementById('createpw');
    var confmpw = document.getElementById('confmpw');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(firstname.value.length == 0 || lastname.value.length == 0){
        alert('Please fill in your name');

    }else if(email.value.length == 0){
        alert('Please enter a mail id');

    }else if(createpw.value.length == 0){
        alert('Please create a password');

    }else if(confmpw.value.length == 0){
        alert('Please enter your password again');

    }else if(firstname.value.length == 0 && lastname.value.length == 0 && createpw.value.length == 0 && confmpw.value.length == 0 && email.value.length == 0){
        alert('Please fill all the above details');

    }else if(createpw.value.length < 8 || confmpw.value.length < 8){
        alert('Minimum 8 characters in password');

    }else if(!createpw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!createpw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!createpw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{
        localStorage.setItem('firstname', firstname.value);
        localStorage.setItem('lastname', lastname.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('creatpw', createpw.value);
        localStorage.setItem('confmpw', confmpw.value);
        var login = confirm('Your account has been created');
        if(login == true){
            location.replace("../login page/login-page.html");
        }
    }
}

//checking
// function check(){
//     var storedName = localStorage.getItem('firstname');
//     var storedName = localStorage.getItem('lastname');
//     var storedName = localStorage.getItem('email');
//     var storedPw = localStorage.getItem('confmpw');

//     var userName = document.getElementById('userName');
//     var userPw = document.getElementById('userPw');
//     var userRemember = document.getElementById("rememberMe");

//     if(userName.value == storedName && userPw.value == storedPw){
//         alert('You are logged in.');
//     }else{
//         alert('Error on login');
//     }
// }
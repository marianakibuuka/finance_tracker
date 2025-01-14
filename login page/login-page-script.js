function check(){
    var storedName = localStorage.getItem('email');
    var storedPw = localStorage.getItem('confmpw');

    var userName = document.getElementById('email');
    var userPw = document.getElementById('pw');

    if(userName.value == storedName && userPw.value == storedPw){
        var login = confirm('You are logged in.');
        if(login){
            location.replace("../Dashboard/Dashboard.html")
        }
    }else{
        alert('Enter correct details or do signup');
    }
}
let username = document.getElementById('username');
let password = document.getElementById('password');
    function loginVerify(callback){
        $('form').on('submit',function(check){
            check.preventDefault();
            callback();
        });
    }

    loginVerify(function(){
        if(username.value == "admin" && password.value == "12345")
        {
            window.location.href = "./main.html";
        }
        else{
            alert('Wrong Username or Password.')
        }
    });
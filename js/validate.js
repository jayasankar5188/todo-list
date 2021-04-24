function ValidateName()
{
    var name= document.getElementById('username');
    
    
    
    

var letters = /^[A-Za-z]+$/;

if(name.value.match(letters))
{
    document.getElementById('userdisplay').style.display='none';   
return true;
}
else
{
document.getElementById('userdisplay').style.display='block';
name.focus();
return false;
}
}
function CheckPassword() 
{ 
    var password = document.getElementById('password');
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/;
if(password.value.match(passw)) 
{ 
    document.getElementById('passdisplay').style.display='none';
return true;
}
else
{ 
    document.getElementById('passdisplay').style.display='block';
return false;
}
}
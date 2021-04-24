let num1= document.getElementById("test11");


function todo_checked(){
    
    return new Promise(function(resolve,reject){
    var count = 0;
    var check = document.querySelectorAll('input[type="checkbox"]:enabled');
    for (var checkbox of check) {  
        if(checkbox.checked)
        {
            count+=1;
        }
      }  
        if(count == 5)
        {
            resolve("Congrats. 5 Tasks have been Successfully Completed!")
        }
        else
        {
        reject("Has not reached 5")
        }
   });
    }
    


num1.addEventListener("change", Test);
    function Test(){
       todo_checked().then(function (list_value){
            setTimeout(function(){ alert(list_value); }, 50);
       })
       .catch(function(list_value){
           console.log(list_value);
       })
        
   }
function ajax(){
    console.log('add function');
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200)
        {
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                output+= "<li>"+ response[i].title +"</li>"+"<input id='checklist' type='checkbox'";
                
                if(response[i].completed == true){
                    output+="checked disabled = true>";
                }
                else{
                    output+= ">";
                }
                
            }
            document.getElementById("test11").innerHTML = output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function handleSubmit(){
    console.log("calling handle function");
    // e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let login ={username:username, password:password}
    var test = JSON.stringify(login);
    console.log(test);
let xhttp = new XMLHttpRequest();

xhttp.open("POST","http://localhost:8080/project1/login");

xhttp.send(test);

xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        console.log(xhttp.responseText);
       
        sessionStorage.setItem("user",xhttp.responseText);

        window.location.href="Employee.html";
       
        


    }else if(this.status == 0){
        alert("username and password mismatched");
        console.log("username and password mismatched");
        console.log("readyState: "+ this.readyState);
        console.log("this.status: "+ this.status);
    }
    
    else{
        console.log("readyState: "+ this.readyState);
         console.log("this.status: "+ this.status);
    }
    
}

}

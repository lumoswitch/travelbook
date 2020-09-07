
function closeLoginForm(){
    $('#loginModal').modal('hide');
}

function renderLogin(){
    $('#container').append(loginBody);
    $('#loginModal').modal('show'); 
}

function loginForm() {
    xmlhttp = new XMLHttpRequest();
    var username=document.getElementById("username_log").value;
    var password=document.getElementById("pwd_log").value;
    console.log("login: "+username+" password: "+password);
    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 200");
            mytopTen(myres.Username);
            document.getElementById("container").innerHTML =string_userProfile;
            document.getElementsByClassName("navbar-header")[0].innerHTML =log_sidenav;
            document.getElementsByClassName("navbar-right")[0].innerHTML =user_avatar;
            document.getElementById("userUsername").innerHTML =myres.Username;
            document.getElementById("logged-in-name").innerHTML =myres.Username;
            document.getElementById("logged-in-name").value =myres.Username;
            document.getElementById("userEmail").innerHTML =myres.Email;
            document.getElementById("userName").innerHTML =myres.Name;
            document.getElementById("userSurname").innerHTML =myres.Surname;
            document.getElementById("userBirth").innerHTML =myres.Birthday;
            document.getElementById("userGender").innerHTML =myres.Sex;
            document.getElementById("userCountry").innerHTML =myres.Countries;
            document.getElementById("userCity").innerHTML =myres.City;
            document.getElementById("userAddress").innerHTML =myres.Address;
            document.getElementById("userJob").innerHTML =myres.Job;
            document.getElementById("userInterests").innerHTML =myres.Interests;
            document.getElementById("userInfo").innerHTML =myres.Info;
        }
        else if(this.readyState === 4 && this.status === 400){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 400");
            document.getElementById("error_log").innerHTML =  "<h5>error "+myres.err+" is invalid</h5>";
        }
    };
    var form_var = {
        "username" : username ,
        "password" : password
    };
    
    user_data=JSON.stringify(form_var);
    xmlhttp.open('POST', '/logbook/UserLogin',true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    xmlhttp.send(user_data);
    
    closeLoginForm();
}
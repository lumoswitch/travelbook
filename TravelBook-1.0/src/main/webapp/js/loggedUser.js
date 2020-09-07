function editProfile(){
    
    renderRegister();
    openForm();
    document.getElementById("registerTitle").innerHTML = "Edit Profile";
    document.getElementById("submit").innerHTML = "Save";
    document.getElementById("submit").onclick = editForm;
    document.getElementById("helpMsg").style.display ="none";
    var username = {
        "username": document.getElementById("logged-in-name").value
    };
    ajaxRequest("POST", "/logbook/findUser", responseFromFindUserServlet, JSON.stringify(username));
}

function openNav() {
    $('#container').append(logged_menu);
    document.getElementById("mySidenav").style.width = "250px";
}
  

function display_users(){
    $('#container').html(string_usersInPlatform); 
    ajaxRequest("POST", "/logbook/displayUsers",responseFromDisplayUsersServlet,null);
}
 
function editForm(){
    
    var userInputValues = {
        "name":  document.getElementById("name").value,
        "surname":  document.getElementById("surname").value,
        "username":  document.getElementById("username").value,
        "avatar": $('input[name="tab"]:checked').val(),
        "email":  document.getElementById("email").value,
        "password":  document.getElementById("pwd").value,
        "rpt_password":  document.getElementById("rpt-pwd").value,
        "gender": $('input[name="gender"]:checked').val(),
        "dateOfBirth":  document.getElementById("birth").value,
        "country":  document.getElementById("country").value,
        "city":  document.getElementById("city").value,
        "address":  document.getElementById("address").value,
        "job":  document.getElementById("job").value,
        "interests":  document.getElementById("interests").value,
        "info":  document.getElementById("info").value,
    };
    var myJSON = JSON.stringify(userInputValues);
    console.log(myJSON);
    ajaxRequest("POST", "/logbook/editUser", responseFromEditServlet, myJSON);
}

function deleteAccount(){
    $('#container').append(deleteBody);   
    $('#deleteModal').modal('show');
}

function delete_user(){
    var logged_user = {
        "username": document.getElementById("logged-in-name").value
    };
    // console.log(logged_user.username);
    var myJSON = JSON.stringify(logged_user);
    ajaxRequest("POST", "/logbook/deleteAccount",responseFromDeleteAccountServlet,myJSON);
}

function showProfile(){
    $('#container').html(string_userProfile);
    $('.navbar-header').html(log_sidenav);
    $('.navbar-right').html(user_avatar);
    
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 200");
            document.getElementById("userUsername").innerHTML =myres.username;
            document.getElementById("logged-in-name").innerHTML =myres.username;
            document.getElementById("logged-in-name").value =myres.username;
            document.getElementById("userEmail").innerHTML =myres.email;
            document.getElementById("userName").innerHTML =myres.name;
            document.getElementById("userSurname").innerHTML =myres.surname;
            document.getElementById("userBirth").innerHTML =myres.birthdate;
            document.getElementById("userGender").innerHTML =myres.sex;
            document.getElementById("userCountry").innerHTML =myres.countries;
            document.getElementById("userCity").innerHTML =myres.city;
            document.getElementById("userAddress").innerHTML =myres.address;
            document.getElementById("userJob").innerHTML =myres.job;
            document.getElementById("userInterests").innerHTML =myres.hobby;
            document.getElementById("userInfo").innerHTML =myres.info;
            mytopTen(document.getElementById("logged-in-name").value);
        }
        else if(this.readyState === 4 && this.status === 400){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 400");
            // document.getElementById("alert_msg").innerHTML = "<h1> "+ myres.err +" </h1>";
        }
    };
        

    xmlhttp.open('POST', '/logbook/SeeInfo',true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    xmlhttp.send(null);
    console.log("show Prof");
}

function logout(){
    var logged_user = {
        "username": document.getElementById("logged-in-name").value
    };
    var myJSON = JSON.stringify(logged_user);
    ajaxRequest("POST", "/logbook/logout", responseFromLogoutServlet, myJSON);
}

function display_user(i){
    
    var username = {
        "username": i
    };
    console.log(JSON.stringify(username));
    ajaxRequest("POST", "/logbook/findUser", responseFromDisplayUserServlet, JSON.stringify(username));
}
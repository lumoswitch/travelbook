'use strict';
 
function findTime(seconds) {
    var days,mins,hours,months,years,type,times;
  
    days = Math.floor(seconds / 86400);
    mins = Math.ceil(seconds / 60);
    hours = Math.floor(seconds / 3600);
    months = Math.floor(seconds / 2592000);
    years = Math.floor(seconds / 31536000);

   
    if (days >= 1) {
        times = days;
        type = 'day';
    }else if( mins >= 1){
        times = mins;
        type = 'minute';
    }else if(hours >= 1){
        times = hours;
        type = 'hour';
    }else if(months >= 1){
        times = months;
        type = 'month';
    }else if(years >= 1){
        times = years;
        type = 'year';
    }
    
    return {
        time: times,
        typeOfTime: type
    };
}
  
function timeAgo(date) {
    var seconds = Math.floor((new Date() - new Date(date)) / 1000);
    var duration = findTime(seconds);
    var suffix = (duration.time > 1 || duration.time === 0) ? 's' : '';
    return duration.time + ' ' + duration.typeOfTime + suffix + " ago";
}

function ajaxRequest(method,uri,handler,inputs){

    var xhttp = new XMLHttpRequest();
    
    xhttp.onreadystatechange = function () { if(xhttp.readyState==4){ handler(xhttp); }};    
    xhttp.open(method, uri, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(inputs);

}

function responseFromRegisterServlet(xhttp) {
    $('#container').html(string_userProfile);
    $('.navbar-header').html(log_sidenav);
    $('.navbar-right').html(user_avatar);
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        displayAfterLoginRegister(jfile);
    }
}

function responseFromIfExistsServlet(xhttp) {
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        if (jfile.Message === 'Username already exists') {
            document.getElementById("warning3").innerHTML = jfile.Message;
        }else if (jfile.Message === 'Email already exists') {
            document.getElementById("warning4").innerHTML = jfile.Message;
        }else {
            document.getElementById("warning3").innerHTML = " ";
            document.getElementById("warning4").innerHTML = " ";
        }
    }
}


function responseFromLoginServlet(xhttp) {
    $('#container').html(string_userProfile);
    $('.navbar-header').html(log_sidenav);
    $('.navbar-right').html(user_avatar);
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        if (jfile.Message === 'Welcome back') {
            $('#login').modal('hide');
            mytopTen(jfile.Username);
            displayAfterLoginRegister(jfile);
        }else if (jfile.Message === 'Wrong username or password') {
            document.getElementById("log_status").innerHTML = "Login failed. " + jfile.Message;
        }else{
            document.getElementById("log_status").innerHTML = " ";
        }
    }
}

function responseFromEditServlet(xhttp) {
    $("#register").modal('hide');
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        if (jfile.Message === 'Update failed') {
            console.log(jfile.Message);
        }else if (jfile.Message === 'Οι αλλαγές σας αποθηκεύτηκαν με επιτυχία') {
            console.log(jfile.Message);
            displayAfterLoginRegister(jfile);
        }
    }
}

function responseFromDisplayUsersServlet(xhttp) {
    if (xhttp.status == 200) {
        
        var obj = JSON.parse(xhttp.responseText);
        console.log(obj); 
       
        var table = document.getElementById("usersTableBody");
        var row = table.insertRow(0);
        for(var i=0 ; i<obj.length; i++){
            var row = table.insertRow(i);
           
            row.insertCell(0).innerHTML = obj[i].userID;
            row.insertCell(1).innerHTML = "<a href='#' onclick='display_user(" + JSON.stringify(obj[i].userName) + ");'>" + obj[i].userName + "</a>";
            row.insertCell(2).innerHTML = obj[i].firstName + " " + obj[i].lastName;
            row.insertCell(3).innerHTML = obj[i].email;
            row.insertCell(4).innerHTML = obj[i].gender;
            row.insertCell(5).innerHTML = (obj[i].birthDate).slice(0, 10);
            row.insertCell(6).innerHTML = obj[i].address + " , " + obj[i].town + " " + obj[i].country;
            row.insertCell(7).innerHTML = obj[i].occupation;
            row.insertCell(8).innerHTML = obj[i].interests;
            row.insertCell(9).innerHTML = obj[i].info;
            row.insertCell(10).innerHTML = obj[i].registeredSince;
            
            alert = function () {};
        }
               
    }
}

function responseFromDeleteAccountServlet(xhttp) {
    if (xhttp.status == 200) {
        console.log(xhttp.responseText);
        $('#deleteModal').modal('hide');
        ajaxRequest("POST", "/logbook/logout", responseFromLogoutServlet, null);
        
    }
}

function responseFromLogoutServlet(xhttp){
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        if (jfile.Message === 'You are successfully logged out') {
            $('#container').html(banner + string_first_page_informations + string_footer);
            $('.navbar-header').html(logo);
            $('.navbar-right').html(buttons_menu);
        }
    }
}

function responseFromSessionServlet(xhttp){
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        if (jfile.Message === 'Session exists') {
            $('#container').html(string_userProfile);
            $('.navbar-header').html(log_sidenav);
            $('.navbar-right').html(user_avatar);
            console.log(jfile.Message);
            mytopTen(jfile.Username);
            document.getElementById("logged-in-name").innerHTML = jfile.Username;
            document.getElementById("logged-in-name").value = jfile.Username;
            displayAfterLoginRegister(jfile);
        }else{
            console.log(jfile.Message);
        }
    }
}

function responseFromFindUserServlet(xhttp){
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        editFormData(jfile);
    }
}



function responseFromDisplayUserServlet(xhttp){
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        mytopTen(jfile.Username);
        $('#container').html(string_userProfile);
        displayAfterLoginRegister(jfile);
    }
}




function responseFromPlatoformTopssServlet(xhttp) {
    if (xhttp.status == 200) {
        var obj = JSON.parse(xhttp.responseText);
        console.log(obj);
        
        $('#container').append(" <button id='add_post' onclick='renderPost();' type='button' class='btn btn-default' ><span class='glyphicon glyphicon-plus'></span>Add post</button>");
        $('#postOne').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[0]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> " +  obj[0].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[0].createdAt.toString())  + "</a>");
        $('#postTwo').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[1]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[1].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[1].createdAt.toString())  + "</a>");
        $('#postThree').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[2]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[2].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[2].createdAt.toString())  + "</a>");
        $('#postFour').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[3]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[3].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[3].createdAt.toString())  + "</a>");
        $('#postFive').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[4]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[4].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[4].createdAt.toString())  + "</a>");
        $('#postSix').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[5]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[5].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[5].createdAt.toString())  + "</a>");
        $('#postSeven').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[6]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[6].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[6].createdAt.toString())  + "</a>");
        $('#postEight').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[7]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[7].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[7].createdAt.toString())  + "</a>");
        $('#postNine').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[8]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[8].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[8].createdAt.toString())  + "</a>");
        $('#postTen').append("<a href='#' onclick='viewPost(" + JSON.stringify(obj[9]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> "  + obj[9].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[9].createdAt.toString())  + "</a>");
        show_img_add_link(obj);
    }
}

function responseTopTenUserServlet(xhttp) {
    var userTop10 = '<div id="user_recent_posts"><h3>' + document.getElementById('userUsername').innerHTML + '\'s Top-10 recent posts</h3></div>';
    $('#container').append(userTop10);
    if (xhttp.status == 200) {
        var obj = JSON.parse(xhttp.responseText);
        console.log(obj);
        if(document.getElementById("logged-in-name").value == document.getElementById('userUsername').innerHTML){
            $('#container').append(" <button id='add_post' onclick='renderPost();' type='button' class='btn btn-default' ><span class='glyphicon glyphicon-plus'></span>Add post</button>");
        }
        if(obj.length == 0){
            $('#user_recent_posts').append("User has no posts yet");
        }else{
            for(var i=0 ; i<obj.length; i++){
                if(document.getElementById("logged-in-name").value === obj[i].userName){
                    $('#user_recent_posts').append("\
                    <div class='gallery'>\
                        <a onclick= 'viewPost(" + JSON.stringify(obj[i]) + ");' data-lightbox='mygallery'><img id='img"+i+"'></a>\
                        <div class='desc'>\
                            <a href='#' onclick='viewPost(" + JSON.stringify(obj[i]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> " + obj[i].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[i].createdAt.toString()) + "</a><br>\
                            <button type='button' class='btn btn-default' onclick='modify_post(" + JSON.stringify(obj[i]) + ");'>\
                            <span class='glyphicon glyphicon-pencil'></span></button>\
                            <button type='button' class='btn btn-default' onclick='delete_post(" + JSON.stringify(obj[i]) + ");'><span class='glyphicon glyphicon-trash'></span></button>\
                        </div>\
                    </div> ");
                }else{
                    $('#user_recent_posts').append("<div class='gallery'><a onclick= href='images/index.jpg' data-lightbox='mygallery'><img src='images/index.jpg' ></a>\
                    <div class='desc'>\
                    <a href='#' onclick='viewPost(" + JSON.stringify(obj[i]) + ");'>" + "<span class='glyphicon glyphicon-user'></span> " + obj[i].userName + "<br>" + "<span class='glyphicon glyphicon-dashboard'></span> " + timeAgo(obj[i].createdAt.toString()) + "</a>\
                    </div></div>");
                }
            }
            
        }
        show_img(obj);
        
    }
}

function responseDeletePostServlet(xhttp){
    if (xhttp.status == 200) {
        var jfile = JSON.parse(xhttp.responseText);
        console.log(jfile);
        $('#container').append(deletePost);
        document.getElementById('closeM').onclick = function() {display_user(document.getElementById('logged-in-name').value);$('#deletePostModal').modal('hide');};
        $('#deletePostModal').modal('show');          
    }
}

function displayAfterLoginRegister(jfile){

    // document.getElementById("msg").innerHTML = jfile.Message;
    // document.getElementById("logged-in-name").innerHTML = jfile.Username;
    // document.getElementById("logged-in-name").value = jfile.Username;
    document.getElementById("userName").innerHTML = jfile.Name;
    document.getElementById("userSurname").innerHTML = jfile.Surname;
    document.getElementById("userUsername").innerHTML = jfile.Username;
    document.getElementById("userEmail").innerHTML = jfile.Email;
    document.getElementById("userGender").innerHTML = jfile.Gender;
    document.getElementById("userBirth").innerHTML = jfile.Birth.slice(0, 10);
    document.getElementById("userCountry").innerHTML = jfile.Country;
    document.getElementById("userCity").innerHTML = jfile.City;
    document.getElementById("userAddress").innerHTML = jfile.Address;
    document.getElementById("userJob").innerHTML = jfile.Job;
    document.getElementById("userInterests").innerHTML = jfile.Interests.slice(0, 10);
    document.getElementById("userInfo").innerHTML = jfile.Info.slice(0, 30);
}

function editFormData(jfile){
    console.log(jfile.Name);
    document.getElementById("name").value = jfile.Name;
    document.getElementById("surname").value = jfile.Surname;
    document.getElementById("username").value = jfile.Username;
    document.getElementById("email").value = jfile.Email;

    if(jfile.Gender === 'Male'){
        document.getElementById('male').checked = true;
    }else if(jfile.Gender === 'Female'){
        document.getElementById('female').checked = true;
    }else if(jfile.Gender === 'Other'){
        document.getElementById('other').checked = true;
    }

    document.getElementById("birth").value = jfile.Birth.slice(0, 10);
    document.getElementById("country").value = jfile.Country;
    document.getElementById("city").value = jfile.City;
    document.getElementById("address").value = jfile.Address;
    document.getElementById("job").value = jfile.Job;
    document.getElementById("interests").value = jfile.Interests;
    document.getElementById("info").value = jfile.Info;
    document.getElementById("pwd").value = jfile.Password;
    document.getElementById("rpt-pwd").value = jfile.Password;
}

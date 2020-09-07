
function viewPost(post){

    $('#container').html(postTitlle + postDiv);
    $('#displayPost').append(postBody);
    $('#post_title').html("Posted by: " + post.userName + " at " + post.createdAt);
    $('#subject').html(post.description);
    if(post.userName === document.getElementById('logged-in-name').value){
        document.getElementById("cancel").onclick = function() {display_user(post.userName);};
    }
   
    if(!(post.imageBase64 == ""||post.imageBase64 == "null")){
        $("#pic").attr("src", post.imageBase64);
        var canvas = document.getElementById("canvasImg");
        var ctx = canvas.getContext("2d");
        var image = new Image();
            image.onload = function() {
            ctx.drawImage(post.imageBase64.toString(), 0, 0);
        };                     
    }else if(!(post.imageURL == ""||post.imageURL == "null")){
        $("#pic").attr("src", post.imageURL);
    // }else if(!(post.resourceURL == ""||post.resourceURL  == "null")){
    //     $("#pic").attr("src", post.resourceURL);
    }else{
        $('#renderImg').html("<a><img src='images/index.jpg' ></a>");
    }
    
    var current_pos = "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat="+post.latitude+"&lon="+post.longitude;  
    ajaxRequest("GET",current_pos,findPostLoc,null); 
}

function show_img(post_arr){
    for(var i=0 ; i<post_arr.length; i++){
        var post =post_arr[i];
        if(!(post.imageBase64 == ""||post.imageBase64 == "null")){
            $("#img"+i+"").attr("src", post.imageBase64);
        }else if(!(post.imageURL == ""||post.imageURL == "null")){
            $("#img"+i+"").attr("src", post.imageURL);
        // }else if(!(post.resourceURL == ""||post.imageURL == "null")){
        //     $("#img"+i+"").attr("src", post.resourceURL);
        }else{
            $("#img"+i+"").attr("src", 'images/index.jpg');
        }
        console.log('Adding image');
    }
}

function show_img_add_link(post_arr){
    for(var i=0 ; i<post_arr.length; i++){
        var post =post_arr[i];
        if(!(post.imageBase64 == ""||post.imageBase64 == "null")){
            $("#img"+i+"").attr("src", post.imageBase64);
        }else if(!(post.imageURL == ""||post.imageURL == "null")){
            $("#img"+i+"").attr("src", post.imageURL);
        }else if(!(post.resourceURL == ""||post.imageURL == "null")){
            $("#img"+i+"").attr("src", post.resourceURL);
        }else{
            $("#img"+i+"").attr("src", 'images/index.jpg');
        }
        document.getElementById("#ref"+i+"").onclick= function(){viewPost(post);}
        console.log('Adding image');
    }
}

function findPostLoc(xhttp){
    if (xhttp.status == 200) {
        var obj = JSON.parse(xhttp.responseText);
        var address = obj.address.road + ", " + obj.address.city + " " + obj.address.country;
        document.getElementById("place").value = address;       
        lat1 = obj.lat.toString();
        lon1 = obj.lon.toString();
        document.getElementById('show_in_map').onclick = function() { show_map(parseFloat(lon1), parseFloat(lat1)); };
    }    
}

function modify_post(post){
    $('#container').html(modify_headerForm + modify_postForm);
    $('#mod_post').append(modify_postFormBody);
    //console.log(post.postID);
    hide();
    document.getElementById("cancel").onclick = function() {display_user(document.getElementById('logged-in-name').value);};
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            console.log("checked username status 200");
            var myres= JSON.parse(this.responseText);
            document.getElementById("subject").innerHTML=myres.subject;
            document.getElementById("id").value=post.postID;
            console.log(myres.id);
        }
        else if(this.readyState === 4 && this.status === 400){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 400");
            document.getElementById("error_post").innerHTML = "<h1> "+ myres.err +" </h1>";
        }
    };
   
    var post_info={
        "id":post.postID.toString()
    } ;  

    console.log(post_info);
    user_info=JSON.stringify(post_info);
    xmlhttp.open('POST', '/logbook/modifyPost',true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    xmlhttp.send(user_info);
}

function submitModifyPost(){
    xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200){
            console.log("checked username status 200");
            $('#container').append(editBody);
            document.getElementById('closeM').onclick = function() {display_user(document.getElementById('logged-in-name').value);$('#editModal').modal('hide');};
            $('#editModal').modal('show');

        }
        else if(this.readyState === 4 && this.status === 400){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 400");
            document.getElementById("error_post").innerHTML = "<h1> "+ myres.err +" </h1>";
        }
    };
    var id=document.getElementById("id").value;
    var picture;
    if($('input[name="img_src"]:checked').val()==="url")picture=document.getElementById("imgURL").value;
    else if($('input[name="img_src"]:checked').val()==="upload")picture= document.getElementById("uploadID").value;
    else if($('input[name="img_src"]:checked').val()==="caption")picture= document.getElementById("picCap").value;
    //=================================
    var post_info={
        "id":id,
        "img source" : $('input[name="img_src"]:checked').val(),
        "subject":document.getElementById("subject").value,
        "picture":picture,
    } ;

    console.log(post_info);
    user_info=JSON.stringify(post_info);
    xmlhttp.open('POST', '/logbook/modifyPostsubmit',true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    xmlhttp.send(user_info);
}

function topTen(){
    $('#container').html(top10);
    $('.navbar-header').html(log_sidenav);
    $('.navbar-right').html(user_avatar);
    document.getElementById("recent_posts").style.left = "0%"; 
    ajaxRequest("POST", "/logbook/TopTenOfPlatform",responseFromPlatoformTopssServlet,null);
}

function mytopTen(username){
    var logged_user = {
        "username": username
    };
    var myJSON = JSON.stringify(logged_user);
    console.log(myJSON);
    ajaxRequest("POST", "/logbook/TopTenOfUser",responseTopTenUserServlet,myJSON);
}

function delete_post(post){
    var post_info={
        "id":post.postID.toString()
    } ; 
    ajaxRequest("POST", "/logbook/deletePost",responseDeletePostServlet,JSON.stringify(post_info));
}
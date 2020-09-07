var glob_lat;
var glob_lon;

function renderPost(){
    $('#container').html(headerForm + postForm + string_userProfile);
    //=========================
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

            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(function(position) {
                  geolocation(position.coords.latitude, position.coords.longitude)
              });
            }
        }
        else if(this.readyState === 4 && this.status === 400){
            var myres= JSON.parse(this.responseText);
            console.log("checked username status 400");
            document.getElementById("alert_msg").innerHTML = "<h1> "+ myres.err +" </h1>";
        }
    };
        

    xmlhttp.open('POST', '/logbook/SeeInfo',true);
    xmlhttp.setRequestHeader("Content-Type","application/json");
    xmlhttp.send(null);
    //=========================
    $('#create_post').append(postFormBody);
    hide();
    document.getElementById("cancel").onclick = function() {display_user(document.getElementById('logged-in-name').value);};

}

function submitPost(){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
     
      if(this.readyState === 4 && this.status === 200){
        console.log("checked username status 200");
        var myres= JSON.parse(this.responseText);
        $('#container').append(createPost);
        document.getElementById('closeM').onclick = function() {display_user(document.getElementById('logged-in-name').value);$('#createModal').modal('hide');};
        $('#createModal').modal('show');
      }
      else if(this.readyState === 4 && this.status === 400){
          var myres= JSON.parse(this.responseText);
          console.log("checked username status 400");
          document.getElementById("error_post").innerHTML = "<h1> "+ myres.err +" </h1>";
      }
  };
  var picture;
  //=================================
  if($('input[name="img_src"]:checked').val()==="url")picture=document.getElementById("imgURL").value;
  else if($('input[name="img_src"]:checked').val()==="upload")picture= document.getElementById("uploadID").value;
  else if($('input[name="img_src"]:checked').val()==="caption")picture= document.getElementById("picCap").value;
  //=================================
  var post_info={
    "img source" : $('input[name="img_src"]:checked').val(),
    "subject":document.getElementById("subject").value,
    "picture":picture,
    "lon":glob_lon,
    "lat":glob_lat
  } ;  

  console.log(post_info);
  user_info=JSON.stringify(post_info);
  xmlhttp.open('POST', '/logbook/userPost',true);
  xmlhttp.setRequestHeader("Content-Type","application/json");
  xmlhttp.send(user_info);
}

function geolocation(lat, lon) {
  glob_lat=lat;
  glob_lon=lon;
}


function imgURL(){
  var img_url = '<input type="text" id="imgURL" name="imgURL" placeholder="Enter image URL..."/>';
  $('#img_options').html(img_url);
}

function imgUpload(){
  var upload_img = '<input type="file" id="pic" name="pic" accept="image/*"/>'
  $('#img_options').html(upload_img);
  document.getElementById('pic').addEventListener('change', handleFileSelect, false);
}

function imgCaption(){
  show('vidcanv');
};

function upload_img(){
  var caption_img = '<input type="text" id="picCap" name="picCap" />'
  $('#img_options').append(caption_img);
  var img64 = 'data:image/jpeg;base64,' + canvas.toDataURL('image/jpeg', 1.0).split(',')[1];
  console.log(img64);
  var post_info={
    "img source" : img64,
    "subject":document.getElementById("subject").value,
    "picture":img64,
    "lon":glob_lon,
    "lat":glob_lat
  } ;
  console.log(post_info.picture);
  document.getElementById('picCap').value = img64;
  console.log(document.getElementById('picCap').value);

}


function handleFileSelect(evt) {
  var f = evt.target.files[0]; // FileList object
  var reader = new FileReader();
  // Closure to capture the file information.
  reader.onload = (function(theFile) {
    return function(e) {
      var binaryData = e.target.result;
      //Converting Binary Data to base 64
      var base64String = window.btoa(binaryData);
      //showing file converted to base64
      document.getElementById('uploadID').value = 'data:image/jpeg;base64,' + base64String;
      console.log(base64String.length);
    };
  })(f);
  // Read in the image file as a data URL.
  reader.readAsBinaryString(f);
}
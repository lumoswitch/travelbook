function renderRegister(){
    $('#container').append(registerHeader);
    hide();
}

function closeForm(){
    $('#register').modal('hide');
}

function openForm(){
    $('#register').modal('show');
}

function submitForm() {
    closeForm();
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
    ajaxRequest("POST", "/logbook/register", responseFromRegisterServlet, myJSON);
}
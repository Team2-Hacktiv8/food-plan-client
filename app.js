'use strict'
// BUTTON - PAGE
function toLoginPage () {
    $('#section-message').empty() ;
    $("#page-home").hide();
    $("#page-dashboard").hide();
    $("#page-createplan").hide();
    $("#page-updateplan").hide();
    $("#page-login").show();
    $("#page-register").hide();
    $("#btn-login").hide();
    $("#btn-register").hide();
    $("#btn-logout").hide();
}

function toRegistrationPage () {
    $('#section-message').empty() ;
    $("#page-home").hide();
    $("#page-dashboard").hide();
    $("#page-createplan").hide();
    $("#page-updateplan").hide();
    $("#page-login").hide();
    $("#page-register").show();
    $("#btn-login").hide();
    $("#btn-register").hide();
    $("#btn-logout").hide();
}

function toHomePage() {
    const token = localStorage.getItem('token') ;

    if (token) {
        $('#section-message').empty() ;
        $("#page-home").hide();
        $("#page-dashboard").show();
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
        $("#page-login").hide();
        $("#page-register").hide();
        $("#btn-login").hide();
        $("#btn-register").hide();
        $("#btn-logout").show();
    } else {
        $('#section-message').empty() ;
        $('#section-list').hide() ;
        $("#page-home").show();
        $("#page-dashboard").hide();
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
        $("#page-login").hide();
        $("#page-register").hide();
        $("#btn-login").show();
        $("#btn-register").show();
        $("#btn-logout").hide();
    }
}



// SUBMISSION

function register(event) {
    event.preventDefault() ;
    const email = $('#email-register').val();
    const password = $('#password-register').val() ;

    console.log(email , password);

    // $('#email-register').val('');
    // $('#password-register').val('')

    // $.ajax({
    //     method : 'POST',
    //     url : 'http://localhost:3000/users/register',
    //     data : {
    //         email,
    //         password
    //     }
    // })
    //     .done(function (response) {
    //         showMessage(['Signed up success'])
    //         $('#section-message').empty() ;
    //         $("#page-home").hide();
    //         $("#page-dashboard").hide();
    //         $("#page-createplan").hide();
    //         $("#page-updateplan").hide();
    //         $("#page-login").show();
    //         $("#page-register").hide();
    //         $("#btn-login").hide();
    //         $("#btn-register").hide();
    //         $("#btn-logout").hide();
    //     })
    //     .fail(function (err) {
    //         showMessage(err.responseJSON.message)
    //     })
}

function login(event) {
    event.preventDefault() ;
    const email = $('#email-login').val();
    const password = $('#password-login').val() ;

    console.log(email , password);

    // $('#email-login').val('');
    // $('#password-login').val('')

    // $.ajax({
    //     method : 'POST',
    //     url : 'http://localhost:3000/users/login',
    //     data : {
    //         email,
    //         password
    //     }
    // })
    //     .done(function (response) {
    //         showMessage(['Signed up success'])
    //         $('#section-message').empty() ;
    //         $("#page-home").hide();
    //         $("#page-dashboard").show();
    //         $("#page-createplan").hide();
    //         $("#page-updateplan").hide();
    //         $("#page-login").hide();
    //         $("#page-register").hide();
    //         $("#btn-login").hide();
    //         $("#btn-register").hide();
    //         $("#btn-logout").show();
    //     })
    //     .fail(function (err) {
    //         showMessage(err.responseJSON.message)
    //     })
}




$(document).ready (function(){

    const token = localStorage.getItem('token') ;

    if (token) {
        $('#section-message').empty() ;
        $("#page-home").hide();
        $("#page-dashboard").show();
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
        $("#page-login").hide();
        $("#page-register").hide();
        $("#btn-login").hide();
        $("#btn-register").hide();
        $("#btn-logout").show();
    } else {
        $('#section-message').empty() ;
        $('#section-list').hide() ;
        $("#page-home").show();
        $("#page-dashboard").hide();
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
        $("#page-login").hide();
        $("#page-register").hide();
        $("#btn-login").show();
        $("#btn-register").show();
        $("#btn-logout").hide();
    }    
})
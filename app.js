'use strict'
// BUTTON - PAGE

$('#createBtnOnLogin').hide();

function toLoginPage() {
    $('#section-message').empty();
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

function toRegistrationPage() {
    $('#section-message').empty();
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
    const token = localStorage.getItem('token');

    if (token) {
        $('#section-message').empty();
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
        $('#section-message').empty();
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

function toCreatePlanPage() {
    $('#section-message').empty();
    $("#page-home").hide();
    $("#page-dashboard").hide();
    $("#page-createplan").show();
    $("#page-updateplan").hide();
    $("#page-login").hide();
    $("#page-register").hide();
    $("#btn-login").hide();
    $("#btn-register").hide();
    $("#btn-logout").hide();
}

function logout() {
    localStorage.clear()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
    $('#section-message').empty();
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




// SUBMISSION

function register(event) {
    event.preventDefault();
    const email = $('#email-register').val();
    const password = $('#password-register').val();

    console.log(email, password);

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
    event.preventDefault();
    const email = $('#email-login').val();
    const password = $('#password-login').val();

    console.log(email, password);

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


function createPlan(event) {
    $('#section-message').empty();
    event.preventDefault();
    const name = $('#name-create').val();
    const goal = $('#goal-create').val() || "";
    const cooking_date = $('#cooking_date-create').val();

    // $.ajax({
    //     method : "POST",
    //     url : 'http://localhost:3000/cookplans/',
    //     headers : {
    //         token : localStorage.getItem('token')
    //     },
    //     data : {
    //         name,
    //         goal,
    //         cooking_date
    //     }  
    // })
    //     .done ((response) => {
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

    //     .fail ((err) => {
    //         showMessage(err.responseJSON.message)
    //     })
}


$(document).ready(function () {

    const token = localStorage.getItem('token');

    if (token) {
        $('#section-message').empty();
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
        $('#section-message').empty();;
        $("#page-home").show();
        $("#page-dashboard").show(); // jangan lupa dibalikin jadi hide 
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
        $("#page-login").hide();
        $("#page-register").hide();
        $("#btn-login").show();
        $("#btn-register").show();
        $("#btn-logout").hide();
    }
})
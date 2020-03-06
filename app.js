'use strict'
/* Login Google */

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var id_token = googleUser.getAuthResponse().id_token;
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/google",
        headers: {
            token: id_token
        }
    })
        .done((token) => {
            localStorage.setItem('token', token)
            // fetchCookingPlans()
            // tinggal tambahain hide dan show
        })
        .fail((err) => {
            console.log(err);
        })
}

/* Logout Google */

function signOut() {
    localStorage.clear()
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}


/* Default View */

const defaultView = () => {
    $('#whenLogin').hide();
    $('#btn-logout').hide();
    $('#registerMessage').hide();
}

const whenRegisterSuccess = () => {
    $('#registerMessage').show();
    let string = "<h5> Register Success! </h5>"
    $('#registerMessage').html(string);
}

const whenRegisterFailed = () => {
    $('#registerMessage').show();
    let string = "<h5> Register Failed! </h5>"
    $('#registerMessage').html(string);
}

const whenLoginFailed = () => {
    $('#registerMessage').show();
    let string = "<h5> Login Failed! </h5>"
    $('#registerMessage').html(string);
}

const whenIsLogin = () => {
    $('#registerMessage').show();
    let string = "<h5> Welcome! </h5>"
    $('#registerMessage').html(string);
    $('#whenLogin').show();
    $('#btn-logout').show();
}

const whenCreateSuccess = () => {
    $('#registerMessage').show();
    let string = "<h5> Cooking Plan Added! </h5>"
    $('#registerMessage').html(string);
    $('#whenLogin').show();
    $('#btn-logout').show();
}

const clearInput = () => {
    $('#email-register').val('');
    $('#password-register').val('')
}


/* Main Function */

$(document).ready(function () {

    const token = localStorage.getItem('token');

    if (!token) {
        defaultView();
    } else {
        whenIsLogin();
    }

    /* Register Process */
    const register = (event) => {
        event.preventDefault();
        const payload = {
            email: $('#email-register').val(),
            password: $('#password-register').val()
        }
        register(payload).done(response => {
            whenRegisterSuccess();
            clearInput();
        }).fail(err => {
            whenRegisterFailed();
        })
    }

    /* Login Process */

    const login = (event) => {
        event.preventDefault();
        const payload = {
            email: $('#email-login').val(),
            password: $('#password-login').val()
        }

        login(payload).done(response => {
            const token = response.token;
            localStorage.setItem('token', token)
            whenIsLogin();
        }).fail(err => {
            whenLoginFailed();
        })

    }

    /* Create Cooking Plan */

    const createPlan = (event) => {
        $('#section-message').empty();
        event.preventDefault();
        const payload = {
            name: $('#name-create').val(),
            goal: $('#goal-create').val() || "",
            cooking_date: $('#cooking_date-create').val()
        };
        addCookingPlans(payload).done(response => {

        }).fail(err => {
            whenIsLogin();
        })

    }

    /* Fetching All Plans */
    const fetchCookPlans = () => {

        fetchCookingPlans().done(response => {
            $('.card-container').empty();
            response.data.forEach(element => {
                let cooking_date = new Date(element.cooking_date)
                let year = cooking_date.getFullYear();
                let month = cooking_date.getMonth() + 1;
                let day = cooking_date.getDate() + 1;

                if (month < 10) {
                    month = `0${month}`
                }
                if (day < 10) {
                    day = `0${day}`
                }
                let formatted_date = day + "-" + month + "-" + year;

                $('.card-container').append(`
                <div class="card-todo" id=card-${element.id}>
                    ${element.name}<br>
                    ${element.goals}<br>
                    ${formatted_date}<br>
                    <a href="${elemement.recipe_link}">Get Receipe</a>
                    <a href="${elemement.video_link}">Too lazy to cook? get restaurant recommendation</a><br><br><br>
                    <button class="btn btn-danger" onClick="deleteTodo(${element.id})" id="btn-delete-${element.id}">Delete</button></div>`)
            });
        }).fail()

    }
})

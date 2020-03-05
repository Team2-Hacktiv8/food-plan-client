'use strict'

$(document).ready (function(){

    const token = localStorage.getItem('token') ;

    if (token) {
        $('#section-message').empty() ;
        // showTodos(false)
        $("#page-home").hide();
        $("#page-dashboard").show();
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
    } else {
        $('#section-message').empty() ;
        $('#section-list').hide() ;
        $("#page-home").show();
        $("#page-dashboard").hide();
        $("#page-createplan").hide();
        $("#page-updateplan").hide();
    }    
})
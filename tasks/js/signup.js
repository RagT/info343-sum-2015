"use strict";

/*
    signup.js
    Script for the signup.html page
    Handle the form submit and create a new Parse.User() for the new user account
 */

//use jQuery to register a function that is called when the document is ready for manipulation
$(function(){
   $('.form-signup').submit(function(e){
       e.preventDefault();
       var user = new Parse.User();
       user.set('username', $('#inputEmail').val());
       user.set('lastName', $('#inputLName').val());
       user.set('firstName', $('#inputFName').val());
       user.set('password', $('#inputPassword').val());

       //Create new user
       user.signUp().then(function(){
           window.location = 'index.html';
       },
       function(err){
           showError(err);
       });
   });
});
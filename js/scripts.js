/*!
* Start Bootstrap - Full Width Pics v5.0.4 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

// Perry code starts here
$(function(){
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
    $('.fadein :first-child').fadeOut()
        .next('img').fadeIn()
        .end().appendTo('.fadein');}, 
    3000);

// Perry code ends here
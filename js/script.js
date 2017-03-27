﻿'use strict';

$(function () {
    let windowWidth = $(window).width();
    var offset = 0;

    if(windowWidth <= 360) {
        offset = 175;
    }
    else if (windowWidth > 360 && windowWidth <= 768) {
        offset = 170;
    } else {
        offset = 135;
    }

     $('#theCarousel').carousel();
     

     var animateScroll = (function ($) {
         var animateToTarget = function (event) {
             $('body, html')
                 .stop()
                 .animate({
                     scrollTop: $($(event.target).attr('href')).offset().top - 100
                 }, 1500, 'easeInOutExpo');
         };

         var init = function () {
             $('body')
                 .scrollspy({
                     target: '.navbar',
                     offset: offset
                 });

             $('nav a').on('click', function (event) {
                 event.preventDefault();
                 $.when($('.navbar-collapse.in').collapse('hide'))
                     .then(function () {
                         animateToTarget(event);
                     });
             });
         }

         init();
     })($);
   

    var animatedNavbar = (function($) {
        var headerOffset = 300;
        var elem = $('.scroll-navbar');

        var init = function() {
            $(window).on('scroll',
                function() {
                    setTimeout(navbarOnScrolling, 250);
                });
        }


        var navbarOnScrolling = function() {
            var scrollY = window.pageYOffset || document.scrollTop;

            if (scrollY >= headerOffset) {
                elem.addClass('shrink-navbar');
            } else {
                elem.removeClass('shrink-navbar');
            }
        }

        init();
    })($);
});
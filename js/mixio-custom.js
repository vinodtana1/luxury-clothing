// ------------------------------------------------
// Project Name: Mixio - Five in One Elegant Coming Soon and Landing Page Template
// Project Description: Mixio - awesome coming soon template to kick-start your project
// Tags: mix_design, coming soon, under construction, template, landing page, portfolio, one page, responsive, html5, css3, creative, clean, agency, personal page
// Version: 2.0.3
// Build Date: July 2018
// Last Update: January 2024
// This product is available exclusively on Themeforest
// Author: mix_design
// Author URI: https://themeforest.net/user/mix_design
// File name: mixio-custom.js
// ------------------------------------------------

// ------------------------------------------------
// Table of Contents
// ------------------------------------------------
//
//  1. Loader
//  2. Main Section Loading Animation
//  3. Fullpage.js Plugin Settings
//  4. YTPlayer Plugin Video Background
//  5. Vegas Plugin Kenburns Background
//  6. KBW-Countdown
//  7. Swiper Slider
//  8. Mailchimp Notify Form
//  9. Contact Form
//  10. Write-a-Line Form
//
// ------------------------------------------------
// Table of Contents End
// ------------------------------------------------

$(window).on("load", function() {

  "use strict";

  // --------------------------------------------- //
  // Loader Start
  // --------------------------------------------- //
  setTimeout(function(){
    $(".loader").addClass('fade-dark');
    $(".loader__logo").removeClass('slideInDown').addClass('flipOutY');
    $(".loader__caption").removeClass('slideInUp').addClass('fadeOutDown');
  },600);

  setTimeout(function(){
    $('body').removeClass('overflow-hidden');
    $(".loader").addClass('loaded');
  },1200);
  // --------------------------------------------- //
  // Loader End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Main Section Loading Animation Start
  // --------------------------------------------- //
  setTimeout(function(){
    if ($('body').hasClass('split')) {
      $('body').addClass('split-loaded');
    };
    if ($('body').hasClass('fullscreen')) {
      $('body').addClass('fullscreen-loaded');
    };
  },1200);
  // --------------------------------------------- //
  // Main Section Loading Animation End
  // --------------------------------------------- //

});

$(function() {

  // --------------------------------------------- //
  // Fullpage.js Plugin Settings Start
  // --------------------------------------------- //
  var fullpageNormalScroll = $('#fullpage-scroll'),
      fullpage             = $('#fullpage');

      if (fullpage.length) {
        fullpage.fullpage({
          sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
          menu: '#menu',
          scrollingSpeed: 1000,
          responsiveWidth: 1200,
          navigation: true,
          loopBottom: true,
      		verticalCentered: false
        });
      };

      if (fullpageNormalScroll.length) {
        fullpageNormalScroll.fullpage({
          sectionsColor: ['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff'],
          menu: '#menu',
          responsiveWidth: 1183,
          navigation: false,
          autoScrolling: false,
          fitToSection: false,
    		  verticalCentered: false
        });
      };
  // --------------------------------------------- //
  // Fullpage.js Plugin Settings End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // YTPlayer Plugin Video Background Start
  // --------------------------------------------- //
  var bgndVideo = $("#bgndVideo");
  if(bgndVideo.length){
    bgndVideo.mb_YTPlayer({
      mute: true,
      containment: '#video-wrapper',
      showControls:false,
      autoPlay:true,
      loop:true,
      startAt:0,
      quality:'default'
    });
  }
  // --------------------------------------------- //
  // YTPlayer Plugin Video Background End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Vegas Plugin Kenburns Background Start
  // --------------------------------------------- //
  var bgndKenburns = $('#bgndKenburns');
  if(bgndKenburns.length){
    bgndKenburns.vegas({
      timer: false,
      delay: 8000,
      transition: 'fade2',
      transitionDuration: 2000,
      slides: [
        { src: "https://dummyimage.com/1920x1280/7d7d7d/e0e0e0" },
        { src: "https://dummyimage.com/1920x1280/7d7d7d/e0e0e0" },
        { src: "https://dummyimage.com/1920x1280/7d7d7d/e0e0e0" }
      ],
      animation: [ 'kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight' ]
    });
  }
  // --------------------------------------------- //
  // Vegas Plugin Kenburns Background End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // KBW-Countdown Start
  // --------------------------------------------- //
  $('#countdown').countdown({until: $.countdown.UTCDate(+10, 2024, 5, 27), format: 'D'});
  $('#countdown-large').countdown({until: $.countdown.UTCDate(+10, 2024, 5, 27), format: 'DHMS'});
  // --------------------------------------------- //
  // KBW-Countdown End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Swiper Slider Start
  // --------------------------------------------- //
  var swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 600,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // --------------------------------------------- //
  // Swiper Slider End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Mailchimp Notify Form Start
  // --------------------------------------------- //
  $('.notify-form').ajaxChimp({
    callback: mailchimpCallback,
    url: 'https://besaba.us10.list-manage.com/subscribe/post?u=e8d650c0df90e716c22ae4778&amp;id=54a7906900'
  });

  function mailchimpCallback(resp) {
    if(resp.result === 'success') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-ok').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-ok').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    } else if(resp.result === 'error') {
      $('.notify').find('.form').addClass('is-hidden');
      $('.notify').find('.subscription-error').addClass('is-visible');
      setTimeout(function() {
        // Done Functions
        $('.notify').find('.subscription-error').removeClass('is-visible');
        $('.notify').find('.form').delay(300).removeClass('is-hidden');
        $('.notify-form').trigger("reset");
      }, 5000);
    }
  };
  // --------------------------------------------- //
  // Mailchimp Notify Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Contact Form Start
  // --------------------------------------------- //
  $("#contact-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.contact').find('.form').addClass('is-hidden');
      $('.contact').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.contact').find('.reply-group').removeClass('is-visible');
        $('.contact').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Contact Form End
  // --------------------------------------------- //

  // --------------------------------------------- //
  // Write-a-Line Form Start
  // --------------------------------------------- //
  $("#writealine-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
      $('.writealine').find('.form').addClass('is-hidden');
      $('.writealine').find('.reply-group').addClass('is-visible');
			setTimeout(function() {
				// Done Functions
        $('.writealine').find('.reply-group').removeClass('is-visible');
        $('.writealine').find('.form').delay(300).removeClass('is-hidden');
				th.trigger("reset");
			}, 5000);
		});
		return false;
	});
  // --------------------------------------------- //
  // Write-a-Line Form End
  // --------------------------------------------- //

});

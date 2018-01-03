$(document).ready(function () {

  // init nav object from dom
  var nav = $('nav');
  // get heigth of the nav
  var navHeight = nav.outerHeight();

  // click-trigger
  $('a[href*="#"]:not([href="#"])').click(function (event) {
    scrollToSection(this);
    event.preventDefault();
  });

  // scroll-trigger
  $(document).scroll(function () {
    activateCurrentSection();
  });

  // get target position and scrolls to it
  function scrollToSection(self) {
    // get the target href
    var href = $(self).attr('href');

    // get the target position
    var targetPos = $(href).offset().top - navHeight + 5;

    // scroll to target
    $('html, body').animate({
      scrollTop: targetPos
    }, 400);
  }

  /*
   * Updates active section on scroll
   */
  // scroll-trigger
  $(document).scroll(function () {
    activateCurrentSection();
  });

  /*
   * Updates active section on scroll
   */
  function activateCurrentSection() {
    var id; // init the id of the element that will be activated

    // get all sections
    var sections = $('.section');

    // store current position on the page when scroll is triggered
    var pos = $(document).scrollTop();

    /*
     * Exception: if last section is <100% of the screen height
     * make it active when 50% of it is visible.
     * Otherwise the last section would never activate.
     */
    var lastSection = sections[sections.length - 1]; // get last section
    var lastSectionTooSmall = $(lastSection).height() < $(window).height();

    if (lastSectionTooSmall) {
      var lastSectionTopPos = $(lastSection).offset().top;
      // lastSectionTriggerPos is true if 50% of the last section is visible
      var lastSectionTriggerPos = $(window).height() + $(document).scrollTop() - ($(lastSection).height() / 2);
      var lastSectionInView = lastSectionTriggerPos > lastSectionTopPos;
    }

    if (lastSectionTooSmall && lastSectionInView) {
      id = $(lastSection).attr('id');

    } else { // else last section is >= 100% of the view check all sections to find the top one
      sections.each(function () {
        var top = $(this).offset().top - navHeight; // get the top & bottom position of the section
        var bottom = top + $(this).outerHeight();

        /*
         * if the current position is higher (deeper on the page) than the top of the section
         * and it is smaller (heiger on the page) than the bottom of the section
         * it is the active section.
         */
        if (pos >= top && pos <= bottom) {
          id = $(this).attr('id'); // store the id of this section
        }
      });
    }

    /*
     if an id was set before, activate the section in the nav
     */
    if (id) {
      nav.find('li').removeClass('active');
      nav.find('a[href="#' + id + '"]').parent('li').addClass('active');
      if (id == 'products' || id == 'scoreboard' || id == 'contacts' || id == 'participate' || id == 'project') {
        nav.addClass('light');
      } else {
        nav.removeClass('light');
      }
      
      if($(window).width()>1400) {
        if (id == 'graduates') {
        nav.hide();
      } else {
        nav.show();
      }
      }
    } else {
      nav.find('li').removeClass('active');
    }
  }

  if ($(window).width() > 1200) {
    $(document).scroll(function () {
      y = $(this).scrollTop();
//      console.log(y);
      var translateXHeader = y * 10;
      var scaleHeader = y / 10;
      var opacityHeader = 1 - y / 50;

      if (scaleHeader < 1) {
        scaleHeader = 1;
      }
      $('.scrollAnimation .header-title, .scrollAnimation .header-info').css({
        'transform': 'scale(' + scaleHeader + ')',
        'opacity': opacityHeader,
        'transition': '0.5s',

      });
      $('.logo-large-before').css({
        'opacity': opacityHeader,
        'transition': '0.5s',

      });

      $('.scrollAnimation .registration-btn').css({
        'transform': 'translateX(' + translateXHeader + '%)',
        'transition': '0.2s',

      })
      $('.wrap-after').css({
        'transform': 'translateX(' + translateXHeader + '%)',
        'transition': '0.5s',

      })
      $('.scrollAnimation .registration-btn, .wrap-before').css({
        'transform': 'translateX(' + '-' + translateXHeader + '%)',
        'transition': '0.5s',

      })

      if (y > 50) {
        $('.logo-large').css({
          'bacground': 'url("images/logo-large.svg") no-repeat center',
          'transition': '0.5s',

        });
        $('.scrollAnimation').css({
          'position': 'absolute',
          'top': '0',
          'left': '0',
          'right': '0',
          'width': '100%',
          'z-index': '0',
          'transition': '0.2s',
          'transform': 'scale(1.2)',
          'opacity': '0'
        })

        $('.page-template-home main').css({
          'margin-top': '50px',
        })


      } else {
        $('.scrollAnimation').css({
          'position': 'static',
          'top': '0',
          'left': '0',
          'right': '0',
          'width': '100%',
          'z-index': '555',
          'transform': 'scale(1)',
          'opacity': '1'

        })
        $('.page-template-home main').css({
          'margin-top': '0',
        })
      }

    });
  }



  var DataDate = [{
    '1': [1, 5, 10],
    '2': [1, 5, 10],
    '3': [1, 5, 10],
    '4': [1, 5, 10],
    '5': [1, 5, 10],
    '6': [1, 5, 10],
    '7': [1, 5, 10],
    '8': [1, 5, 10],
    '9': [1, 5, 10],
    '10': [1, 5, 10],
    '11': [1, 5, 10],
    '12': [1, 5, 10],
  }];



  $('.datepicker-here').datepicker({

    onRenderCell: function (date, cellType) {
      if (cellType == 'day' && date.getDate() == 12 && date.getMonth() == 11 || date.getMonth() == 11 && date.getDate() == 15 || date.getMonth() == 10 && date.getDate() == 9) {
        return {
          classes: '-selected-',
        }
      }
    }
  })


  $('.section-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: false,
    items: 1
  });

  $('#section-carousel .owl-dots .owl-dot span').each(function (index) {
    $(this).text('0' + (index + 1));
  });

  $('#blog-carousel .owl-dots .owl-dot span').each(function (index) {
    $(this).text('0' + (index + 1));
  });
  $('#benefits-carousel .owl-dots .owl-dot span').each(function (index) {
    $(this).text('0' + (index + 1));
  });

  $('.item-list li').hover(function () {
    $('.item-list li').removeClass('active');
    $('.item-content p').removeClass('active');
    $('.products-item').removeClass('active');
    $('.' + $(this).data('product')).addClass('active');
    $(this).addClass('active')
  })

  $('.store-price .link').click(function () {
    $('#order-shop .mYmodal-img img').attr('src', $(this).parents('.store-parent').find('.store-img img').attr('src'));
    $('input[name="product"]').val($(this).parents('.store-parent').find('.store-item h6').text());
    $('.store-price .link').removeClass('active');
    $(this).addClass('active');
  })

  $('.modal-btn').click(function (e) {
    e.preventDefault;

    $('#' + $(this).data('modal')).show('400');
    $('.overlay').show('400');
    $('#' + $(this).data('modal')).animate({
      opacity: 1,
    }, 400);
    $('body').addClass('overl-h');
  });
  $('.overlay, .popup__close').click(function () {
    $('body').removeClass('overl-h');
    $('.mYmodal').hide('400');
    $('.overlay').hide('400');
    $('.mYmodal').animate({
      opacity: 0,
    }, 400);
  });

  $('.graduates-list li').hover(function () {
      $(this).addClass('hover');
    },
    function () {
      $(this).removeClass('hover')
    });

  var $grid = $('.graduates-list').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });

  $('.list-bg').hover(function () {
    $(this).hide();
  });

  $grid.imagesLoaded().progress(function () {
    $grid.masonry('layout');
  });
  
  $('.grid-colum').each(function(){
    $(this).find('.flipper').css({
    'height' : $(this).height()+'px',
    });
    $(this).find('.flipper .front').css({
    'height' : $(this).height()+'px',
    });
  });
  



});
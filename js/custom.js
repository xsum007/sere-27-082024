/*----------------------------------------------

Template name:  Snail
Version:        6.0
Author:         Snail
Author Email:   vipul@chetsapp.com 

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "script.js" file for writing your script js.
We may release future updates so it will overwrite this file. it's better and safer to use "script.js".

----------------------------------------------*/


(function ($) {
    "use strict";

    /*=====================================
        Preloader
    =========================================*/

    $(window).on('load', function () {
        $("body").addClass("loaded").delay(1000).queue(function () {
            $('.preloader').addClass("d-none").dequeue();
        });
    });

    /*=====================================
        Scroll Top
    =========================================*/
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll-top').addClass('show');
        } else {
            $('#scroll-top').removeClass('show');
        }
    });
    $('#scroll-top').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

    function scrollNav() {
        $('.sl_header .mainmenu a,.navbar .navbar-nav .nav-link,.side-nav .navbar-nav .nav-link').click(function () {
            $(".header-menu .active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 80
            }, 300);
            return false;
        });
    }
    scrollNav();
    /*=====================================
        Isotope filter Activation
    =========================================*/

    $(window).on('load', function () {
        if ($('.isotope-item').length > 0) {
            var $grid = $('.isotope-item').isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows'
            });

            $('.nav-item').click(function () {
                $('.nav-item').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.isotope-item').isotope({
                    filter: selector
                });
                return false;
            });
        }


        if ($('.page-item').length > 0) {
            var $grid = $('.page-item').isotope({
                itemSelector: '.item',
                layoutMode: 'fitRows'
            });

            $('.filter-item').click(function () {
                $('.filter-item').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.page-item').isotope({
                    filter: selector
                });
                return false;
            });
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.header-unpinned').addClass('static');
        } else {
            $('.header-pinned').removeClass('show');
        }
    });



    /*=====================================
        Masonary wih isotope filter
    =========================================*/

    $(window).on('load', function () {
        $('.masonry-activation').imagesLoaded(function () {
            var $grid = $('.masonry-wrap').isotope({
                itemSelector: '.masonary-item',
                percentPosition: true,
                transitionDuration: '0.7s',
                masonry: {
                    columnWidth: 1,
                }
            });

            $('.nav-item').click(function () {
                $('.nav-item').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $('.gallery-wrapper').isotope({
                    filter: selector,
                });
                return false;
            });
        });
    });

    /*=====================================
        Header Search Popup
    =========================================*/

    var $html = $('html'),
        $demoOption = $('.demo-option-container'),
        $body = $('body');

    function searchClose() {
        $body.removeClass('page-search-popup-opened'), $html.css({
            overflow: ""
        })
    }


    $('.btn-search-click').on("click", function (e) {
        e.preventDefault(),
            function () {
                $body.addClass('page-search-popup-opened'), $html.css({
                    overflow: "hidden"
                });
                var e = $('.sl-search-popup').find("form input[type='search']");
                setTimeout(function () {
                    e.focus()
                }, 500)
            }()
    });


    $('.search-close').on('click', function (e) {
        e.preventDefault();
        searchClose();
    });

    $('.sl-search-popup').on('click', function (e) {
        e.target === this && searchClose();
    });

    /* =============================
        Header Full Details Scroll On Fixed
    =================================*/

    if ($('.header-full-menu .inner-header').length) {
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 260) {
                $('.header-full-menu .inner-header').addClass('header-full-active');
            } else {
                $('.header-full-menu .inner-header').removeClass('header-full-active');
            }
        });
    }

    /* =============================
        Header Full Details toggle
    =================================*/

    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".side-menu").removeClass("side-menu-opacity");
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function () {
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function () {
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
            setTimeout(function () {
                $(".side-menu").addClass("side-menu-opacity");
            }, 500);
        });
    }
    /* =============================
        Sticky Header 
    =================================*/

    $('.header-sticky').headroom();

    /* =============================
        Option Demo
    =================================*/

    $('.quick-option').on('click', function (e) {
        e.preventDefault(),
            function () {
                $demoOption.toggleClass('open')
                setTimeout(function () {
                    if ($(".quick-option i").hasClass("fa-sliders-h")) {

                        $('.quick-option i').addClass('ti-close');
                        $('.quick-option i').removeClass('fa fa-sliders-h');

                    } else {
                        $('.quick-option i').removeClass('ti-close');
                        $('.quick-option i').addClass('fa fa-sliders-h');
                    }
                }, 800);
            }()
    });

    /* =============================
        Header Color Changable
    =================================*/

    // Header Black To White

    function HeaderblackTowhite() {
        $('.header-black-to-white').each(function () {
            if ($(window).width() < 992) {
                $(this).removeClass("header-black-version");
                $(this).addClass("header-light-version");
                $("#change-logo").attr("src", "img/logo/logo-white.svg");
                $('.popup-mobile-click').removeClass("dark-version");
                $('.popup-mobile-click').addClass("light-version");
            } else {
                $(this).removeClass("header-light-version");
                $(this).addClass("header-black-version");
                $("#change-logo").attr("src", "img/logo/logo-black.svg");
                $('.popup-mobile-click').removeClass("light-version");
                $('.popup-mobile-click').addClass("dark-version");
            }
        });
    }

    function HeaderwhiteToblack() {
        $('.header-white-to-black').each(function () {
            if ($(window).width() > 992) {
                $(this).removeClass("header-light-version");
                $(this).addClass("header-black-version");
                $("#change-logo").attr("src", "img/logo/logo-black.svg");
                $('.popup-mobile-click').removeClass("light-version");
                $('.popup-mobile-click').addClass("dark-version");
            } else {

                $(this).removeClass("header-black-version");
                $(this).addClass("header-light-version");
                $("#change-logo").attr("src", "img/logo/logo-white.svg");
                $('.popup-mobile-click').removeClass("dark-version");
                $('.popup-mobile-click').addClass("light-version");
            }
        });
    }

    $(document).ready(function () {
        HeaderblackTowhite();
        HeaderwhiteToblack();
        $(window).resize(function () {
            HeaderblackTowhite();
            HeaderwhiteToblack();
        });
    });

    /* =============================
        Minicart Activation
    =================================*/

    $('.minicart-trigger').on('click', function (e) {
        e.stopPropagation();
        $(this).siblings('.shopping-cart').slideToggle('400');
        $(this).siblings('.shopping-cart').toggleClass('show');
        var $cartWrapper = $(this).parents('.mini-cart').siblings().children('.shopping-cart');
        $(this).parents('.mini-cart').siblings().children('.shopping-cart').slideUp('400');
    })

    function menuClose() {
        $body.removeClass('popup-mobile-menu-wrapper'), $html.css({
            overflow: ""
        })
    };

    /* =============================
        Mobile Menu Popup
    =================================*/

    $('.popup-mobile-click').on('click', function (e) {
        e.preventDefault(),
            function () {
                $body.addClass('popup-mobile-menu-wrapper'), $html.css({
                    overflow: "hidden"
                });
            }()
    });


    $('.mobile-close').on('click', function (e) {
        e.preventDefault();
        menuClose();
    });
    $('.popup-mobile-visiable').on('click', function (e) {
        e.target === this && menuClose();
    });

    /* ===================================
      Rotating Text
      ====================================== */

    if ($(".js-rotating").length) {
        $(".js-rotating").Morphext({
            animation: "flipInY",
            separator: ",",
            speed: 5000,
            complete: function () {

            }
        });
    }

    /* =============================
        Hamberger Menu
    =================================*/

    $('.hamberger-trigger').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').addClass('is-visiable');
    });

    $('.page-close').on('click', function (e) {
        e.preventDefault();
        $('.open-hamberger-wrapper').removeClass('is-visiable');
    });

    /* =============================
        Sidebar Mobile Menu
    =================================*/

    $('.object-custom-menu > li.has-mega-menu > a').on('click', function (e) {
        e.preventDefault();
        $(this).siblings('.object-submenu').slideToggle('400');
        $(this).toggleClass('active').siblings('.object-submenu').toggleClass('is-visiable');
    })

    /*=====================================
        Prebuild Component
    =========================================*/

    $('.componant-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });
    if ($('.slider').length > 0) {
        $('.slider').slick({
            autoplay: true,
            speed: 800,
            lazyLoad: 'progressive',
            arrows: true,
            dots: false,
            prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
            nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
        }).slickAnimation();

        $('.slick-nav').on('click touch', function (e) {

            e.preventDefault();

            var arrow = $(this);

            if (!arrow.hasClass('animate')) {
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }
        });
    }

    /*=====================================
        Date time Picker
    =========================================*/

    $('#datetimepickerdark, #datetimepickerdark2').datetimepicker({
        datepicker: true,
        format: 'd-m-y H:i',
        theme: 'dark'
    });

    $('#datetimepicker, #datetimepicker2').datetimepicker({
        datepicker: true,
        format: 'd-m-y H:i'
    });

    /*=====================================
        Image Justify Activation
    =========================================*/
    $(window).on('load', function () {
        $('#npgallery2').justifiedGallery({
            rowHeight: 320,
            maxRowHeight: null,
            margins: 2,
            border: 0,
            rel: 'npgallery2',
            lastRow: 'nojustify',
            captions: true,
            randomize: false,
            sizeRangeSuffixes: {
                lt100: '_t',
                lt240: '_m',
                lt320: '_n',
                lt500: '',
                lt640: '_z',
                lt1024: '_b'
            }
        });
    });

    ScrollReveal().reveal('.npreveal', {
        delay: 500,
        useDelay: 'onload',
        reset: true,
    })

    /*=====================================
        Sticky Sidebar
    =========================================*/

    $('#sticky').theiaStickySidebar({
        MarginTop: 80
    });

    /*=====================================
        Scroll to Top
    =========================================*/

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#GotoTop').fadeIn();
        } else {
            $('#GotoTop').fadeOut();
        }
    });
    $('#GotoTop').click(function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*=====================================
        Node Cursor // Custom Cursor
    =========================================*/


    if ($('#cursor').length > 0) {
        var initCursor = new NodeCursor({
            cursor: true,
            node: true,
            cursor_velocity: 0,
            node_velocity: 0.75,
            native_cursor: 'none',
            element_to_hover: '.nodeHover',
            cursor_class_hover: 'disable',
            node_class_hover: 'expand',
            hide_mode: true,
            hide_timing: 2000,
        });
    }

    $("a").on("mouseleave", function () {
        $("#cursor").removeClass("active");
        $("#cursor").removeClass("active");
    });
    /* =============================
        Counter up
    =================================*/

    $('.count').counterUp({
        delay: 10,
        time: 3500
    });

    /*============================== 
        18. Countdown
    ===============================*/


    $('[data-countdown]').each(function () {
        var $this = $(this),
            finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="sl-count days"><span class="count-inner"><span class="time-count">%-D</span> <p>Days</p></span></span> <span class="sl-count hour"><span class="count-inner"><span class="time-count">%-H</span> <p>Hours</p></span></span> <span class="sl-count minutes"><span class="count-inner"><span class="time-count">%M</span> <p>Minutes</p></span></span> <span class="sl-count second"><span class="count-inner"><span class="time-count">%S</span> <p>Seconds</p></span></span>'));
        });
    });

    /*==================================
        Countdown Time Circles
    ======================================*/

    $('#DateCountdown').TimeCircles({
        "animation": "smooth",
        "bg_width": 0.60,
        "fg_width": 0.033,

        "circle_bg_color": "#eeeeee",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#0038E3",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#0038E3",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#0038E3",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#0038E3",
                "show": true
            }
        }
    });

    /*==================================
        Countdown Time Circles -2
    ======================================*/

    $('#commingsoon').TimeCircles({
        "animation": "smooth",
        "bg_width": 0.60,
        "fg_width": 0.033,
        "circle_bg_color": "#8a8a8a",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#ffffff",
                "show": true
            },
            "Hours": {
                "text": "Hours",
                "color": "#ffffff",
                "show": true
            },
            "Minutes": {
                "text": "Minutes",
                "color": "#ffffff",
                "show": true
            },
            "Seconds": {
                "text": "Seconds",
                "color": "#ffffff",
                "show": true
            }
        }
    });
    /*===================================
        Modal Toggle class
    ====================================*/
    $(document).on('click', '[data-bs-toggle-class]', function (e) {
        var $self = $(this);
        var attr = $self.attr('data-bs-toggle-class');
        var target = $self.attr('data-bs-toggle-class-target') || $self.attr('data-target');
        var closest = $self.attr('data-target-closest');
        var classes = (attr && attr.split(',')) || '',
            targets = (target && target.split(',')) || Array($self),
            key = 0;
        $.each(classes, function (index, value) {
            var target = closest ? $self.closest(targets[(targets.length == 1 ? 0 : key)]) : $(targets[(targets.length == 1 ? 0 : key)]),
                current = target.attr('data-class'),
                _class = classes[index];
            (current != _class) && target.removeClass(target.attr('data-class'));
            target.toggleClass(classes[index]);
            target.attr('data-class', _class);
            key++;
        });
        $self.toggleClass('active');
        $self.attr('href') == "#" ? e.preventDefault() : '';
    });

    /*===================================
        Audio Player
    ====================================*/

    $('audio').audioPlayer();

    /* =============================
        Wow Activation
    =================================*/

    new WOW().init();

    /* =============================
        Nice Select Activation
    =================================*/

    $('select.nice-select').niceSelect();

    /* =============================
        Custom Form PlaceHolder
    =================================*/

    $(function () {
        $(".field-wrapper .field-placeholder").on("click", function () {
            $(this).closest(".field-wrapper").find("input").focus();
            $(this).closest(".field-wrapper").find("textarea").focus();
        });
        $(".field-wrapper input,.field-wrapper textarea").on("change", function () {
            var value = $.trim($(this).val());
            if (value) {
                $(this).closest(".field-wrapper").addClass("hasValue");
            } else {
                $(this).closest(".field-wrapper").removeClass("hasValue");
            }
        });
    });

    /* =============================
        Welcome Slides
    =================================*/

    if ($.fn.owlCarousel) {
        var welcomeSlider = $('.welcome-slides');
        welcomeSlider.owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            smartSpeed: 1000,
            autoplayTimeout: 10000,
            nav: true,
            dots: false,
            responsive: {
                0: {
                    nav: false,
                },
                769: {
                    nav: true,
                }
            },
            navText: [('<i class="fa fa-arrow-left"></i>'), ('<i class="fa fa-arrow-right"></i>')]
        })

        welcomeSlider.on('translate.owl.carousel', function () {
            var layer = $("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).removeClass('animated ' + anim_name).css('opacity', '0');
            });
        });

        $("[data-delay]").each(function () {
            var anim_del = $(this).data('delay');
            $(this).css('animation-delay', anim_del);
        });

        $("[data-duration]").each(function () {
            var anim_dur = $(this).data('duration');
            $(this).css('animation-duration', anim_dur);
        });

        welcomeSlider.on('translated.owl.carousel', function () {
            var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
            layer.each(function () {
                var anim_name = $(this).data('animation');
                $(this).addClass('animated ' + anim_name).css('opacity', '1');
            });
        });
    }

    /* =============================
        SVG Play Buttons
    =================================*/


    var flip = true,
        pause = "M11,10 L18,13.74 18,22.28 11,26 M18,13.74 L26,18 26,18 18,22.28",
        play = "M11,10 L17,10 17,26 11,26 M20,10 L26,10 26,26 20,26",
        $animation = $('#animation');

    $(".ytp-play-button").on('click', function () {
        flip = !flip;
        $animation.attr({
            "from": flip ? pause : play,
            "to": flip ? play : pause
        }).get(0).beginElement();
    });

    /* =============================
        Magnific Popup
    =================================*/

    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    /* =============================
        Fancybox Hover Effect
    =================================*/

    function ContentHover() {

        var $hoverContentHeight = 0;

        $('body').on('mouseenter', '.fancybox-hover-block', function () {
            $hoverContentHeight = parseInt($(this).find('.fancy-box-info').outerHeight(true));
            $(this).find('.fancy-box-header').css('transform', 'translateY(-' + $hoverContentHeight + 'px)');
        });
        $('body').on('mouseleave', '.fancybox-hover-block', function () {
            $(this).find('.fancy-box-header').css('transform', 'translateY(0)');
        });
    }

    ContentHover();
    function ContentHover() {
        var $hoverContentHeight = 0;
        $('body').on('mouseenter', '.fancybox-hover-block', function () {
            $hoverContentHeight = parseInt($(this).find('.fancy-box-info').outerHeight(true));
            $(this).find('.fancy-box-header').css('transform', 'translateY(-' + $hoverContentHeight + 'px)');
        });
        $('body').on('mouseleave', '.fancybox-hover-block', function () {
            $(this).find('.fancy-box-header').css('transform', 'translateY(0)');
        });
    }

    ContentHover();

    /* =============================
        Typed Js
    =================================*/

    if (('[data-typed]').length > 0) {
        $('[data-typed]').each(function (index, el) {
            new Typed(el, {
                strings: JSON.parse($(el).attr('data-typed')),
                typeSpeed: 200,
                backSpeed: 150,
                backDelay: 1e3,
                loop: !0
            });
        });
    }

    /* =============================
        Testimonial Slider
    =================================*/

    $(document).ready(function () {
        $("#sl-testimonial-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            margin: 10,
            dots: false,
            nav: false
        });
    });

    if ($('.slide-one-item').length > 0) {
        $('.slide-one-item').owlCarousel({
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            animateOut: 'fadeOutUp',
            animateIn: 'fadeIn',
            pauseOnHover: false,
            nav: true,
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('.restaurant-testimonial').length > 0) {
        $('.restaurant-testimonial').owlCarousel({
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            pauseOnHover: false,
            nav: true,
            dots: true,
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('.portfolio-multi-image-slider').length > 0) {
        $('.portfolio-multi-image-slider').owlCarousel({
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            pauseOnHover: true,
            nav: false,
            dots: true,
        });
    }


    if ($('.portfolio-testimonial').length > 0) {
        $('.portfolio-testimonial').owlCarousel({
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            autoplay: true,
            pauseOnHover: false,
            nav: false,
            dots: true,
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('.architect-project-carousel').length > 0) {
        $('.architect-project-carousel').owlCarousel({
            items: 1,
            loop: true,
            margin: 10,
            autoplay: true,
            pauseOnHover: false,
            nav: true,
            dots: false,
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }


    $('.customNextBtn').click(function (event) {
        event.preventDefault();
        owl.trigger('next.owl.carousel');
    });

    $('.customPrevBtn').click(function (event) {
        event.preventDefault();
        owl.trigger('prev.owl.carousel');
    });


    if ($('.basic-client-carousel').length > 0) {
        $('.basic-client-carousel').owlCarousel({
            items: 6,
            loop: true,
            stagePadding: 0,
            margin: 30,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            pauseOnHover: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 2
                },
                760: {
                    items: 4
                },
                990: {
                    items: 4
                },
                1200: {
                    items: 6
                },
                1500: {
                    items: 6
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('.app-alider').length > 0) {
        $('.app-alider').owlCarousel({
            items: 2,
            loop: true,
            stagePadding: 0,
            margin: 30,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            pauseOnHover: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 1
                },
                760: {
                    items: 1
                },
                990: {
                    items: 2
                },
                1200: {
                    items: 2
                },
                1500: {
                    items: 2
                }
            }
        });
    }

    if ($('.feature-slider').length > 0) {
        $('.feature-slider').owlCarousel({
            items: 1.5,
            loop: true,
            stagePadding: 20,
            margin: 20,
            dots: false,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            pauseOnHover: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 1
                },
                760: {
                    items: 1
                },
                990: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1500: {
                    items: 3
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('.wedding-blog-item').length > 0) {
        $('.wedding-blog-item').owlCarousel({
            items: 1.5,
            loop: true,
            stagePadding: 0,
            margin: 0,
            dots: false,
            autoplay: true,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            pauseOnHover: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 2
                },
                760: {
                    items: 1
                },
                990: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1500: {
                    items: 1
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('#blogslide4').length > 0) {
        $('#blogslide4').owlCarousel({
            slideBy: 2,
            loop: true,
            // stagePadding: 10,
            margin: 20,
            autoplay: true,
            pauseOnHover: false,
            nav: false,
            dots: false,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                480: {
                    items: 1,
                    margin: 0
                },
                560: {
                    items: 2
                },
                760: {
                    items: 3
                },
                990: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1500: {
                    items: 4
                }
            }
        });
    }

    // Testimonial
    if ($('.testimonial-item').length > 0) {
        $('.testimonial-item').owlCarousel({
            items: 2.5,
            loop: true,
            stagePadding: 0,
            margin: 0,
            dots: false,
            autoplay: true,
            animateOut: 'zoomOut',
            animateIn: 'zoomIn',
            pauseOnHover: false,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 2
                },
                770: {
                    items: 2
                },
                990: {
                    items: 2.5
                },
                1200: {
                    items: 2.5
                },
                1500: {
                    items: 2.5
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }


    if ($('.blog-half-slider').length > 0) {
        $('.blog-half-slider').owlCarousel({
            items: 2.5,
            loop: true,
            stagePadding: 0,
            margin: 40,
            dots: false,
            autoplay: true,
            animateOut: 'zoomOut',
            animateIn: 'zoomIn',
            pauseOnHover: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 2
                },
                770: {
                    items: 2
                },
                990: {
                    items: 2.5
                },
                1200: {
                    items: 2.5
                },
                1500: {
                    items: 2.5
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('#video-box').length > 0) {
        $('#video-box').owlCarousel({
            items: 4,
            loop: true,
            stagePadding: 0,
            margin: 20,
            singleItem: true,
            dots: false,
            autoplay: true,
            pauseOnHover: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                560: {
                    items: 2
                },
                770: {
                    items: 3
                },
                990: {
                    items: 3
                },
                1200: {
                    items: 4
                },
                1500: {
                    items: 4
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('#instagram').length > 0) {
        $('#instagram').owlCarousel({
            items: 5,
            loop: true,
            stagePadding: 0,
            margin: 20,
            singleItem: true,
            dots: false,
            autoplay: true,
            pauseOnHover: false,
            nav: false,
            responsive: {
                0: {
                    items: 2
                },
                480: {
                    items: 2
                },
                560: {
                    items: 4
                },
                770: {
                    items: 4
                },
                990: {
                    items: 5
                },
                1200: {
                    items: 5
                },
                1500: {
                    items: 5
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('#team-carousel-1').length > 0) {
        $('#team-carousel-1').owlCarousel({
            items: 4,
            loop: true,
            stagePadding: 0,
            margin: 20,
            singleItem: true,
            autoplay: true,
            pauseOnHover: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 2
                },
                770: {
                    items: 3
                },
                990: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1500: {
                    items: 4
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    if ($('#team-carousel-2').length > 0) {
        $('#team-carousel-2').owlCarousel({
            items: 4,
            loop: true,
            stagePadding: 0,
            margin: 20,
            singleItem: true,
            autoplay: true,
            pauseOnHover: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                560: {
                    items: 2
                },
                770: {
                    items: 3
                },
                990: {
                    items: 4
                },
                1200: {
                    items: 4
                },
                1500: {
                    items: 4
                }
            },
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    var carouselSlider = new Swiper('.services-carousel', {
        slidesPerGroup: 1,
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: 3000,
        speed: 800,
        spaceBetween: 30,
        navigation: false,
        pagination: false,
        breakpoints: {
            2500: {
                slidesPerView: 3.5
            },
            2000: {
                slidesPerView: 3.5
            },
            1499: {
                slidesPerView: 3.5
            },
            1200: {
                slidesPerView: 2.5
            },

            991: {
                slidesPerView: 2
            },

            767: {
                slidesPerView: 1

            },
            300: {
                slidesPerView: 1

            }
        }
    });

    if ($('.testimonial-classic').length > 0) {
        $('.testimonial-classic').owlCarousel({
            items: 1,
            loop: true,
            stagePadding: 0,
            margin: 0,
            dots: true,
            autoplay: true,
            pauseOnHover: false,
            nav: false,
            navText: ['<span class="ti-arrow-left">', '<span class="ti-arrow-right">']
        });
    }

    /*==================================
        Parrallax Scene
    ======================================*/

    var scenes = [];
    var scenesSelector = document.querySelectorAll('.parallax-scene');

    for (var i = 0; i < scenesSelector.length; i++) {
        scenes[i] = new Parallax(scenesSelector[i]);
    }

    /*==================================
        Architecture Slider
    ======================================*/


    if ($(".sl-hero-has-animation").length > 0) {
        setTimeout(function () {
            $(".sl-hero-has-animation").addClass("sl-hero-animate");
        }, 100);
    }

    var heroPropCarouselItems = 1;

    $(".sl-hero-props-carousel-1 .carousel-item").each(function (index, element) {
        if (index == 0) {
            $(".sl-hero-props-carousel-1-prices").addClass(
                "sl-price-active sl-first-time"
            );
        }

        $(".sl-hero-props-carousel-1-prices .sl-carousel-ticker-counter").append(
            "<span>0" + heroPropCarouselItems + "</span>"
        );

        heroPropCarouselItems += 1;
    });

    $(".sl-hero-props-carousel-1-prices .sl-carousel-ticker-total").append(
        "<span>0" + $(".sl-hero-props-carousel-1 .carousel-item").length + "</span>"
    );

    $(".sl-hero-props-carousel-1").on("slide.bs.carousel", function (carousel) {
        $(".sl-hero-props-carousel-1-prices").removeClass("sl-first-time");
        $(".sl-hero-props-carousel-1-prices").carousel(carousel.to);
    });

    $(".sl-hero-props-carousel-1").on("slid.bs.carousel", function (carousel) {
        var tickerPos = carousel.to * 13;

        $(".sl-hero-props-carousel-1-prices .sl-carousel-ticker-counter > span").css("transform", "translateY(-" + tickerPos + "px)");
    });

    $(".sl-hero-props-carousel-1 .sl-carousel-control-next").click(function (e) {
        $(".sl-hero-props-carousel-1").carousel("next");
    });

    $(".sl-hero-props-carousel-1 .sl-carousel-control-prev").click(function (e) {
        $(".sl-hero-props-carousel-1").carousel("prev");
    });

    $(".sl-hero-props-carousel-2-right").on("slide.bs.carousel", function (carousel) {
        if (carousel.direction == "left") {
            $(".sl-hero-props-carousel-2-left").carousel("next");
        } else {
            $(".sl-hero-props-carousel-2-left").carousel("prev");
        }
    });

    $(".sl-hero-props-carousel-2 .sl-carousel-control-next").click(function (e) {
        $(".sl-hero-props-carousel-2-right").carousel("next");
    });

    $(".sl-hero-props-carousel-2 .sl-carousel-control-prev").click(function (e) {
        $(".sl-hero-props-carousel-2-right").carousel("prev");
    });

    var heroPropCarousel2Items = 1;

    $(".sl-hero-props-carousel-2-right .carousel-item").each(function (index, element) {
        $(".sl-hero-props-carousel-2 .sl-carousel-ticker-counter").append(
            "<span>0" + heroPropCarousel2Items + "</span>"
        );
        heroPropCarousel2Items += 1;
    });

    $(".sl-hero-props-carousel-2 .sl-carousel-ticker-total").append(
        "<span>0" +
        $(".sl-hero-props-carousel-2-right .carousel-item").length +
        "</span>"
    );

    $(".sl-hero-props-carousel-2-right").on("slid.bs.carousel", function (carousel) {
        var tickerPos = carousel.to * 13;

        $(".sl-hero-props-carousel-2 .sl-carousel-ticker-counter > span").css(
            "transform",
            "translateY(-" + tickerPos + "px)"
        );
    });

    /*==================================
        Background image // Custom tag
    ======================================*/

    $("[data-bg-image]").each(function () {
        $(this).data('image', $(this).css('background-image'));
        var url = "url('" + $(this).attr('data-bg-image') + "')";
        $(this).css('background-image', url)
    });

    /*==================================
        Opacity // Custom tag
    ======================================*/

    $("[data-opacity]").each(function () {
        $(this).data('opacity', $(this).css('opacity'));
        var url = $(this).attr('data-opacity');
        $(this).css('opacity', url)
    });


    /*==================================
        Opacity // Custom tag
    ======================================*/

    $("[data-height]").each(function () {
        $(this).data('height', $(this).css('height'));
        var url = $(this).attr('data-height');
        $(this).css('height', url)
    });



    window.sr = ScrollReveal({ reset: false });


    sr.reveal('.block-reveal', {
        viewFactor: 0.5
    });
    sr.reveal('.text-block', {
        viewFactor: 0.5
    });

    $.fn.visible = function (partial) {

        var $t = $(this),
            $w = $(window),
            viewTop = $w.scrollTop(),
            viewBottom = viewTop + $w.height(),
            _top = $t.offset().top,
            _bottom = _top + $t.height(),
            compareTop = partial === true ? _bottom : _top,
            compareBottom = partial === true ? _top : _bottom;
        return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
    };
    var allMods = $(".block-reveal");
    allMods.each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass("already-visible");
        }
    });
    $(window).scroll(function (event) {
        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("block-reveal-inner");
            }
        });
    });
    $(window).scroll(function (event) {
        allMods.each(function (i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("block-reveal-inner");
            }
        });
    });

    /*==============================
        Radial Progress
    ================================*/

    $('.radial-progress').waypoint(function () {
        $('.radial-progress').easyPieChart({
            lineWidth: 5,
            scaleLength: 0,
            rotate: -45,
            trackColor: false,
            lineCap: 'square',
            size: 200
        });

    }, {
        triggerOnce: true,
        offset: 'bottom-in-view'
    });

    /*==============================
        Price Slider Active
    ================================*/

    $('#slider-range').slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function (event, ui) {
            $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
        }
    });
    $('#amount').val('$' + $('#slider-range').slider('values', 0) +
        " - $" + $('#slider-range').slider('values', 1));

    /*===============================
        Quantity
    =================================*/

    $('.pro-qty').prepend('<span class="dec qtybtn">-</span>');
    $('.pro-qty').append('<span class="inc qtybtn">+</span>');
    $('.qtybtn').on('click', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });

    /*==================================
        Google Map Locations
    ======================================*/

    if ($('.google-map-area').length > 0) {
        var data = [{
            lat: 23.76161,
            lon: 90.4357444,
            title: 'Title A1',
            html: '<h3>Content A1</h3>',
            zoom: 8,
            icon: 'http://www.google.com/mapfiles/markerA.png'
        }, {
            lat: 23.7614699,
            lon: 90.4093081,
            title: 'Title B1',
            html: '<h3>Content B1</h3>',
            zoom: 8,
            icon: 'http://www.google.com/mapfiles/markerA.png'
        }];
    }

    /* =====================================
           Parallax
    ====================================== */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) {
            $('.creative-st-header').addClass('header-appear');
        }
        else {
            $('.creative-st-header').removeClass('header-appear');
        }
    });

    /* ===================================
        Scroll
   ====================================== */

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60
        }, 1200);
    });
    if ($(window).width() > 992) {
        $(".studio-parallax").parallaxie({
            speed: 0.55,
            offset: 0,
        });
    }

    /* ===================================
         Side Menu
    ====================================== */

    $(window).on("load", function () {
        "use strict";
        $('.side-menu.hidden').removeClass('hidden');
    });
    if ($("#sidemenu_toggle").length) {
        $("#sidemenu_toggle").on("click", function () {
            $(".pushwrap").toggleClass("active");
            $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
        }), $("#close_side_menu").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
        }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        }), $("#btn_sideNavClose").on("click", function () {
            $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
        });
    }

    /*==================================
        Image Comparision
    ======================================*/

    $('.comparision-slider').each(function () {
        var cur = $(this);
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
        drags(cur.find('.handle'), cur.find('.resize'), cur);
    });

    $(window).resize(function () {
        $('.comparision-slider').each(function () {
            var cur = $(this);
            var width = cur.width() + 'px';
            cur.find('.resize img').css('width', width);
        });
    });

    /*==================================
        Charts
    ======================================*/

    if (document.getElementById('marketsChartBtcLight')) {
        am4core.ready(function () {
            // Create chart
            var chart = am4core.create('marketsChartBtcLight', am4charts.XYChart);

            chart.data = generateChartData();

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.baseInterval = {
                timeUnit: 'minute',
                count: 1,
            };
            dateAxis.tooltip.disabled = true;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = true;
            dateAxis.renderer.paddingBottom = 15;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.renderer.ticks.template.disabled = true;

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'prices';
            series.tooltipText = 'prices: [bold]{valueY}[/]';
            series.fillOpacity = 0.1;
            series.fill = am4core.color('#00cc93');
            series.stroke = am4core.color('#00cc93');
            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color('#2a2e39');
            series.tooltip.background.stroke = am4core.color('#2a2e39');

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.opacity = 1;
            dateAxis.start = 0;
            dateAxis.keepSelection = true;
            chart.zoomOutButton.background.fill = am4core.color(
                'rgba(0, 0, 0, 0.09)'
            );
            chart.zoomOutButton.icon.stroke = am4core.color('rgba(0, 0, 0, 0.40)');
            chart.zoomOutButton.background.states.getKey(
                'hover'
            ).properties.fill = am4core.color('#00cc93');

            function generateChartData() {
                var chartData = [];
                var firstDate = new Date();
                firstDate.setMinutes(firstDate.getDate() - 500);

                var prices = 500;
                for (var i = 0; i < 500; i++) {
                    var newDate = new Date(firstDate);
                    newDate.setMinutes(newDate.getMinutes() + i);
                    prices += Math.round(
                        (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
                    );
                    chartData.push({
                        date: newDate,
                        prices: prices,
                    });
                }
                return chartData;
            }
        });
    }

    if (document.getElementById('marketsChartEthLight')) {
        am4core.ready(function () {
            var chart = am4core.create('marketsChartEthLight', am4charts.XYChart);

            chart.data = generateChartData();

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.baseInterval = {
                timeUnit: 'minute',
                count: 1,
            };
            dateAxis.tooltip.disabled = true;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = true;
            dateAxis.renderer.paddingBottom = 15;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.renderer.ticks.template.disabled = true;

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'prices';
            series.tooltipText = 'prices: [bold]{valueY}[/]';
            series.fillOpacity = 0.1;
            series.fill = am4core.color('#f74745');
            series.stroke = am4core.color('#f74745');
            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color('#2a2e39');
            series.tooltip.background.stroke = am4core.color('#2a2e39');

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.opacity = 1;
            dateAxis.start = 0;
            dateAxis.keepSelection = true;
            chart.zoomOutButton.background.fill = am4core.color(
                'rgba(0, 0, 0, 0.09)'
            );
            chart.zoomOutButton.icon.stroke = am4core.color('rgba(0, 0, 0, 0.40)');
            chart.zoomOutButton.background.states.getKey(
                'hover'
            ).properties.fill = am4core.color('#f74745');

            function generateChartData() {
                var chartData = [];
                var firstDate = new Date();
                firstDate.setMinutes(firstDate.getDate() - 500);
                var prices = 500;
                for (var i = 0; i < 500; i++) {
                    var newDate = new Date(firstDate);
                    newDate.setMinutes(newDate.getMinutes() + i);
                    prices += Math.round(
                        (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
                    );
                    chartData.push({
                        date: newDate,
                        prices: prices,
                    });
                }
                return chartData;
            }
        });
    }

    if (document.getElementById('marketsChartLtcLight')) {
        am4core.ready(function () {
            var chart = am4core.create('marketsChartLtcLight', am4charts.XYChart);

            chart.data = generateChartData();

            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.baseInterval = {
                timeUnit: 'minute',
                count: 1,
            };
            dateAxis.tooltip.disabled = true;
            dateAxis.renderer.grid.template.disabled = true;
            dateAxis.renderer.labels.template.disabled = true;
            dateAxis.renderer.ticks.template.disabled = true;
            dateAxis.renderer.paddingBottom = 15;

            var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
            valueAxis.tooltip.disabled = true;
            valueAxis.renderer.grid.template.disabled = true;
            valueAxis.renderer.labels.template.disabled = true;
            valueAxis.renderer.ticks.template.disabled = true;

            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.dateX = 'date';
            series.dataFields.valueY = 'prices';
            series.tooltipText = 'prices: [bold]{valueY}[/]';
            series.fillOpacity = 0.1;
            series.fill = am4core.color('#00cc93');
            series.stroke = am4core.color('#00cc93');
            series.tooltip.getFillFromObject = false;
            series.tooltip.background.fill = am4core.color('#2a2e39');
            series.tooltip.background.stroke = am4core.color('#2a2e39');

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.lineY.opacity = 1;
            dateAxis.start = 0;
            dateAxis.keepSelection = true;
            chart.zoomOutButton.background.fill = am4core.color(
                'rgba(0, 0, 0, 0.09)'
            );
            chart.zoomOutButton.icon.stroke = am4core.color('rgba(0, 0, 0, 0.40)');
            chart.zoomOutButton.background.states.getKey(
                'hover'
            ).properties.fill = am4core.color('#00cc93');

            function generateChartData() {
                var chartData = [];
                var firstDate = new Date();
                firstDate.setMinutes(firstDate.getDate() - 500);
                var prices = 500;
                for (var i = 0; i < 500; i++) {
                    var newDate = new Date(firstDate);
                    newDate.setMinutes(newDate.getMinutes() + i);
                    prices += Math.round(
                        (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10
                    );
                    chartData.push({
                        date: newDate,
                        prices: prices,
                    });
                }
                return chartData;
            }
        });
    }

    if ($('#vanta-globe').length > 0) {
        VANTA.GLOBE({
            el: "#vanta-globe",
            mouseControls: false,
            touchControls: true,
            gyroControls: false,
            minHeight: 700.00,
            minWidth: 400.00,
            scale: 0.90,
            scaleMobile: 1.00,
            color: 0xff9500,
            color2: 0xffc300,
            size: 0.90,
            backgroundColor: 0xf5f5f5
        })
    }

    function vantafunc(x) {
        if (x.matches) {
            if ($('#vanta-globe').length > 0) {
                VANTA.GLOBE({
                    el: "#vanta-globe",
                    mouseControls: false,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 300.00,
                    minWidth: 50.00,
                    scale: 1.00,
                    scaleMobile: 0.50,
                    color: 0xff9500,
                    color2: 0xffc300,
                    size: 1.00,
                    backgroundColor: 0xf5f5f5
                })
            }
        } else {
            if ($('#vanta-globe').length > 0) {
                VANTA.GLOBE({
                    el: "#vanta-globe",
                    mouseControls: false,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 700.00,
                    minWidth: 400.00,
                    scale: 0.90,
                    scaleMobile: 1.00,
                    color: 0xff9500,
                    color2: 0xffc300,
                    size: 0.90,
                    backgroundColor: 0xf5f5f5
                })
            }
        }
    }

    var x = window.matchMedia("(max-width: 768px)")
    vantafunc(x)
    x.addListener(vantafunc)

    $('.portfolio-carousel').owlCarousel({

        loop: true,
        margin: 10,
        slideSpeed: 5000,
        slideTransition: 'linear',
        nav: false,
        dots: false,
        autoplay: false,
        autoplayTimeout: 8000,
        autoplayHoverPause: true,
        responsive: {
            0: {

                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            },
        }

    });

    $('.portfolio-right-arr').click(function () {
        var owl = $('.portfolio-carousel');
        owl.owlCarousel();
        owl.trigger('next.owl.carousel');
    });
    $('.portfolio-left-arr').click(function () {
        var owl = $('.portfolio-carousel');
        owl.owlCarousel();
        owl.trigger('prev.owl.carousel');
    });

    // Top Menu Push Button

    $.fn.jPushMenu = function (customOptions) {
        var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);

        $('body').addClass(o.pushBodyClass);

        $(this).addClass('jPushMenuBtn');

        $(this).click(function (e) {
            e.stopPropagation();

            var target = '',
                push_direction = '';

            if ($(this).is('.' + o.showLeftClass)) {
                target = '.cbp-spmenu-left';
                push_direction = 'toright';
            }
            else if ($(this).is('.' + o.showRightClass)) {
                target = '.cbp-spmenu-right';
                push_direction = 'toleft';
            }
            else if ($(this).is('.' + o.showTopClass)) {
                target = '.cbp-spmenu-top';
            }
            else if ($(this).is('.' + o.showBottomClass)) {
                target = '.cbp-spmenu-bottom';
            }

            if (target == '') {
                return;
            }

            $(this).toggleClass(o.activeClass);
            $(target).toggleClass(o.menuOpenClass);

            if ($(this).is('.' + o.pushBodyClass) && push_direction != '') {
                $('body').toggleClass(o.pushBodyClass + '-' + push_direction);
            }

            $('.jPushMenuBtn').not($(this)).toggleClass('disabled');

            return;
        });

        var jPushMenu = {
            close: function (o) {
                $('.jPushMenuBtn,body,.cbp-spmenu')
                    .removeClass('disabled ' + o.activeClass + ' ' + o.menuOpenClass + ' ' + o.pushBodyClass + '-toleft ' + o.pushBodyClass + '-toright');
            }
        }

        if (o.closeOnClickOutside) {
            $(document).click(function () {
                jPushMenu.close(o);
            });
        }

    };

    $.fn.jPushMenu.defaultOptions = {
        pushBodyClass: 'push-body',
        showLeftClass: 'menu-left',
        showRightClass: 'menu-right',
        showTopClass: 'menu-top',
        showBottomClass: 'menu-bottom',
        activeClass: 'menu-active',
        menuOpenClass: 'menu-open',
        closeOnClickOutside: true,
        closeOnClickLink: true
    };

    // Columned Slider

    var swiper = new Swiper('.columned-slider-inner', {
        slidesPerView: 4,
        spaceBetween: 0,

        breakpoints: {
            1250: {
                slidesPerView: 4,
            },
            1050: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            750: {
                slidesPerView: 2,
            },

            550: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            }
        }
    });

}(jQuery));

/*==================================
    Image Comparsion Function
======================================*/

function drags(dragElement, resizeElement, container) {

    dragElement.on('mousedown touchstart', function (e) {

        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var startX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;

        var dragWidth = dragElement.outerWidth(),
            posX = dragElement.offset().left + dragWidth - startX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth();
        minLeft = containerOffset + 10;
        maxLeft = containerOffset + containerWidth - dragWidth - 10;
        dragElement.parents().on("mousemove touchmove", function (e) {
            var moveX = (e.pageX) ? e.pageX : e.originalEvent.touches[0].pageX;
            leftValue = moveX + posX - dragWidth;
            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }
            widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';
            $('.draggable').css('left', widthValue).on('mouseup touchend touchcancel', function () {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
            $('.resizable').css('width', widthValue);
        }).on('mouseup touchend touchcancel', function () {
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
        e.stopPropagation();
    }).on('mouseup touchend touchcancel', function (e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
}
if ($("#creative_studio_menu").length) {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#creative_studio_menu'
    });
}
jQuery('.testimonial-slider2').owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,

});

/* ===================================
   Marketing progress bar Start
   ====================================== */

$(".progress-bar").each(function () {
    $(this).appear(function () {
        $(this).animate({ width: $(this).attr("aria-valuenow") + "%" }, 3000)
    });
});

/* ===================================
    Marketing progress bar end
====================================== */

/* ===================================
    Side Menu
====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu-portfolio").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu-portfolio").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu-portfolio").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu-portfolio").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}
if ($(window).width() > 992) {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) {
            $('header').addClass('header-appear');
            $('#slider-social').addClass('slider-social-fixed');
        }
        else {
            $('header').removeClass('header-appear');
            $('#slider-social').removeClass('slider-social-fixed');
        }
    });
}
else {
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) {
            $('header').addClass('header-appear');

        }
        else {
            $('header').removeClass('header-appear');
        }
    });
}

/*==================================
    Arrow Box Hide And Show Start
======================================*/

$('.mini-custom-box.bg-blue-cyan').on("mouseenter", function () {
    $('.arrow-box').addClass('arrow-box-hidden');
    $('.arrow-box .las').addClass('las-hidden');
    $('.arrow-box1').addClass('arrow-box1-display');
    $('.arrow-box1 .las').addClass('las-visible');
});

$('.mini-custom-box').on("mouseleave", function () {
    $('.arrow-box').removeClass('arrow-box-hidden');
    $('.arrow-box .las').removeClass('las-hidden');
    $('.arrow-box1').removeClass('arrow-box1-display');
    $('.arrow-box1 .las').removeClass('las-visible');
});

/*==================================
    Arrow Box Hide And Show End
======================================*/

/*==================================
    Text Zoom In Start
======================================*/

anime.timeline({ loop: true })
    .add({
        targets: '.Text-zoom-in .Text-zoom-word',
        scale: [14, 1],
        opacity: [0, 1],
        easing: "easeOutCirc",
        duration: 800,
        delay: (el, i) => 800 * i
    }).add({
        targets: '.Text-zoom-in',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });

/*==================================
  Text Zoom In End
======================================*/

/*==================================
    Toggle Navigation Start
======================================*/

$('#toggle-btn').on('mouseover', function () {

    $('#toggle-btn').on("click", function () {
        $('.broad').removeClass('reverse-nav');
        setTimeout(function () {
            $('.broad').addClass('broad-nav');
        }, 200);
        $("#toggle-btn").addClass("close_nav");
        $("#toggle-btn").attr("id", "close_nav");
        $("#close_nav").removeClass("toggle-btn");

    });
    $('#close_nav').on("click", function () {

        $('.broad').addClass('reverse-nav');
        $("#close_nav").removeClass("close_nav");
        $("#close_nav").attr("id", "toggle-btn");
        $("#toggle-btn").removeClass("close_nav");
        setTimeout(function () {
            $('.broad').removeClass('broad-nav');
            $('.broad').removeClass('reverse-nav');
        }, 200);
    });
});

/*==================================
    Toggle Navigation ENd
======================================*/

/*==================================
    Side Nav Start
======================================*/

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

/*==================================
    Side Nav End
======================================*/

/* ===================================
  Portfolio Painting  Owl Carousel Start
 ====================================== */

$(window).on("load", function () {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4;
    var syncedSecondary = true;

    sync1.owlCarousel({
        center: true,
        autoWidth: true,
        singleItem: true,
        items: 3,
        slideSpeed: 3000,
        nav: true,
        dots: false,
        loop: true,
        margin: 0,
        autoplay: false,
        responsiveRefreshRate: 200,
        transitionStyle: "fade",

        0: {
            items: 1,
        },
        480: {
            items: 1,
        },

        800: {
            items: 1,
        }

    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage,
            responsiveRefreshRate: 100,
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();
        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }
    sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

/* ===================================
  Portfolio Painting Owl Carousel End
 ====================================== */

/*===================================
    Upside Menu Navbar Start
====================================== */

$('.menu-btn').on("click", function () {
    $('.outer-wrapper').removeClass('end-anm1');
    $('.outer-wrapper').addClass('inner-wrapper-top');
    $('.main-content').addClass('main-content-hide');
    $('body').css({ overflow: 'hidden' });
    $('.outer-wrapper').addClass('start-anm1');

});
$('.close-outerwindow').on("click", function () {
    $('.outer-wrapper').removeClass('start-anm1');
    $('.outer-wrapper').addClass('end-anm1');
    $('body').css({ overflow: 'visible' });
    $('.main-content').removeClass('main-content-hide');
    setTimeout(function () {
        $('.outer-wrapper').removeClass('inner-wrapper-top');
    }, 800);
});
$('.outer-wrapper ul li a').click(function () {
    $('.outer-wrapper').removeClass('inner-wrapper-top');
});

/*===================================
        Upside Menu Navbar End
====================================== */

/*===================================
        Handbag Scroll Slider Start
====================================== */

// debounce from underscore.js
function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// use x and y mousewheel event data to navigate flickity
function slick_handle_wheel_event(e, slick_instance, slick_is_animating) {
    // do not trigger a slide change if another is being animated
    if (!slick_is_animating) {
        // pick the larger of the two delta magnitudes (x or y) to determine nav direction
        var direction =
            Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

        console.log("wheel scroll ", e.deltaX, e.deltaY, direction);

        if (direction > 0) {
            // next slide
            slick_instance.slick("slickNext");
        } else {
            // prev slide
            slick_instance.slick("slickPrev");
        }
    }
}

// debounce the wheel event handling since trackpads can have a lot of inertia
var slick_handle_wheel_event_debounced = debounce(
    slick_handle_wheel_event
    , 100, true
);

// init slider 
const slick_2 = $(".slides");
slick_2.slick({
    dots: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: false
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 3000,
                slidesToScroll: 1
            }
        }
    ]
});
var slick_2_is_animating = false;

slick_2.on("afterChange", function (index) {
    console.log("Slide after change " + index);
    slick_2_is_animating = false;
});

slick_2.on("beforeChange", function (index) {
    console.log("Slide before change " + index);
    slick_2_is_animating = true;
});

slick_2.on("wheel", function (e) {
    slick_handle_wheel_event_debounced(e.originalEvent, slick_2, slick_2_is_animating);
});

/*===================================
        Handbag Scroll Slider End
====================================== */


/*===================================
        Ad Aegncy Menu Start
====================================== */
$(".ham1").click(function () {
    $(".main-content-box").css("transform", "rotate(-20deg)");
    $(".ham1").css("transform", "rotate(-90deg)");
    $(".cross1").css("transform", "rotate(0deg)");
});

$(".cross1").click(function () {
    $(".main-content-box").css("transform", "rotate(0deg)");
    $(".ham1").css("transform", "rotate(0deg)");
    $(".cross1").css("transform", "rotate(90deg)");
});

/*===================================
        Ad Aegncy Menu End
====================================== */

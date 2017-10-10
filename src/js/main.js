// Responsive breakpoints
var phone = 768;

// Variables
var windowWidth = $(window).width(),
    lang = $('html').attr('lang'),
    body = $('body'),
    selectmenuMultiple_home = $(".multiselect select"),
    selectmenu_step2 = $("#known");

function setDDdesktop(elements) {

    // transform classic select to stylized select
    if(elements.selectmenu('instance')===undefined) {
        elements.selectmenu();
    }
}

function setDDmobile(elements) {

    // detroy eventual stylized select if selectmenu instancied, destroy
    if(elements.selectmenu('instance')!=undefined) {
        elements.selectmenu('destroy');
    }
    elements.addClass('select-mobile-custom');

}

function setDDMdesktop(elements){
    // transform classic select multiple to stylized select multiple
    if(elements.selectmenu('instance')===undefined) {
        elements.attr('multiple',true);
    }
}

function setDDMmobile(elements){
    // detroy eventual stylized select if selectmenu instancied, destroy
    if(elements.selectmenu('instance')!=undefined) {
        elements.selectmenu('destroy');
    }
    elements.removeAttr('multiple');
    // elements.addClass('select-mobile-custom');
}

$(document).ready(function(){

// NAV FIXED ======================= /

// var toptop = $(".mainnav").offset().top;

// $(window).scroll(function(){
//   var dscroll=$(window).scrollTop();
//   //FIX TO TOP
//   if(toptop<dscroll){
//         $(".mainnav").addClass("sticky");
//         }
//        else{$(".mainnav").removeClass("sticky");}
  
// });

// SMOOTH SCROLL ======================= /

// $('a[href*="#"]:not([href="#"])').on('click', function() { // Au clic sur un élément
//       var page = $(this).attr('href'); // Page cible
//       var speed = 1200; // Durée de l'animation (en ms)
//       $('html, body').animate( { scrollTop: $(page).offset().top - $(".mainnav").height()}, speed ); // Go
//       return false;
//     });


// TOP  ======================= /

// if ($('#top').length) {
//     var scrollTrigger = 100, // px
//         backToTop = function () {
//             var scrollTop = $(window).scrollTop();
//             if (scrollTop > scrollTrigger) {
//                 $('#top').addClass('show');
//             } else {
//                 $('#top').removeClass('show');
//             }
//         };
//     backToTop();
//     $(window).on('scroll', function () {
//         backToTop();
//     });
//     $('#top').on('click', function (e) {
//         e.preventDefault();
//         $('html,body').animate({
//             scrollTop: 0
//         }, 700);
//     });
// }

// SPY SCROLL ======================= /

// $(window).scroll(function() {

//   var scrollPosition = $(window).scrollTop()+500;

//   if (scrollPosition > $("#tour").offset().top) {
//     $(".mainnav a span.selected").removeClass("selected selected-1");
//     $('.mainnav a[href="#tour"] span').addClass("selected posleft");
//   }
//   if (scrollPosition > $("#video").offset().top) {
//     $(".mainnav a span.selected").removeClass("selected selected-1");
//     $('.mainnav a[href="#video"] span').addClass("selected posleft");
//   }
//   if (scrollPosition > $("#discographie").offset().top) {
//     $(".mainnav a span.selected").removeClass("selected selected-1");
//     $('.mainnav a[href="#discographie"] span').addClass("selected");
//   }
//   if (scrollPosition > $("#shop").offset().top) {
//     $(".mainnav a span.selected").removeClass("selected selected-1");
//     $('.mainnav a[href="#shop"] span').addClass("selected");
//   }
//   if (scrollPosition > $("#news").offset().top) {
//     $(".mainnav a span.selected").removeClass("selected selected-1");
//     $('.mainnav a[href="#news"] span').addClass("selected");
//   }
// });

// MENU HOVER ======================= /

// $(".burger").click(function(){
//     $(".navhover").toggleClass("menu-burger");
//     $(".burger").toggleClass("active");
//     });

// MENU HOVER ======================= /

// $("header").append("<div class='burger'><div></div><div></div><div></div></div>");


// SWIPER ======================= /

// var swiper = new Swiper('.swiper-container', {
//     pagination: '.swiper-pagination',
//     nextButton: '.swiper-button-next',
//     prevButton: '.swiper-button-prev',
//     slidesPerView: 6,
//     paginationClickable: true,
//     spaceBetween: 30,
//     loop: true,
//     breakpoints: {
//         // when window width is <= 499px
//         300: {
//             slidesPerView: 1,
//             spaceBetweenSlides: 30
//         },
//         // when window width is <= 499px
//         400: {
//             slidesPerView: 2,
//             spaceBetweenSlides: 30
//         },
//         // when window width is <= 600px
//         600: {
//             slidesPerView: 3,
//             spaceBetweenSlides: 30
//         },
//         // when window width is <= 768px
//         768: {
//             slidesPerView: 4,
//             spaceBetweenSlides: 30
//         },
//         // when window width is <= 999px
//         999: {
//             slidesPerView: 5,
//             spaceBetweenSlides: 30
//         }
//     }
//     });

// SCROLL DELAY DE NOTRE OLI mais à ... ========================= /

// $(window).scroll(function(){
//   var scrolledFromTop = $(window).scrollTop() + $(window).height();
//   $(".appear").each(function(){
//     var distanceFromTop = $(this).offset().top;
//     if(scrolledFromTop >= distanceFromTop+100){
//       var delaiAnim = $(this).data("delai");
//       $(this).delay(delaiAnim).animate({
//         top:0,
//         opacity:1
//       });
//     }
//   });
// });

// SWIPER SLIDER ========================= /


	var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 1,
    loop: true,
    // breakpoints: {
    //     // when window width is <= 499px
    //     300: {
    //         slidesPerView: 1,
    //         spaceBetweenSlides: 30
    //     },
    //     // when window width is <= 499px
    //     400: {
    //         slidesPerView: 2,
    //         spaceBetweenSlides: 30
    //     },
    //     // when window width is <= 600px
    //     600: {
    //         slidesPerView: 3,
    //         spaceBetweenSlides: 30
    //     },
    //     // when window width is <= 768px
    //     768: {
    //         slidesPerView: 4,
    //         spaceBetweenSlides: 30
    //     },
    //     // when window width is <= 999px
    //     999: {
    //         slidesPerView: 5,
    //         spaceBetweenSlides: 30
    //     }
    // }
    });



// GALERY RWD VERT ========================= /

// $(document).ready(function () {
//   $(".gallery-img").click(function(){
//     var t = $(this).attr("src");
//     $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
//     $("#myModal").modal();
//   });
// });

    // Stylize dropdown menus
        if(windowWidth>phone) { // Desktop
            // setDDdesktop(selectmenu_home);
            setDDMdesktop(selectmenuMultiple_home);
        } else { // Mobile
            // setDDmobile(selectmenu_home);
            setDDMmobile(selectmenuMultiple_home);
        }

        // Range the km around location
        $('input[type=range]').on('input', function(e){
          var min = e.target.min,
              max = e.target.max,
              val = e.target.value;
          
          $(e.target).css({
            'backgroundSize': (val - min) * 100 / (max - min) + '% 100%'
          });
        }).trigger('input');
        // ------- Display number of km into the blue box
        var range = $('.input-range'),
          value = $('.range-value');

        value.html(range.attr('value') + ' km');

        range.on('input', function() {
          value.html(this.value + ' km');
        });


        // Table of items for autocomplete
        $( function() {
            var availableTags = [
              "Anderlecht",
              "Auderghem",
              "Berchem-Sainte-Agathe",
              "Ville de Bruxelles",
              "Etterbeek",
              "Evere",
              "Forest",
              "Ganshoren",
              "Ixelles",
              "Jette",
              "Koekelberg",
              "Molenbeek-Saint-Jean",
              "Saint-Gilles",
              "Saint-Josse-ten-Noode",
              "Schaerbeek",
              "Uccle",
              "Watermael-Boitsfort",
              "Woluwe-Saint-Lambert",
              "Woluwe-Saint-Pierre"
            ];
            $( "#city" ).autocomplete({
              source: availableTags
            });
          } );

        // TAG CHANGE COLOR ON CLICK ============ /
        // $('.tags li a').on('click', function(){
        //     var thisis = $(this);
        //     $('.tags li a').addClass('noselected');
        //     thisis.removeClass('noselected');
        // });

        // Date picker attribute ===========/
        $( "#datepicker" ).datepicker({
            // Desactived Week End
            beforeShowDay: $.datepicker.noWeekends,
            // To start from Monday
            firstDay : 1,
         });

        // Stylize dropdown menus
        if(windowWidth>phone) { // Desktop
            setDDdesktop(selectmenu_step2);
        } else { // Mobile
            setDDmobile(selectmenu_step2);
        }

});

/* -----------------------
 Function on resize
 ------------------- */

$(window).resize(function() {

    windowWidth = $(this).width();

    // Page - Home

        if(windowWidth>phone) { // Desktop

            // setDDdesktop(selectmenu_home);

        } else { // Mobile

            // setDDmobile(selectmenu_home);

        }
    
        if(windowWidth>phone) { // Desktop

            setDDMdesktop(selectmenuMultiple_home);

        } else { // Mobile

            setDDMmobile(selectmenuMultiple_home);

        }



    // Page - step_2

        if(windowWidth>phone) { // Desktop

            setDDdesktop(selectmenu_step2);

        } else { // Mobile

            setDDmobile(selectmenu_step2);

        }


});

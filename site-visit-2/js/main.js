$(document).ready(function(){

    let $btns = $('.button-group button');

    $btns.click(function(e){

        $('.button-group button').removeClass('actives');
        e.target.classList.add('actives');

        let selector = $(e.target).attr('data-filter');
        $('.grid').isotope({
            filter: selector
        });

        return false; 
    });

    $('#btn1').trigger('click');

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });

      $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive:{
            0:{
                items:1
            },
            544:{
                items: 2
            }
        }
      }); 

    //   menu

    let nav_ofset_top = $('.header').height() + 50;

      $(window).scroll(function(){
        let scrollDistance = $(window).scrollTop();
        
        if (scrollDistance >= nav_ofset_top){
            $('.main-menu').addClass('navbar_fixed');
        } else {
            $('.main-menu').removeClass('navbar_fixed');
        }
      });

});
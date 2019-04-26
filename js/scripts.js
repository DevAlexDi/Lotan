
$(document).ready(function(){

  //fixed menu

    $(window).scroll(function(){
      
      if($(window).scrollTop() >= $('.header-top').height()){
        $('.navigation').addClass('navigation--fixed');
      }
      else {
        $('.navigation').removeClass('navigation--fixed');
      }
    });
   //open search

   $('.header-search__search-icon').click(function(){
    $('.header-search').addClass('header-search--opened');
  });

  $('.header-search__form-close').click(function(){
    $('.header-search').removeClass('header-search--opened');
  });

   
    $("#to_top").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });


    $('.select-city').select2({
        width: 'resolve'
     });

     $('.select-size').select2({
        width: 'resolve'
     });

     $('.init-select').select2({
      width: 'resolve'
   });

   $(".range-slider").ionRangeSlider({
      min: 0,
      max: 50000,
      from: 0,
      type: "double",
      hide_min_max: true,
      postfix: " р",
      grid: false,
      grid_num: 5,
      onChange: function(){
        
      }
  });
     
    
    //  $('.tel-inp').inputmask({
    //     "mask": "+7 (999) 999-99-99"
    //     , "placeholder": "_"
    //     , showMaskOnHover: false
    //     , showMaskOnFocus: true
    // });

    $('.baner').slick({
        dots: true,
        arrows: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 1199,
              settings: {
                arrows: false
              }
            }
        ]
      });

      $('.filter__button-show').click(function(){
        $(this).addClass('filter__button-show--hidden');
        $(this).parent().find('.filter__hidden-checkboxes').addClass('filter__hidden-checkboxes--visible');
      });

      $('.filter__button-refresh').click(function(){
        $('.one-checkbox__checkbox').prop('checked',false);
      });

      // open/close filter

      function openFilter() {
        $('.catalog__filter').addClass('catalog__filter--visible');
        $('body, html').addClass('no-scroll');
      }
      function closeFilter() {
        if($('.catalog__filter').hasClass('catalog__filter--visible')){
          $('.catalog__filter').removeClass('catalog__filter--visible');
          $('body, html').removeClass('no-scroll');
        }
      }

      $('.xs-filter-button').click(function(e){
        e.stopPropagation();

        if($('.catalog__filter').hasClass('catalog__filter--visible')){
          closeFilter();
        }
        else {
          openFilter();
        }
        
      });

      $('body,html').click(function(){
        closeFilter();
      })

      $('.catalog__filter').click(function(e){
        e.stopPropagation();
      });

      $('.catalog__xs-close-filter').click(function(){
        closeFilter();
      });
});
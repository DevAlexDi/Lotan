$(document).ready(function(){
   
    $("#to_top").click(function(){
        $("html, body").animate({scrollTop:0},500);
    });


    $('.select-city').select2({
        width: 'resolve'
     });

     $('.select-size').select2({
        width: 'resolve'
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
});
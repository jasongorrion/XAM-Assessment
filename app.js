(function() {
    //CASE STUDIES SLIDER INTIALIZATION
    $('.case_studies_slider').slick({
        slidesToShow:3,
        dots: false,
        prevArrow: '<div class="cPrevArrow cArrow"><img src="https://staging.xam.com.au/wp-content/uploads/2023/08/Arrow-left.png" alt="prev arrow"></div>',
        nextArrow: '<div class="cNextArrow cArrow"><img src="https://staging.xam.com.au/wp-content/uploads/2023/08/Arrow-right.png" alt="prev arrow"></div>',
        autoplay: true,
        centerMode: true,
        centerPadding: '0px'
    });

    $('.accordion_header').click(function(){
        if($(this).hasClass('active_accordion')){
            $(this).find('.accordion_content').hide();
            $(this).find('.accordion_icon').text('+');
            $(this).removeClass('active_accordion');
        }else{
            $('.accordion_header').removeClass('active_accordion');
            $('.accordion_content').hide();
            $('.accordion_icon').text('+');
            $(this).addClass('active_accordion');
            $(this).find('.accordion_content').fadeIn();
            $(this).find('.accordion_icon').text('-');
        }
        
    });
})();
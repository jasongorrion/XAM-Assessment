(function() {
    //Mega Menu
    $(".has_sub_nav").hover(function () {
        $(this).addClass('mega_menu_active');
        $('header').addClass('mega_nav_active');
    }, function () {
        let elem = $(this)

        setTimeout(function(){ 
            elem.removeClass('mega_menu_active');
            $('header').removeClass('mega_nav_active');
        },800);
    });

    $(".mega_menu").hover(function () {
        $('.has_sub_nav').addClass('mega_menu_active');
        $('header').addClass('mega_nav_active');
    }, function () {
        setTimeout(function(){ 
            $('.has_sub_nav').removeClass('mega_menu_active');
            $('header').removeClass('mega_nav_active');
        },800);
    });

    //On scroll Animation
    let offset = 700;//Distance from Top before trigger animation
    let element_with_animation = $('.animated'); //Elements with animation

    updateElementsVisibility();

    //On scroll events
    $(document).on('scroll', function() {
        //Moving Text
        let scrollPosition = $(document).scrollTop();
        let moveToLeft = (scrollPosition/5) * -1;
        let translationToLeft = 'translateX(' + moveToLeft + 'px)';
        let moveToRight = scrollPosition/5;
        let translationToRight = 'translateX(' + moveToRight + 'px)';
        $('.moving_text_col_wrapper:first').css('transform', translationToLeft);
        $('.moving_text_col_wrapper:eq(1)').css('transform', translationToRight);
        $('.moving_text_col_wrapper:eq(2)').css('transform', translationToLeft);
        //End

        updateElementsVisibility();
    });

    function updateElementsVisibility(){
        let scrollPosition = $(document).scrollTop();

        //On scroll animation / entrance animations
        // Loop through each element
        element_with_animation.each(function() {
            // Get the top position of the current element
            var elementTop = $(this).offset().top;
            console.log(elementTop - offset <= scrollPosition);
            // Check if the element is near the top
            if (elementTop - offset <= scrollPosition) {
                // Add the class to the current element
                $(this).addClass('active');
            } else {
                // Remove the class if the element is not near the top
                $(this).removeClass('active');
            }
        });
    }
    
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

    //ACCORDION EVENT
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
$(function () {
    new WOW().init();
    // let v = $('#section-1').offset().top;
    // console.log(v);
    $('nav').find('a').click(function () {
        // console.log($(this).data('target'))
        let target = $(this).data('target');
        let o = $(target).offset().top;
        // console.log(o);
        $('html,body').animate({
            scrollTop: o
        });
    })
    $('.gotop').click(function (e) {
        $('html,body').animate({
            scrollTop: 0
        })
        e.preventDefault();
        return false;
    })
    $(window).scroll(function () {
        let h = $(window).scrollTop();
        console.log(h);
        let _in = 'bounceIn';
        let _out = 'hinge';
        if (h > 650) {
            $('.gotop').fadeIn();
            // $('.gotop').addClass('active');
            // $('.gotop').show().removeClass('animated ' + _out).addClass('animated ' + _in);
        } else {
            $('.gotop').fadeOut();
            // $('.gotop').removeClass('active');
            // $('.gotop').removeClass('animated ' + _in).addClass('animated ' + _out);
        }
    })
})
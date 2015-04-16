console.log('linked!');


window.onload = function() {

    $('.nav-div').click(function(event){
        $targetText = $(event.target).text();
        $targetDiv = $('.content').find('div[class*=' + $targetText + ']');

        $.smoothScroll({
            scrollTarget: $targetDiv,
            speed: 1000
        });
    });     
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navBarHeight = $('nav-div').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            };
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();

            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            };

            if (st > lastScrollTop && st > navBarHeight) {
                $('.nav-div').removeClass('nav-down').addClass('nav-up');
            } else {
                    $('.nav-div').removeClass('nav-up').addClass('nav-down');
            };

            lastScrollTop = st;

        };
   
};


    // $('#home-button').click(function() {
    //     $.smoothScroll({
    //         scrollTarget: $('.home-section'),
    //         speed: 900
    //     });
    // });






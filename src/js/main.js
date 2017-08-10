$(document).ready(function() {

    $(window).scroll(startCounter);
    $(window).scroll(onScroll);

    $('.menu__link').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
            //future  'scrollTop': $target.offset().top - 100 (nav_height)
        }, 1500, 'swing', function() {
            window.location.hash = target;
        });
    });

    function startCounter() {
        var onTop = $('#counter').offset().top - window.innerHeight;

        if ($(window).scrollTop() > onTop) {
            $(window).off("scroll", startCounter);
            $('.counter__number').each(function() {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                jQuery({
                    Counter: $this.text()
                }).animate({
                    Counter: countTo
                }, {
                    duration: 3000,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }
    }

    function onScroll() {
        var windowPos = $(window).scrollTop(),
            docHeight = $(document).height();

        $('.menu__link').each(function() {
            var theID = $(this).attr('href'),
                nav = $('.header__nav'),
                nav_height = nav.outerHeight(),
                divPos = $(theID).offset().top - 1,
                //future  divPos = $(theID).offset().top - nav_height - 1,
                divHeight = $(theID).height();

            if (windowPos >= divPos && windowPos <= (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("menu__link-active");

            } else {
                $("a[href='" + theID + "']").removeClass("menu__link-active");
            }
        });
    }
});
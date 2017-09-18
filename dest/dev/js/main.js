$(document).ready(function() {

    $(window).scroll(fixedMenu);
    $(window).scroll(startCounter);
    $(window).scroll(onScroll);


    $('.menu__link').on('click', function(e) {
        e.preventDefault();
        $(document).off("scroll");

        var target = this.hash,
        	nav = $('.header__nav'),
            nav_height = nav.outerHeight();
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - nav_height
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
                divPos = $(theID).offset().top - nav_height,
                //future  divPos = $(theID).offset().top - nav_height - 1,
                divHeight = $(theID).height();
                console.log("divPos nie zaokraglone----" + theID + " --- " + $(theID).offset().top);

                console.log("divPos zzaoraklone ----" + theID + " --- " + Math.ceil($(theID).offset().top));
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("menu__link-active");

            } else {
                $("a[href='" + theID + "']").removeClass("menu__link-active");
            }
        });
    }

    function fixedMenu(){
        var windowTop = $(document).scrollTop(),
            nav = $('.header__nav'),
            navTop = nav.offset().top;
            // console.log("windowtop " + windowTop);
			// console.log("navtop" + navTop);
    	if (windowTop >= nav.height()) {
    		nav.addClass('header__nav-scrolled');
    	}else{
    		nav.removeClass('header__nav-scrolled');
    	}
    }

    $(".service__item-heading").on("click", function(){

    	$(this).children('a')
    			.toggleClass('section__arrow-down')
    			.toggleClass('section__arrow-up');

    	if($(this).hasClass('service__item-heading--active')){
    		$(this).removeClass('service__item-heading--active');
    		$(this).next().removeClass('service__item-description--open');
    	}else{
    		$(this).siblings().removeClass('service__item-heading--active');
    		$(this).next().siblings().removeClass("service__item-description--open");
      		$(this).toggleClass("service__item-heading--active");
      		$(this).next().toggleClass("service__item-description--open");

      		$(this).siblings().children('a')
    			.addClass('section__arrow-down')
    			.removeClass('section__arrow-up');
    	}
    });

});
//# sourceMappingURL=main.js.map

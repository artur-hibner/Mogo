$(document).ready(function() {

    $(window).scroll(startCounter);

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

});
//# sourceMappingURL=main.js.map

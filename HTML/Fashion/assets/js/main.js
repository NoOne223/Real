$(document).ready(function(){
    // SLICK //
    $('.my-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
    });
    // AOS //
    AOS.init({
        duration: 1200,
        once: true,
    });

    //RUNNING NUMBER
    function runCounter($element) {
        var target = parseInt($element.attr('data-target'));
        var count = 0;
        var increment = target / 100;
        function updateCounter() {
            if (count < target) {
                count += increment;
                $element.text(Math.ceil(count).toLocaleString() + '+');
                setTimeout(updateCounter, 30);
            } else {
                $element.text(target.toLocaleString() + '+');
            }
        }
        updateCounter();
    }
    $('.running-number').each(function() {
        var $this = $(this);
        $this.waypoint(function() {
            runCounter($this);
            this.destroy();
        }, {
            offset: '90%'
        });
    });

    //DROP-BRANCHES
    $('.drop-branches').click(function() {
        var branch = $(this).next('.branch');
        $('.branch').not(branch).slideUp();
        branch.slideToggle();
        if (branch.is(':visible')) {
            var offsetTop = branch.offset().top;
            $('html, body').animate({
                scrollTop: offsetTop
            }, 500);
        }
    });
    $(document).click(function(e) {
        var container = $(".branch-contact");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.branch').slideUp();
        }
    });

});
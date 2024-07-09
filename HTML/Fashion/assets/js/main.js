$(document).ready(function(){
    // SLICK //
    $('.my-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: false,
    });

    //RUNNING NUMBER
    $('.running-number').each(function() {
        var $this = $(this);
        var target = parseInt($this.attr('data-target'));
        var count = 0;
        var increment = target / 100;
        function updateCounter() {
            if(count < target) {
                count += increment;
                $this.text(Math.ceil(count).toLocaleString() + '+');
                setTimeout(updateCounter, 30);
            } else {
                $this.text(target.toLocaleString() + '+');
            }
        }
        updateCounter();
    });

});
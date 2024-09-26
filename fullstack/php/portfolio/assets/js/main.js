$(document).ready(function() {
    // Custom input
    var textarea = $('#myTextarea');
    textarea.on('focus', function() {
        $(this).attr('placeholder', ' ');
        $(this).siblings('.placeholder').addClass('active');
    });
    textarea.on('blur', function() {
        if ($(this).val() === '') {
            $(this).attr('placeholder', '');
            $(this).siblings('.placeholder').removeClass('active');
        }
    });

    //Custom select
    $('.current-lang').click(function() {
        $(this).parent('.lang').toggleClass('open');
    });
    $('.lang-option').click(function() {
        var selectedLang = $(this).html();
        $('.current-lang').html(selectedLang);
        $('.lang').removeClass('open');
    });
    $(document).click(function(event) {
        if (!$(event.target).closest('.lang').length) {
            $('.lang').removeClass('open');
        }
    });

    //Open CV
    $('.open-cv').on('click', function(){
        $('.cv-letter').show();
        $('.cv-layout').show();
        $('body').addClass('no-scroll');
    });
    $('.close-cv').on('click', function(){
        $('.cv-letter').hide();
        $('.cv-layout').hide();
        $('body').removeClass('no-scroll');
    });
});

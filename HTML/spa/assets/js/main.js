$(document).ready(function() {
    $('.service-pc').on('click', function(){
        $('.dropdown-menu').toggleClass('show');
        $('.service-pc i').toggleClass('fa-angle-down fa-angle-up');
    });

    const languages = {
        vietnam: {
            img: './assets/image/vietnam.png',
            alt: 'Vietnam Flag'
        },
        'united-kingdom': {
            img: './assets/image/united-kingdom.png',
            alt: 'UK Flag'
        },
        japan: {
            img: './assets/image/japan.png',
            alt: 'Japan Flag'
        }
    };

    // Khi click vào ngôn ngữ hiện tại để hiển thị dropdown
    $('.selected-lang').click(function() {
        $('.lang-options').toggle(); // Ẩn/hiện danh sách lựa chọn
    });

    // Sử dụng sự kiện 'on' để lắng nghe click trên các phần tử ngôn ngữ được thêm vào động
    $(document).on('click', '.lang-options p', function() {
        var selectedLang = $(this).data('lang'); // Lấy tên ngôn ngữ được chọn
        var currentLang = $('.selected-lang img').data('lang'); // Ngôn ngữ hiện tại

        // Cập nhật ngôn ngữ hiện tại với ngôn ngữ mới được chọn
        $('.selected-lang img').attr('src', languages[selectedLang].img)
                               .attr('alt', languages[selectedLang].alt)
                               .attr('data-lang', selectedLang);

        // Cập nhật danh sách dropdown với 2 ngôn ngữ còn lại
        $('.lang-options').html(''); // Xóa danh sách cũ
        for (var lang in languages) {
            if (lang !== selectedLang) { // Chỉ thêm ngôn ngữ khác với ngôn ngữ hiện tại
                $('.lang-options').append(
                    '<p class="dropdown-lang pointer" data-lang="' + lang + '">' +
                    '<img src="' + languages[lang].img + '" alt="' + languages[lang].alt + '">' +
                    '</p>'
                );
            }
        }

        // Ẩn dropdown sau khi chọn
        $('.lang-options').hide();
    });
});
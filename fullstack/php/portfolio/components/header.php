<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="icon" href="./assets/favicon_io/favicon.ico">
    <link rel="stylesheet" href="./assets/css/style.scss">
    <title>Portfolio</title>
</head>
<body>
    <header>
        <div class="header-banner">
            <div class="layout d-flex">
                <div class="container relative">
                    <h1 class="text-lg text-center text-color-1 uppercase">Chào mừng bạn ghé đến hồ sơ năng lực của tôi</h1>
                    <div class="info-board">
                        <div class="infomation">
                            <h2 class="text-md text-center uppercase">Thông tin cá nhân</h2>
                            <ul class="list-none d-flex flex-wrap gap">
                                <li class="flex-3-item">
                                    <i class="fa-regular fa-user"></i>
                                    :
                                    <span>Lê Hoàng Nam</span>
                                </li>
                                <li class="flex-3-item">
                                    <i class="fa-solid fa-cake-candles"></i>
                                    :
                                    <span>03-09-2001</span>
                                </li>
                                <li class="flex-3-item">
                                    <i class="fa-solid fa-location-dot"></i>
                                    :
                                    <span>787/1 Trường Chinh, Tây Thạnh, Tân Phú</span>
                                </li>
                                <li class="flex-3-item">
                                    <i class="fa-solid fa-phone"></i>
                                    :
                                    <span>098 2582754</span>
                                </li>
                                <li class="flex-3-item">
                                    <i class="fa-regular fa-envelope"></i>
                                    :
                                    <a class="text-underline" href="mailto: namle392001@gmail.com">namle392001@gmail.com</a>
                                </li>
                                <li class="flex-3-item">
                                    <i class="fa-brands fa-facebook-f"></i>
                                    :
                                    <a class="text-underline" href="" target="_blank">Facebook</a>
                                </li>
                            </ul>
                        </div>
                        <button class="btn open-cv">
                            <i class="fa-regular fa-eye"></i>
                            <span>Xem CV cá nhân của tôi</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="lang">
            <p class="current-lang d-flex items-center m-0 gap">
                <img class="lang-img" src="./assets/img/vietnam.png" alt="Vi">
                Tiếng Việt
            </p>
            <ul class="lang-change list-none m-0">
                <li class="lang-option d-flex items-center gap">
                    <img class="lang-img" src="./assets/img/vietnam.png" alt="Vi">
                    Tiếng Việt
                </li>
                <li class="lang-option d-flex items-center gap">
                    <img class="lang-img" src="./assets/img/united-kingdom.png" alt="En">
                    Tiếng Anh
                </li>
            </ul>
        </div>
        <div class="cv-letter">
            <div class="cv-header">
                <img class="avt" src="./assets/img/man.png" alt="cv avt">
                
            </div>
            <div class="cv-content"></div>
        </div>
    </header>
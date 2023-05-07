$(document).ready(function () {
    $('.armchair-conditio__sliders').slick({
        accessibility: true,
        speed: 300,
        infinite: true,
        dots: true,
    });
});

$(document).ready(function () {
    $('.individual-settings-content-slider').slick({
        accessibility: true,
        speed: 300,
        slidesToShow: 2,
        infinite: true,
        dots: true,
        responsive: [
            {
                breakpoint: 1920,
                settings: "unslick"
            },
            {
                breakpoint: 1024,
                settings: "slick"
            },
            {
                breakpoint: 683,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});
//----------------------------------------------------------------------------------------------------------------
let but = document.querySelector('.show_more__button');//.onclick = show;
let catalog = document.querySelector('.hiden-chair-container');

$(document).ready(function () {
    $(".burger-menu ").click(function () { // задаем функцию при нажатиии на элемент с классом slide-toggle
        $(".header-menu-list-burger").slideToggle(".active-burger"); // плавно скрываем, или отображаем все элементы <div>
    });

});

$(document).ready(function () {
    $(but).click(function () { // задаем функцию при нажатиии на элемент с классом slide-toggle
        $(catalog).slideToggle(); // плавно скрываем, или отображаем все элементы <div>
    });
});

//------------------------------------------------------------------------------------------------------------------

$(document).ready(function () {
    $('.reviews_carts').slick({
        accessibility: true,
        arrows: true,
        speed: 300,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: false,
                }
            }
        ],
        responsive: [
            {
                breakpoint: 620,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ],

    });
});


//==================================================TOGS =====================================
if (document.querySelector(".active-burger").className().display = "block") {
    document.querySelector(".wrapper").classList.add(".over")
    //} else if (document.querySelector(".active-burger").class.display = "block") {
    //    document.html.class.overflow = ""
}

//------------------------------//------------------------------//------------------------------//------------------------------//------------------------------

//let table = document.getElementsByid("age-table");
//let sdfg = document.getElementsByClassName("add-button");
//document.querySelector(".minus");
//document.querySelector(".plus");
//sdfg.innerHTML = "asdad";




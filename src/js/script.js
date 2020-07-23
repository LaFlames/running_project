/* var name = "Vitali";
let number = 7;
const pi = 3.14; */

/* типы данных: 
number
string -"", '', ``
true/false - boolean
null - не существует
undefined - существует, но не имеет значения
let obj = {
    name: 'apple', 
    color: 'green',
    weigh: 200
} - объект
Symbol

методы взаимодействия:
alert(1234) */
/* console.log("bsnfg"); */
/* let answer = confirm("Вам есть 18?");
console.log(answer); */

/* let answer = prompt("Вам есть 18?", "");
console.log(answer); */

/* console.log(4+4) */

/* Операторы:
&& - и
|| - или */

/* let isChecked = true,
    isClose = false; */

/* console.log(isChecked && isClose); */

/* console.log(isChecked || isClose); */

/* Условия:
if (1*4 == 8*1) {
    console.log('Верно')
} else {
    console.log('Ошибка') 
} */

/* let answer = confirm("Вам есть 18?");
if (answer) {
    console.log('Проходите')
} else {
    console.log('Уходи')
} */

/* const num = 101;

if (num < 49) {
    console.log('Wrong')
} else if (num > 100) {
    console.log('Much')
} else {
    console.log('True')
} */

/* Циклы:
for(let i = 1; i < 8; i++) {
    console.log(i);
} */


/* Функции: 
function logging(a, b) {
    console.log(a + b)
}

logging(3, 5);

logging(6, 8); */

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        /* adaptiveHeight: true, */
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/leftArrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/rightArrow.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]      
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

    /* $('.catalog-item__link').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    });

    $('.catalog-item__back').each(function(i) {
        $(this).on('click', function(e) {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
    }); */

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
});

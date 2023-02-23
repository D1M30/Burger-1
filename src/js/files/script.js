// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import mixitup from 'mixitup';

var mixer = mixitup('.block-order');


$(".menu a").on("click", function (event) {
   event.preventDefault();
   var id  = $(this).attr('href'),

   //узнаем высоту от начала страницы до блока на который ссылается якорь
      topMove = $(id).offset().top;
   
   //анимируем переход на расстояние - top за 1500 мс
   $('body,html').animate({scrollTop: topMove}, 1300);
});

// $(document).ready(function(){
//    $('.menu').bind("click", function(e){
//    var anchor = $(this);
//    $('html, body').stop().animate({
//    scrollTop: $(anchor.attr('order')).offset().top
//    }, 1000);
//    e.preventDefault();
//    });
//    return false;
//    });
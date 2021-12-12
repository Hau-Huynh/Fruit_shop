// window.addEventListener("load", function(){

//   const slideMain = document.querySelector(".slide_box");
//   const sliderItems = document.querySelectorAll(".slide_box-item");
//   const nextBtn = document.querySelector(".fa-arrow-right");
//   const prevBtn = document.querySelector(".fa-arrow-left");
//   const slideLength = sliderItems.length;
//   const sliderIteamWidth = sliderItems[0].offsetWidth;
//   const numer1 = document.getElementById('1');
//   let count = 0;
//   let positionX = 0;
//   function showNextItem() {

//     positionX = positionX - sliderIteamWidth - 14;
//     console.log('This is length',sliderItems.length);
//     count = (count + 1) % sliderItems.length;
//     console.log('This is count next',count);
//     slideMain.style = `transform: translateX(${positionX}px)`;
//     if (count > 6) return;
//     // sliderItems[count].classList.add('active');
//     // if (numer1 == 1) {
//     //   console.log('ok');
//     // }

//     // Ý tưởng: mỗi item có một id riêng và so sánh các id đó với biến count nếu bằng đó thì dừng
//   }

//   function showPreviousItem() {

//     positionX = positionX + sliderIteamWidth + 14;
//     count = (count - 1 + sliderItems.length) % sliderItems.length;
//     console.log('This is count prev', count);
//     slideMain.style = `transform: translateX(${positionX}px)`;

//   }

//   nextBtn.addEventListener('click', showNextItem);
//   prevBtn.addEventListener('click', showPreviousItem);

// });

window.onscroll = () => {
  sub_search.classList.remove('active');
}
let closer = document.querySelector('.fa-times');
  closer.onclick = () => {
  shoppingcart.classList.remove('active');
  navbar.classList.remove('active');
}
let closeNavbar = document.querySelector('.close_navbar');
closeNavbar.onclick = function () { 
  shoppingcart.classList.remove('active');
}

document.querySelector('.close-bar').onclick = function(){
  navbar.classList.remove('active');
}

let shoppingcart = document.querySelector('.shopping-cart');
document.querySelector('.icon-shopping').onclick = function(){
  shoppingcart.classList.toggle('active');
  navbar.classList.remove('active');
  sub_search.classList.remove('active');
}

let navbar = document.querySelector('.navbar');
document.querySelector('.icon-bar').onclick = function(){
  navbar.classList.toggle('active');
  shoppingcart.classList.remove('active');
  sub_search.classList.remove('active');
}

let sub_search = document.querySelector('.sub-search_container');
document.querySelector('.sub_search-item').onclick = function(){
  sub_search.classList.toggle('active');
  shoppingcart.classList.remove('active');
  navbar.classList.remove('active');
}
///////
let boxMenu = document.querySelector(".box_menu");
let boxMenu1 = document.querySelector(".box_menu-1");
let btnList1 = document.querySelector(".btn_list-1");
let btnList2 = document.querySelector('.btn_list-2');
let btnList3 = document.querySelector('.btn_list-3');
let btnList4 = document.querySelector('.btn_list-4');
let btnList5 = document.querySelector('.btn_list-5');
let btnList6 = document.querySelector('.btn_list-6');
let btnList7 = document.querySelector('.btn_list-7');

btnList1.onclick = function () {
  boxMenu1.style.display = 'none';
  boxMenu.style.display = 'block';
  boxMenu.style.display = 'flex';
  
  btnList1.classList.add("showColor");
  btnList2.classList.remove("showColor");
  btnList3.classList.remove("showColor");
  btnList4.classList.remove("showColor");
  btnList5.classList.remove("showColor");
  btnList6.classList.remove("showColor");
  btnList7.classList.remove("showColor");
}
btnList2.onclick = function () {
  boxMenu.style.display = 'none';
  boxMenu1.style.display = 'block';
  boxMenu1.style.display = 'flex';
  btnList2.classList.add("showColor");
  btnList1.classList.remove("showColor");
  btnList3.classList.remove("showColor");
  btnList4.classList.remove("showColor");
  btnList5.classList.remove("showColor");
  btnList6.classList.remove("showColor");
  btnList7.classList.remove("showColor");
}

btnList3.onclick = function () {
  btnList3.classList.add("showColor");
  btnList2.classList.remove("showColor");
  btnList1.classList.remove("showColor");
  btnList4.classList.remove("showColor");
  btnList5.classList.remove("showColor");
  btnList6.classList.remove("showColor");
  btnList7.classList.remove("showColor");
}

btnList4.onclick = function () {
  btnList4.classList.add("showColor");
  btnList2.classList.remove("showColor");
  btnList3.classList.remove("showColor");
  btnList1.classList.remove("showColor");
  btnList5.classList.remove("showColor");
  btnList6.classList.remove("showColor");
  btnList7.classList.remove("showColor");
}

btnList5.onclick = function () {
  btnList5.classList.add("showColor");
  btnList2.classList.remove("showColor");
  btnList3.classList.remove("showColor");
  btnList4.classList.remove("showColor");
  btnList1.classList.remove("showColor");
  btnList6.classList.remove("showColor");
  btnList7.classList.remove("showColor");
}

btnList6.onclick = function () {
  btnList6.classList.add("showColor");
  btnList2.classList.remove("showColor");
  btnList3.classList.remove("showColor");
  btnList4.classList.remove("showColor");
  btnList5.classList.remove("showColor");
  btnList1.classList.remove("showColor");
  btnList7.classList.remove("showColor");
}

btnList7.onclick = function () {
  btnList7.classList.add("showColor");
  btnList2.classList.remove("showColor");
  btnList3.classList.remove("showColor");
  btnList4.classList.remove("showColor");
  btnList5.classList.remove("showColor");
  btnList6.classList.remove("showColor");
  btnList1.classList.remove("showColor");
}
//slide start

$('.slider-wrapper').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
  nextArrow:`<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  dots: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
        
      }
    },
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        prevArrow: false,
        nextArrow: false,
      }
    }
  ]
  
});

$('.information_container').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  arrows: true,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
      }
    }
  ]

});

$('.food_chefs').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow:`<button type='button' class='slick-prev pull-left'><i class="fas fa-arrow-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fas fa-arrow-right"></i></button>`,
  infinite: true,
  responsive: [
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        arrows: false,
      }
    }
  ]

});
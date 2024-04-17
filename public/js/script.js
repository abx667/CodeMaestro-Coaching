// Script File

// Home Section Starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menuList = document.querySelector('.main-navbar .nav-list');
var menuListItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menuList.classList.toggle('active');
});

for(var i = 0; i < menuListItems.length; i++){
	menuListItems[i].addEventListener('click', menuItemClicked);
}
function menuItemClicked(){
	menuBtn.classList.remove('active');
	menuList.classList.remove('active');
}

var homeSection = document.getElementsByClassName('home');
window.addEventListener('scroll', pageScrollFunctions);
window.addEventListener('load', pageScrollFunctions);

function pageScrollFunctions(){
	if(window.scrollY > 120){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
var homeSection1 = document.getElementById('home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
	if(window.scrollY > 120){
		homeSection1.classList.add('active');
	}
	else{
		homeSection1.classList.remove('active');
	}
}
var swiper = new Swiper(".slide-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
 },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
    440:{
       slidesPerView:1,
      },
      520: {
          slidesPerView: 1,
      },
      820:{
        slidesPerView:1,
      },
      
      950: {
          slidesPerView: 1,
      },
  },
});
const animations = [
  {
    bg: '/images/logo2.png',
    duration: 3000,
  },
  {
    bg: '/images/co2.avif',
    duration: 3000,
  },
  {
    bg: '/images/co3.avif',
    duration: 3000,
  },
  {
    bg: '/images/co4.avif',
    duration: 3000,
  },
  {
    bg: '/images/co5.avif',
    duration: 3000,
  },
];
let currentAnimationIndex = 0;
setInterval(() => {
  currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
  const { bg, duration } = animations[currentAnimationIndex];
  document.querySelector('#slideimg').src= bg;
}, animations[currentAnimationIndex].duration);

window.addEventListener('resize', () => {
  const viewportWidth = window.innerWidth;
  if (viewportWidth >= 768) {
    swiper.params.slidesPerView = 3;
  } else {
    swiper.params.slidesPerView = 1;
  }
  swiper.update();
});



 
  

 
  //show hide faq answer
  const faqs=document.querySelectorAll(".faq");
  faqs.forEach((faq)=>{
    faq.addEventListener('click',()=>{
    faq.classList.toggle('open');
    const icon=document.querySelectorAll(".faq_icon i");
    if(icon.className=='uil uil-plus'){
      icon.className='uil uil-minus';

    }
    else{
      icon.className='uil uil-plus';
    }
    });
  });
      // If there's no match, display an error message or perform some other action
      
    


// Home Section Ends

// Partners Section Starts 

// Partners Section Ends 

// Testimonials Section Starts
//$('.testimonials-slider').owlCarousel({
    //loop:true,
    //autoplay:true,
   // autoplayTimeout:6000,
   // margin:10,
    //nav:true,
    //navText:["<i class='fa-solid fa-arrow-left'></i>",
             //"<i class='fa-solid fa-arrow-right'></i>"],
    //responsive:{
       // 0:{
            //items:1
        //},
       // 768:{
         //   items:2
        //}
    //}
//})
//var swiper= new Swiper(".banner", {
   // pagination: {
     // el: ".swiper-pagination",
    //},
  //});
// Testimonials Section Ends

			

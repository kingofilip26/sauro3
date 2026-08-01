const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,
  spaceBetween: 30,
  
  breakpoints:{
      768:{
          slidesPerView:2,
          centeredSlides: false,
      },
      1024:{
          slidesPerView:3,
          centeredSlides: false,
      }
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
 

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  autoplay:{
      delay:2000,
      disableOnInteraction: false,
      
   }
});



const fullImgBox = document.getElementById("fullImgBox");
const fullImg = document.getElementById("fullImg");

function openFullImg(picture){
    fullImgBox.style.display = "flex";
    fullImg.src = picture;
}

function closeFullImg(){
    fullImgBox.style.display = "none";
};





const input = document.querySelector(".hamburgerInput");
const menu = document.querySelector(".hamburgerMenu");
const zruseni = document.querySelector(".zruseni");
const links = document.querySelectorAll(".hamburger-link");

input.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

zruseni.addEventListener("click",()=>{
    menu.classList.toggle("active")
});

links.forEach((item)=>{
    item.addEventListener("click",()=>{
        menu.classList.toggle("active");
    })
});


const header = document.getElementById("header");
const linky = document.querySelectorAll(".nav-link");
const nahoru = document.querySelector(".nahoru");

const scroll=()=>{
    if(window.scrollY>=50){
        header.classList.add("scroll");
        linky.forEach((item)=>{
            item.classList.add("black-color");
        });
        nahoru.classList.add("display");
       
        
    }
    else{
        header.classList.remove("scroll");
        linky.forEach((item)=>{
            item.classList.remove("black-color")
        });
        nahoru.classList.remove("display");
       
       
    }
};

window.addEventListener("scroll",scroll);




const sections = document.querySelectorAll(".sekce");

const callback = (entries,observer)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("animation");
            observer.unobserve(entry.target);
        }
    })
};

const observer = new IntersectionObserver(callback);

sections.forEach((sekce)=>{
    observer.observe(sekce)
});

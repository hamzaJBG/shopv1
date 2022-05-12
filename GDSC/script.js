// Steaky Header on scolling

let header=document.querySelector(".header");
let headerPosition=header.offsetTop;

let section2=document.querySelector("#section-two");
let section2Position=section2.offsetTop-header.offsetHeight;




// sticky header animation ++ contact-form and find-us animation

let section3=document.getElementById("section-three");
let section3Position=section3.offsetTop;

let contactForm=document.querySelector(".contact-form");
let findUs=document.querySelector(".find-us")


window.onscroll=()=>{
     switchHeader()
}
function switchHeader(){
    if(headerPosition<window.pageYOffset&&window.pageYOffset<section2Position){

          header.className.includes("sticky-header2")&&header.classList.remove("sticky-header2");
          header.classList.add("sticky-header1")
          scrollBtn.style="opacity:1;pointer-events:all;"
       
    } 
    if(window.pageYOffset>((section2.offsetTop+section2.offsetHeight)-(header.offsetHeight*2))){

        contactForm.style="animation:up 1s linear forwards";
        findUs.style="animation:up 2s linear forwards"

    }
    if(section2Position+(section2Position/2.5)<window.pageYOffset&&window.pageYOffset<section3Position){

        header.classList.add("sticky-header2")
        header.className.includes("sticky-header3")&&header.classList.remove("sticky-header3");
        
    }
    if(window.pageYOffset>section3Position-header.offsetHeight){
      console.log("ok")
      header.classList.add("sticky-header3");

    }
    
   
    if(window.pageYOffset===0){
          header.className="header";
          scrollBtn.style="opacity:0;pointer-events:none;"
    }
    
}

// discription typing effect 

let mainDiscription=document.querySelector("#main-discription");
let discriptionContent="Google Club ESSTHS aims to bring together young student who sharet their passion for development in all fields."
let discriptionText="";
let index=0;

(function discriptionTyping(){
    discriptionText=discriptionContent.slice(0,index++)
    mainDiscription.textContent=discriptionText;
    if(discriptionText.length===discriptionContent.length){
        setTimeout(function(){
            index=0
        },2000)
       ;
    }
    setTimeout(discriptionTyping,50)
})()




// slider functionallity 
let sliderParent=document.querySelector(".bottom-parent");
let sliderBtns=document.querySelectorAll(".fa-forward")

sliderBtns.forEach((btn,index)=>{
    btn.onclick=function(){
        if(index===0){
            sliderParent.scrollBy({
                top:0,
                left:-sliderParent.clientWidth / 3,
                behavior:"smooth"
            })
            btn.style.animation="slider-previous 0.5s linear "
            btn.onanimationend=function(){
                btn.style.animation=""
            }
        }
        if(index===1){
            sliderParent.scrollBy({
                top:0,
                left:(sliderParent.clientWidth/3),
                behavior:"smooth"
            })
            btn.style.animation="slider-next 0.5s linear "
            btn.onanimationend=function(){
                btn.style.animation=""
            }
        }
    }
})

// scroll button function 

let scrollBtn=document.querySelector(".scroll-up-btn");

scrollBtn.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

const sliderContainer = document.querySelector('.slider-container')
const rightSlide = document.querySelector('.right-slide')
const leftSlide = document.querySelector('.left-slide')
const Upbutton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const Slideslength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlide.style.top = `-${(Slideslength - 1)*100}vh`

Upbutton.addEventListener('click' , ()=>changeSlide('up'))
downButton.addEventListener('click' , ()=>changeSlide('down'))

const changeSlide=(direction)=>{
   const sliderHeight = sliderContainer.clientHeight 
   if(direction === 'up'){
    activeSlideIndex++
    if(activeSlideIndex > Slideslength-1){
        activeSlideIndex  =  0
    }
   }
   else if(direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
        activeSlideIndex= Slideslength-1
   }
}
   rightSlide.style.transform =`translateY(-${activeSlideIndex*sliderHeight}px)`
   leftSlide.style.transform =`translateY(${activeSlideIndex*sliderHeight}px)`
}
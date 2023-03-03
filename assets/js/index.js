const iconBurger = document.querySelector('.icon-burger');

const menuBurger = document.querySelector('.menu-burger');

//REMOVE THE CLASS SHOW WHEN THE SCREEN CHANGES OF SIZE
window.addEventListener("resize", ()=>{
    if(screen.width > 369){
         if(menuBurger.classList.contains('show')){
             menuBurger.classList.remove('show');
             
            
         }
    }
 });

 //SHOW THE MENU FOR MOBILE SCREEN
iconBurger.addEventListener('click',()=>{
    menuBurger.classList.toggle('show')
})
let btnOpenMenu = document.querySelector("#open-menu");
let btnCloseMenu = document.querySelector("#close-menu");
let menu = document.querySelector("#mobile-menu");

btnOpenMenu.addEventListener("click", () => {
    menu.classList.remove("disabled");
})


btnCloseMenu.addEventListener("click", () => {
    menu.classList.add("disabled");
})

/*------ CARRITO-----*/ 
const addToCart=document.querySelectorAll('[data-btn-action="add-btn-cart"]');



const closeModal=document.querySelector('.jsModalClose');

addToCart.forEach(btn => {
    btn.addEventListener('click',(event)=>{
        const nameModal=event.target.getAttribute('data-modal');

        const modal=document.querySelector(nameModal);

        //abrimos el modal 
        modal.classList.add('active');

    })

});

//CERRAR EL MODAL 
closeModal.addEventListener('click', (event)=>{
    event.target.parentNode.parentNode.classList.remove('active');
})

//CERRAMOS MODAL CUANDO HACEMOS CLICK AFUERA DEL CONTENIDO DEL MODAL
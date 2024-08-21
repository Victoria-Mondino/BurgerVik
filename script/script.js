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
// const addToCart=document.querySelectorAll('[data-btn-action="add-btn-cart"]');



// const closeModal=document.querySelector('.jsModalClose');

// addToCart.forEach(btn => {
//     btn.addEventListener('click',(event)=>{
//         const nameModal=event.target.getAttribute('data-modal');

//         const modal=document.querySelector(nameModal);

//         //abrimos el modal 
//         modal.classList.add('active');

//     })

// });

// //CERRAR EL MODAL 
// closeModal.addEventListener('click', (event)=>{
//     event.target.parentNode.parentNode.classList.remove('active');
// })

//CARRITO 
document.addEventListener("DOMContentLoaded", function() {
    const cartContent = document.getElementById("cart-content");
    const cartBtn = document.getElementById("floating-cart-btn");
    const closeCartBtn = document.querySelector(".close-cart");
    const cartItemsContainer = document.querySelector(".cart-items");
    const cartCount = document.querySelector(".cart-count");

    let cart = [];

    // Mostrar/Ocultar el carrito
    cartBtn.addEventListener("click", function() {
        cartContent.style.display = cartContent.style.display === "none" ? "block" : "none";
    });

    closeCartBtn.addEventListener("click", function() {
        cartContent.style.display = "none";
    });

    // Agregar producto al carrito
    document.querySelectorAll('[data-btn-action="add-btn-cart"]').forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault();
            const productElement = event.target.closest(".product-grid__item");
            const productName = productElement.querySelector(".product-grid__name").textContent;
            const productPrice = productElement.querySelector(".product-grid__prince").textContent;
            
            const existingProduct = cart.find(item => item.name === productName);
            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ name: productName, price: productPrice, quantity: 1 });
            }

            updateCart();
            showCartPreview();
        });
    });

    // Actualizar el carrito
    function updateCart() {
        cartItemsContainer.innerHTML = "";
        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - ${item.price} (Cantidad: ${item.quantity})`;
            
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "Eliminar";
            removeBtn.addEventListener("click", function() {
                cart.splice(index, 1);
                updateCart();
            });

            li.appendChild(removeBtn);
            cartItemsContainer.appendChild(li);
        });

        cartCount.textContent = cart.length;
    }

    // Mostrar ventana de vista previa del carrito
    function showCartPreview() {
        cartContent.style.display = "block";
        setTimeout(() => {
            cartContent.style.display = "none";
        }, 2000); // Ocultar después de 2 segundos
    }
});

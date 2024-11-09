const cartIcon = document.getElementById('cart-icon');
const cartModal = document.querySelector('.modal-cart');
const overlay = document.querySelector('.overlay');
const logoList =  document.getElementById('logo-list');
const closeCartModal = document.querySelector('.close-modal');
const logo = document.querySelector('.logo');


cartIcon.addEventListener('click', function() {
    cartModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    logoList.style.display = 'none';
    logo.style.display = 'block';
})

closeCartModal.addEventListener('click', function() {
   
    
    cartModal.classList.remove('fadeIn');
    cartModal.classList.add('fadeOut');


    setTimeout(() => {
         cartModal.classList.add('hidden');
         overlay.classList.add('hidden');
         logoList.style.display = 'block';
    }, 200)




   

 

})

cartIcon.addEventListener('click', function() {

    cartModal.classList.remove('hidden');
    cartModal.classList.add('fadeIn');
    
})


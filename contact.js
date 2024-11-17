const cartIcon = document.getElementById('cart-icon');
const cartModal = document.querySelector('.modal-cart');
const overlay = document.querySelector('.overlay');
const logoList =  document.getElementById('logo-list');
const closeCartModal = document.querySelector('.close-modal');
const logo = document.querySelector('.logo');
const exampleSpan = document.getElementById('example-span');

//sumbitting buttons
const sumbitBtn = document.getElementById('get-in-touch');
const sumbitForm = document.getElementById('submit-form')

const formOverlay = document.querySelector('.form-overlay');
const body = document.querySelector('body');
const header = document.querySelector('header');
const formCloseBtn = document.querySelector('.form-close-btn');
const inputs = document.querySelectorAll('.form-inputs');

const errormsg = document.querySelectorAll('.error-message');


const productGridElem = document.querySelector('.product-grid');



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

sumbitBtn.addEventListener('click', function () {

    formOverlay.style.display = 'grid';
    body.style.overflow = 'hidden';
    header.style.display = 'none';
    formCloseBtn.style.display = 'block';

    if (sumbitBtn.classList.contains('expand-btn-color-clicked')) {
        // Reset background to the initial position
        sumbitBtn.classList.remove('expand-btn-color-clicked');

        
    } else {
        // Add the class to trigger the transition
        sumbitBtn.classList.add('expand-btn-color-clicked');
        sumbitBtn.classList.add('expand-btn-color')
    }
});

sumbitForm.addEventListener('click', function () {

    if (sumbitForm.classList.contains('expand-btn-color-clicked')) {
        // Reset background to the initial position
        sumbitForm.classList.remove('expand-btn-color-clicked');
    } else {
        // Add the class to trigger the transition
        sumbitForm.classList.add('expand-btn-color-clicked');
        sumbitForm.classList.add('expand-btn-color');

    }
});


formCloseBtn.addEventListener('click', function() {
    formCloseBtn.style.display = 'none';

    formOverlay.style.display = 'none';

    body.style.overflow = 'visible';
    header.style.display = 'block';

})


// Form validation
sumbitForm.addEventListener('click', function (e) {
    e.preventDefault();

    inputs.forEach((input) => {
       if(input.value.trim() == '') {
           alert('try again');
           window.location.href = 'contact.html';
       }
       return;
    })
  
    
  });
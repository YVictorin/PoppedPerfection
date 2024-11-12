const cartIcon = document.getElementById('cart-icon');
const cartModal = document.querySelector('.modal-cart');
const overlay = document.querySelector('.overlay');
const logoList =  document.getElementById('logo-list');
const closeCartModal = document.querySelector('.close-modal');
const logo = document.querySelector('.logo');
const exampleSpan = document.getElementById('example-span');


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

//Output JSON Data API
const productsJSON = "products.json";

fetch(productsJSON)
.then((response) => {
    return response.json();
})
.then((data) => {
    const allProducts = new Map(data.map(product => [product.productName, product])) 
    
    const caramel = allProducts.get("Classic Caramel");


    exampleSpan.textContent = caramel.productName;

    console.log(caramel.imgSrc);

})







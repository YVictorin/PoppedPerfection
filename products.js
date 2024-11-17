const cartIcon = document.getElementById('cart-icon');
const cartModal = document.querySelector('.modal-cart');
const overlay = document.querySelector('.overlay');
const logoList =  document.getElementById('logo-list');
const closeCartModal = document.querySelector('.close-modal');
const logo = document.querySelector('.logo');
const exampleSpan = document.getElementById('example-span');

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


overlay.addEventListener('click', function() {
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

//Getting the product data from the json file
async function getProductData() {
    try {
        const response = await fetch('products.json');
        const productsJson = await response.json();
        const allProducts = new Map(productsJson.map(product => [product.productName, product])) 
      
    //     productsJson.forEach(function(product) {
    //     console.log(product.productDesc);
    //    })

        setupProductGrid(allProducts);
    } catch(err) {
        console.log(err);
    } 
}




function setupProductGrid(arr) {
   
    arr.forEach((product) => {
        const productsDiv = document.createElement('div');
        productGridElem.appendChild(productsDiv);
        productsDiv.style.backgroundImage = `url(${product.imgSrc[0]})`;

        //styling to all the elements in the product grid
        productsDiv.classList.add('product-div'); // Add the CSS class

        productsDiv.addEventListener('mouseover', function() {
            productsDiv.style.backgroundImage = `url(${product.imgSrc[1]})`;
          
        })

        productsDiv.addEventListener('mouseleave', function() {
            productsDiv.style.backgroundImage = `url(${product.imgSrc[0]})`;
    
        })


        let productNameSpan = document.createElement('span');
        productNameSpan.textContent = product.productName;

        let productDescSpan = document.createElement('span');  //todo make this actually the desc and truncate it 
        productDescSpan.textContent = 'Gourmet Popcorn';

        let productPriceSpan = document.createElement('span');
        productPriceSpan.textContent = product.price;

        let productInfoContainer = document.createElement('div');

        productInfoContainer.appendChild(productNameSpan);
        productInfoContainer.appendChild(productDescSpan);
        productInfoContainer.appendChild(productPriceSpan);

        productsDiv.appendChild(productInfoContainer);

    })
  
}


getProductData();




// ITERATION 1

  // ('click', () => {
  //   btnTotal.onclick = function () {
  //     return subtotal.innerHTML +1
  //   }
  // })
  //btnTotal.innerHTML
    //const btnTotal = document.getElementById("calculate");


function updateSubtotal(product) {
  let priceEl = product.querySelector('.price span');
  let quantityEl = product.querySelector('.quantity input');
  let subtotalEl = product.querySelector('.subtotal span')
  //console.log(quantityEl);
  subtotalEl.innerHTML = Number(priceEl.innerHTML) * Number(quantityEl.value);
  console.log('Calculating subtotal, yey!');
}


function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

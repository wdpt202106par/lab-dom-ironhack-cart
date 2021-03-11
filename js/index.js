// ITERATION 1

function updateSubtotal(product) {
  let priceEl = product.querySelector('.price span');
  let quantityEl = product.querySelector('.quantity input');
  let subtotalEl = product.querySelector('.subtotal span')
  let result = Number(priceEl.innerHTML) * Number(quantityEl.value);
  subtotalEl.innerHTML = result
  console.log('Calculating subtotal, yey!');
  return result; 
}


function calculateAll() {
  const singleProduct = document.querySelectorAll('.product');
  singleProduct.forEach(el => updateSubtotal(el))
  let singleResult = document.querySelector('.subtotal span');
  let totalResult = document.querySelector('#total-value span');
  totalResult.innerHTML = singleResult.innerHTML
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

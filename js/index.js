// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceEl = product.querySelector('.price span'); // je pointe vers mon élément Html Price
  const quantityEl = product.querySelector('.quantity input') // je pointe vers mon élément Html Quantity
  let subtotalEl = product.querySelector('.subtotal span') // je pointe vers mon élément Html Subtotal

  const price = Number(priceEl.innerHTML) // je numberise l'élément Html price =>25
  const quantity = Number(quantityEl.value) // je numberise l'élément Html => valeur qui sera assignée

  subtotalEl.innerHTML = price*quantity // je fais intéragir JS et HTML pour renvoyer le sous total en nombre
  return price*quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //adding new product
  // function addNewProduct(newProduct){
  // let p = document.getElementById('product');
  // let newProduct = p.cloneNode(true);
  // let newName = newProduct.querySelector('name')
  // newName.innerHTML="Ironhack Beach Towel";
  // let newPrice = newProduct.querySelector('price');
  // newPrice.innerHTML =12.5;
  // }
  const allProduct = document.querySelectorAll('.product');
  allProduct.forEach(function(product){
    updateSubtotal(product);
  });
  console.log(allProduct);
  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  let allSubtotal = document.querySelectorAll('.subtotal span'); // [ <span>, <span> ]
  let sum = Array.from(allSubtotal).reduce((acc,el)=>{return acc+Number(el.innerHTML);},0)
  totalValue.innerHTML=sum;
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

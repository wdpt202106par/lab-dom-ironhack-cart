// ITERATION 1

const total = document.getElementById("total-value");
let priceTotal = document.querySelectorAll(".product .subtotal span");
let totalResult = document.querySelector("#total-value span");
let itemContainer = document.querySelector(".product");
let body = document.querySelector("body");

function updateSubtotal(product) {
  let priceEl = product.querySelector(".price span");
  let quantityEl = product.querySelector(".quantity input");
  let subtotalEl = product.querySelector(".subtotal span");
  let result = Number(priceEl.innerHTML) * Number(quantityEl.value);
  subtotalEl.innerHTML = result;
  console.log("Calculating subtotal, yey!");
  return result;
}

function calculateAll() {
  const singleProduct = document.querySelectorAll(".product");
  singleProduct.forEach((el) => updateSubtotal(el));
  let res = 0;
  for (let i = 0; i < priceTotal.length; i++) {
    res = res + Number(priceTotal[i].innerHTML);
    console.log(res);
  }
  return (totalResult.innerHTML = res);
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
console.log("The target in remove is:", target);

  //itemContainer.remove();
  //totalResult.innerHTML = 0
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButton = document.querySelector(
".btn-remove");
  removeButton.addEventListener("click", removeProduct);
  //... your code goes here
});
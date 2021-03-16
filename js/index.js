const body = document.querySelector("body");
const total = document.getElementById("total-value");
const priceTotal = document.querySelectorAll(".product .subtotal span");
const totalResult = document.querySelector("#total-value span");
const singleProduct = document.querySelectorAll(".product");

function updateSubtotal(product) {
  const priceEl = product.querySelector(".price span");
  const quantityEl = product.querySelector(".quantity input");
  const subtotalEl = product.querySelector(".subtotal span");
  const result = Number(priceEl.innerHTML) * Number(quantityEl.value);
  subtotalEl.innerHTML = result;
  console.log("Calculating subtotal, yey!");
  return result;
}

function calculateAll() {
  singleProduct.forEach((el) => updateSubtotal(el));

  let res = 0;
  for (let i = 0; i < priceTotal.length; i++) {
    res = res + Number(priceTotal[i].innerHTML);
    console.log(res);
  }
  return (totalResult.innerHTML = res);
}

function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  document.querySelector(".product").remove();
  priceTotal.innerHTML = 0;
  totalResult.innerHTML = 0;
}
function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  const removeButton = document.querySelector(".btn-remove");
  calculatePricesBtn.addEventListener("click", calculateAll);
  removeButton.addEventListener("click", removeProduct);
});

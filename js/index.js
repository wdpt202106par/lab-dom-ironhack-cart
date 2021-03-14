// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");
  const price = Number(product.querySelector(".price span").innerHTML);
  const quantity = Number(product.querySelector(".quantity input").value);
  let result = price * quantity;
  product.querySelector(".subtotal span").innerHTML = result;
  return result;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2

  const allProduct = document.querySelectorAll(".product"); // [ <tr>, <tr> ]

  var res1 = updateSubtotal(allProduct[0]);
  var res2 = updateSubtotal(allProduct[1]);

  // ITERATION 3

  let result = res1 + res2;
  document.querySelector("#total-value span").innerHTML = result;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  const tr = target.parentNode.parentNode;
  const tbody = document.querySelector("tbody");
  tbody.removeChild(tr);

  // const parentNode = document.getElementsByClassName('product');
  // target.parentNode.removeChild('btn btn-remove');
  console.log("The target in remove is:", target);
}

const deleteButton = document.querySelectorAll(".btn-remove");
deleteButton.forEach(function (el) {
  el.onclick = function (event) {
    removeProduct(event);
  };
});

// ITERATION 5

function createProduct() {
  let product = document.querySelector(".product");
  let clone = product.cloneNode(true);
  let name = document.querySelector(".create-product input").value;

  clone.querySelector(".create-product input").innerHTML = name;

  let insert = document.querySelector("tbody").appendChild(clone);

  // let insert = document.body.insertBefore(clone, product);

  // let inputName = document.querySelector('.create-product input').value;
  // let unitPrice = document.querySelector('#total-value span').value;

  //   let addProduct = document.querySelector('.product').appetemplateProduct;
  return insert;
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  const removeBtn = document.querySelector(".btn-remove");
  const addProduct = document.querySelector("#create");

  calculatePricesBtn.addEventListener("click", calculateAll);

  removeBtn.addEventListener("click", removeProduct);
  addProduct.addEventListener("click", createProduct);
});

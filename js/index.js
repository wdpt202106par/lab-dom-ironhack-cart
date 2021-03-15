// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceEl = product.querySelector('.price span'); // je pointe vers mon élément Html Price
  const quantityEl = product.querySelector('.quantity input') // je pointe vers mon élément Html Quantity
  let subtotalEl = product.querySelector('.subtotal span') // je pointe vers mon élément Html Subtotal

  const price = Number(priceEl.innerHTML) // je numberise l'élément Html price =>25
  const quantity = Number(quantityEl.value) // je numberise l'élément Html => valeur qui sera assignée

  subtotalEl.innerHTML = price*quantity // je fais intéragir JS et HTML pour renvoyer le sous total en nombre
  return price*quantity ;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //adding new product
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
  const lineToRemove = target.parentElement.parentElement;//select parent of parent of selected button
  lineToRemove.remove(1);//remove 1 line
  calculateAll(); 
}
const removeBtns = document.querySelectorAll(".btn-remove");//return an array of buttons
  function bindDeletebuttons(btn){
    return btn.addEventListener('click',removeProduct)//onclick sur les btns remove
  }
  removeBtns.forEach(bindDeletebuttons);//appliquer sur tous les btns remove


// ITERATION 5
const createBtn=document.querySelector('#create');//je choisis la nouvelle ligne de produit a ajouter
const newName = document.querySelector('.create-product input[type="text"]')//je choisis le champs nom de produit 
const pu = document.querySelector('.create-product input[type="number"]')//je choisis le champs de prix
function createProduct() {
  let tr = document.createElement('tr');//creer la ligne de produit ('tr')
  tr.className="product";//avec le class='produit'
  //.innerHTML permet d'ajouter une partie d'HTML, on prend la valeur input de nom et prix, avec les memes class, cela donne les meme mis en forme que les lignes haut dessus
  tr.innerHTML=`
  <tr class="product">
      <td class="name">
        <span>${newName.value}</span> 
      </td>
      <td class="price">$<span>${pu.value}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button class="btn btn-remove">Remove</button>
      </td>
    </tr>`
  let rows= document.getElementById('rows');//parent des elements tr (qui sont les lignes de produits dans le tableau)
  rows.appendChild(tr);
  bindDeletebuttons(tr.querySelector(".btn-remove"));//applique le bouton remove
  calculateAll(); //recalculer les subtotaux
}
createBtn.addEventListener('click',createProduct);

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

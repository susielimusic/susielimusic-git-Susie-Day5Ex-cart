// 1.Fix "calculate prices" option => done :D
// 2.Fix the "Add product" option
// 3. Fix the alignment for "Add product" option
// 4.Get "Remove button" to work


//Total Price Button
function calculateTotals(){
  var cartProductContainer = document.getElementById('products-wrapper');
  var cartRows = document.getElementsByClassName('product-row');
  var priceElement = document.getElementsByClassName('span-price-product');
  var quantityElement = document.getElementsByClassName('quantity-product');
  var total = 0

  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i]
    var price = parseInt(priceElement[i].innerText)
    var quantity = parseInt(quantityElement[i].value)
    var productPrice = price * quantity

    total += productPrice

    document.getElementsByClassName('span-price-per-product')[i].innerText= productPrice.toString()
    document.getElementById('total').innerText = total.toString()
  }
}

//Create New Products
function createNewProducts(){
  //Step 1: Target the parent element of products
    var parent = document.getElementById('products-wrapper');
  //Step 2: Have a form which will generate a new item => done :D
  //Step 3: When form gets submitted, grab the values entered 
  var itemName = document.getElementById('new-item-name').value 
  var itemPrice = document.getElementById('new-item-price').value
  console.log(`item name: ${itemName}`)
  console.log(`item price: ${itemPrice}`)

  //Step 4: Insert a new row/generate a new product with those values
  var newRow = document.createElement("div");
  newRow.className= "product-row flex-container";
  newRow.innerHTML = `<p class="product-title">${itemName}</p>
      <div>$
        <span class="span-price-product">${itemPrice}
        </span>
      </div>
      <div>QTY
          <input type="text" class="quantity-product" placeholder="0" >
      </div>
      <div>$
        <span class="span-price-per-product">0.00</span>
      </div>
      <div>
        <button class="btn-remove">Remove</button>
      </div>`;
  //Step 5: Append a new item to this parent element
  document.getElementById("products-wrapper").appendChild(newRow);
  removeProductButton = document.getElementsByClassName('btn-remove');
// removeProductButton.addEventListener("click", removeCartProduct);
for(var i = 0; i < removeProductButton.length; i++) {
  removeProductButton[i].addEventListener("click",removeCartProduct);
}
  
  }
//Remove Items
function removeCartProduct(e) {
//Step 1: Choose the rows I want to delete
console.log(e)
console.log(`Button's grandparent ${e.target.parentElement.parentElement}`)
console.log(`Button's great-grandparent ${e.target.parentElement.parentElement.parentElement}`)

var grandParent = e.target.parentNode.parentNode;
var greatGrandparent = e.target.parentNode.parentNode.parentNode;
greatGrandparent.removeChild(grandParent);
// var x = document.getElementById("myLI").parentElement.parentElement.parentElement.removeChild(grandParent);
//Step 2: attach method to remove rows
//Step 3: assigning the buttons to function(onclick)
//Step 4: make an event
}

window.onload = function() {
  calculatePricesButton = document.getElementById('calc-prices-button');
  createProductButton = document.getElementById('create-productrow-button');
  removeProductButton = document.getElementsByClassName('btn-remove');
  console.log(typeof removeProductButton)

  calculatePricesButton.addEventListener("click", calculateTotals);
  createProductButton.addEventListener("click", createNewProducts);
  for(var i = 0; i < removeProductButton.length; i++) {
    removeProductButton[i].addEventListener("click",removeCartProduct);
  }
 
}

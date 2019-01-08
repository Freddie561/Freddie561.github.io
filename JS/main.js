$(document).ready(function(){displayCart()})
	




function changeBackgroundColor() {
document.body.style.backgroundColor = "white";
	console.log("Color changing");
	test();
}



this.products=
	[
  { "image": "Assets/mens1.jpg", "name": "Everest Bomber Jacket", "price": 11999 },
  { "image": "Assets/mens2.jpg", "name": "Gym Tech Stretch Block Zip Hoodie", "price": 7499 },
  { "image": "Assets/mens3.jpg", "name": "Everest Bomber Jacket", "price": 11999 },
  { "image": "Assets/mens4.jpg", "name": "Premium Goods Tri Infill Hoodie", "price": 4999 },
  { "image": "Assets/mens5.jpg", "name": "California Hoodie", "price": 7999 },
  { "image": "Assets/mens6.jpg", "name": "Retro Stripe Sweatshirt", "price": 4999 },
  { "image": "Assets/mens7.jpg", "name": "Real Logo 1st Hoodie", "price": 4999 },
  { "image": "Assets/mens8.jpg", "name": "Split Track Oversized Sweatshirt", "price": 5499 },
  { "image": "Assets/mens9.jpg", "name": "Mega Logo Crew Neck Jumper", "price": 5999 }
]



function addProductToCart(index){
    var cart = getCart()
    cart.push(this.products[index]) //Add the product to the cart
    setCart(cart)
}

function getCart() {
  var cartJSON = localStorage.getItem('cart') //Trying to load from local storage
  try {
    var cart = JSON.parse(cartJSON) //Converting from JSON to javascript object(s)
  } catch {}
  if(!cart) { cart = [] } //If cart is null, set cart to be an empty array
  return cart
}

function setCart(cart) {
  var cartJSON = JSON.stringify(cart)
  localStorage.setItem('cart', cartJSON)
  displayCart();
}

function displayCart(){
	var i;
	var total = 0;
	var cart = getCart(); //gets the cart
	
	var cartItems = document.getElementById("cart-items")
	cartItems.innerHTML = ""
	for(i = 0; i < cart.length; i++){
		total += cart[i].price;
	cartItems.innerHTML += "<li>" + cart[i].name + " £" + (cart[i].price/100).toString() + "</li>"
	}
	document.getElementById("cart-price").innerHTML = "£" + (total/100).toString();
}


















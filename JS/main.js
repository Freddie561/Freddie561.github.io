$(document).ready(function(){displayCart()})



function deleteCart(){
	localStorage.clear()
	location.reload();
}


function changeBackgroundColor() {
document.body.style.backgroundColor = "white";
	console.log("Color changing");
	test();
}


function privacyPolicy(){
	if(window.confirm('If you click ok you will be redirected to the Privacy Policy, otherwise click cancel to carry on your browsing')){
		window.location.href='https://www.superdry.com/privacy-policy';
	}
}

function cartBuy(){
	alert('Items Purchased, Thank you!');
}
	



this.products=
	[
  { "image": "Assets/mens1.jpg", "name": "Everest Bomber Jacket", "price": 11999 },
  { "image": "Assets/mens2.jpg", "name": "Vintage Logo Hoodie", "price": 4999 },
  { "image": "Assets/mens3.jpg", "name": "Everest Bomber Jacket Black", "price": 11999 },
  { "image": "Assets/mens4.jpg", "name": "Premium Goods Tri Infill Hoodie", "price": 4999 },
  { "image": "Assets/mens5.jpg", "name": "California Hoodie", "price": 7999 },
  { "image": "Assets/mens6.jpg", "name": "Retro Stripe Sweatshirt", "price": 4999 },
  { "image": "Assets/mens7.jpg", "name": "Real Logo 1st Hoodie", "price": 4999 },
  { "image": "Assets/mens8.jpg", "name": "Split Track Oversized Sweatshirt", "price": 5499 },
  { "image": "Assets/mens9.jpg", "name": "Mega Logo Crew Neck Jumper", "price": 5999 },
  { "images":"Assets/womens1.jpg","name": "Blair Crew Sweatshirt", "price": 4999},	
  { "images":"Assets/womens2.jpg","name": "Rylee Leather Biker Jacket", "price": 14999},		
  { "images":"Assets/womens3.jpg","name": "Contak Down Stretch Jacket", "price": 10999},	
  { "images":"Assets/womens4.jpg","name": "Croyde Cable Knit", "price": 4499},	
  { "images":"Assets/womens5.jpg","name": "Atlas Padded Jacket", "price": 9999},	
  { "images":"Assets/womens6.jpg","name": "Blair Crew Sweatshirt", "price": 4999},	
  { "images":"Assets/womens7.jpg","name": "Lightweight Seersucker Shirt", "price": 3999},	
  { "images":"Assets/womens8.jpg","name": "Breton Twist Back Top", "price": 2499},	
  { "images":"Assets/womens9.jpg","name": "Vintage Logo Pastel Deboss Hoodie", "price": 4499},	
  { "images":"Assets/newin1.jpg","name": "Training Zip Hoodie", "price": 3599},			
  { "images":"Assets/newin2.jpg","name": "Japan Breakers Utility Jacket", "price": 9799},		
  { "images":"Assets/newin3.jpg","name": "Oxygen Zip Hoodie", "price": 6999},		
  { "images":"Assets/newin4.jpg","name": "Sport Windsprinter", "price": 6999},		
  { "images":"Assets/newin5.jpg","name": "Gym Tech Stretch Joggers", "price": 5999},		
  { "images":"Assets/newin6.jpg","name":"Core Loose Vest Top", "price": 2499},		
  { "images":"Assets/newin7.jpg","name": "Athletico Crop Crew Sweatshirt", "price": 5499},		
  { "images":"Assets/newin8.jpg","name": "Active Mesh Panel Leggings", "price": 4499},		
  { "images":"Assets/newin9.jpg","name": "Performance Insulate Leggings", "price": 4899},
 
	
]



function addProductToCart(index){
    var cart = getCart()
	alert(this.products[index].name + " selected!")
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


















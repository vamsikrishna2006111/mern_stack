// ================= Products =================

const products = [

{
id:1,
name:"22K Gold Ring",
price:25000,
image:"assets/images/ring1.jpg",
description:"Beautiful handcrafted gold ring."
},

{
id:2,
name:"Diamond Necklace",
price:85000,
image:"assets/images/necklace1.jpg",
description:"Luxury diamond necklace."
},

{
id:3,
name:"Gold Bangles",
price:48500,
image:"assets/images/bangle1.jpg",
description:"Traditional gold bangles."
},

{
id:4,
name:"Diamond Earrings",
price:38000,
image:"assets/images/earring1.jpg",
description:"Elegant diamond earrings."
}

];

// ================= Home =================

const container = document.getElementById("productContainer");

if(container){

products.forEach(product=>{

container.innerHTML += `

<div class="card">

<img src="${product.image}">

<h3>${product.name}</h3>

<p class="price">₹${product.price}</p>

<button onclick="viewProduct(${product.id})">
View Details
</button>

</div>

`;

});

}

// ================= View Product =================

function viewProduct(id){

localStorage.setItem("productId",id);

window.location="product.html";

}

// ================= Product Page =================

const image=document.getElementById("productImage");

if(image){

const id=Number(localStorage.getItem("productId"));

const product=products.find(p=>p.id===id);

document.getElementById("productImage").src=product.image;
document.getElementById("productName").textContent=product.name;
document.getElementById("productPrice").textContent="₹"+product.price;
document.getElementById("productDescription").textContent=product.description;

document.getElementById("addCart").onclick=function(){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

cart.push(product);

localStorage.setItem("cart",JSON.stringify(cart));

alert("Added to Cart");

};

}

// ================= Cart Page =================

const cartItems=document.getElementById("cartItems");

if(cartItems){

let cart=JSON.parse(localStorage.getItem("cart")) || [];

let total=0;

cart.forEach((item,index)=>{

total+=item.price;

cartItems.innerHTML+=`

<div class="cart-item">

<img src="${item.image}">

<div>

<h3>${item.name}</h3>

<p>₹${item.price}</p>

</div>

<button onclick="removeItem(${index})">

Remove

</button>

</div>

`;

});

document.getElementById("totalPrice").textContent=
"Total : ₹"+total;

}

function removeItem(index){

let cart=JSON.parse(localStorage.getItem("cart"));

cart.splice(index,1);

localStorage.setItem("cart",JSON.stringify(cart));

location.reload();

}
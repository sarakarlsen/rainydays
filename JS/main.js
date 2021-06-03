const productsTest = document.querySelector(".row.index-row");

const url = "https://tsh.olx.mybluehost.me/wp-json/wc/store/products";

async function fetchProducts() {
  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);

    details.forEach(function (result) {
      productsTest.innerHTML += `
            <div class="column">
             <a href="product.html?id=${result.id}">
            <img src="${result.images[0].src}"</img></a>
            <div>${result.name}</div>
            <a href="product.html?id=${result.id}" class="call-to-action" id="cart-button">Read more</a>
            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchProducts();

let carts = document.querySelectorAll("#cart-button");

let products = [
  {
    name: "Blue jacket",
    tag: "bluejacket",
    price: 250,
    inCart: 0,
  },
  {
    name: "Grey jacket",
    tag: "greyjacket",
    price: 225,
    inCart: 0,
  },
  {
    name: "Black jacket",
    tag: "blackjacket",
    price: 200,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalPrice(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  console.log("My cartItems are", cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalPrice(product) {
  let cartPrice = localStorage.getItem("totalPrice");

  console.log("My cartCost is", cartPrice);
  console.log(typeof cartPrice);

  if (cartPrice != null) {
    cartPrice = parseInt(cartPrice);
    localStorage.setItem("totalPrice", cartPrice + product.price);
  } else {
    localStorage.setItem("totalPrice", product.price);
  }
}

function showCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartPrice = localStorage.getItem("totalPrice");

  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((example) => {
      productContainer.innerHTML += `
            <div class="product">
            <i class="fal fa-times-circle"></i>
            <img src= "./images/${example.tag}.jpg">
            <span>${example.name}
            </div>
            <div class="price">$${example.price}</div>
            <div class="quantity">
            <i class="fal fa-minus-circle"></i>
            <span>${example.inCart}</span>
            <i class="fal fa-plus-circle"></i>
            </div>
            <div class="total">
            ${example.inCart * example.price}
            </div>
    
            `;
    });

    productContainer.innerHTML += `
   <div class="basketTotalContainer">
   <h4">
   Total price
   </h4>
   <h4 class="basketTotal">
     $${cartPrice}.00
     </h4>

        `;
  }
}

onLoadCartNumbers();
showCart();

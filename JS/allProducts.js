const productsTest = document.querySelector(".product-row");

const urlAll = "https://rainydays.website/wp-json/wc/store/products";

async function fetchAllProducts() {
  try {
    const responseProduct = await fetch(urlAll);
    const detailsProduct = await responseProduct.json();

    console.log(detailsProduct);

    detailsProduct.forEach(function (result) {
      productsTest.innerHTML += `
            <div class="column">
             <a href="product.html?id=${result.id}">
             <img src="${result.images[0].src}."></a>
            <div>${result.name}</div>
            <a href="product.html?id=${result.id}" class="call-to-action" id="cart-button">Read more</a>
            </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

fetchAllProducts();

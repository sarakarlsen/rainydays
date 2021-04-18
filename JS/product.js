const detailContainer = document.querySelector(".product-info");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


const url_api = "https://flower-power.site/wp-json/wc/store/products/" + id;

console.log(url_api);

async function fetchInfo() {
    try {
        const response = await fetch(url_api);
        const info = await response.json();
        console.log(info);

        createHTML(info);
    }

    catch(error) {
        console.log(error);
        detailContainer.innerHTML = "An error has occured";
    }
}

fetchInfo();

function createHTML(info) {
    detailContainer.innerHTML = `<h1>${info.name}</h1>
                      <img src="${info.images[0].src}"</img>
                                  <p>${info.description}<p>
                                  <h2 style=padding=20px;>$ ${info.prices.price}</h2>
                                  <a href="#" class="call-to-action" id="cart-button">Add to bag</a>`
}


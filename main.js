let carts = document.querySelectorAll("#cart-button");

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        console.log("added to cart")
    })

}
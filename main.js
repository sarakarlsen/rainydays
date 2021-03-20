let carts = document.querySelectorAll("#cart-button");

for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener("click", () => {
        cartNumbers();
    })

}

function cartNumbers() {
    let productNumbers = localStorage.getItem("cartNumbers");
    console.log(productNumbers);
    console.log(typeof productNumbers);
    localStorage.setItem("cartNumbers", 1);

}
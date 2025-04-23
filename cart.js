let cartItems = [];

for (let i = 0; i < localStorage.length; i++) {
  if (!localStorage.getItem(`user${i}`)) {
    cartItems.push(JSON.parse(localStorage.getItem(`cartItems${i}`)));
  }
}

let main = document.querySelector(".chakri");

if (cartItems.length) {
  for (item of cartItems) {
    let newItem = document.createElement("div");
    newItem.innerHTML = `<div class=product-card><img src=${item.image} alt=${item.name} class="product-image"/><div class="product-details"><h2 class=product-name>${item.name}</h2><p class=product-volume>${item.volume}</p> <div class=product-footer><span class=price>${item.price}</span> </div></div> </div>`;
    // main.appendChild ="<div class=product-details></div>";
    main.appendChild(newItem);
  }
} else {
  let newItem = document.createElement("h3");
  newItem.innerText = "No Items Added";
  main.appendChild(newItem);
}

console.log(cartItems);

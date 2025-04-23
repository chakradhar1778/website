// document.addEventListener("DOMContentLoaded", function () {
//   const addButtons = document.getElementsByClassName("add-button");

//   Array.from(addButtons).forEach(button => {
//       button.addEventListener("click", function(e) {
//         e.stopPropagation();
//           const productCard = e.target.closest(".product-card");
//           const quantityControls = productCard.querySelector('.quantity-controls');
//           const quantity = quantityControls.querySelector('.quantity');

//           if (quantityControls.style.display === 'none') {
//               quantityControls.style.display = 'flex';
//               button.textContent = 'Update Cart';
//               button.classList.add('added-to-cart');
//               updateCart(productCard, 1);
//           }

//           const minusBtn = quantityControls.querySelector('.minus');
//           const plusBtn = quantityControls.querySelector('.plus');

//           minusBtn.addEventListener('click', function(e) {
//               e.stopPropagation();
//               let value = parseInt(quantity.textContent);
//               if (value > 0) {
//                   value--;
//                   quantity.textContent = value;
//                   if (value === 0) {
//                       quantityControls.style.display = 'none';
//                       button.textContent = 'Add to Cart';
//                       button.classList.remove('added-to-cart');
//                   }
//                   updateCart(productCard, value);
//               }
//           });

//           plusBtn.addEventListener('click', function(e) {
//               e.stopPropagation();
//               let value = parseInt(quantity.textContent)  ;
//               if (value < 99) {
//                   value++;
//                   quantity.textContent = value;
//                   updateCart(productCard, value);
//               }
//           });
//       });
//   });

//   function updateCart(productCard, quantity) {
//       const productData = {
//           image: productCard.querySelector(".product-image").src,
//           name: productCard.querySelector(".product-name").textContent,
//           volume: productCard.querySelector(".product-volume").textContent,
//           price: productCard.querySelector(".price").textContent,
//           quantity: quantity
//       };

//       let cart = JSON.parse(localStorage.getItem('cart')) || {};

//       if (quantity === 0) {
//           delete cart[productData.name];
//       } else {
//           cart[productData.name] = productData;
//       }

//       localStorage.setItem('cart', JSON.stringify(cart));
//       updateCartIcon();
//   }

//   function updateCartIcon() {
//       const cart = JSON.parse(localStorage.getItem('cart')) || {};
//       const itemCount = Object.keys(cart).length;
//       const cartIcon = document.querySelector('.fa-shopping-cart');

//       if (itemCount > 0) {
//           cartIcon.setAttribute('data-count', itemCount);
//           cartIcon.classList.add('has-items');
//       } else {
//           cartIcon.removeAttribute('data-count');
//           cartIcon.classList.remove('has-items');
//       }
//   }

//   // Initialize cart icon
//   updateCartIcon();
// });

const products = {
  biscuitsAndCream: [
    {
      id: "biscuit_001",
      name: "Oreo Original Biscuits",
      price: 40,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "120gm",
      imageUrl: "https://m.media-amazon.com/images/I/51uhJOPnIbL.jpg",
    },
    {
      id: "biscuit_002",
      name: "Parle-G Biscuits",
      price: 10,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "100gm",
      imageUrl: "photos/parle-G",
    },
    {
      id: "biscuit_003",
      name: "Britannia Strawberry Wafers",
      price: 25,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "75gm",
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/wafer-waffle/w/s/4/-original-imah7kyyrfmhuntj.jpeg?q=90&crop=false",
    },
    {
      id: "spread_001",
      name: "Nutella Hazelnut Spread",
      price: 350,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "350gm",
      imageUrl: "https://m.media-amazon.com/images/I/81TsQlSqfHL.jpg",
    },
    {
      id: "dairy_001",
      name: "Amul Spray Milk Powder",
      price: 190,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "500gm",
      imageUrl: "photos/milk powder",
    },
  ],

  snacks: [
    {
      id: "snack_001",
      name: "Lays Classic Salted",
      price: 35,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "100gm",
      imageUrl: "photos/lays.jpg",
    },
    {
      id: "snack_002",
      name: "Maggi Noodles",
      price: 12,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "70gm",
      imageUrl: "photos/maggi.jpeg",
    },
    {
      id: "snack_003",
      name: "Doritos Nacho Cheese",
      price: 85,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "150gm",
      imageUrl:
        "https://m.media-amazon.com/images/I/71syW2KpA1L._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: "snack_004",
      name: "Pringles Original",
      price: 150,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "107gm",
      imageUrl:
        "https://rukminim2.flixcart.com/image/850/1000/l37mtu80/chips/i/i/t/165-original-barbeque-1-pringles-original-imagedwzwg5rtqqv.jpeg?q=20&crop=false",
    },
    {
      id: "snack_005",
      name: "Frooti Mango Drink",
      price: 25,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "250ml",
      imageUrl: "photos/frooti.webp",
    },
  ],

  chocolates: [
    {
      id: "choco_001",
      name: "KitKat Chocolate Bar",
      price: 30,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "37gm",
      imageUrl:
        "https://www.jiomart.com/images/product/original/490001864/kitkat-chocolate-38-5-g-product-images-o490001864-p490001864-0-202308080311.jpg?im=Resize=(1000,1000)",
    },
    {
      id: "choco_002",
      name: "Dairy Milk Chocolate",
      price: 40,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "50gm",
      imageUrl: "photos/dairy milk",
    },
    {
      id: "choco_003",
      name: "shake to go",
      price: 120,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "350ml",
      imageUrl:
        "https://www.optislim.co.nz/cdn/shop/files/17.png?v=1728624360&width=3840",
    },
    {
      id: "choco_004",
      name: "KitKat Mini",
      price: 20,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "10gm",
      imageUrl:
        "https://www.kitkat.in/sites/default/files/styles/full_width_image_1920x795_/public/2024-12/KitKat%202F.png?itok=Jh53izsc",
    },
    {
      id: "choco_005",
      name: "Snickers Bar",
      price: 50,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "45gm",
      imageUrl:
        "https://www.bigbasket.com/media/uploads/p/xl/40241856-2_5-snickers-kesar-pista-chocolate-bar-premium-quality.jpg",
    },
  ],

  beverages: [
    {
      id: "bev_001",
      name: "Nestle Milo",
      price: 130,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "200gm",
      imageUrl:
        "https://www.jiomart.com/images/product/original/491322205/nestle-milo-cocoa-malt-flavoured-milk-180-ml-tetra-pak-product-images-o491322205-p590124557-0-202305040332.jpg?im=Resize=(1000,1000)",
    },
    {
      id: "bev_002",
      name: "Mineral Water Bottle",
      price: 20,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "1L",
      imageUrl: "photos/mineral water",
    },
    {
      id: "bev_003",
      name: "Sprite Soft Drink",
      price: 50,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "750ml",
      imageUrl:
        "https://frugivore-bucket.s3.amazonaws.com/media/package/img_one/2020-10-17/Sprite_Soft_Drink_1.25l.jpg",
    },
    {
      id: "bev_004",
      name: "Coca-Cola Zero Sugar",
      price: 50,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "500ml",
      imageUrl: "photos/coco",
    },
    {
      id: "bev_005",
      name: "Red Bull Energy Drink",
      price: 110,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "250ml",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/8.4_floz_can_of_Red_Bull_Energy_Drink.jpg/800px-8.4_floz_can_of_Red_Bull_Energy_Drink.jpg",
    },
    {
      id: "bev_006",
      name: "Pepsi",
      price: 45,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "500ml",
      imageUrl: "photos/pepsi-500ml-in-bulk-500x500.webp",
    },
    {
      id: "bev_007",
      name: "Real Fruit Juice",
      price: 90,
      stock: Math.floor(Math.random() * 50) + 10,
      quantity: 1,
      volume: "1L",
      imageUrl: "photos/real fruit",
    },
  ],
};

document.addEventListener("DOMContentLoaded", function () {
  // Render products for each category
  Object.keys(products).forEach((category) => {
    const container = document.getElementById(`${category}Products`);

    products[category].forEach((product) => {
      const productCard = createProductCard(product);
      container.appendChild(productCard);
    });
  });

  function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-volume">${product.volume}</p>
                <div class="product-footer">
                    <span class="price">₹${product.price}</span>
                    <div class="quantity-controls" style="display: none;">
                        <button class="quantity-btn minus">-</button>
                        <span class="quantity">1</span>
                        <button class="quantity-btn plus">+</button>
                    </div>
                    <button class="add-button" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;

    // Add event listeners
    const addButton = card.querySelector(".add-button");
    const quantityControls = card.querySelector(".quantity-controls");
    const quantity = card.querySelector(".quantity");
    const minusBtn = card.querySelector(".minus");
    const plusBtn = card.querySelector(".plus");

    addButton.addEventListener("click", function () {
      if (quantityControls.style.display === "none") {
        quantityControls.style.display = "flex";
        addButton.textContent = "Update Cart";
        updateCart(product, 1);
      }
    });

    minusBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      let value = parseInt(quantity.textContent);
      if (value > 0) {
        value--;
        quantity.textContent = value;
        if (value === 0) {
          quantityControls.style.display = "none";
          addButton.textContent = "Add to Cart";
        }
        updateCart(product, value);
      }
    });

    plusBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      let value = parseInt(quantity.textContent);
      if (value < product.stock) {
        value++;
        quantity.textContent = value;
        updateCart(product, value);
      }
    });

    return card;
  }

  async function updateCart(product, quantity) {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        console.error("No user ID found");
        return;
      }

      // Prepare data for API
      const cartData = {
        userId: userId,
        productId: product.id,
        quantity: quantity,
        price: product.price,
      };

      // Make API call to update cart
      const response = await fetch("http://localhost:3001/api/cart/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartData),
      });

      const data = await response.json();

      if (data.success) {
        // Update local storage with new cart data
        let cart = JSON.parse(localStorage.getItem("cart")) || {};

        if (quantity === 0) {
          delete cart[product.id];
        } else {
          cart[product.id] = {
            ...product,
            quantity: quantity,
          };
        }

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartIcon();
      } else {
        console.error("Failed to update cart:", data.error);
      }
    } catch (err) {
      console.error("Error updating cart:", err);
    }
  }

  function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    const itemCount = Object.keys(cart).length;
    const cartIcon = document.querySelector(".fa-shopping-cart");

    if (itemCount > 0) {
      cartIcon.setAttribute("data-count", itemCount);
      cartIcon.classList.add("has-items");
    } else {
      cartIcon.removeAttribute("data-count");
      cartIcon.classList.remove("has-items");
    }
  }

  // Initialize cart icon
  updateCartIcon();
});

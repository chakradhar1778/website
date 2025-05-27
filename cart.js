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
      name: "Shake To Go",
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
getCart();
const cartItems = JSON.parse(localStorage.getItem("cart")) || {};

document.addEventListener("DOMContentLoaded", function () {
  // Restore modal state if it was open
  const modalState = sessionStorage.getItem("modalState");
  if (modalState) {
    const { type, amount } = JSON.parse(modalState);
    if (type === "qr") {
      generateQR(parseFloat(amount));
      document.getElementById("qr-modal").style.display = "block";
    }
  }

  // Select app button
  document.getElementById("select-app").addEventListener("click", function () {
    document.getElementById("qr-modal").classList.add("fade-out");
    setTimeout(() => {
      document.getElementById("qr-modal").style.display = "none";
      document.getElementById("qr-modal").classList.remove("fade-out");
      document.getElementById("app-modal").style.display = "block";
    }, 300);
  });

  // App selection
  document.querySelectorAll(".app-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const appName = this.dataset.app;
      alert(
        `Please complete the payment in your ${appName.toUpperCase()} mobile app`
      );
      document.getElementById("app-modal").style.display = "none";
      document.getElementById("qr-modal").style.display = "block";
    });
  });

  // Payment done button
  document
    .getElementById("payment-done")
    .addEventListener("click", function () {
      document.getElementById("qr-modal").style.display = "none";
      document.getElementById("success-modal").style.display = "block";
      sessionStorage.removeItem("modalState"); // Clear modal state
    });

  // Close buttons
  document.querySelectorAll(".close, .close-btn").forEach((button) => {
    button.addEventListener("click", function () {
      const modal = this.closest(".modal");
      modal.classList.add("fade-out");
      setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("fade-out");
      }, 300);
      sessionStorage.removeItem("modalState");
    });
  });

  document
    .querySelector("#payment-close-btn")
    .addEventListener("click", async function () {
      document.getElementById("qr-modal").style.display = "none";
      document.getElementById("success-modal").style.display = "none";

      const productIds = Object.keys(cartItems);

      let total = 0;

      Object.values(cartItems).forEach((item) => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
      });

      try {
        const response = await fetch("http://localhost:3001/api/payment", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: localStorage.getItem("userId"),
            cartItems: JSON.stringify(productIds),
            price: total,
          }),
        });
        localStorage.setItem("cart", "{}");
        if (!response.ok) {
          throw new Error("Failed to Make Payment");
        }
      } catch (err) {
        console.error("Error making payment:", err);
        throw err;
      }
      location.reload();
    });

  // Update the checkout button click handler
  document
    .getElementById("checkout-btn")
    .addEventListener("click", function () {
      const total = parseFloat(
        document.getElementById("total-price").textContent.replace("₹", "")
      );
      generateQR(total);
      document.getElementById("qr-modal").style.display = "block";
      // Save modal state
      sessionStorage.setItem(
        "modalState",
        JSON.stringify({
          type: "qr",
          amount: total,
        })
      );
    });
});

// Update window click handler
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    const modal = event.target;
    modal.classList.add("fade-out");
    setTimeout(() => {
      modal.style.display = "none";
      modal.classList.remove("fade-out");
    }, 300);
    sessionStorage.removeItem("modalState");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const cartContainer = document.querySelector(".cart-items");
  const itemsCount = document.getElementById("items-count");
  const totalPrice = document.getElementById("total-price");

  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;
    let count = 0;

    Object.values(cartItems).forEach((item) => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      count += item.quantity;

      const itemElement = document.createElement("div");
      itemElement.className = "cart-item";
      itemElement.innerHTML = `
              <img src="${item.imageUrl}" alt="${item.name}" class="item-image">
              <div class="item-details">
                  <h3>${item.name}</h3>
                  <p class="item-volume">${item.volume}</p>
                  <p class="item-price">₹${item.price}</p>
                  <div class="quantity-controls">
                      <button class="quantity-btn minus" data-id="${item.id}">-</button>
                      <span class="quantity">${item.quantity}</span>
                      <button class="quantity-btn plus" data-id="${item.id}">+</button>
                  </div>
              </div>
              <button class="remove-btn" data-id="${item.id}">
                  <i class="fas fa-trash"></i>
              </button>
          `;
      cartContainer.appendChild(itemElement);
    });

    itemsCount.textContent = count;
    totalPrice.textContent = `₹${total.toFixed(2)}`;

    if (count === 0) {
      cartContainer.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
      document.getElementById("checkout-btn").disabled = true;
    }
  }

  // Event delegation for quantity controls
  cartContainer.addEventListener("click", async function (e) {
    const button = e.target.closest("button");
    if (!button) return;

    const itemId = button.dataset.id;
    const item = cartItems[itemId];

    if (button.classList.contains("minus")) {
      if (item.quantity > 1) {
        item.quantity--;
        await updateCartOnServer(itemId, item.quantity);
      } else if (item.quantity === 1) {
        await updateCartOnServer(itemId, 0);
        delete cartItems[itemId];
      } else {
        delete cartItems[itemId];
      }
    } else if (button.classList.contains("plus")) {
      if (item.quantity < item.stock) {
        item.quantity++;
        await updateCartOnServer(itemId, item.quantity);
      }
    } else if (button.classList.contains("remove-btn")) {
      delete cartItems[itemId];
      await fetch(
        `http://localhost:3001/api/cart/remove?userId=${localStorage.getItem(
          "userId"
        )}&productId=${itemId}`,
        {
          method: "DELETE",
        }
      );
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    renderCart();
  });

  // document
  //   .getElementById("checkout-btn")
  //   .addEventListener("click", function () {
  //     // Add checkout logic here
  //     alert("Proceeding to checkout...");
  //   });

  // Initial render
  renderCart();
});

async function updateCartOnServer(productId, quantity) {
  const userId = localStorage.getItem("userId");
  if (!userId) return;

  try {
    const response = await fetch("http://localhost:3001/api/cart/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        productId,
        quantity,
        price: cartItems && (cartItems[productId]?.price || 0),
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update cart");
    }
  } catch (err) {
    console.error("Error updating cart:", err);
    throw err;
  }
}

async function getCart() {
  try {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      console.error("No user ID found");
      return;
    }

    const response = await fetch(
      `http://localhost:3001/api/cart?userId=${userId}`
    );

    const data = await response.json();

    if (data.success) {
      data.cart.map((ele) => {
        const category = Object.keys(products);
        category.forEach((catg) => {
          const item = products[catg].find((itm) => itm.id === ele.product_id);
          if (item) {
            item.quantity = ele.quantity;
          }
          if (item) {
            let cart = JSON.parse(localStorage.getItem("cart")) || {};

            cart[item.id] = item;

            localStorage.setItem("cart", JSON.stringify(cart));
          }
        });
      });
    } else {
      console.error("Failed to initialize cart:", data.error);
    }
  } catch (error) {
    console.error(error);
  }
}
// Add after your existing code
function generateQR(amount) {
  const upiUrl = `upi://pay?pa=chakri9346@ibl&pn=VendMaadi&am=${amount}&cu=INR`;
  const qr = qrcode(0, "L");
  qr.addData(upiUrl);
  qr.make();

  document.getElementById("qrcode").innerHTML = qr.createImgTag(5);
  document.getElementById("modal-amount").textContent = `₹${amount.toFixed(2)}`;
}

document.getElementById("checkout-btn").addEventListener("click", function () {
  const total = parseFloat(
    document.getElementById("total-price").textContent.replace("₹", "")
  );
  generateQR(total);
  document.getElementById("qr-modal").style.display = "block";
});

document.getElementById("payment-done").addEventListener("click", function () {
  document.getElementById("qr-modal").style.display = "none";
  document.getElementById("success-modal").style.display = "block";
});

// Close modal functionality
document.querySelectorAll(".close, .close-btn").forEach((button) => {
  button.addEventListener("click", function () {
    document.getElementById("qr-modal").style.display = "none";
    document.getElementById("success-modal").style.display = "none";
  });
});

// Clear cart functionality
document.getElementById("clear-cart").addEventListener("click", function () {
  document.getElementById("clear-cart-modal").style.display = "block";
});

document.getElementById("cancel-clear").addEventListener("click", function () {
  document.getElementById("clear-cart-modal").style.display = "none";
});

document.getElementById("confirm-clear").addEventListener("click", function () {
  localStorage.removeItem("cart");
  location.reload();
});

// Close modals when clicking outside
window.addEventListener("click", function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
});

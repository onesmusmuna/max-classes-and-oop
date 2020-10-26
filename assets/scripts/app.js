const productList = {
  products: [
    {
      title: "mac",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/81aot0jAfFL._AC_SL1500_.jpg",
      price: 2150,
      description: "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage)",
    },
    {
      title: "Stereo Receiver",
      imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51W2j6OYSwL._AC_SL1200_.jpg",
      price: 3500,
      description: "Sony STRDH190 2-ch Home Stereo Receiver with Phono Inputs & Bluetooth",
    },
  ],

  render() {
    const renderHook = document.getElementById("app");
    const productList = document.createElement("ul");
    productList.className = "product-list";

    // render all products
    for (product of this.products) {
      const productItem = document.createElement("li");
      productItem.className = "product-item";
      productItem.innerHTML = `
        <div>
            <img src="${product.imageUrl}" alt="${product.title}">
            <div class="product-item__content">
                <h2>${product.title}</h2>
                <h3>${product.price}</h3>
                <p>${product.description}</p>
                <button>Add to Cart</button>
            </div>
        </div>
        `;
      productList.append(productItem);
    }
    renderHook.append(productList);
  },
};

productList.render();

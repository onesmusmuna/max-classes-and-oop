class Product {
  constructor(title, image, price, description) {
    this.title = title;
    this.imageUrl = image;
    this.price = price;
    this.description = description;
  }
}

class ProductList {
  // products is a class field, Since it has an equal sign;
  // When its defined in a constructor, it becomes a class Property
  products = [
    new Product(
      "mac",
      "https://images-na.ssl-images-amazon.com/images/I/81aot0jAfFL._AC_SL1500_.jpg",
      2150,
      "New Apple MacBook Pro (16-inch, 16GB RAM, 512GB Storage"
    ),

    new Product(
      "mac",
      "https://images-na.ssl-images-amazon.com/images/I/51W2j6OYSwL._AC_SL1200_.jpg",
      "3500",
      "Sony STRDH190 2-ch Home Stereo Receiver with Phono Inputs & Bluetooth"
    ),
  ];

  render() {
    const productList = document.createElement("ul");
    productList.className = "product-list";

    // render all products
    for (const product of this.products) {
      const productItem = new ProductItem(product);
      const productItemRender = productItem.render();
      productList.append(productItemRender);
    }
    return productList;
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log("Adding Product to Cart");
    console.log(this.product);
  }

  render() {
    const productItem = document.createElement("li");
    productItem.className = "product-item";
    productItem.innerHTML = `
      <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
              <h2>${this.product.title}</h2>
              <h3>${this.product.price}</h3>
              <p>${this.product.description}</p>
              <button>Add to Cart</button>
          </div>
      </div>
    `;

    // Notice that, I have selected the button from the listItem. It started to exist form there.
    const addCartButton = productItem.querySelector("button");

    // when we use this.addToCart, JS will bind this to the source of the event: the button;
    // Solution: use this.addToCart.bind(this), It will bind this to the addToCart method.
    addCartButton.addEventListener("click", this.addToCart.bind(this));

    return productItem;
  }
}

class ShoppingCart {
  items = [];

  render() {
    const cartEl = document.createElement("section");
    cartEl.className = "cart";
    cartEl.innerHTML = `
    <h2>Total: \$${0}</h2>
    <button>Order Now!</button>
    `;

    return cartEl;
  }
}

class Shop {
  render() {
    const renderHook = document.getElementById("app");

    const cart = new ShoppingCart();
    const cartElement = cart.render();

    const productList = new ProductList();
    const productListElement = productList.render();

    renderHook.append(cartElement);
    renderHook.append(productListElement);
  }
}

class App {
  static init() {
    const shop = new Shop();
    shop.render();
  }
}

App.init();

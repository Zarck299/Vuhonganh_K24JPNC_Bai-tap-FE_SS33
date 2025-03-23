function displayProducts(filteredProducts) {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    filteredProducts.forEach((product) => {
        const productCard = `
        <div class="col-md-4 col-lg-3 mb-4">
          <div class="card h-100">
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.name}</h5>
              <p class="card-text">${product.description}</p>
              <p class="card-text"><strong>${product.price.toLocaleString()} VNĐ</strong></p>
              <button class="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>`;
        productList.innerHTML += productCard;
    });
}

displayProducts(products);
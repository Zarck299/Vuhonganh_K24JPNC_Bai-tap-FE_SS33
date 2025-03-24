const products = [
    { id: 1, name: "Laptop Dell XPS 15", price: 35990000, image: "https://via.placeholder.com/150", description: "Laptop cao cấp 15 inch, CPU Intel i7, RAM 16GB." },
    { id: 2, name: "iPhone 15 Pro Max", price: 32990000, image: "https://via.placeholder.com/150", description: "Điện thoại Apple flagship với chip A17 Pro." },
    { id: 3, name: "Samsung Galaxy S24 Ultra", price: 28990000, image: "https://via.placeholder.com/150", description: "Smartphone Android mạnh mẽ với bút S-Pen." },
    { id: 4, name: "Tai nghe Sony WH-1000XM5", price: 7990000, image: "https://via.placeholder.com/150", description: "Tai nghe chống ồn tốt nhất với pin 30 giờ." },
    { id: 5, name: "Apple Watch Series 9", price: 11990000, image: "https://via.placeholder.com/150", description: "Đồng hồ thông minh đo nhịp tim và thể thao." }
];

function displayProducts(list) {
    const container = document.getElementById("productList");
    container.innerHTML = "";
    list.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>${product.price.toLocaleString()} VNĐ</strong></p>
                <button class="buy-button">Buy</button>
            </div>
        `;
    });
}

function searchProducts() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(filtered);
}

window.onload = () => displayProducts(products);

$(document).ready(function () {
    // JSON data
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 1500,
            description: "High-performance laptop",
            category: "Electronics"
        },
        {
            id: 2,
            name: "Smartphone",
            price: 800,
            description: "Latest model smartphone",
            category: "Electronics"
        },
        {
            id: 3,
            name: "Headphones",
            price: 200,
            description: "Noise-cancelling headphones",
            category: "Accessories"
        },
        {
            id: 4,
            name: "Backpack",
            price: 50,
            description: "Durable and spacious backpack",
            category: "Bags"
        }
    ];

    // Render products to the page
    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price}</p>
                <p>${product.description}</p>
            </div>
        `;
        $("#product-list").append(productCard);
    });
});

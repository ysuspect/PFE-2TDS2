async function fetchProducts() {
    const url = 'https://dummyjson.com/products';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Erro ao buscar produtos');
        }
        
        const data = await response.json();
        displayProducts(data.products);
    } catch (error) {
        console.error('Erro:', error);
    }
}

function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Limpa o container

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <h2>${product.title}</h2>
            <p>Preço: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" />
        `;
        productContainer.appendChild(productElement);
    });
}

fetchProducts();
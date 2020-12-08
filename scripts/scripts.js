let productList = document.querySelector("#product-list");


products.forEach(product => {
    console.log(product)
    productList.innerHTML +=
    `<a href="${product.link}" class="product">
        <img src="${product.image}" alt="Imagem de ${product.title}">
        <strong>${product.title}</strong>
        <span>R$${product.price}</span>
    </a>`
});

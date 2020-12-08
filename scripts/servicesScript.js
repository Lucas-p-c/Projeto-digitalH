let serviceList = document.querySelector("#service-list");

services.forEach(service => {
    serviceList.innerHTML +=
    `<a href="${service.link}" class="product">
        <img src="${service.image}" alt="Imagem de ${service.title}">
        <strong>${service.title}</strong>
        <span>R$${service.price}</span>
        <span>${service.time}</span>
    </a>`
});



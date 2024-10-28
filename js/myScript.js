// Función para cargar un archivo JSON
async function loadJSON(url) {
    try {
        const response = await fetch('../data/principal.json');
        return await response.json();
    } catch (error) {
        console.error('Error cargando el archivo:', error);
    }
}

// Función para listar categorías
async function listCategory() {
    const category = await loadJSON('../data/categorias.json');
    let categoryList = document.querySelector('#category-list');

    category.forEach((element) => {
        categoryList.innerHTML += `
            <li class="category_item" category="${element.id}">${element.name}</li>
        `;
    });
}

// Función para listar motocicletas
async function listMotorcycles() {
    const motorcycles = await loadJSON('../data/motos.json');
    let productContainer = document.querySelector('#motorcycle-list');

    motorcycles.forEach((element) => {
        productContainer.innerHTML += `
            <article class="product_item" category="${element.category}">
                <img src="${element.image}" alt="${element.model}">
                <section class="product_info">
                    <h3>${element.model}</h3>
                    <span>${element.price}</span>
                </section>
            </article>
        `;
    });
}

// Función principal para iniciar el proceso
async function main() {
    try {
        await listCategory();
        await listMotorcycles();
    } catch (error) {
        console.error('Error:', error);
    }
}

// Ejecutar la función principal cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', main);

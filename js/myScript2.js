$(document).ready(function() { 
    // Cargar datos desde JSON
    $.getJSON('../data/principal.json', function(data) {
        // Crear la categoría "Todo"
        $('.category_list').append('<a href="#" class="category_item" category="all">Todo</a>');

        // Crear categorías
        data.categories.forEach(function(category) {
            $('.category_list').append('<a href="#" class="category_item" category="'+category.id+'">'+category.name+'</a>');
        });

        // Crear productos
        data.products.forEach(function(product) {
            $('#motorcycle-list').append('<article class="product_item" category="'+product.category_id+'"><img src="'+product.image+'" alt="'+product.model+'"><h3>'+product.model+'</h3><span>Precio: $'+product.price+'</span></article>');
        });

        // Mostrar todos los productos destacados al cargar
        $('.featured_item').show();

        // Manejar el filtrado
        $('.category_item').click(function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            var catProduct = $(this).attr('category');
            $('.featured_item').hide(); // Ocultar todas las imágenes destacadas

            console.log(catProduct,"categoria")

            if (catProduct === "all") {
                $('.featured_item').show(); // Mostrar todas las imágenes
            } else {
                // Mostrar solo imágenes de la categoría seleccionada
                $('.featured_item[category="'+catProduct+'"]').show();
            }

            // Manejar la clase activa
            $('.category_item').removeClass('active'); // Quitar clase activa de todas
            $(this).addClass('active'); // Agregar clase activa a la categoría seleccionada
        });

        // Establecer "Todo" como categoría activa por defecto
        $('.category_list .category_item[category="all"]').addClass('active');
    }).fail(function() {
        console.error("Error al cargar el JSON");
    });
});

$(document).ready(function(){

    // agregando clase active al ALL
    $('.category_list .category_item[category="all"]').addClass('ct_item-active');
    //filtrandro productos
    $('.category_item').click(function(){
        var catProduct = $(this).attr('category');
        console.log(catProduct);
        
        // agregando clase active al enlace seleccionado
        $('.category_item').removeClass('ct_item-active'); // Se añade el punto '.' antes de la clase
        $(this).addClass('ct_item-active');

        //ocultando productos
        $('.product_item').hide();
        $('.product_item[category="'+catProduct+'"]').show();
    });
    // Mostrando todos los productos
    $('.category_item[category="all"]').click(function(){
        $('.product_item').show();
    });
});



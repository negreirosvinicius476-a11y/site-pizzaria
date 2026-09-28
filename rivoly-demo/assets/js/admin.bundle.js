/* ======================================================================
 * Rivoly · API simulada no navegador (versão de demonstração)
 * Reproduz as regras do backend PHP para o site e o painel funcionarem
 * sem servidor. Os dados ficam no localStorage do navegador.
 * ====================================================================== */
(function () {
'use strict';

var CATALOG = {"categories":[{"id":1,"name":"Pizzas Tradicionais","slug":"pizzas-tradicionais","type":"pizza","description":"Média (6 fatias), grande (8) ou família (12).","sort_order":1,"active":1,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":2,"name":"Pizzas Especiais","slug":"pizzas-especiais","type":"pizza","description":"Os sabores da casa.","sort_order":2,"active":1,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":3,"name":"Pizzas Doces","slug":"pizzas-doces","type":"pizza_doce","description":null,"sort_order":3,"active":1,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":4,"name":"Calzones","slug":"calzones","type":"outro","description":null,"sort_order":4,"active":1,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":5,"name":"Combos","slug":"combos","type":"combo","description":null,"sort_order":5,"active":1,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":6,"name":"Bebidas","slug":"bebidas","type":"bebida","description":null,"sort_order":6,"active":1,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":7,"name":"Sobremesas","slug":"sobremesas","type":"sobremesa","description":null,"sort_order":7,"active":1,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":8,"name":"Adicionais","slug":"adicionais","type":"adicional","description":"Escolha ao montar a sua pizza.","sort_order":8,"active":1,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"}],"products":[{"id":1,"category_id":1,"name":"Marguerita","slug":"marguerita","description":null,"ingredients":"Molho de tomate, mussarela, tomate fresco e manjericão","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":0,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":2,"category_id":1,"name":"Mussarela","slug":"mussarela","description":null,"ingredients":"Molho de tomate, queijo mussarela e orégano","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":1,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":3,"category_id":1,"name":"Milho Verde","slug":"milho-verde","description":null,"ingredients":"Molho de tomate, queijo mussarela e milho","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":2,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":4,"category_id":1,"name":"Mista","slug":"mista","description":null,"ingredients":"Molho de tomate, queijo mussarela e presunto","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":3,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":5,"category_id":1,"name":"Campestre","slug":"campestre","description":null,"ingredients":"Molho de tomate, queijo mussarela, calabresa e tomate fresco","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":4,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":6,"category_id":1,"name":"Calabresa","slug":"calabresa","description":null,"ingredients":"Molho de tomate, queijo mussarela, calabresa, cebola e orégano","image_url":null,"price":null,"promo_price":null,"is_featured":1,"active":1,"sort_order":5,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":7,"category_id":1,"name":"Portuguesa","slug":"portuguesa","description":null,"ingredients":"Molho de tomate, mussarela, calabresa e cebola","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":6,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":8,"category_id":1,"name":"Frango com Catupiry","slug":"frango-com-catupiry","description":null,"ingredients":"Molho de tomate, frango desfiado, catupiry e orégano","image_url":null,"price":null,"promo_price":null,"is_featured":1,"active":1,"sort_order":7,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":9,"category_id":1,"name":"Nordestina","slug":"nordestina","description":null,"ingredients":"Molho de tomate, mussarela, banana da terra e canela","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":8,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":10,"category_id":1,"name":"3 Queijos","slug":"3-queijos","description":null,"ingredients":"Molho de tomate, mussarela, catupiry e cheddar","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":9,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":11,"category_id":1,"name":"Lombinho","slug":"lombinho","description":null,"ingredients":"Molho de tomate, mussarela, provolone e lombinho","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":10,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":12,"category_id":1,"name":"Carne de Sol","slug":"carne-de-sol","description":null,"ingredients":"Molho de tomate, mussarela, carne de sol e catupiry","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":11,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":13,"category_id":1,"name":"Baiana","slug":"baiana","description":null,"ingredients":"Molho de tomate, queijo mussarela, calabresa, pimenta e cebola","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":12,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":14,"category_id":1,"name":"Mista Especial","slug":"mista-especial","description":null,"ingredients":"Molho de tomate, mussarela, presunto, catupiry e cebola","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":13,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":15,"category_id":1,"name":"4 Queijos","slug":"4-queijos","description":null,"ingredients":"Molho de tomate, mussarela, parmesão, catupiry, gorgonzola e orégano","image_url":null,"price":null,"promo_price":null,"is_featured":1,"active":1,"sort_order":14,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":16,"category_id":1,"name":"Atum com Catupiry","slug":"atum-com-catupiry","description":null,"ingredients":"Molho de tomate, mussarela, atum sólido, cebola, catupiry e orégano","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":15,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":17,"category_id":1,"name":"Atum","slug":"atum","description":null,"ingredients":"Molho de tomate, mussarela, atum sólido e cebola","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":16,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":18,"category_id":1,"name":"Frango Tradicional","slug":"frango-tradicional","description":null,"ingredients":"Molho de tomate, mussarela e frango desfiado","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":17,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":19,"category_id":1,"name":"Bacon","slug":"bacon","description":null,"ingredients":"Molho de tomate, mussarela, bacon e cebola","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":18,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Tradicionais","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":20,"category_id":2,"name":"Rivoly","slug":"rivoly","description":"O sabor que leva o nome da casa.","ingredients":"Molho de tomate, mussarela, pepperoni, gorgonzola e alho frito","image_url":null,"price":null,"promo_price":null,"is_featured":1,"active":1,"sort_order":0,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Especial","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":21,"category_id":2,"name":"Lapinha","slug":"lapinha","description":"Homenagem ao bairro.","ingredients":"Molho de tomate, queijo mussarela, bacon e barbecue","image_url":null,"price":null,"promo_price":null,"is_featured":1,"active":1,"sort_order":1,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Especial","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":22,"category_id":2,"name":"Camarão Premium","slug":"camarao-premium","description":null,"ingredients":"Molho de tomate, queijo mussarela, camarão e gorgonzola","image_url":null,"price":null,"promo_price":null,"is_featured":1,"active":1,"sort_order":2,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Especial","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":23,"category_id":2,"name":"Camarão Vip","slug":"camarao-vip","description":null,"ingredients":"Molho de tomate, queijo mussarela, camarão e catupiry","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":3,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Especial","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":24,"category_id":2,"name":"Peperone","slug":"peperone","description":null,"ingredients":"Molho de tomate, queijo mussarela e pepperoni","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":1,"sort_order":4,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Sabores Especial","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":25,"category_id":3,"name":"Banana com Chocolate Branco","slug":"banana-com-chocolate-branco","description":"Sabor anunciado no Instagram da casa.","ingredients":"Banana e chocolate branco","image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":0,"sort_order":0,"options_json":null,"data_source":"real","source_note":"Instagram (post \"Chegou o sabor que vai adoçar sua pizza\"). Preço não publicado: cadastre os tamanhos e ative.","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":26,"category_id":4,"name":"Calzone","slug":"calzone","description":"Postado no Instagram da casa.","ingredients":null,"image_url":null,"price":null,"promo_price":null,"is_featured":0,"active":0,"sort_order":0,"options_json":null,"data_source":"real","source_note":"Instagram (post \"Calzone: porque às vezes a pizza quer dar um abraço em si mesma\"). Sabores e preço não publicados.","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":27,"category_id":6,"name":"Coca Cola 1L","slug":"coca-cola-1l","description":null,"ingredients":null,"image_url":null,"price":9,"promo_price":null,"is_featured":0,"active":1,"sort_order":0,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":28,"category_id":6,"name":"Pepsi 1L","slug":"pepsi-1l","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":1,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":29,"category_id":6,"name":"Antarctica 1L","slug":"antarctica-1l","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":2,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":30,"category_id":6,"name":"Coca Cola Lata","slug":"coca-cola-lata","description":null,"ingredients":null,"image_url":null,"price":5,"promo_price":null,"is_featured":0,"active":1,"sort_order":3,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":31,"category_id":6,"name":"Pepsi Lata","slug":"pepsi-lata","description":null,"ingredients":null,"image_url":null,"price":4,"promo_price":null,"is_featured":0,"active":1,"sort_order":4,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":32,"category_id":6,"name":"Antarctica Lata","slug":"antarctica-lata","description":null,"ingredients":null,"image_url":null,"price":4,"promo_price":null,"is_featured":0,"active":1,"sort_order":5,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":33,"category_id":6,"name":"Guaramix Copo","slug":"guaramix-copo","description":null,"ingredients":null,"image_url":null,"price":2,"promo_price":null,"is_featured":0,"active":1,"sort_order":6,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":34,"category_id":6,"name":"H20","slug":"h20","description":null,"ingredients":null,"image_url":null,"price":5,"promo_price":null,"is_featured":0,"active":1,"sort_order":7,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":35,"category_id":6,"name":"Energético 3G","slug":"energetico-3g","description":null,"ingredients":null,"image_url":null,"price":5,"promo_price":null,"is_featured":0,"active":1,"sort_order":8,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":36,"category_id":6,"name":"Água","slug":"agua","description":null,"ingredients":null,"image_url":null,"price":2,"promo_price":null,"is_featured":0,"active":1,"sort_order":9,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":37,"category_id":6,"name":"Água com Gás","slug":"agua-com-gas","description":null,"ingredients":null,"image_url":null,"price":3,"promo_price":null,"is_featured":0,"active":1,"sort_order":10,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":38,"category_id":6,"name":"Budweiser Long Neck","slug":"budweiser-long-neck","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":11,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":39,"category_id":6,"name":"Heineken Long Neck","slug":"heineken-long-neck","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":12,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":40,"category_id":6,"name":"Corona","slug":"corona","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":13,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":41,"category_id":6,"name":"Ace 51","slug":"ace-51","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":14,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":42,"category_id":6,"name":"Budweiser 0% Álcool","slug":"budweiser-0-alcool","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":15,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":43,"category_id":6,"name":"Heineken 0% Álcool","slug":"heineken-0-alcool","description":null,"ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":16,"options_json":null,"data_source":"real","source_note":"Anota AI, categoria Bebidas","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":44,"category_id":5,"name":"Combo Família + Refri 1L","slug":"combo-familia-refri-1l","description":"Pizza família de sabores tradicionais (até 4 sabores) e um refrigerante de 1 litro.","ingredients":null,"image_url":null,"price":63.9,"promo_price":null,"is_featured":0,"active":1,"sort_order":0,"options_json":"[{\"name\":\"Sabores da pizza\",\"min\":1,\"max\":4,\"choices\":[{\"name\":\"Marguerita\",\"price\":0},{\"name\":\"Mussarela\",\"price\":0},{\"name\":\"Milho Verde\",\"price\":0},{\"name\":\"Mista\",\"price\":0},{\"name\":\"Campestre\",\"price\":0},{\"name\":\"Calabresa\",\"price\":0},{\"name\":\"Portuguesa\",\"price\":0},{\"name\":\"Frango com Catupiry\",\"price\":0},{\"name\":\"Nordestina\",\"price\":0},{\"name\":\"3 Queijos\",\"price\":0},{\"name\":\"Lombinho\",\"price\":0},{\"name\":\"Carne de Sol\",\"price\":0},{\"name\":\"Baiana\",\"price\":0},{\"name\":\"Mista Especial\",\"price\":0},{\"name\":\"4 Queijos\",\"price\":0},{\"name\":\"Atum com Catupiry\",\"price\":0},{\"name\":\"Atum\",\"price\":0},{\"name\":\"Frango Tradicional\",\"price\":0},{\"name\":\"Bacon\",\"price\":0}]},{\"name\":\"Refrigerante 1L\",\"min\":1,\"max\":1,\"choices\":[{\"name\":\"Pepsi 1L\",\"price\":0},{\"name\":\"Antarctica 1L\",\"price\":0},{\"name\":\"Coca Cola 1L\",\"price\":1}]}]","data_source":"demo","source_note":"Demonstração: soma da família tradicional (55,90) com Pepsi 1L (8,00).","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":45,"category_id":5,"name":"Combo Média + 2 Latas","slug":"combo-media-2-latas","description":"Pizza média de sabores tradicionais (até 2 sabores) e duas latas.","ingredients":null,"image_url":null,"price":42.9,"promo_price":null,"is_featured":0,"active":1,"sort_order":0,"options_json":"[{\"name\":\"Sabores da pizza\",\"min\":1,\"max\":2,\"choices\":[{\"name\":\"Marguerita\",\"price\":0},{\"name\":\"Mussarela\",\"price\":0},{\"name\":\"Milho Verde\",\"price\":0},{\"name\":\"Mista\",\"price\":0},{\"name\":\"Campestre\",\"price\":0},{\"name\":\"Calabresa\",\"price\":0},{\"name\":\"Portuguesa\",\"price\":0},{\"name\":\"Frango com Catupiry\",\"price\":0},{\"name\":\"Nordestina\",\"price\":0},{\"name\":\"3 Queijos\",\"price\":0},{\"name\":\"Lombinho\",\"price\":0},{\"name\":\"Carne de Sol\",\"price\":0},{\"name\":\"Baiana\",\"price\":0},{\"name\":\"Mista Especial\",\"price\":0},{\"name\":\"4 Queijos\",\"price\":0},{\"name\":\"Atum com Catupiry\",\"price\":0},{\"name\":\"Atum\",\"price\":0},{\"name\":\"Frango Tradicional\",\"price\":0},{\"name\":\"Bacon\",\"price\":0}]},{\"name\":\"Latas (escolha 2)\",\"min\":2,\"max\":2,\"choices\":[{\"name\":\"Pepsi Lata\",\"price\":0},{\"name\":\"Antarctica Lata\",\"price\":0},{\"name\":\"Coca Cola Lata\",\"price\":1}]}]","data_source":"demo","source_note":"Demonstração: soma da média tradicional (34,90) com duas latas de 4,00.","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":46,"category_id":7,"name":"Brownie de chocolate","slug":"brownie-de-chocolate","description":"Item de demonstração. Troque pelo que a casa vende.","ingredients":null,"image_url":null,"price":8,"promo_price":null,"is_featured":0,"active":1,"sort_order":0,"options_json":null,"data_source":"demo","source_note":"Demonstração: a casa não publicou sobremesas.","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"}],"product_sizes":[{"id":1,"product_id":1,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":2,"product_id":1,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":3,"product_id":1,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":4,"product_id":2,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":5,"product_id":2,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":6,"product_id":2,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":7,"product_id":3,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":8,"product_id":3,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":9,"product_id":3,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":10,"product_id":4,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":11,"product_id":4,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":12,"product_id":4,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":13,"product_id":5,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":14,"product_id":5,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":15,"product_id":5,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":16,"product_id":6,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":17,"product_id":6,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":18,"product_id":6,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":19,"product_id":7,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":20,"product_id":7,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":21,"product_id":7,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":22,"product_id":8,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":23,"product_id":8,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":24,"product_id":8,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":25,"product_id":9,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":26,"product_id":9,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":27,"product_id":9,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":28,"product_id":10,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":29,"product_id":10,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":30,"product_id":10,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":31,"product_id":11,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":32,"product_id":11,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":33,"product_id":11,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":34,"product_id":12,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":35,"product_id":12,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":36,"product_id":12,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":37,"product_id":13,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":38,"product_id":13,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":39,"product_id":13,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":40,"product_id":14,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":41,"product_id":14,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":42,"product_id":14,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":43,"product_id":15,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":44,"product_id":15,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":45,"product_id":15,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":46,"product_id":16,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":47,"product_id":16,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":48,"product_id":16,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":49,"product_id":17,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":50,"product_id":17,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":51,"product_id":17,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":52,"product_id":18,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":53,"product_id":18,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":54,"product_id":18,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":55,"product_id":19,"name":"Média","slices":6,"max_flavors":2,"price":34.9,"promo_price":null,"sort_order":0,"active":1},{"id":56,"product_id":19,"name":"Grande","slices":8,"max_flavors":3,"price":44.9,"promo_price":null,"sort_order":1,"active":1},{"id":57,"product_id":19,"name":"Família","slices":12,"max_flavors":4,"price":55.9,"promo_price":null,"sort_order":2,"active":1},{"id":58,"product_id":20,"name":"Média","slices":6,"max_flavors":2,"price":44.9,"promo_price":null,"sort_order":0,"active":1},{"id":59,"product_id":20,"name":"Grande","slices":8,"max_flavors":3,"price":52.9,"promo_price":null,"sort_order":1,"active":1},{"id":60,"product_id":20,"name":"Família","slices":12,"max_flavors":4,"price":59.9,"promo_price":null,"sort_order":2,"active":1},{"id":61,"product_id":21,"name":"Média","slices":6,"max_flavors":2,"price":44.9,"promo_price":null,"sort_order":0,"active":1},{"id":62,"product_id":21,"name":"Grande","slices":8,"max_flavors":3,"price":52.9,"promo_price":null,"sort_order":1,"active":1},{"id":63,"product_id":21,"name":"Família","slices":12,"max_flavors":4,"price":59.9,"promo_price":null,"sort_order":2,"active":1},{"id":64,"product_id":22,"name":"Média","slices":6,"max_flavors":2,"price":44.9,"promo_price":null,"sort_order":0,"active":1},{"id":65,"product_id":22,"name":"Grande","slices":8,"max_flavors":3,"price":52.9,"promo_price":null,"sort_order":1,"active":1},{"id":66,"product_id":22,"name":"Família","slices":12,"max_flavors":4,"price":59.9,"promo_price":null,"sort_order":2,"active":1},{"id":67,"product_id":23,"name":"Média","slices":6,"max_flavors":2,"price":44.9,"promo_price":null,"sort_order":0,"active":1},{"id":68,"product_id":23,"name":"Grande","slices":8,"max_flavors":3,"price":52.9,"promo_price":null,"sort_order":1,"active":1},{"id":69,"product_id":23,"name":"Família","slices":12,"max_flavors":4,"price":59.9,"promo_price":null,"sort_order":2,"active":1},{"id":70,"product_id":24,"name":"Média","slices":6,"max_flavors":2,"price":44.9,"promo_price":null,"sort_order":0,"active":1},{"id":71,"product_id":24,"name":"Grande","slices":8,"max_flavors":3,"price":52.9,"promo_price":null,"sort_order":1,"active":1},{"id":72,"product_id":24,"name":"Família","slices":12,"max_flavors":4,"price":59.9,"promo_price":null,"sort_order":2,"active":1}],"addons":[{"id":1,"name":"Borda recheada de catupiry","description":null,"price":8,"active":1,"sort_order":0,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":2,"name":"Borda recheada de cheddar","description":null,"price":8,"active":1,"sort_order":1,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":3,"name":"Borda de chocolate","description":null,"price":10,"active":1,"sort_order":2,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":4,"name":"Queijo extra","description":null,"price":5,"active":1,"sort_order":3,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"}],"addon_categories":[{"addon_id":1,"category_id":1},{"addon_id":1,"category_id":2},{"addon_id":2,"category_id":1},{"addon_id":2,"category_id":2},{"addon_id":3,"category_id":3},{"addon_id":4,"category_id":1},{"addon_id":4,"category_id":2}],"payment_methods":[{"id":1,"name":"Dinheiro","kind":"dinheiro","instructions":"Pagamento na entrega ou no balcão.","fee_percent":0,"accepts_change":1,"active":1,"sort_order":0,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":2,"name":"Cartão de crédito","kind":"cartao","instructions":"Maquininha na entrega ou no balcão.","fee_percent":0,"accepts_change":0,"active":1,"sort_order":1,"data_source":"real","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":3,"name":"Cartão de débito","kind":"cartao","instructions":"Maquininha na entrega ou no balcão.","fee_percent":0,"accepts_change":0,"active":0,"sort_order":2,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"},{"id":4,"name":"PIX","kind":"pix","instructions":"Cadastre a chave PIX em Configurações para ativar.","fee_percent":0,"accepts_change":0,"active":0,"sort_order":3,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"}],"delivery_zones":[],"promotions":[{"id":1,"name":"Primeiro pedido","description":"Cupom de demonstração. Ative e ajuste se quiser usar.","type":"percent","value":10,"code":"BEMVINDO10","min_order":40,"category_id":null,"starts_at":null,"ends_at":null,"usage_limit":null,"used_count":0,"show_on_site":0,"active":0,"data_source":"demo","created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"}],"reviews":[{"id":1,"author":"Filipe Araujo","rating":5,"comment":"Pizzaria maravilhosa","source":"google","review_date":null,"active":1,"created_at":"2026-09-28 18:16:15","updated_at":"2026-09-28 18:16:15"}],"gallery":[],"settings":{"store_name":"Pizzaria Rivoly","tagline":"Essência da Itália","category_label":"Pizzaria","phone":"(71) 99290-2891","whatsapp":"5571992902891","email":"","address_street":"Rua Campos França","address_number":"02","address_neighborhood":"Lapinha","address_city":"Salvador","address_state":"BA","address_zip":"40325-130","address_reference":"","latitude":"-12.9553853","longitude":"-38.4993309","maps_url":"https:\/\/maps.app.goo.gl\/PtAPqvssrC35uHyS9","instagram_user":"pizzaria_rivoly","google_rating":"5,0","google_reviews_count":"1","hours_json":[[["17:30","23:00"]],[],[],[["17:30","22:00"]],[["17:30","22:00"]],[["17:30","23:00"]],[["17:30","23:00"]]],"hours_note":"O Google Maps informa qua e qui das 17:30 às 22:00 e sex a dom das 17:30 às 23:00. A bio do Instagram diz quarta a domingo das 17:30 às 22:30. O sistema começou com o horário do Google Maps; confirme com o dono.","order_mode":"auto","closed_message":"Estamos fechados agora. Você pode olhar o cardápio e fazer o pedido quando abrirmos.","min_order":5,"delivery_enabled":true,"pickup_enabled":true,"delivery_fee_default":5,"delivery_only_zones":false,"delivery_time":"","pickup_time":"","pizza_price_rule":"max","pix_key":"","pix_holder":"","hero_title":"Essência da Itália na Lapinha","hero_subtitle":"Pizzas tradicionais e especiais da casa, em três tamanhos e com até quatro sabores. Peça pelo site e acompanhe cada etapa até chegar na sua mesa.","hero_image":"","about_title":"Da Rua Campos França para a sua casa","about_text":"A Rivoly fica na Rua Campos França, 02, no bairro da Lapinha, em Salvador. O cardápio tem os sabores tradicionais de sempre e especiais que levam o nome da casa e do bairro, como a Rivoly e a Lapinha. Tem salão com mesas e delivery de quarta a domingo, a partir das 17:30.","about_image":"","attributes_json":["Empresa de empreendedoras","Acolhe a comunidade LGBTQ+"],"differentials_json":[{"title":"Até 4 sabores","text":"Média com 2, grande com 3 e família com até 4 sabores na mesma pizza."},{"title":"Especiais da casa","text":"Rivoly, Lapinha, Peperone e duas de camarão, com gorgonzola ou catupiry."},{"title":"Delivery e retirada","text":"Receba em casa ou passe na Rua Campos França para buscar."},{"title":"Salão com mesas","text":"Comemore aniversários e encontros com a gente na Lapinha."}],"logo_url":"\/assets\/img\/logo-rivoly.jpg","seo_title":"Pizzaria Rivoly | Pizza na Lapinha, Salvador | Delivery","seo_description":"Pizzaria Rivoly na Rua Campos França, 02, Lapinha, Salvador (BA). Pizzas tradicionais e especiais com até 4 sabores. Delivery e retirada. Peça pelo site.","announcement":"","demo_flags_json":{"delivery_fee_default":true},"sources_json":[{"name":"Google Maps","url":"https:\/\/maps.app.goo.gl\/PtAPqvssrC35uHyS9","checked_at":"2026-09-28"},{"name":"Instagram @pizzaria_rivoly","url":"https:\/\/www.instagram.com\/pizzaria_rivoly\/","checked_at":"2026-09-28"},{"name":"Cardápio no Anota AI","url":"https:\/\/pedido.anota.ai\/loja\/pizzaria-rivoly","checked_at":"2026-09-28"}],"order_sound":true},"schema":{"store_name":["string",true],"tagline":["string",true],"category_label":["string",true],"phone":["string",true],"whatsapp":["string",true],"email":["string",true],"address_street":["string",true],"address_number":["string",true],"address_neighborhood":["string",true],"address_city":["string",true],"address_state":["string",true],"address_zip":["string",true],"address_reference":["string",true],"latitude":["string",true],"longitude":["string",true],"maps_url":["string",true],"instagram_user":["string",true],"google_rating":["string",true],"google_reviews_count":["string",true],"hours_json":["json",true],"hours_note":["string",false],"order_mode":["string",true],"closed_message":["string",true],"min_order":["money",true],"delivery_enabled":["bool",true],"pickup_enabled":["bool",true],"delivery_fee_default":["money",true],"delivery_only_zones":["bool",true],"delivery_time":["string",true],"pickup_time":["string",true],"pizza_price_rule":["string",true],"pix_key":["string",true],"pix_holder":["string",true],"hero_title":["string",true],"hero_subtitle":["string",true],"hero_image":["string",true],"about_title":["string",true],"about_text":["string",true],"about_image":["string",true],"attributes_json":["json",true],"differentials_json":["json",true],"logo_url":["string",true],"seo_title":["string",true],"seo_description":["string",true],"announcement":["string",true],"demo_flags_json":["json",false],"sources_json":["json",false],"order_sound":["bool",false]}};
var DB_KEY = 'rv_demo_db_v1';
var VER_KEY = 'rv_demo_ver_v1';
var SESSION_KEY = 'rv_demo_session_v1';
var realFetch = window.fetch.bind(window);

function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } }
function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* */ } }

/* ---------- Erros e utilitários ---------- */
function HttpError(status, message, fields) { this.status = status; this.message = message; this.fields = fields || null; }
function fail(status, message, fields) { throw new HttpError(status, message, fields); }

function pad(n) { return n < 10 ? '0' + n : '' + n; }
function fmtDT(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes()) + ':' + pad(d.getSeconds()); }
function fmtD(d) { return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function now() { return fmtDT(new Date()); }
function today() { return fmtD(new Date()); }
function parseDT(s) { return new Date(String(s).replace(' ', 'T')); }
function addDays(d, n) { var x = new Date(d.getTime()); x.setDate(x.getDate() + n); return x; }
function startOfDay(d) { var x = new Date(d.getTime()); x.setHours(0, 0, 0, 0); return x; }
function r2(v) { return Math.round((Number(v) + Number.EPSILON) * 100) / 100; }
function clone(o) { return JSON.parse(JSON.stringify(o)); }

function slugify(s) {
  s = String(s).toLowerCase().trim().normalize('NFD').replace(/[̀-ͯ]/g, '');
  s = s.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  return s || 'item';
}
function onlyDigits(s) { return String(s == null ? '' : s).replace(/\D+/g, ''); }
function randomCode(len) {
  var a = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789', o = '';
  for (var i = 0; i < len; i++) o += a[Math.floor(Math.random() * a.length)];
  return o;
}
function isEmpty(v) { return v === null || v === undefined || v === '' || (Array.isArray(v) && !v.length); }

var ORDER_STATUSES = {
  recebido: 'Pedido recebido', confirmado: 'Pedido confirmado', em_preparo: 'Em preparação', no_forno: 'No forno',
  saiu_entrega: 'Saiu para entrega', pronto_retirada: 'Pronto para retirada', entregue: 'Entregue', cancelado: 'Cancelado'
};
var OPEN_STATUSES = ['recebido', 'confirmado', 'em_preparo', 'no_forno', 'saiu_entrega', 'pronto_retirada'];

/* ---------- Validação (mesmas regras e mensagens do PHP) ---------- */
function validate(data, rules, labels) {
  labels = labels || {};
  var out = {}, errors = {}, first = null;
  Object.keys(rules).forEach(function (field) {
    var rs = rules[field].split('|');
    var label = labels[field] || field;
    var L = label.charAt(0).toUpperCase() + label.slice(1);
    var present = Object.prototype.hasOwnProperty.call(data, field);
    var value = present ? data[field] : null;
    if (typeof value === 'string') value = value.trim();
    var nullable = rs.indexOf('nullable') >= 0, required = rs.indexOf('required') >= 0;
    if (isEmpty(value)) {
      if (required) { errors[field] = 'Preencha ' + label + '.'; return; }
      if (present || nullable) out[field] = nullable ? null : (value === undefined ? null : value);
      if (rs.indexOf('bool') >= 0 && present) out[field] = false;
      return;
    }
    for (var i = 0; i < rs.length; i++) {
      var parts = rs[i].split(':'), name = parts[0], arg = parts.slice(1).join(':');
      var bad = null;
      switch (name) {
        case 'string':
          if (typeof value !== 'string' && typeof value !== 'number') bad = L + ' inválido.'; else value = String(value);
          break;
        case 'max':
          if (typeof value === 'string' && value.length > Number(arg)) bad = L + ' deve ter no máximo ' + arg + ' caracteres.';
          else if (typeof value === 'number' && value > Number(arg)) bad = L + ' deve ser no máximo ' + arg + '.';
          break;
        case 'minlen': if (String(value).length < Number(arg)) bad = L + ' deve ter pelo menos ' + arg + ' caracteres.'; break;
        case 'min': if (isNaN(Number(value)) || Number(value) < Number(arg)) bad = L + ' deve ser no mínimo ' + arg + '.'; break;
        case 'int':
          if (!/^-?\d+$/.test(String(value)) || Math.abs(Number(value)) > 2147483647) bad = L + ' deve ser um número inteiro.'; else value = parseInt(value, 10);
          break;
        case 'money':
          if (typeof value === 'string') value = value.replace(',', '.');
          if (isNaN(Number(value))) bad = L + ' deve ser um valor numérico.';
          else { value = r2(value); if (value > 999999) bad = L + ' muito alto.'; }
          break;
        case 'bool': value = value === true || value === 'true' || value === 1 || value === '1'; break;
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))) bad = L + ' inválido.'; else value = String(value).toLowerCase();
          break;
        case 'phone': {
          var d = onlyDigits(value);
          if (d.indexOf('55') === 0 && d.length > 11) d = d.slice(2);
          if (d.length < 10 || d.length > 11) bad = 'Informe um telefone com DDD.'; else value = d;
          break; }
        case 'cep': {
          var c = onlyDigits(value);
          if (c.length !== 8) bad = 'CEP deve ter 8 dígitos.'; else value = c.slice(0, 5) + '-' + c.slice(5);
          break; }
        case 'in': if (arg.split(',').indexOf(String(value)) < 0) bad = L + ' inválido.'; break;
        case 'date': if (!/^\d{4}-\d{2}-\d{2}$/.test(String(value)) || isNaN(new Date(value + 'T12:00'))) bad = L + ' deve ser uma data válida.'; break;
        case 'datetime': {
          var v = String(value).replace('T', ' ');
          if (v.length === 16) v += ':00';
          if (!/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/.test(v)) bad = L + ' deve ser data e hora válidas.'; else value = v;
          break; }
        case 'array': if (!Array.isArray(value)) bad = L + ' inválido.'; break;
        case 'url': if (!/^(https?:\/\/|\/)/i.test(String(value))) bad = L + ' deve começar com https:// ou /.'; break;
        case 'time': if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(String(value))) bad = L + ' deve estar no formato HH:MM.'; break;
        default: break;
      }
      if (bad) { errors[field] = bad; break; }
    }
    if (!errors[field]) out[field] = value;
  });
  var keys = Object.keys(errors);
  if (keys.length) fail(422, errors[keys[0]], errors);
  return out;
}

/* ---------- Estado (banco em memória, salvo no localStorage) ---------- */
var mem = null, memVer = null, persistOK = true;

function newVersion() { return String(Date.now()) + '-' + Math.floor(Math.random() * 1e6); }

function loadDB() {
  var ver = lsGet(VER_KEY);
  if (mem && ver === memVer) return mem;
  var raw = lsGet(DB_KEY);
  if (raw) {
    try { mem = JSON.parse(raw); memVer = ver; return mem; } catch (e) { /* recria */ }
  }
  mem = window.__RV.seedDB();
  saveDB();
  return mem;
}
function saveDB() {
  if (!mem) return;
  memVer = newVersion();
  var ok = lsSet(DB_KEY, JSON.stringify(mem)) && lsSet(VER_KEY, memVer);
  if (!ok) { persistOK = false; }
}
function adopt(d) { mem = d; }
function resetDB() { lsDel(DB_KEY); lsDel(VER_KEY); lsDel(SESSION_KEY); mem = null; memVer = null; }
function db() { return loadDB(); }
function nextId(table) {
  var d = db();
  d.seq[table] = (d.seq[table] || 0) + 1;
  return d.seq[table];
}
function maxId(arr) { var m = 0; arr.forEach(function (r) { if (r.id > m) m = r.id; }); return m; }
function byId(arr, id) { id = Number(id); for (var i = 0; i < arr.length; i++) if (arr[i].id === id) return arr[i]; return null; }

window.__RV = { CATALOG: CATALOG, realFetch: realFetch, lsGet: lsGet, lsSet: lsSet, lsDel: lsDel, SESSION_KEY: SESSION_KEY,
  fail: fail, HttpError: HttpError, pad: pad, fmtDT: fmtDT, fmtD: fmtD, now: now, today: today, parseDT: parseDT, addDays: addDays, startOfDay: startOfDay,
  r2: r2, clone: clone, slugify: slugify, onlyDigits: onlyDigits, randomCode: randomCode, isEmpty: isEmpty, ORDER_STATUSES: ORDER_STATUSES,
  OPEN_STATUSES: OPEN_STATUSES, validate: validate, db: db, saveDB: saveDB, resetDB: resetDB, adopt: adopt, nextId: nextId, maxId: maxId, byId: byId,
  isPersistent: function () { return persistOK; } };
})();

(function () {
'use strict';
var R = window.__RV;
var fail = R.fail, r2 = R.r2, byId = R.byId, slugify = R.slugify;

/* ---------- Configurações da loja ---------- */
var SCHEMA = R.CATALOG.schema;
function settings() { return R.db().settings; }
function setting(k, def) { var v = settings()[k]; return v === undefined ? def : v; }
function saveSettings(values) {
  var s = settings();
  Object.keys(values).forEach(function (k) { if (SCHEMA[k]) s[k] = values[k]; });
  R.saveDB();
}
function publicSettings() {
  var out = {}, s = settings();
  Object.keys(SCHEMA).forEach(function (k) { if (SCHEMA[k][1]) out[k] = s[k] === undefined ? '' : s[k]; });
  return out;
}

function storeStatus(at) {
  at = at || new Date();
  var mode = setting('order_mode', 'auto') || 'auto';
  var hours = setting('hours_json') || {};
  var dow = at.getDay();
  var time = R.pad(at.getHours()) + ':' + R.pad(at.getMinutes());
  var isOpen = false, closesAt = null;
  (hours[String(dow)] || []).forEach(function (rg) {
    var a = rg[0], b = rg[1];
    if (b > a) { if (time >= a && time < b) { isOpen = true; closesAt = b; } }
    else if (time >= a) { isOpen = true; closesAt = b; }
  });
  (hours[String((dow + 6) % 7)] || []).forEach(function (rg) {
    var a = rg[0], b = rg[1];
    if (b < a && time < b) { isOpen = true; closesAt = b; }
  });
  var next = null;
  if (!isOpen) {
    for (var i = 0; i < 8 && !next; i++) {
      var d = R.addDays(at, i), w = String(d.getDay());
      var ranges = (hours[w] || []).slice().sort(function (x, y) { return x[0] < y[0] ? -1 : 1; });
      for (var k = 0; k < ranges.length; k++) {
        if (i === 0 && ranges[k][0] <= time) continue;
        next = { weekday: Number(w), time: ranges[k][0], days_ahead: i };
        break;
      }
    }
  }
  var effective = mode === 'open' ? true : mode === 'closed' ? false : isOpen;
  return { open: effective, by_hours: isOpen, mode: mode, closes_at: effective ? closesAt : null, next_open: effective ? null : next, server_time: R.fmtDT(at) };
}

/* ---------- Preços (mesma lógica do pricing.php) ---------- */
function effectivePrice(price, promo) {
  if (price === null || price === undefined) return null;
  price = Number(price);
  if (promo !== null && promo !== undefined && Number(promo) > 0 && Number(promo) < price) return Number(promo);
  return price;
}

function loadProductForCart(id) {
  var d = R.db();
  var p = byId(d.products, id);
  if (!p) return null;
  var c = byId(d.categories, p.category_id);
  var sizes = d.product_sizes.filter(function (s) { return s.product_id === p.id && s.active; }).sort(function (a, b) { return a.sort_order - b.sort_order || a.id - b.id; });
  return { p: p, category_type: c.type, category_name: c.name, category_active: c.active, sizes: sizes, options: p.options || [] };
}

function addonAllowedForCategory(addonId, categoryId) {
  var links = R.db().addon_categories.filter(function (l) { return l.addon_id === addonId; });
  if (!links.length) return true;
  return links.some(function (l) { return l.category_id === categoryId; });
}

function uniqInts(arr) {
  var out = [];
  (arr || []).forEach(function (x) { x = parseInt(x, 10); if (!isNaN(x) && out.indexOf(x) < 0) out.push(x); });
  return out;
}

function priceItem(inp, index) {
  var label = 'Item ' + (index + 1);
  var pid = parseInt(inp.product_id, 10) || 0;
  var lp = pid ? loadProductForCart(pid) : null;
  if (!lp || !lp.p.active || !lp.category_active) fail(422, label + ': produto indisponível no momento.');
  var p = lp.p;
  var qty = parseInt(inp.quantity == null ? 1 : inp.quantity, 10);
  if (!(qty >= 1 && qty <= 50)) fail(422, label + ': quantidade deve ser entre 1 e 50.');
  var notes = String(inp.notes || '').trim();
  if (notes.length > 200) fail(422, label + ': observação muito longa (máximo 200 caracteres).');

  var sizeName = null, sizeId = null, flavors = [], base = null;
  if (lp.sizes.length) {
    sizeId = parseInt(inp.size_id, 10) || 0;
    var size = null;
    lp.sizes.forEach(function (s) { if (s.id === sizeId) size = s; });
    if (!size) fail(422, label + ': escolha o tamanho de ' + p.name + '.');
    sizeName = size.name;
    var prices = [effectivePrice(size.price, size.promo_price)];
    flavors.push({ id: p.id, name: p.name });
    var extra = uniqInts(inp.flavor_ids).filter(function (x) { return x !== p.id; });
    if (1 + extra.length > size.max_flavors) fail(422, label + ': a pizza ' + size.name + ' aceita até ' + size.max_flavors + ' sabor(es).');
    extra.forEach(function (fid) {
      var f = loadProductForCart(fid);
      if (!f || !f.p.active || !f.category_active || ['pizza', 'pizza_doce'].indexOf(f.category_type) < 0) fail(422, label + ': um dos sabores escolhidos não está disponível.');
      var match = null;
      f.sizes.forEach(function (fs) { if (slugify(fs.name) === slugify(size.name)) match = fs; });
      if (!match) fail(422, label + ': o sabor ' + f.p.name + ' não tem o tamanho ' + size.name + '.');
      prices.push(effectivePrice(match.price, match.promo_price));
      flavors.push({ id: f.p.id, name: f.p.name });
    });
    var rule = setting('pizza_price_rule', 'max');
    base = rule === 'avg' ? r2(prices.reduce(function (a, b) { return a + b; }, 0) / prices.length) : Math.max.apply(null, prices);
  } else {
    base = effectivePrice(p.price, p.promo_price);
    if (base === null) fail(422, label + ': ' + p.name + ' está sem preço cadastrado.');
  }

  var addons = [];
  var addonIds = uniqInts(inp.addon_ids);
  if (addonIds.length > 10) fail(422, label + ': adicionais demais.');
  addonIds.forEach(function (aid) {
    var a = byId(R.db().addons, aid);
    if (!a || !a.active || !addonAllowedForCategory(aid, p.category_id)) fail(422, label + ': adicional indisponível para este produto.');
    addons.push({ id: a.id, name: a.name, price: Number(a.price) });
  });

  var chosen = [], optTotal = 0, sel = inp.options || {};
  lp.options.forEach(function (g, gi) {
    var picked = uniqInts(sel[gi] != null ? sel[gi] : sel[String(gi)]);
    var min = parseInt(g.min || 0, 10), max = parseInt(g.max || 1, 10), n = picked.length;
    if (n < min) fail(422, label + ': escolha ' + (min === max ? min : 'pelo menos ' + min) + ' em "' + g.name + '".');
    if (n > max) fail(422, label + ': escolha no máximo ' + max + ' em "' + g.name + '".');
    var names = [];
    picked.forEach(function (ci) {
      if (!g.choices[ci]) fail(422, label + ': opção inválida em "' + g.name + '".');
      names.push(g.choices[ci].name);
      optTotal += Number(g.choices[ci].price || 0);
    });
    if (names.length) chosen.push({ group: g.name, choices: names });
  });

  var addTotal = addons.reduce(function (a, b) { return a + b.price; }, 0);
  var unit = r2(base + addTotal + optTotal);
  return { product_id: p.id, product_name: p.name, category_id: p.category_id, category_name: lp.category_name, category_type: lp.category_type,
    size_id: sizeId, size_name: sizeName, flavors: flavors, addons: addons, options: chosen, quantity: qty, unit_price: unit,
    line_total: r2(unit * qty), notes: notes };
}

function findDeliveryZone(neighborhood) {
  var key = slugify(neighborhood), found = null;
  R.db().delivery_zones.forEach(function (z) { if (z.active && slugify(z.neighborhood) === key) found = z; });
  return found;
}

function promotionInWindow(p) {
  var n = R.now();
  if (!p.active) return false;
  if (p.starts_at && p.starts_at > n) return false;
  if (p.ends_at && p.ends_at < n) return false;
  if (p.usage_limit !== null && p.usage_limit !== undefined && p.used_count >= p.usage_limit) return false;
  return true;
}

function promotionDiscount(promo, lines, subtotal, fee) {
  var base = subtotal;
  if (promo.category_id) {
    base = 0;
    lines.forEach(function (l) { if (l.category_id === promo.category_id) base += l.line_total; });
  }
  var d = 0;
  if (promo.type === 'percent') d = r2(base * Math.min(100, Number(promo.value)) / 100);
  else if (promo.type === 'fixed') d = Math.min(Number(promo.value), base);
  else if (promo.type === 'free_delivery') d = fee;
  return Math.max(0, r2(d));
}

function brl(v) { return Number(v).toFixed(2).replace('.', ','); }

function priceCart(cart) {
  var items = cart.items || [];
  if (!Array.isArray(items) || !items.length) fail(422, 'Seu carrinho está vazio.');
  if (items.length > 40) fail(422, 'Carrinho com itens demais.');
  var lines = items.map(function (it, i) { return priceItem(it || {}, i); });
  var subtotal = r2(lines.reduce(function (a, l) { return a + l.line_total; }, 0));
  var type = cart.order_type === 'pickup' ? 'pickup' : 'delivery';
  var fee = 0, zone = null, warnings = [];
  if (type === 'delivery') {
    if (!setting('delivery_enabled')) fail(422, 'No momento não estamos fazendo entregas. Escolha retirada.');
    var nb = String(cart.neighborhood || '').trim();
    if (nb !== '') zone = findDeliveryZone(nb);
    if (zone) fee = Number(zone.fee);
    else if (nb !== '' && setting('delivery_only_zones')) fail(422, 'Ainda não entregamos no bairro ' + nb + '.', { neighborhood: 'Bairro fora da área de entrega.' });
    else fee = Number(setting('delivery_fee_default') || 0);
  } else if (!setting('pickup_enabled')) {
    fail(422, 'No momento a retirada no balcão está desativada.');
  }

  var discount = 0, applied = null;
  var coupon = String(cart.coupon || '').trim().toUpperCase();
  var promos = R.db().promotions;
  if (coupon !== '') {
    var p = null;
    promos.forEach(function (x) { if (x.code === coupon) p = x; });
    if (!p || !promotionInWindow(p)) fail(422, 'Cupom inválido ou expirado.', { coupon: 'Cupom inválido ou expirado.' });
    if (subtotal < Number(p.min_order)) fail(422, 'Este cupom vale para pedidos a partir de R$ ' + brl(p.min_order) + '.', { coupon: 'Pedido abaixo do mínimo do cupom.' });
    if (p.type === 'free_delivery' && type !== 'delivery') fail(422, 'Este cupom é de entrega grátis e vale só para delivery.', { coupon: 'Vale só para delivery.' });
    discount = promotionDiscount(p, lines, subtotal, fee);
    applied = p;
  } else {
    promos.forEach(function (p) {
      if (p.code || !p.active) return;
      if (!promotionInWindow(p) || subtotal < Number(p.min_order)) return;
      if (p.type === 'free_delivery' && type !== 'delivery') return;
      var d = promotionDiscount(p, lines, subtotal, fee);
      if (d > discount) { discount = d; applied = p; }
    });
  }
  discount = Math.min(discount, r2(subtotal + fee));
  var total = r2(subtotal + fee - discount);
  var min = Number(setting('min_order') || 0);
  if (min > 0 && subtotal < min) warnings.push('Pedido mínimo de R$ ' + brl(min) + '.');
  return { lines: lines, order_type: type, subtotal: subtotal, delivery_fee: r2(fee), delivery_zone: zone ? zone.neighborhood : null,
    discount: r2(discount), total: total, promotion: applied ? { id: applied.id, name: applied.name, code: applied.code } : null,
    min_order: min, below_minimum: min > 0 && subtotal < min, warnings: warnings };
}

R.settings = settings; R.setting = setting; R.saveSettings = saveSettings; R.publicSettings = publicSettings; R.storeStatus = storeStatus;
R.effectivePrice = effectivePrice; R.priceCart = priceCart; R.promotionInWindow = promotionInWindow; R.brl = brl;
})();

(function () {
'use strict';
var R = window.__RV;
var fail = R.fail, r2 = R.r2, byId = R.byId, validate = R.validate;
var STATUSES = R.ORDER_STATUSES;

function pmById(id) { return byId(R.db().payment_methods, id); }

function createOrder(input, channel, isDemo, createdAt) {
  channel = channel || 'site';
  var isAdmin = channel !== 'site';
  var d = R.db();
  var data = validate(input, {
    name: 'required|string|minlen:2|max:120', phone: 'required|phone', order_type: 'required|in:delivery,pickup',
    payment_method_id: 'required|int', change_for: 'nullable|money|min:0', notes: 'nullable|string|max:500', coupon: 'nullable|string|max:40'
  }, { name: 'seu nome', phone: 'o telefone', order_type: 'o tipo de pedido', payment_method_id: 'a forma de pagamento' });

  var addr = null;
  if (data.order_type === 'delivery') {
    addr = validate(input.address || {}, {
      zip: 'nullable|cep', street: 'required|string|max:160', number: 'required|string|max:20', complement: 'nullable|string|max:120',
      neighborhood: 'required|string|max:100', city: 'nullable|string|max:100', reference: 'nullable|string|max:160'
    }, { street: 'a rua', number: 'o número', neighborhood: 'o bairro' });
    addr.city = addr.city || 'Salvador';
  }
  if (!isAdmin && !isDemo) {
    var st = R.storeStatus();
    if (!st.open) fail(409, R.setting('closed_message') || 'Estamos fechados no momento.');
  }
  var pm = pmById(data.payment_method_id);
  if (!pm || !pm.active) fail(422, 'Forma de pagamento indisponível.', { payment_method_id: 'Escolha outra forma de pagamento.' });

  var priced = R.priceCart({ items: input.items || [], order_type: data.order_type, neighborhood: addr ? addr.neighborhood : '', coupon: data.coupon || '' });
  if (priced.below_minimum && !isDemo) fail(422, priced.warnings[0]);

  var changeFor = null;
  if (pm.accepts_change && data.change_for !== null && data.change_for > 0) {
    if (data.change_for < priced.total) fail(422, 'O valor para troco precisa ser maior que o total do pedido.', { change_for: 'Valor menor que o total.' });
    changeFor = data.change_for;
  }
  var t = createdAt || R.now();

  // Cliente (identificado pelo telefone)
  var cust = null;
  d.customers.forEach(function (c) { if (c.phone === data.phone) cust = c; });
  if (cust) { cust.name = data.name; cust.updated_at = t; }
  else {
    cust = { id: R.nextId('customers'), name: data.name, phone: data.phone, email: null, notes: null, is_demo: isDemo ? 1 : 0, created_at: t, updated_at: t };
    d.customers.push(cust);
  }
  var addressId = null;
  if (addr) {
    var ex = null;
    d.addresses.forEach(function (a) { if (a.customer_id === cust.id && a.street === addr.street && a.number === addr.number && a.neighborhood === addr.neighborhood) ex = a; });
    if (ex) { ex.complement = addr.complement; ex.reference = addr.reference; ex.zip = addr.zip; addressId = ex.id; }
    else {
      d.addresses.forEach(function (a) { if (a.customer_id === cust.id) a.is_default = 0; });
      addressId = R.nextId('addresses');
      d.addresses.push({ id: addressId, customer_id: cust.id, street: addr.street, number: addr.number, complement: addr.complement, neighborhood: addr.neighborhood,
        city: addr.city, state: 'BA', zip: addr.zip, reference: addr.reference, is_default: 1, created_at: t });
    }
  }

  var number = Math.max(1000, d.orders.reduce(function (m, o) { return Math.max(m, o.number); }, 1000)) + 1;
  var code;
  do { code = R.randomCode(12); } while (d.orders.some(function (o) { return o.tracking_code === code; }));
  var id = R.nextId('orders');
  var order = {
    id: id, number: number, tracking_code: code, customer_id: cust.id, customer_name: data.name, customer_phone: data.phone,
    order_type: data.order_type, status: 'recebido', address_id: addressId,
    street: addr ? addr.street : null, address_number: addr ? addr.number : null, complement: addr ? addr.complement : null,
    neighborhood: addr ? addr.neighborhood : null, city: addr ? addr.city : null, zip: addr ? addr.zip : null, reference: addr ? addr.reference : null,
    subtotal: priced.subtotal, delivery_fee: priced.delivery_fee, discount: priced.discount, total: priced.total,
    payment_method_id: pm.id, payment_method_name: pm.name, change_for: changeFor,
    promotion_id: priced.promotion ? priced.promotion.id : null, coupon_code: priced.promotion ? priced.promotion.code : null,
    notes: data.notes, cancel_reason: null, channel: channel, is_demo: isDemo ? 1 : 0,
    created_at: t, updated_at: t, confirmed_at: null, finished_at: null, cancelled_at: null,
    auto: (!isDemo && channel === 'site') ? 1 : 0
  };
  d.orders.push(order);
  priced.lines.forEach(function (l) {
    d.order_items.push({ id: R.nextId('order_items'), order_id: id, product_id: l.product_id, product_name: l.product_name, category_id: l.category_id,
      category_name: l.category_name, size_id: l.size_id, size_name: l.size_name, flavors: l.flavors, addons: l.addons, options: l.options,
      quantity: l.quantity, unit_price: l.unit_price, line_total: l.line_total, notes: l.notes || null });
  });
  d.payments.push({ id: R.nextId('payments'), order_id: id, payment_method_id: pm.id, method_name: pm.name, amount: priced.total,
    fee: r2(priced.total * Number(pm.fee_percent || 0) / 100), status: 'pendente', change_for: changeFor, paid_at: null, created_at: t, updated_at: t });
  d.history.push({ order_id: id, status: 'recebido', user_id: null, note: channel === 'site' ? 'Pedido feito pelo site' : 'Pedido lançado no painel', created_at: t });
  if (priced.promotion) {
    var promo = byId(d.promotions, priced.promotion.id);
    if (promo.usage_limit !== null && promo.usage_limit !== undefined && promo.used_count >= promo.usage_limit) fail(422, 'Este cupom acabou de esgotar.', { coupon: 'Cupom esgotado.' });
    promo.used_count += 1;
  }
  if (!isDemo) R.saveDB();
  return { id: id, number: number, tracking_code: code, total: priced.total };
}

function paymentOf(orderId) {
  var found = null;
  R.db().payments.forEach(function (p) { if (p.order_id === orderId) found = p; });
  return found;
}

function registerPayment(orderId, userId, at) {
  at = at || R.now();
  var d = R.db(), pay = paymentOf(orderId);
  if (!pay || pay.status === 'pago') return;
  var order = byId(d.orders, orderId);
  pay.status = 'pago'; pay.paid_at = at; pay.updated_at = at;
  d.records.push({ id: R.nextId('records'), order_id: orderId, type: 'receita', description: 'Pedido #' + order.number, amount: order.total,
    payment_method_name: pay.method_name, occurred_at: at, user_id: userId, is_demo: order.is_demo, created_at: at });
  if (pay.fee > 0) {
    d.records.push({ id: R.nextId('records'), order_id: orderId, type: 'taxa', description: 'Taxa ' + pay.method_name + ' do pedido #' + order.number,
      amount: pay.fee, payment_method_name: pay.method_name, occurred_at: at, user_id: userId, is_demo: order.is_demo, created_at: at });
  }
}

function changeOrderStatus(orderId, status, userId, note, at, silent) {
  if (!STATUSES[status]) fail(422, 'Status inválido.');
  var d = R.db(), order = byId(d.orders, orderId);
  if (!order) fail(404, 'Pedido não encontrado.');
  if (order.status === status) return order;
  if (order.status === 'cancelado') fail(409, 'Pedido cancelado não pode voltar para o fluxo. Crie um novo pedido.');
  if (status === 'saiu_entrega' && order.order_type !== 'delivery') fail(422, 'Este pedido é para retirada; use "Pronto para retirada".');
  if (status === 'pronto_retirada' && order.order_type !== 'pickup') fail(422, 'Este pedido é para entrega; use "Saiu para entrega".');
  if (status === 'cancelado' && !String(note || '').trim()) fail(422, 'Informe o motivo do cancelamento.', { note: 'Informe o motivo.' });
  at = at || R.now();
  order.status = status; order.updated_at = at;
  if (status === 'confirmado' && !order.confirmed_at) order.confirmed_at = at;
  if (status === 'entregue') { order.finished_at = at; registerPayment(order.id, userId, at); }
  if (status === 'cancelado') {
    order.cancelled_at = at; order.cancel_reason = String(note).slice(0, 255);
    var pay = paymentOf(order.id);
    if (pay && pay.status === 'pago') {
      pay.status = 'estornado'; pay.updated_at = at;
      d.records.push({ id: R.nextId('records'), order_id: order.id, type: 'estorno', description: 'Estorno do pedido #' + order.number, amount: order.total,
        payment_method_name: pay.method_name, occurred_at: at, user_id: userId, is_demo: order.is_demo, created_at: at });
    } else if (pay) { pay.status = 'cancelado'; pay.updated_at = at; }
    if (order.promotion_id) { var pr = byId(d.promotions, order.promotion_id); if (pr && pr.used_count > 0) pr.used_count -= 1; }
  }
  d.history.push({ order_id: order.id, status: status, user_id: userId, note: note ? String(note).slice(0, 255) : null, created_at: at });
  if (!silent) R.saveDB();
  return order;
}

function hydrateOrder(o) {
  var d = R.db();
  var items = d.order_items.filter(function (i) { return i.order_id === o.id; }).map(function (i) {
    return { id: i.id, order_id: i.order_id, product_id: i.product_id, product_name: i.product_name, category_id: i.category_id, category_name: i.category_name,
      size_id: i.size_id, size_name: i.size_name, quantity: i.quantity, unit_price: i.unit_price, line_total: i.line_total, notes: i.notes,
      flavors: i.flavors || [], addons: i.addons || [], options: i.options || [] };
  });
  var hist = d.history.filter(function (h) { return h.order_id === o.id; }).map(function (h) {
    var u = h.user_id ? byId(d.users, h.user_id) : null;
    return { status: h.status, note: h.note, created_at: h.created_at, user_name: u ? u.name : null };
  });
  var pay = paymentOf(o.id);
  var out = R.clone(o);
  delete out.auto;
  out.is_demo = !!o.is_demo;
  out.status_label = STATUSES[o.status] || o.status;
  out.items = items; out.history = hist; out.payment = pay ? R.clone(pay) : null;
  return out;
}

/* ---------- Pedidos feitos pelo site avançam sozinhos (só na demonstração) ---------- */
var STEP_MS = 7000;
function tick() {
  var d = R.db(), changed = false;
  d.orders.forEach(function (o) {
    if (!o.auto || o.status === 'entregue' || o.status === 'cancelado') return;
    var flow = o.order_type === 'delivery' ? ['confirmado', 'em_preparo', 'no_forno', 'saiu_entrega', 'entregue'] : ['confirmado', 'em_preparo', 'no_forno', 'pronto_retirada', 'entregue'];
    var steps = Math.min(flow.length, Math.floor((Date.now() - R.parseDT(o.created_at).getTime()) / STEP_MS));
    var cur = ['recebido'].concat(flow).indexOf(o.status);
    for (var i = cur; i < steps; i++) {
      var at = R.fmtDT(new Date(R.parseDT(o.created_at).getTime() + (i + 1) * STEP_MS));
      changeOrderStatus(o.id, flow[i], null, null, at, true);
      changed = true;
    }
  });
  if (changed) R.saveDB();
}

R.createOrder = createOrder; R.changeOrderStatus = changeOrderStatus; R.registerPayment = registerPayment; R.hydrateOrder = hydrateOrder;
R.paymentOf = paymentOf; R.tick = tick;
})();

(function () {
'use strict';
var R = window.__RV;
var fail = R.fail, r2 = R.r2, byId = R.byId, pad = R.pad;
var STATUSES = R.ORDER_STATUSES;

function dmy(d) { return pad(d.getDate()) + '/' + pad(d.getMonth() + 1) + '/' + d.getFullYear(); }

function periodFromQuery(q) {
  var preset = q.period || '30d';
  var t = R.startOfDay(new Date()), a, b, label;
  switch (preset) {
    case 'hoje': a = t; b = t; label = 'Hoje'; break;
    case 'ontem': a = R.addDays(t, -1); b = a; label = 'Ontem'; break;
    case '7d': a = R.addDays(t, -6); b = t; label = 'Últimos 7 dias'; break;
    case 'mes': a = new Date(t.getFullYear(), t.getMonth(), 1); b = t; label = 'Este mês'; break;
    case 'mes_anterior': a = new Date(t.getFullYear(), t.getMonth() - 1, 1); b = new Date(t.getFullYear(), t.getMonth(), 0); label = 'Mês anterior'; break;
    case 'custom': {
      var f = q.from || '', to = q.to || '';
      a = /^\d{4}-\d{2}-\d{2}$/.test(f) ? new Date(f + 'T00:00') : null;
      b = /^\d{4}-\d{2}-\d{2}$/.test(to) ? new Date(to + 'T00:00') : null;
      if (!a || !b) fail(422, 'Informe as datas do período personalizado.');
      if (b < a) { var x = a; a = b; b = x; }
      if ((b - a) / 864e5 > 400) fail(422, 'Escolha um período de até 400 dias.');
      label = dmy(a) + ' a ' + dmy(b);
      break; }
    default: preset = '30d'; a = R.addDays(t, -29); b = t; label = 'Últimos 30 dias';
  }
  return { preset: preset, from: R.fmtD(a), to: R.fmtD(b), label: label };
}

function daysBetween(from, to) {
  var out = [], d = new Date(from + 'T12:00'), end = new Date(to + 'T12:00');
  while (d <= end) { out.push(R.fmtD(d)); d = R.addDays(d, 1); }
  return out;
}

function ordersInRange(from, to, f) {
  f = f || {};
  var d = R.db(), a = from + ' 00:00:00', b = to + ' 23:59:59', out = [];
  var itemsBy = {};
  d.order_items.forEach(function (i) { (itemsBy[i.order_id] = itemsBy[i.order_id] || []).push(i); });
  d.orders.forEach(function (o) {
    if (o.created_at < a || o.created_at > b) return;
    if (f.payment && o.payment_method_name !== f.payment) return;
    if (f.type && o.order_type !== f.type) return;
    if (f.status && o.status !== f.status) return;
    var pay = R.paymentOf(o.id);
    var row = Object.assign({}, o, { payment_fee: pay ? pay.fee : 0, payment_status: pay ? pay.status : null, items: itemsBy[o.id] || [] });
    if (f.product_id && !row.items.some(function (i) { return i.product_id === Number(f.product_id); })) return;
    if (f.category_id && !row.items.some(function (i) { return i.category_id === Number(f.category_id); })) return;
    out.push(row);
  });
  out.sort(function (x, y) { return x.created_at < y.created_at ? -1 : x.created_at > y.created_at ? 1 : x.id - y.id; });
  return out;
}

function orderAmounts(o, f) {
  f = f || {};
  var subtotal = Number(o.subtotal), fee = Number(o.delivery_fee), disc = Number(o.discount), pfee = Number(o.payment_fee || 0);
  if (!f.product_id && !f.category_id) return { gross: subtotal + fee, discount: disc, fees: pfee, delivery: fee, total: Number(o.total) };
  var part = 0;
  o.items.forEach(function (i) {
    if (f.product_id && i.product_id !== Number(f.product_id)) return;
    if (f.category_id && i.category_id !== Number(f.category_id)) return;
    part += Number(i.line_total);
  });
  var share = subtotal > 0 ? part / subtotal : 0;
  return { gross: part, discount: r2(disc * share), fees: r2(pfee * share), delivery: 0, total: r2(part - disc * share) };
}

function financeSummary(orders, f) {
  var s = { gross: 0, discounts: 0, fees: 0, delivery_fees: 0, cancelled: 0, cancelled_count: 0, net: 0, orders: 0, avg_ticket: 0, revenue: 0 };
  orders.forEach(function (o) {
    var a = orderAmounts(o, f);
    if (o.status === 'cancelado') { s.cancelled += a.total; s.cancelled_count++; return; }
    s.gross += a.gross; s.discounts += a.discount; s.fees += a.fees; s.delivery_fees += a.delivery; s.revenue += a.total; s.orders++;
  });
  s.net = s.gross - s.discounts - s.fees;
  s.avg_ticket = s.orders ? s.revenue / s.orders : 0;
  Object.keys(s).forEach(function (k) { if (k !== 'cancelled_count' && k !== 'orders') s[k] = r2(s[k]); });
  return s;
}

function groupSum(orders, keyFn, f) {
  var g = {}, order = [];
  orders.forEach(function (o) {
    if (o.status === 'cancelado') return;
    var k = keyFn(o);
    if (!g[k]) { g[k] = { key: k, revenue: 0, orders: 0 }; order.push(k); }
    g[k].revenue += orderAmounts(o, f).total; g[k].orders++;
  });
  return order.map(function (k) { g[k].revenue = r2(g[k].revenue); return g[k]; });
}

function productRanking(orders, limit, f) {
  f = f || {};
  var g = {}, order = [];
  orders.forEach(function (o) {
    if (o.status === 'cancelado') return;
    o.items.forEach(function (i) {
      if (f.category_id && i.category_id !== Number(f.category_id)) return;
      if (f.product_id && i.product_id !== Number(f.product_id)) return;
      var k = i.product_name;
      if (!g[k]) { g[k] = { name: k, category: i.category_name, quantity: 0, revenue: 0 }; order.push(k); }
      g[k].quantity += Number(i.quantity); g[k].revenue += Number(i.line_total);
    });
  });
  var arr = order.map(function (k) { g[k].revenue = r2(g[k].revenue); return g[k]; });
  arr.sort(function (a, b) { return b.quantity - a.quantity || b.revenue - a.revenue; });
  return limit ? arr.slice(0, limit) : arr;
}

function categoryRanking(orders, f) {
  f = f || {};
  var g = {}, order = [];
  orders.forEach(function (o) {
    if (o.status === 'cancelado') return;
    o.items.forEach(function (i) {
      if (f.category_id && i.category_id !== Number(f.category_id)) return;
      if (f.product_id && i.product_id !== Number(f.product_id)) return;
      var k = i.category_name || 'Sem categoria';
      if (!g[k]) { g[k] = { name: k, quantity: 0, revenue: 0 }; order.push(k); }
      g[k].quantity += Number(i.quantity); g[k].revenue += Number(i.line_total);
    });
  });
  var arr = order.map(function (k) { g[k].revenue = r2(g[k].revenue); return g[k]; });
  arr.sort(function (a, b) { return b.revenue - a.revenue; });
  return arr;
}

function dailySeries(orders, from, to, f) {
  var days = {}, list = daysBetween(from, to);
  list.forEach(function (d) { days[d] = { date: d, revenue: 0, orders: 0, cancelled: 0 }; });
  orders.forEach(function (o) {
    var d = o.created_at.slice(0, 10);
    if (!days[d]) return;
    if (o.status === 'cancelado') { days[d].cancelled++; return; }
    days[d].revenue += orderAmounts(o, f).total; days[d].orders++;
  });
  return list.map(function (d) { days[d].revenue = r2(days[d].revenue); return days[d]; });
}

function hourlySeries(orders, f) {
  var h = {};
  orders.forEach(function (o) {
    if (o.status === 'cancelado') return;
    var k = parseInt(o.created_at.slice(11, 13), 10);
    if (!h[k]) h[k] = { hour: k, revenue: 0, orders: 0 };
    h[k].revenue += orderAmounts(o, f).total; h[k].orders++;
  });
  var keys = Object.keys(h).map(Number);
  if (!keys.length) return [];
  var min = Math.min.apply(null, keys), max = Math.max.apply(null, keys), out = [];
  for (var i = min; i <= max; i++) {
    var r = h[i] || { hour: i, revenue: 0, orders: 0 };
    r.revenue = r2(r.revenue); r.label = pad(i) + 'h';
    out.push(r);
  }
  return out;
}

function weekdaySeries(orders) {
  var names = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  var w = names.map(function (n, i) { return { weekday: i, label: n, revenue: 0, orders: 0 }; });
  orders.forEach(function (o) {
    if (o.status === 'cancelado') return;
    var i = R.parseDT(o.created_at).getDay();
    w[i].revenue += Number(o.total); w[i].orders++;
  });
  w.forEach(function (r) { r.revenue = r2(r.revenue); });
  return w;
}

R.periodFromQuery = periodFromQuery; R.ordersInRange = ordersInRange; R.orderAmounts = orderAmounts; R.financeSummary = financeSummary;
R.groupSum = groupSum; R.productRanking = productRanking; R.categoryRanking = categoryRanking; R.dailySeries = dailySeries;
R.hourlySeries = hourlySeries; R.weekdaySeries = weekdaySeries; R.statusLabels = STATUSES;
})();

(function () {
'use strict';
var R = window.__RV;
var C = R.CATALOG;

function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    var t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function seedDB() {
  var t = R.now();
  var d = {
    seq: {},
    settings: R.clone(C.settings),
    categories: R.clone(C.categories),
    products: R.clone(C.products).map(function (p) {
      p.options = p.options_json ? JSON.parse(p.options_json) : [];
      delete p.options_json;
      return p;
    }),
    product_sizes: R.clone(C.product_sizes),
    addons: R.clone(C.addons),
    addon_categories: R.clone(C.addon_categories),
    payment_methods: R.clone(C.payment_methods),
    delivery_zones: R.clone(C.delivery_zones),
    promotions: R.clone(C.promotions),
    reviews: R.clone(C.reviews),
    gallery: R.clone(C.gallery),
    users: [
      { id: 1, name: 'Dono Rivoly', email: 'admin@rivoly.test', password_hash: '', role: 'admin', active: 1, last_login_at: null, created_at: t, updated_at: t },
      { id: 2, name: 'Marina (gerente)', email: 'gerente@rivoly.test', password_hash: '', role: 'gerente', active: 1, last_login_at: null, created_at: t, updated_at: t },
      { id: 3, name: 'Carlos (atendente)', email: 'atendente@rivoly.test', password_hash: '', role: 'atendente', active: 1, last_login_at: null, created_at: t, updated_at: t }
    ],
    customers: [], addresses: [], orders: [], order_items: [], history: [], payments: [], records: []
  };
  // Para a apresentação: loja aberta, PIX e débito ativos (chave PIX de exemplo)
  d.settings.order_mode = 'open';
  d.settings.logo_url = 'assets/img/logo-rivoly.jpg';
  d.settings.pix_key = 'pix@rivoly.exemplo';
  d.settings.pix_holder = 'Pizzaria Rivoly (exemplo)';
  d.settings.hours_note = d.settings.hours_note + ' Nesta demonstração a loja fica aberta o tempo todo.';
  d.payment_methods.forEach(function (m) { if (m.kind === 'pix' || m.name === 'Cartão de débito') { m.active = 1; if (m.kind === 'pix') m.instructions = 'Pague pelo PIX e envie o comprovante pelo WhatsApp.'; } });
  ['categories', 'products', 'product_sizes', 'addons', 'payment_methods', 'delivery_zones', 'promotions', 'reviews', 'gallery'].forEach(function (k) { d.seq[k] = R.maxId(d[k]); });
  d.seq.users = 3;
  ['customers', 'addresses', 'orders', 'order_items', 'payments', 'records'].forEach(function (k) { d.seq[k] = 0; });
  // hoje: bairros de exemplo com taxa (demonstração)
  [['Lapinha', 4], ['Liberdade', 5], ['Soledade', 6], ['IAPI', 6], ['Barbalho', 7]].forEach(function (z) {
    d.delivery_zones.push({ id: ++d.seq.delivery_zones, neighborhood: z[0], fee: z[1], active: 1, created_at: t, updated_at: t });
  });
  R.adopt(d);
  try { generateDemoOrders(45); } catch (e) { if (window.console) console.error('demo orders', e); }
  return d;
}

function generateDemoOrders(days) {
  var rnd = mulberry32(7);
  var mt = function (a, b) { return a + Math.floor(rnd() * (b - a + 1)); };
  var names = ['Ana Souza', 'Bruno Lima', 'Carla Menezes', 'Diego Santos', 'Eduarda Reis', 'Felipe Costa', 'Gabriela Nunes', 'Heitor Alves', 'Isabela Rocha',
    'João Pedro Silva', 'Karina Oliveira', 'Lucas Barbosa', 'Marina Teixeira', 'Nicolas Pereira', 'Olívia Cardoso', 'Paulo Henrique', 'Queila Ramos',
    'Rafael Moura', 'Sabrina Dias', 'Tiago Freitas', 'Vanessa Luz', 'Wesley Araújo'];
  var hoods = ['Lapinha', 'Lapinha', 'Liberdade', 'Liberdade', 'Soledade', 'IAPI', 'Pero Vaz', "Caixa D'Água", 'Santo Antônio', 'Barbalho'];
  var streets = ['Rua Lima e Silva', 'Rua do Queimado', 'Rua Direta da Lapinha', 'Rua Saldanha Marinho', 'Travessa São Jorge', 'Rua Conde de Porto Alegre'];
  var d = R.db();
  var catType = {};
  d.categories.forEach(function (c) { catType[c.id] = c.type; });
  var pizzas = d.products.filter(function (p) { return catType[p.category_id] === 'pizza' && p.active; }).map(function (p) { return p.id; });
  var popular = ['Calabresa', 'Frango com Catupiry', 'Rivoly', 'Lapinha', 'Portuguesa', '4 Queijos', 'Camarão Premium'];
  var weights = pizzas.map(function (id) { return popular.indexOf(R.byId(d.products, id).name) >= 0 ? 5 : 1; });
  var total = weights.reduce(function (a, b) { return a + b; }, 0);
  var pick = function () { var r = mt(1, total); for (var i = 0; i < pizzas.length; i++) { r -= weights[i]; if (r <= 0) return pizzas[i]; } return pizzas[0]; };
  var drinks = d.products.filter(function (p) { return catType[p.category_id] === 'bebida' && p.active; }).map(function (p) { return p.id; });
  var pms = d.payment_methods.filter(function (m) { return m.active; });
  var nowMs = Date.now();

  function sizesOf(pid) { return d.product_sizes.filter(function (s) { return s.product_id === pid && s.active; }).sort(function (a, b) { return a.sort_order - b.sort_order; }); }
  function oneOrder(at, ci, delivery, items, pm, notes) {
    var payload = { name: names[ci], phone: '7190000' + String(1000 + ci), order_type: delivery ? 'delivery' : 'pickup', payment_method_id: pm.id, items: items, notes: notes || null,
      address: delivery ? { street: streets[ci % streets.length], number: String(mt(10, 480)), neighborhood: hoods[ci % hoods.length], city: 'Salvador' } : null };
    return R.createOrder(payload, 'site', true, R.fmtDT(at));
  }
  function progress(orderId, at, delivery, steps) {
    var flow = delivery ? ['confirmado', 'em_preparo', 'no_forno', 'saiu_entrega', 'entregue'] : ['confirmado', 'em_preparo', 'no_forno', 'pronto_retirada', 'entregue'];
    for (var s = 0; s < steps; s++) R.changeOrderStatus(orderId, flow[s], null, null, R.fmtDT(new Date(at.getTime() + (5 + s * 12) * 60000)), true);
  }

  for (var i = days - 1; i >= 0; i--) {
    var date = R.addDays(new Date(), -i);
    var w = date.getDay();
    var weekend = w === 5 || w === 6 || w === 0;
    var n = weekend ? mt(7, 14) : mt(3, 8);
    for (var k = 0; k < n; k++) {
      var startMin = 17 * 60 + 30, endMin = 23 * 60 - 10;
      var m = Math.round((startMin + endMin) / 2 + (mt(-100, 100) / 100) * (endMin - startMin) / 2 * (mt(0, 1) ? 0.6 : 1));
      m = Math.max(startMin, Math.min(endMin, m));
      var at = new Date(date.getFullYear(), date.getMonth(), date.getDate(), Math.floor(m / 60), m % 60, mt(0, 59));
      if (at.getTime() > nowMs - 30 * 60000) continue;
      var items = [], nP = mt(1, 10) > 8 ? 2 : 1;
      for (var j = 0; j < nP; j++) {
        var pid = pick(), sizes = sizesOf(pid);
        var size = sizes[mt(0, 9) < 3 ? 0 : (mt(0, 9) < 6 ? 1 : 2)] || sizes[0];
        var flavors = [];
        if (size.max_flavors > 1 && mt(1, 10) > 5) { var other = pick(); if (other !== pid) flavors.push(other); }
        items.push({ product_id: pid, size_id: size.id, flavor_ids: flavors, quantity: 1 });
      }
      if (drinks.length && mt(1, 10) > 3) items.push({ product_id: drinks[mt(0, drinks.length - 1)], quantity: mt(1, 2) });
      var ci = mt(0, names.length - 1), delivery = mt(1, 10) > 3, pm = pms[mt(0, pms.length - 1)];
      var r;
      try { r = oneOrder(at, ci, delivery, items, pm); } catch (e) { continue; }
      if (mt(1, 100) <= 4) { R.changeOrderStatus(r.id, 'cancelado', null, 'Cliente desistiu (demonstração)', R.fmtDT(new Date(at.getTime() + 6 * 60000)), true); continue; }
      var minutesAgo = (nowMs - at.getTime()) / 60000;
      progress(r.id, at, delivery, minutesAgo > 90 ? 5 : Math.max(0, Math.min(4, Math.floor(minutesAgo / 12))));
    }
  }

  // Pedidos em andamento agora, para a tela de Pedidos não ficar vazia
  [['recebido', 4, 'Olívia Cardoso', 'delivery', 14], ['em_preparo', 14, 'Rafael Moura', 'pickup', 17], ['no_forno', 26, 'Karina Oliveira', 'delivery', 10]].forEach(function (L, k) {
    var pid = pizzas[(k * 3) % pizzas.length], sizes = sizesOf(pid);
    var at = new Date(nowMs - L[1] * 60000);
    var ci = names.indexOf(L[2]);
    var r;
    try {
      r = oneOrder(at, ci, L[3] === 'delivery', [{ product_id: pid, size_id: sizes[sizes.length - 1].id, quantity: 1 }, { product_id: drinks[0], quantity: 1 }], pms[k % pms.length], k === 0 ? 'Sem cebola, por favor' : null);
    } catch (e) { return; }
    var steps = { recebido: 0, em_preparo: 2, no_forno: 3 }[L[0]];
    var flow = ['confirmado', 'em_preparo', 'no_forno'];
    for (var s = 0; s < steps; s++) R.changeOrderStatus(r.id, flow[s], null, null, R.fmtDT(new Date(at.getTime() + (s + 1) * 240000)), true);
  });
  // Um cliente de exemplo com mais gasto (para o ranking de clientes)
}

R.seedDB = seedDB;
})();

(function () {
'use strict';
var R = window.__RV;
var fail = R.fail, r2 = R.r2, byId = R.byId, validate = R.validate;
var ROUTES = R.ROUTES = [];
function route(method, pattern, handler) {
  var names = [];
  var re = new RegExp('^' + pattern.replace(/\{(\w+)\}/g, function (_, n) { names.push(n); return '([^/]+)'; }) + '$');
  ROUTES.push({ method: method, re: re, names: names, handler: handler });
}
R.route = route;

/* ---------- Autenticação e permissões ---------- */
var PERMISSIONS = {
  dashboard: ['gerente', 'atendente'], orders: ['gerente', 'atendente'], customers: ['gerente', 'atendente'], products: ['gerente'],
  categories: ['gerente'], finance: ['gerente'], reports: ['gerente'], promotions: ['gerente'], settings: ['gerente'], users: []
};
var ROLES = { admin: 'Administrador', gerente: 'Gerente', atendente: 'Atendente' };
function userPermissions(role) {
  return Object.keys(PERMISSIONS).filter(function (a) { return role === 'admin' || PERMISSIONS[a].indexOf(role) >= 0; });
}
function currentUser() {
  var id = R.lsGet(R.SESSION_KEY);
  if (!id) return null;
  var u = byId(R.db().users, id);
  if (!u || !u.active) return null;
  return { id: u.id, name: u.name, email: u.email, role: u.role, token_id: 0, expires_at: '', permissions: userPermissions(u.role) };
}
function requireUser(area) {
  var u = currentUser();
  if (!u) fail(401, 'Sua sessão expirou. Entre novamente.');
  if (area && u.permissions.indexOf(area) < 0) fail(403, 'Seu usuário não tem acesso a esta área.');
  return u;
}
R.requireUser = requireUser; R.currentUser = currentUser; R.ROLES = ROLES;

function validatePassword(p) {
  if (String(p).length < 8) fail(422, 'A senha precisa ter pelo menos 8 caracteres.', { password: 'Mínimo de 8 caracteres.' });
  if (!/[A-Za-z]/.test(p) || !/\d/.test(p)) fail(422, 'Use letras e números na senha.', { password: 'Use letras e números.' });
}
R.validatePassword = validatePassword;

route('GET', '/auth/state', function () { return { needs_setup: false, user: currentUser() }; });
route('POST', '/auth/setup', function () { fail(403, 'O administrador já foi cadastrado. Faça login.'); });
route('POST', '/auth/login', function (p, q, b) {
  var email = String(b.email || '').trim().toLowerCase(), pass = String(b.password || '');
  if (!email || !pass) fail(422, 'Informe e-mail e senha.');
  var u = null;
  R.db().users.forEach(function (x) { if (x.email === email) u = x; });
  if (!u || !u.active) fail(401, 'E-mail ou senha incorretos.');
  u.last_login_at = R.now();
  R.saveDB();
  R.lsSet(R.SESSION_KEY, String(u.id));
  return { ok: true };
});
route('POST', '/auth/logout', function () { R.lsDel(R.SESSION_KEY); return { ok: true }; });
route('GET', '/auth/me', function () { return { user: requireUser() }; });
route('POST', '/auth/password', function (p, q, b) {
  requireUser();
  if (!String(b.current || '')) fail(422, 'Senha atual incorreta.', { current: 'Senha atual incorreta.' });
  validatePassword(String(b.password || ''));
  return { ok: true };
});

/* ---------- Site público ---------- */
function serializeProduct(p, sizes, addonIds) {
  var sz = sizes.map(function (s) { return { id: s.id, product_id: s.product_id, name: s.name, slices: s.slices, max_flavors: s.max_flavors, price: s.price, promo_price: s.promo_price, sort_order: s.sort_order, active: !!s.active }; });
  var prices = [];
  sz.forEach(function (s) { if (s.active) prices.push(R.effectivePrice(s.price, s.promo_price)); });
  if (!sz.length && p.price !== null && p.price !== undefined) prices.push(R.effectivePrice(p.price, p.promo_price));
  return { id: p.id, category_id: p.category_id, name: p.name, slug: p.slug, description: p.description, ingredients: p.ingredients, image_url: p.image_url,
    price: p.price, promo_price: p.promo_price, from_price: prices.length ? Math.min.apply(null, prices) : null, is_featured: !!p.is_featured,
    sizes: sz.filter(function (s) { return s.active; }), options: p.options || [], addon_ids: addonIds || [] };
}
function bySort(a, b) { return (a.sort_order - b.sort_order) || String(a.name).localeCompare(String(b.name), 'pt-BR'); }

route('GET', '/public/menu', function () {
  var d = R.db();
  var cats = d.categories.filter(function (c) { return c.active; }).sort(bySort);
  var addons = d.addons.filter(function (a) { return a.active; }).sort(bySort).map(function (a) { return { id: a.id, name: a.name, description: a.description, price: a.price }; });
  var links = {};
  d.addon_categories.forEach(function (l) { (links[l.addon_id] = links[l.addon_id] || []).push(l.category_id); });
  var out = [];
  cats.forEach(function (c) {
    var products = d.products.filter(function (p) { return p.active && p.category_id === c.id; }).sort(bySort).map(function (p) {
      var sizes = d.product_sizes.filter(function (s) { return s.product_id === p.id; }).sort(function (a, b) { return a.sort_order - b.sort_order || a.id - b.id; });
      var ids = addons.filter(function (a) { return !links[a.id] || links[a.id].indexOf(c.id) >= 0; }).map(function (a) { return a.id; });
      return serializeProduct(p, sizes, ids);
    }).filter(function (sp) { return sp.from_price !== null; });
    var row = { id: c.id, name: c.name, slug: c.slug, type: c.type, description: c.description, sort_order: c.sort_order, products: products };
    if (c.type === 'adicional') { row.addons = addons; if (!addons.length) return; }
    else if (!products.length) return;
    out.push(row);
  });
  return { categories: out, addons: addons.map(function (a) { return Object.assign({}, a, { category_ids: links[a.id] || [] }); }) };
});

route('GET', '/public/store', function () {
  var d = R.db(), s = R.publicSettings();
  delete s.pix_key; delete s.pix_holder;
  var pms = d.payment_methods.filter(function (m) { return m.active; }).sort(bySort).map(function (m) {
    return { id: m.id, name: m.name, kind: m.kind, instructions: m.kind === 'pix' ? 'Enviamos a chave PIX na confirmação do pedido.' : m.instructions, accepts_change: !!m.accepts_change };
  });
  var promos = d.promotions.filter(function (p) { return p.active && p.show_on_site && R.promotionInWindow(p); }).sort(function (a, b) { return b.id - a.id; })
    .map(function (p) { return { id: p.id, name: p.name, description: p.description, type: p.type, value: Number(p.value), code: p.code, min_order: Number(p.min_order), ends_at: p.ends_at }; });
  return {
    settings: s, status: R.storeStatus(), payment_methods: pms,
    delivery_zones: d.delivery_zones.filter(function (z) { return z.active; }).sort(function (a, b) { return a.neighborhood.localeCompare(b.neighborhood, 'pt-BR'); }).map(function (z) { return { neighborhood: z.neighborhood, fee: z.fee }; }),
    promotions: promos,
    reviews: d.reviews.filter(function (r) { return r.active; }).sort(function (a, b) { return b.id - a.id; }).slice(0, 12).map(function (r) { return { author: r.author, rating: r.rating, comment: r.comment, source: r.source, review_date: r.review_date }; }),
    gallery: d.gallery.filter(function (g) { return g.active; }).sort(function (a, b) { return a.sort_order - b.sort_order || a.id - b.id; }).slice(0, 12).map(function (g) { return { image_url: g.image_url, caption: g.caption, link_url: g.link_url }; })
  };
});

route('POST', '/public/quote', function (p, q, b) {
  return R.priceCart({ items: b.items || [], order_type: b.order_type || 'delivery', neighborhood: b.neighborhood || '', coupon: b.coupon || '' });
});

route('POST', '/public/orders', function (p, q, b) {
  var r = R.createOrder(b, 'site');
  return Object.assign({ ok: true }, r);
});

route('GET', '/public/orders/{code}', function (p) {
  var code = String(p.code).toUpperCase();
  if (!/^[A-Z0-9]{12}$/.test(code)) fail(404, 'Pedido não encontrado.');
  var d = R.db(), o = null;
  d.orders.forEach(function (x) { if (x.tracking_code === code) o = x; });
  if (!o) fail(404, 'Pedido não encontrado.');
  o = R.hydrateOrder(o);
  var pm = o.payment_method_id ? byId(d.payment_methods, o.payment_method_id) : null;
  var pix = null;
  if (pm && pm.kind === 'pix' && o.status !== 'cancelado') pix = { key: R.setting('pix_key'), holder: R.setting('pix_holder'), paid: (o.payment && o.payment.status) === 'pago' };
  var phone = o.customer_phone;
  return {
    number: o.number, tracking_code: o.tracking_code, status: o.status, status_label: o.status_label, order_type: o.order_type,
    customer_name: o.customer_name.trim().split(' ')[0], customer_phone: '(' + phone.slice(0, 2) + ') *****-' + phone.slice(-4),
    address: o.order_type === 'delivery' ? (o.street + ', ' + o.address_number + (o.complement ? ' - ' + o.complement : '') + ', ' + o.neighborhood) : null,
    items: o.items.map(function (i) { return { product_name: i.product_name, size_name: i.size_name, flavors: i.flavors.map(function (f) { return f.name; }), addons: i.addons.map(function (a) { return a.name; }), options: i.options, quantity: i.quantity, line_total: i.line_total, notes: i.notes }; }),
    subtotal: o.subtotal, delivery_fee: o.delivery_fee, discount: o.discount, total: o.total, payment_method_name: o.payment_method_name, change_for: o.change_for,
    notes: o.notes, cancel_reason: o.cancel_reason, created_at: o.created_at,
    history: o.history.map(function (h) { return { status: h.status, label: R.ORDER_STATUSES[h.status] || h.status, created_at: h.created_at }; }),
    pix: pix, store_phone: R.setting('phone'), store_whatsapp: R.setting('whatsapp')
  };
});

route('GET', '/public/cep/{cep}', function (p) {
  var cep = R.onlyDigits(p.cep);
  if (cep.length !== 8) fail(422, 'CEP inválido.');
  return Promise.race([
    R.realFetch('https://viacep.com.br/ws/' + cep + '/json/').then(function (r) { return r.json(); }),
    new Promise(function (_, rej) { setTimeout(function () { rej(new Error('timeout')); }, 4000); })
  ]).then(function (d) {
    if (!d || d.erro) fail(404, 'CEP não encontrado. Preencha o endereço manualmente.');
    return { street: d.logradouro || '', neighborhood: d.bairro || '', city: d.localidade || '', state: d.uf || '' };
  }, function () { fail(404, 'CEP não encontrado. Preencha o endereço manualmente.'); });
});
})();

(function () {
'use strict';
var R = window.__RV;
var fail = R.fail, r2 = R.r2, byId = R.byId, validate = R.validate, route = R.route, requireUser = R.requireUser;
var STATUSES = R.ORDER_STATUSES;

function sortBy(a, b) { return (a.sort_order - b.sort_order) || String(a.name).localeCompare(String(b.name), 'pt-BR'); }
function num(v) { return v === null || v === undefined || v === '' ? null : Number(v); }
function uniqueSlug(list, name, ignoreId) {
  var base = R.slugify(name), slug = base, i = 2;
  while (list.some(function (r) { return r.slug === slug && r.id !== ignoreId; })) slug = base + '-' + (i++);
  return slug;
}

/* ============================ Pedidos ============================ */
route('GET', '/admin/orders', function (p, q) {
  requireUser('orders');
  var d = R.db(), status = q.status || '';
  var list = d.orders.filter(function (o) {
    if (status === 'abertos') { if (R.OPEN_STATUSES.indexOf(o.status) < 0) return false; }
    else if (status && STATUSES[status] && o.status !== status) return false;
    if ((q.type === 'delivery' || q.type === 'pickup') && o.order_type !== q.type) return false;
    if (q.from && o.created_at < q.from + ' 00:00:00') return false;
    if (q.to && o.created_at > q.to + ' 23:59:59') return false;
    var s = String(q.q || '').trim();
    if (s) {
      var digits = R.onlyDigits(s), low = s.toLowerCase();
      var hit = o.customer_name.toLowerCase().indexOf(low) >= 0;
      if (digits) hit = hit || o.customer_phone.indexOf(digits) >= 0 || String(o.number) === digits;
      if (!hit) return false;
    }
    return true;
  }).sort(function (a, b) { return b.id - a.id; });
  var page = Math.max(1, parseInt(q.page || 1, 10)), per = Math.min(100, Math.max(10, parseInt(q.per || 30, 10)));
  var counts = {};
  d.orders.forEach(function (o) { counts[o.status] = (counts[o.status] || 0) + 1; });
  var qtyBy = {};
  d.order_items.forEach(function (i) { qtyBy[i.order_id] = (qtyBy[i.order_id] || 0) + i.quantity; });
  var rows = list.slice((page - 1) * per, page * per).map(function (o) {
    var pay = R.paymentOf(o.id);
    return { id: o.id, number: o.number, customer_name: o.customer_name, customer_phone: o.customer_phone, order_type: o.order_type, status: o.status,
      total: o.total, payment_method_name: o.payment_method_name, neighborhood: o.neighborhood, created_at: o.created_at, is_demo: !!o.is_demo, channel: o.channel,
      payment_status: pay ? pay.status : null, items_count: qtyBy[o.id] || 0, status_label: STATUSES[o.status] };
  });
  return { data: rows, total: list.length, page: page, per: per, counts: counts, statuses: STATUSES };
});

route('GET', '/admin/orders/feed', function (p, q) {
  requireUser('orders');
  var d = R.db(), after = parseInt(q.after || 0, 10);
  var waiting = d.orders.filter(function (o) { return o.status === 'recebido'; }).length;
  var latest = R.maxId(d.orders);
  var news = after ? d.orders.filter(function (o) { return o.id > after; }).map(function (o) { return { id: o.id, number: o.number, customer_name: o.customer_name, total: o.total }; }) : [];
  return { latest_id: latest, waiting: waiting, new: news };
});

route('GET', '/admin/orders/{id}', function (p) {
  requireUser('orders');
  var o = byId(R.db().orders, p.id);
  if (!o) fail(404, 'Pedido não encontrado.');
  var full = R.hydrateOrder(o);
  full.customer_orders = o.customer_id ? R.db().orders.filter(function (x) { return x.customer_id === o.customer_id; }).length : 0;
  return full;
});

route('PATCH', '/admin/orders/{id}/status', function (p, q, b) {
  var u = requireUser('orders');
  var o = byId(R.db().orders, p.id);
  if (!o) fail(404, 'Pedido não encontrado.');
  o.auto = 0; // controle manual: o avanço automático da demonstração para
  R.changeOrderStatus(o.id, String(b.status || ''), u.id, b.note ? String(b.note).trim() : null);
  return R.hydrateOrder(byId(R.db().orders, o.id));
});

route('PATCH', '/admin/orders/{id}/payment', function (p) {
  var u = requireUser('orders');
  var o = byId(R.db().orders, p.id);
  if (!o) fail(404, 'Pedido não encontrado.');
  if (o.status === 'cancelado') fail(409, 'Pedido cancelado.');
  R.registerPayment(o.id, u.id);
  R.saveDB();
  return R.hydrateOrder(o);
});

route('POST', '/admin/orders', function (p, q, b) {
  var u = requireUser('orders');
  var channel = ['telefone', 'whatsapp', 'balcao'].indexOf(b.channel) >= 0 ? b.channel : 'balcao';
  var r = R.createOrder(b, channel);
  R.db().history.forEach(function (h) { if (h.order_id === r.id) h.user_id = u.id; });
  var o = byId(R.db().orders, r.id); o.auto = 0;
  R.saveDB();
  return Object.assign({ ok: true }, r);
});

/* ============================ Produtos ============================ */
var CATEGORY_TYPES = { pizza: 'Pizza', pizza_doce: 'Pizza doce', bebida: 'Bebida', combo: 'Combo', sobremesa: 'Sobremesa', adicional: 'Adicionais', outro: 'Outro' };

function soldOf(pid) { var n = 0; R.db().order_items.forEach(function (i) { if (i.product_id === pid) n += i.quantity; }); return n; }
function sizeOut(s) { return { id: s.id, product_id: s.product_id, name: s.name, slices: s.slices, max_flavors: s.max_flavors, price: s.price, promo_price: s.promo_price, sort_order: s.sort_order, active: !!s.active }; }

function productAdmin(id) {
  var d = R.db(), p = byId(d.products, id);
  if (!p) return null;
  var c = byId(d.categories, p.category_id);
  var out = Object.assign({}, p, { category_name: c.name, category_type: c.type, is_featured: !!p.is_featured, active: !!p.active });
  out.sizes = d.product_sizes.filter(function (s) { return s.product_id === id; }).sort(function (a, b) { return a.sort_order - b.sort_order || a.id - b.id; }).map(sizeOut);
  out.options = p.options || [];
  out.sold = soldOf(id);
  return out;
}

function validateOptions(opts) {
  if (opts === null || opts === undefined || opts === '' || (Array.isArray(opts) && !opts.length)) return null;
  if (!Array.isArray(opts)) fail(422, 'Opções de personalização inválidas.');
  return opts.map(function (g, i) {
    var name = String(g.name || '').trim();
    if (!name) fail(422, 'Dê um nome ao grupo de opções ' + (i + 1) + '.');
    var min = Math.max(0, parseInt(g.min || 0, 10)), max = Math.max(1, parseInt(g.max || 1, 10));
    if (min > max) fail(422, 'No grupo "' + name + '", o mínimo não pode ser maior que o máximo.');
    var choices = [];
    (g.choices || []).forEach(function (c) {
      var cn = String(c.name || '').trim();
      if (!cn) return;
      var price = r2(String(c.price == null ? 0 : c.price).replace(',', '.'));
      if (price < 0) fail(422, 'Preço negativo em "' + cn + '".');
      choices.push({ name: cn.slice(0, 80), price: price });
    });
    if (!choices.length) fail(422, 'Adicione opções ao grupo "' + name + '".');
    if (min > choices.length) fail(422, 'No grupo "' + name + '", o mínimo é maior que o número de opções.');
    return { name: name.slice(0, 80), min: min, max: Math.min(max, choices.length), choices: choices };
  });
}

function saveProduct(b, id) {
  var d = R.db();
  var v = validate(b, {
    category_id: 'required|int', name: 'required|string|minlen:2|max:120', description: 'nullable|string|max:500', ingredients: 'nullable|string|max:500',
    image_url: 'nullable|string', price: 'nullable|money|min:0', promo_price: 'nullable|money|min:0', is_featured: 'bool', active: 'bool', sort_order: 'nullable|int'
  }, { category_id: 'a categoria', name: 'o nome', price: 'o preço', promo_price: 'o preço promocional' });
  if (!byId(d.categories, v.category_id)) fail(422, 'Categoria não encontrada.');
  if (v.image_url && !/^(\/uploads\/|\/assets\/|https:\/\/|data:image\/)/.test(v.image_url)) fail(422, 'Endereço de imagem inválido.');
  var sizes = [];
  (b.sizes || []).forEach(function (s0, i) {
    var s = validate(s0, { id: 'nullable|int', name: 'required|string|max:40', slices: 'nullable|int', max_flavors: 'nullable|int', price: 'required|money|min:0', promo_price: 'nullable|money|min:0', active: 'bool' },
      { name: 'o nome do tamanho ' + (i + 1), price: 'o preço do tamanho ' + (i + 1) });
    s.max_flavors = Math.max(1, Math.min(8, s.max_flavors || 1));
    if (!Object.prototype.hasOwnProperty.call(s0, 'active')) s.active = true;
    if (s.promo_price !== null && s.promo_price >= s.price) fail(422, 'O preço promocional do tamanho ' + s.name + ' precisa ser menor que o preço normal.');
    sizes.push(s);
  });
  if (!sizes.length && v.price === null && v.active) fail(422, 'Informe o preço ou cadastre pelo menos um tamanho para deixar o produto ativo.', { price: 'Informe o preço.' });
  if (v.promo_price !== null && v.price !== null && v.promo_price >= v.price) fail(422, 'O preço promocional precisa ser menor que o preço normal.', { promo_price: 'Deve ser menor que o preço.' });
  var options = validateOptions(b.options);
  var t = R.now(), p;
  if (id) p = byId(d.products, id);
  else { p = { id: R.nextId('products'), data_source: 'real', source_note: null, created_at: t }; d.products.push(p); }
  Object.assign(p, { category_id: v.category_id, name: v.name, description: v.description || null, ingredients: v.ingredients || null, image_url: v.image_url || null,
    price: sizes.length ? null : v.price, promo_price: sizes.length ? null : v.promo_price, is_featured: v.is_featured ? 1 : 0, active: v.active ? 1 : 0,
    sort_order: v.sort_order || 0, options: options || [], updated_at: t });
  p.slug = uniqueSlug(d.products, v.name, p.id);
  var keep = [];
  sizes.forEach(function (s, i) {
    var row = s.id ? d.product_sizes.filter(function (x) { return x.id === s.id && x.product_id === p.id; })[0] : null;
    if (!row) { row = { id: R.nextId('product_sizes'), product_id: p.id }; d.product_sizes.push(row); }
    Object.assign(row, { name: s.name, slices: s.slices, max_flavors: s.max_flavors, price: s.price, promo_price: s.promo_price, sort_order: i, active: s.active ? 1 : 0 });
    keep.push(row.id);
  });
  d.product_sizes = d.product_sizes.filter(function (s) { return s.product_id !== p.id || keep.indexOf(s.id) >= 0; });
  R.saveDB();
  return p.id;
}

route('GET', '/admin/products', function () {
  requireUser('products');
  var d = R.db(), sold = {};
  d.order_items.forEach(function (i) { if (i.product_id) sold[i.product_id] = (sold[i.product_id] || 0) + i.quantity; });
  var cat = {};
  d.categories.forEach(function (c) { cat[c.id] = c; });
  var list = d.products.slice().sort(function (a, b) { return (cat[a.category_id].sort_order - cat[b.category_id].sort_order) || sortBy(a, b); }).map(function (p) {
    var out = Object.assign({}, p, { category_name: cat[p.category_id].name, category_type: cat[p.category_id].type, is_featured: !!p.is_featured, active: !!p.active });
    out.sizes = d.product_sizes.filter(function (s) { return s.product_id === p.id; }).sort(function (a, b) { return a.sort_order - b.sort_order; }).map(sizeOut);
    out.has_options = !!(p.options && p.options.length);
    delete out.options;
    out.sold = sold[p.id] || 0;
    return out;
  });
  return { data: list };
});
route('GET', '/admin/products/{id}', function (p) { requireUser('products'); var r = productAdmin(Number(p.id)); if (!r) fail(404, 'Produto não encontrado.'); return r; });
route('POST', '/admin/products', function (p, q, b) { requireUser('products'); return productAdmin(saveProduct(b)); });
route('PUT', '/admin/products/{id}', function (p, q, b) {
  requireUser('products');
  if (!byId(R.db().products, p.id)) fail(404, 'Produto não encontrado.');
  return productAdmin(saveProduct(b, Number(p.id)));
});
route('PATCH', '/admin/products/{id}', function (p, q, b) {
  requireUser('products');
  var id = Number(p.id), cur = productAdmin(id);
  if (!cur) fail(404, 'Produto não encontrado.');
  var row = byId(R.db().products, id);
  if (Object.prototype.hasOwnProperty.call(b, 'active')) {
    var on = !!b.active;
    if (on && !cur.sizes.length && (cur.price === null || cur.price === undefined)) fail(422, 'Cadastre o preço antes de ativar este produto.');
    row.active = on ? 1 : 0;
  }
  if (Object.prototype.hasOwnProperty.call(b, 'is_featured')) row.is_featured = b.is_featured ? 1 : 0;
  if (Object.prototype.hasOwnProperty.call(b, 'price') && !cur.sizes.length) row.price = validate(b, { price: 'required|money|min:0' }).price;
  row.updated_at = R.now();
  R.saveDB();
  return productAdmin(id);
});
route('DELETE', '/admin/products/{id}', function (p) {
  requireUser('products');
  var d = R.db(), id = Number(p.id);
  if (!byId(d.products, id)) fail(404, 'Produto não encontrado.');
  d.products = d.products.filter(function (x) { return x.id !== id; });
  d.product_sizes = d.product_sizes.filter(function (s) { return s.product_id !== id; });
  d.order_items.forEach(function (i) { if (i.product_id === id) i.product_id = null; });
  R.saveDB();
  return { ok: true };
});

/* Envio de imagem: reduz no navegador e guarda como data URL */
route('POST', '/admin/upload', function (p, q, b, form) {
  var u = requireUser();
  if (['products', 'settings'].every(function (a) { return u.permissions.indexOf(a) < 0; })) fail(403, 'Seu usuário não tem acesso a esta área.');
  var file = form && form.get && form.get('file');
  if (!file || !file.size) fail(422, 'Selecione uma imagem.');
  if (!/^image\/(jpeg|png|webp)$/.test(file.type)) fail(422, 'Formato não aceito. Use JPG, PNG ou WEBP.');
  return new Promise(function (resolve, reject) {
    var url = URL.createObjectURL(file), img = new Image();
    img.onload = function () {
      var s = Math.min(1, 900 / Math.max(img.naturalWidth, img.naturalHeight));
      var c = document.createElement('canvas');
      c.width = Math.round(img.naturalWidth * s); c.height = Math.round(img.naturalHeight * s);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
      URL.revokeObjectURL(url);
      resolve({ url: c.toDataURL('image/jpeg', 0.8) });
    };
    img.onerror = function () { reject(new R.HttpError(422, 'Formato não aceito. Use JPG, PNG ou WEBP.')); };
    img.src = url;
  });
});

/* ============================ Categorias ============================ */
route('GET', '/admin/categories', function () {
  requireUser('products');
  var d = R.db();
  var rows = d.categories.slice().sort(sortBy).map(function (c) {
    var ps = d.products.filter(function (p) { return p.category_id === c.id; });
    return Object.assign({}, c, { active: !!c.active, products_count: ps.length, active_count: ps.filter(function (p) { return p.active; }).length });
  });
  return { data: rows, types: CATEGORY_TYPES };
});
function saveCategory(b, id) {
  var d = R.db();
  var v = validate(b, { name: 'required|string|minlen:2|max:80', type: 'required|in:' + Object.keys(CATEGORY_TYPES).join(','), description: 'nullable|string|max:255', sort_order: 'nullable|int', active: 'bool' },
    { name: 'o nome', type: 'o tipo' });
  var c;
  if (id) c = byId(d.categories, id);
  else { c = { id: R.nextId('categories'), data_source: 'real', created_at: R.now() }; d.categories.push(c); }
  Object.assign(c, { name: v.name, type: v.type, description: v.description || null, sort_order: v.sort_order || 0, active: v.active ? 1 : 0, updated_at: R.now() });
  c.slug = uniqueSlug(d.categories, v.name, c.id);
  R.saveDB();
  return c.id;
}
route('POST', '/admin/categories', function (p, q, b) { requireUser('categories'); return { id: saveCategory(b) }; });
route('POST', '/admin/categories/reorder', function (p, q, b) {
  requireUser('categories');
  (b.ids || []).forEach(function (id, i) { var c = byId(R.db().categories, id); if (c) c.sort_order = i + 1; });
  R.saveDB();
  return { ok: true };
});
route('PUT', '/admin/categories/{id}', function (p, q, b) {
  requireUser('categories');
  if (!byId(R.db().categories, p.id)) fail(404, 'Categoria não encontrada.');
  return { id: saveCategory(b, Number(p.id)) };
});
route('DELETE', '/admin/categories/{id}', function (p) {
  requireUser('categories');
  var d = R.db(), id = Number(p.id);
  var n = d.products.filter(function (x) { return x.category_id === id; }).length;
  if (n) fail(409, 'Esta categoria tem ' + n + ' produto(s). Mova ou exclua os produtos antes.');
  if (d.promotions.some(function (x) { return x.category_id === id; })) fail(409, 'Há promoções ligadas a esta categoria. Edite ou exclua as promoções antes.');
  d.addon_categories.filter(function (l) { return l.category_id === id; }).forEach(function (l) {
    var others = d.addon_categories.filter(function (x) { return x.addon_id === l.addon_id && x.category_id !== id; }).length;
    if (!others) { var a = byId(d.addons, l.addon_id); if (a) a.active = 0; }
  });
  d.addon_categories = d.addon_categories.filter(function (l) { return l.category_id !== id; });
  d.categories = d.categories.filter(function (c) { return c.id !== id; });
  R.saveDB();
  return { ok: true };
});

/* ============================ Adicionais ============================ */
route('GET', '/admin/addons', function () {
  requireUser('products');
  var d = R.db();
  return { data: d.addons.slice().sort(sortBy).map(function (a) {
    return Object.assign({}, a, { active: !!a.active, category_ids: d.addon_categories.filter(function (l) { return l.addon_id === a.id; }).map(function (l) { return l.category_id; }) });
  }) };
});
function saveAddon(b, id) {
  var d = R.db();
  var v = validate(b, { name: 'required|string|minlen:2|max:100', description: 'nullable|string|max:255', price: 'required|money|min:0', active: 'bool', sort_order: 'nullable|int' }, { name: 'o nome', price: 'o preço' });
  var a;
  if (id) a = byId(d.addons, id);
  else { a = { id: R.nextId('addons'), data_source: 'real', created_at: R.now() }; d.addons.push(a); }
  Object.assign(a, { name: v.name, description: v.description || null, price: v.price, active: v.active ? 1 : 0, sort_order: v.sort_order || 0, updated_at: R.now() });
  d.addon_categories = d.addon_categories.filter(function (l) { return l.addon_id !== a.id; });
  var seen = [];
  (b.category_ids || []).forEach(function (c) { c = parseInt(c, 10); if (byId(d.categories, c) && seen.indexOf(c) < 0) { seen.push(c); d.addon_categories.push({ addon_id: a.id, category_id: c }); } });
  R.saveDB();
  return a.id;
}
route('POST', '/admin/addons', function (p, q, b) { requireUser('products'); return { id: saveAddon(b) }; });
route('PUT', '/admin/addons/{id}', function (p, q, b) {
  requireUser('products');
  if (!byId(R.db().addons, p.id)) fail(404, 'Adicional não encontrado.');
  return { id: saveAddon(b, Number(p.id)) };
});
route('DELETE', '/admin/addons/{id}', function (p) {
  requireUser('products');
  var d = R.db(), id = Number(p.id);
  d.addons = d.addons.filter(function (a) { return a.id !== id; });
  d.addon_categories = d.addon_categories.filter(function (l) { return l.addon_id !== id; });
  R.saveDB();
  return { ok: true };
});

/* ============================ Promoções ============================ */
route('GET', '/admin/promotions', function () {
  requireUser('promotions');
  var d = R.db();
  var rows = d.promotions.slice().sort(function (a, b) { return (b.active - a.active) || (b.id - a.id); }).map(function (p) {
    var c = p.category_id ? byId(d.categories, p.category_id) : null;
    return Object.assign({}, p, { value: Number(p.value), min_order: Number(p.min_order), active: !!p.active, show_on_site: !!p.show_on_site, category_name: c ? c.name : null, running: R.promotionInWindow(p) });
  });
  return { data: rows };
});
function savePromotion(b, id) {
  var d = R.db();
  var v = validate(b, { name: 'required|string|minlen:2|max:120', description: 'nullable|string|max:255', type: 'required|in:percent,fixed,free_delivery', value: 'nullable|money|min:0',
    code: 'nullable|string|max:40', min_order: 'nullable|money|min:0', category_id: 'nullable|int', starts_at: 'nullable|datetime', ends_at: 'nullable|datetime',
    usage_limit: 'nullable|int|min:1', show_on_site: 'bool', active: 'bool' }, { name: 'o nome', type: 'o tipo', value: 'o valor' });
  if (v.type === 'percent' && (!(Number(v.value) > 0) || Number(v.value) > 100)) fail(422, 'O percentual deve ser entre 1 e 100.', { value: 'Entre 1 e 100.' });
  if (v.type === 'fixed' && !(Number(v.value) > 0)) fail(422, 'Informe o valor do desconto.', { value: 'Informe o valor.' });
  if (v.category_id && !byId(d.categories, v.category_id)) fail(422, 'Categoria não encontrada.', { category_id: 'Categoria não encontrada.' });
  var code = v.code ? v.code.replace(/[^A-Za-z0-9_-]/g, '').toUpperCase() : null;
  if (code && d.promotions.some(function (p) { return p.code === code && p.id !== id; })) fail(422, 'Já existe uma promoção com este cupom.', { code: 'Cupom repetido.' });
  if (v.starts_at && v.ends_at && v.ends_at < v.starts_at) fail(422, 'A data final precisa ser depois da inicial.', { ends_at: 'Data final antes da inicial.' });
  var p;
  if (id) p = byId(d.promotions, id);
  else { p = { id: R.nextId('promotions'), used_count: 0, data_source: 'real', created_at: R.now() }; d.promotions.push(p); }
  Object.assign(p, { name: v.name, description: v.description || null, type: v.type, value: v.type === 'free_delivery' ? 0 : Number(v.value), code: code, min_order: Number(v.min_order || 0),
    category_id: v.category_id || null, starts_at: v.starts_at, ends_at: v.ends_at, usage_limit: v.usage_limit || null, show_on_site: v.show_on_site ? 1 : 0, active: v.active ? 1 : 0, updated_at: R.now() });
  R.saveDB();
  return p.id;
}
route('POST', '/admin/promotions', function (p, q, b) { requireUser('promotions'); return { id: savePromotion(b) }; });
route('PUT', '/admin/promotions/{id}', function (p, q, b) {
  requireUser('promotions');
  if (!byId(R.db().promotions, p.id)) fail(404, 'Promoção não encontrada.');
  return { id: savePromotion(b, Number(p.id)) };
});
route('DELETE', '/admin/promotions/{id}', function (p) {
  requireUser('promotions');
  var d = R.db(), id = Number(p.id);
  d.promotions = d.promotions.filter(function (x) { return x.id !== id; });
  d.orders.forEach(function (o) { if (o.promotion_id === id) o.promotion_id = null; });
  R.saveDB();
  return { ok: true };
});

/* ============================ Clientes ============================ */
function customerStats(c) {
  var os = R.db().orders.filter(function (o) { return o.customer_id === c.id; });
  var valid = os.filter(function (o) { return o.status !== 'cancelado'; });
  var last = null;
  os.forEach(function (o) { if (!last || o.created_at > last) last = o.created_at; });
  return { orders: os, orders_count: valid.length, total_spent: r2(valid.reduce(function (a, o) { return a + o.total; }, 0)), last_order_at: last };
}
route('GET', '/admin/customers', function (p, q) {
  requireUser('customers');
  var d = R.db(), s = String(q.q || '').trim().toLowerCase(), digits = R.onlyDigits(s);
  var list = d.customers.filter(function (c) { return !s || c.name.toLowerCase().indexOf(s) >= 0 || (digits && c.phone.indexOf(digits) >= 0); }).map(function (c) {
    var st = customerStats(c);
    var addrs = d.addresses.filter(function (a) { return a.customer_id === c.id; }).sort(function (a, b) { return (b.is_default - a.is_default) || (b.id - a.id); });
    return { id: c.id, name: c.name, phone: c.phone, is_demo: !!c.is_demo, created_at: c.created_at, orders_count: st.orders_count, total_spent: st.total_spent, last_order_at: st.last_order_at, neighborhood: addrs[0] ? addrs[0].neighborhood : null, _name: c.name };
  });
  var sort = q.sort || 'recent';
  list.sort(function (a, b) {
    if (sort === 'spent') return b.total_spent - a.total_spent;
    if (sort === 'orders') return b.orders_count - a.orders_count;
    if (sort === 'name') return a.name.localeCompare(b.name, 'pt-BR');
    return String(b.last_order_at || '').localeCompare(String(a.last_order_at || ''));
  });
  var page = Math.max(1, parseInt(q.page || 1, 10)), per = 30;
  return { data: list.slice((page - 1) * per, page * per), total: list.length, page: page, per: per };
});
route('GET', '/admin/customers/{id}', function (p) {
  requireUser('customers');
  var d = R.db(), c = byId(d.customers, p.id);
  if (!c) fail(404, 'Cliente não encontrado.');
  var st = customerStats(c);
  var orders = st.orders.slice().sort(function (a, b) { return b.id - a.id; }).slice(0, 100).map(function (o) { return { id: o.id, number: o.number, status: o.status, order_type: o.order_type, total: o.total, payment_method_name: o.payment_method_name, created_at: o.created_at, status_label: STATUSES[o.status] }; });
  var valid = orders.filter(function (o) { return o.status !== 'cancelado'; });
  var fav = {};
  d.order_items.forEach(function (i) { var o = byId(d.orders, i.order_id); if (o && o.customer_id === c.id && o.status !== 'cancelado') fav[i.product_name] = (fav[i.product_name] || 0) + i.quantity; });
  var favorites = Object.keys(fav).map(function (k) { return { product_name: k, n: fav[k] }; }).sort(function (a, b) { return b.n - a.n; }).slice(0, 5);
  return Object.assign({}, c, { is_demo: !!c.is_demo, addresses: d.addresses.filter(function (a) { return a.customer_id === c.id; }).sort(function (a, b) { return (b.is_default - a.is_default) || (b.id - a.id); }),
    orders: orders, orders_count: valid.length, total_spent: r2(valid.reduce(function (a, o) { return a + o.total; }, 0)),
    avg_ticket: valid.length ? r2(valid.reduce(function (a, o) { return a + o.total; }, 0) / valid.length) : 0, last_order_at: orders[0] ? orders[0].created_at : null, favorites: favorites });
});
route('PUT', '/admin/customers/{id}', function (p, q, b) {
  requireUser('customers');
  var c = byId(R.db().customers, p.id);
  if (!c) fail(404, 'Cliente não encontrado.');
  var v = validate(b, { name: 'required|string|minlen:2|max:120', email: 'nullable|email|max:160', notes: 'nullable|string|max:500' }, { name: 'o nome', email: 'o e-mail' });
  Object.assign(c, { name: v.name, email: v.email, notes: v.notes, updated_at: R.now() });
  R.saveDB();
  return { ok: true };
});

/* ============================ Usuários ============================ */
route('GET', '/admin/users', function () {
  requireUser('users');
  return { data: R.db().users.slice().sort(function (a, b) { return a.name.localeCompare(b.name, 'pt-BR'); }).map(function (u) { return { id: u.id, name: u.name, email: u.email, role: u.role, active: !!u.active, last_login_at: u.last_login_at, created_at: u.created_at }; }), roles: R.ROLES };
});
function saveUser(b, id, me) {
  var d = R.db();
  var v = validate(b, { name: 'required|string|minlen:2|max:120', email: 'required|email|max:160', role: 'required|in:admin,gerente,atendente', active: 'bool', password: 'nullable|string|max:200' },
    { name: 'o nome', email: 'o e-mail', role: 'o perfil' });
  if (d.users.some(function (u) { return u.email === v.email && u.id !== id; })) fail(422, 'Já existe um usuário com este e-mail.', { email: 'E-mail em uso.' });
  if (!id && !v.password) fail(422, 'Defina uma senha para o novo usuário.', { password: 'Informe a senha.' });
  if (v.password) R.validatePassword(v.password);
  var active = !!v.active;
  if (id) {
    var cur = byId(d.users, id);
    if (!cur) fail(404, 'Usuário não encontrado.');
    if (id === me.id && (!active || v.role !== 'admin')) fail(422, 'Você não pode desativar nem rebaixar o seu próprio usuário.');
    if (cur.role === 'admin' && (v.role !== 'admin' || !active) && d.users.filter(function (u) { return u.role === 'admin' && u.active; }).length <= 1) fail(422, 'O sistema precisa de pelo menos um administrador ativo.');
    Object.assign(cur, { name: v.name, email: v.email, role: v.role, active: active ? 1 : 0, updated_at: R.now() });
    R.saveDB();
    return id;
  }
  var nu = { id: R.nextId('users'), name: v.name, email: v.email, password_hash: '', role: v.role, active: active ? 1 : 0, last_login_at: null, created_at: R.now(), updated_at: R.now() };
  d.users.push(nu);
  R.saveDB();
  return nu.id;
}
route('POST', '/admin/users', function (p, q, b) { var me = requireUser('users'); return { id: saveUser(b, null, me) }; });
route('PUT', '/admin/users/{id}', function (p, q, b) { var me = requireUser('users'); return { id: saveUser(b, Number(p.id), me) }; });
route('DELETE', '/admin/users/{id}', function (p) {
  var me = requireUser('users'), d = R.db(), id = Number(p.id);
  if (id === me.id) fail(422, 'Você não pode excluir o seu próprio usuário.');
  var u = byId(d.users, id);
  if (!u) fail(404, 'Usuário não encontrado.');
  if (u.role === 'admin' && d.users.filter(function (x) { return x.role === 'admin' && x.active; }).length <= 1) fail(422, 'O sistema precisa de pelo menos um administrador ativo.');
  d.users = d.users.filter(function (x) { return x.id !== id; });
  R.saveDB();
  return { ok: true };
});
})();

(function () {
'use strict';
var R = window.__RV;
var fail = R.fail, r2 = R.r2, byId = R.byId, validate = R.validate, route = R.route, requireUser = R.requireUser;
var STATUSES = R.ORDER_STATUSES;
var SCHEMA = R.CATALOG.schema;

function financeFilters(q) {
  return {
    payment: q.payment || '', type: (q.type === 'delivery' || q.type === 'pickup') ? q.type : '', status: STATUSES[q.status || ''] ? q.status : '',
    product_id: parseInt(q.product_id || 0, 10) || 0, category_id: parseInt(q.category_id || 0, 10) || 0
  };
}
function sortBy(a, b) { return (a.sort_order - b.sort_order) || String(a.name).localeCompare(String(b.name), 'pt-BR'); }

/* ============================ Dashboard ============================ */
route('GET', '/admin/dashboard', function (p, q) {
  var u = requireUser('dashboard');
  var money = u.permissions.indexOf('finance') >= 0;
  var d = R.db();
  var per = R.periodFromQuery(q);
  var orders = R.ordersInRange(per.from, per.to);
  var sum = R.financeSummary(orders);
  var t = new Date();
  var today = R.financeSummary(R.ordersInRange(R.today(), R.today()));
  var month = R.financeSummary(R.ordersInRange(R.fmtD(new Date(t.getFullYear(), t.getMonth(), 1)), R.today()));
  var pending = d.orders.filter(function (o) { return R.OPEN_STATUSES.indexOf(o.status) >= 0; }).length;
  var done = orders.filter(function (o) { return o.status === 'entregue'; }).length;
  var payments = R.groupSum(orders, function (o) { return o.payment_method_name; }).sort(function (a, b) { return b.revenue - a.revenue; });
  var demoItems = d.products.filter(function (x) { return x.data_source === 'demo' && x.active; }).length + d.addons.filter(function (x) { return x.data_source === 'demo' && x.active; }).length;
  var demoOrders = d.orders.filter(function (o) { return o.is_demo; }).length;

  if (!money) {
    return {
      period: per, restricted: true, today: { orders: today.orders }, month: { orders: month.orders }, summary: { orders: sum.orders, cancelled_count: sum.cancelled_count },
      pending: pending, completed: done, cancelled: sum.cancelled_count,
      daily: R.dailySeries(orders, per.from, per.to).map(function (x) { return { date: x.date, orders: x.orders }; }),
      hourly: R.hourlySeries(orders).map(function (x) { return { hour: x.hour, label: x.label, orders: x.orders }; }),
      top_products: R.productRanking(orders, 8).map(function (x) { return { name: x.name, quantity: x.quantity }; }),
      store_status: R.storeStatus(), notices: {}
    };
  }
  var flags = R.setting('demo_flags_json') || {};
  return {
    period: per, restricted: false, today: { revenue: today.revenue, orders: today.orders }, month: { revenue: month.revenue, orders: month.orders },
    summary: sum, pending: pending, completed: done, cancelled: sum.cancelled_count,
    daily: R.dailySeries(orders, per.from, per.to), hourly: R.hourlySeries(orders), weekday: R.weekdaySeries(orders), top_products: R.productRanking(orders, 8),
    payments: payments, categories: R.categoryRanking(orders), store_status: R.storeStatus(),
    notices: {
      demo_items: demoItems, demo_orders: demoOrders, delivery_fee_demo: !!flags.delivery_fee_default,
      pix_without_key: d.payment_methods.some(function (m) { return m.kind === 'pix' && m.active; }) && !R.setting('pix_key'), hours_note: R.setting('hours_note')
    }
  };
});

/* ============================ Faturamento ============================ */
route('GET', '/admin/finance', function (p, q) {
  requireUser('finance');
  var d = R.db(), per = R.periodFromQuery(q), f = financeFilters(q);
  var orders = R.ordersInRange(per.from, per.to, f);
  var sum = R.financeSummary(orders, f);
  var byPay = R.groupSum(orders, function (o) { return o.payment_method_name; }, f).sort(function (a, b) { return b.revenue - a.revenue; });
  var byType = R.groupSum(orders, function (o) { return o.order_type === 'delivery' ? 'Entrega' : 'Retirada'; }, f);
  var rows = orders.slice().reverse().map(function (o) {
    var a = R.orderAmounts(o, f);
    return { id: o.id, number: o.number, created_at: o.created_at, customer_name: o.customer_name, order_type: o.order_type, status: o.status, status_label: STATUSES[o.status],
      payment_method_name: o.payment_method_name, payment_status: o.payment_status, gross: r2(a.gross), discount: a.discount, fees: a.fees, total: a.total, is_demo: !!o.is_demo };
  });
  var a0 = per.from + ' 00:00:00', b0 = per.to + ' 23:59:59';
  var records = d.records.filter(function (r) { return r.occurred_at >= a0 && r.occurred_at <= b0; }).sort(function (x, y) { return y.occurred_at < x.occurred_at ? -1 : y.occurred_at > x.occurred_at ? 1 : 0; }).slice(0, 300).map(function (r) {
    var u = r.user_id ? byId(d.users, r.user_id) : null;
    return Object.assign({}, r, { user_name: u ? u.name : null, is_demo: !!r.is_demo });
  });
  var manualFees = d.records.filter(function (r) { return r.type === 'taxa' && !r.order_id && r.occurred_at >= a0 && r.occurred_at <= b0; }).reduce(function (a, r) { return a + r.amount; }, 0);
  if (!f.product_id && !f.category_id && !f.payment && !f.type && !f.status) {
    sum.fees = r2(sum.fees + manualFees);
    sum.net = r2(sum.gross - sum.discounts - sum.fees);
  }
  var payNames = [];
  d.orders.forEach(function (o) { if (payNames.indexOf(o.payment_method_name) < 0) payNames.push(o.payment_method_name); });
  payNames.sort();
  return {
    period: per, filters: f, summary: sum, daily: R.dailySeries(orders, per.from, per.to, f), by_payment: byPay, by_type: byType, by_category: R.categoryRanking(orders, f),
    orders: rows.slice(0, 500), orders_total: rows.length, records: records,
    options: { payments: payNames, products: d.products.slice().sort(function (x, y) { return x.name.localeCompare(y.name, 'pt-BR'); }).map(function (x) { return { id: x.id, name: x.name }; }),
      categories: d.categories.slice().sort(sortBy).map(function (x) { return { id: x.id, name: x.name }; }), statuses: STATUSES }
  };
});

route('POST', '/admin/finance/records', function (p, q, b) {
  var u = requireUser('finance');
  var v = validate(b, { type: 'required|in:taxa,ajuste,despesa', description: 'required|string|minlen:3|max:255', amount: 'required|money|min:0.01', occurred_at: 'required|datetime', payment_method_name: 'nullable|string|max:60' },
    { type: 'o tipo', description: 'a descrição', amount: 'o valor', occurred_at: 'a data' });
  var d = R.db();
  var rec = Object.assign({ id: R.nextId('records'), order_id: null, user_id: u.id, is_demo: 0, created_at: R.now() }, v);
  d.records.push(rec);
  R.saveDB();
  return { id: rec.id };
});
route('DELETE', '/admin/finance/records/{id}', function (p) {
  requireUser('finance');
  var d = R.db(), r = byId(d.records, p.id);
  if (!r) fail(404, 'Lançamento não encontrado.');
  if (r.order_id) fail(422, 'Lançamentos de pedidos são automáticos. Altere o pedido em vez disso.');
  d.records = d.records.filter(function (x) { return x.id !== r.id; });
  R.saveDB();
  return { ok: true };
});

/* ============================ Relatórios ============================ */
route('GET', '/admin/reports', function (p, q) {
  requireUser('reports');
  var d = R.db(), per = R.periodFromQuery(q);
  var orders = R.ordersInRange(per.from, per.to);
  var valid = orders.filter(function (o) { return o.status !== 'cancelado'; });
  var nb = R.groupSum(valid.filter(function (o) { return o.order_type === 'delivery'; }), function (o) { return o.neighborhood || 'Não informado'; }).sort(function (a, b) { return b.orders - a.orders; });
  var cust = {}, cOrder = [];
  valid.forEach(function (o) {
    var k = o.customer_phone;
    if (!cust[k]) { cust[k] = { name: o.customer_name, phone: k, orders: 0, revenue: 0 }; cOrder.push(k); }
    cust[k].orders++; cust[k].revenue += Number(o.total);
  });
  var customers = cOrder.map(function (k) { cust[k].revenue = r2(cust[k].revenue); return cust[k]; }).sort(function (a, b) { return b.revenue - a.revenue; }).slice(0, 20);
  var sizes = {}, sOrder = [], flavors = {}, fOrder = [];
  valid.forEach(function (o) { o.items.forEach(function (i) {
    if (i.size_name) { if (!sizes[i.size_name]) { sizes[i.size_name] = { name: i.size_name, quantity: 0, revenue: 0 }; sOrder.push(i.size_name); } sizes[i.size_name].quantity += i.quantity; sizes[i.size_name].revenue += i.line_total; }
    (i.flavors || []).forEach(function (fl) { if (!flavors[fl.name]) { flavors[fl.name] = { name: fl.name, quantity: 0 }; fOrder.push(fl.name); } flavors[fl.name].quantity += i.quantity; });
  }); });
  var a0 = per.from + ' 00:00:00', b0 = per.to + ' 23:59:59';
  var newCustomers = d.customers.filter(function (c) { return c.created_at >= a0 && c.created_at <= b0; }).length;
  return {
    period: per, summary: Object.assign(R.financeSummary(orders), { new_customers: newCustomers }), products: R.productRanking(orders, 0),
    flavors: fOrder.map(function (k) { return flavors[k]; }).sort(function (a, b) { return b.quantity - a.quantity; }), categories: R.categoryRanking(orders),
    sizes: sOrder.map(function (k) { sizes[k].revenue = r2(sizes[k].revenue); return sizes[k]; }), neighborhoods: nb, hourly: R.hourlySeries(orders), weekday: R.weekdaySeries(orders),
    customers: customers, types: R.groupSum(orders, function (o) { return o.order_type === 'delivery' ? 'Entrega' : 'Retirada'; })
  };
});

/* ============================ Exportação (feita no navegador) ============================ */
R.exportData = function (q) {
  requireUser('reports');
  var d = R.db(), per = R.periodFromQuery(q), f = financeFilters(q), dataset = q.dataset || 'pedidos';
  var orders = R.ordersInRange(per.from, per.to, f);
  var stamp = per.from.replace(/-/g, '') + '-' + per.to.replace(/-/g, '');
  var types = { delivery: 'Entrega', pickup: 'Retirada' };
  var fmt = function (s) { var x = R.parseDT(s); return R.pad(x.getDate()) + '/' + R.pad(x.getMonth() + 1) + '/' + x.getFullYear() + ' ' + R.pad(x.getHours()) + ':' + R.pad(x.getMinutes()); };
  var headers, rows, money;
  if (dataset === 'faturamento') {
    var s = R.financeSummary(orders, f);
    headers = ['Indicador', 'Valor'];
    rows = [['Período', per.label], ['Faturamento bruto', s.gross], ['Descontos', s.discounts], ['Taxas', s.fees], ['Cancelamentos', s.cancelled], ['Pedidos cancelados', s.cancelled_count],
      ['Faturamento líquido', s.net], ['Pedidos', s.orders], ['Ticket médio', s.avg_ticket], ['', ''], ['Dia', 'Faturamento']];
    R.dailySeries(orders, per.from, per.to, f).forEach(function (x) { rows.push([x.date.split('-').reverse().join('/'), x.revenue]); });
    money = [1];
  } else if (dataset === 'produtos') {
    headers = ['Produto', 'Categoria', 'Quantidade', 'Faturamento'];
    rows = R.productRanking(orders, 0, f).map(function (r) { return [r.name, r.category, r.quantity, r.revenue]; });
    money = [3];
  } else if (dataset === 'categorias') {
    headers = ['Categoria', 'Quantidade', 'Faturamento'];
    rows = R.categoryRanking(orders, f).map(function (r) { return [r.name, r.quantity, r.revenue]; });
    money = [2];
  } else if (dataset === 'clientes') {
    headers = ['Cliente', 'Telefone', 'Pedidos', 'Total gasto', 'Último pedido'];
    rows = d.customers.map(function (c) {
      var os = d.orders.filter(function (o) { return o.customer_id === c.id; }), valid = os.filter(function (o) { return o.status !== 'cancelado'; }), last = '';
      os.forEach(function (o) { if (o.created_at > last) last = o.created_at; });
      return [c.name, c.phone, valid.length, r2(valid.reduce(function (a, o) { return a + o.total; }, 0)), last ? fmt(last) : ''];
    }).sort(function (a, b) { return b[3] - a[3]; });
    money = [3];
  } else {
    dataset = 'pedidos';
    headers = ['Pedido', 'Data', 'Cliente', 'Telefone', 'Tipo', 'Bairro', 'Status', 'Pagamento', 'Itens', 'Subtotal', 'Entrega', 'Desconto', 'Total'];
    rows = orders.map(function (o) {
      var items = o.items.map(function (i) { return i.quantity + 'x ' + i.product_name + (i.size_name ? ' ' + i.size_name : ''); }).join(' | ');
      return [o.number, fmt(o.created_at), o.customer_name, o.customer_phone, types[o.order_type], o.neighborhood || '', STATUSES[o.status], o.payment_method_name, items,
        Number(o.subtotal), Number(o.delivery_fee), Number(o.discount), Number(o.total)];
    });
    money = [9, 10, 11, 12];
  }
  return { name: 'rivoly-' + dataset + '-' + stamp, sheet: dataset.charAt(0).toUpperCase() + dataset.slice(1), headers: headers, rows: rows, money: money };
};

/* ============================ Configurações ============================ */
route('GET', '/admin/settings', function () {
  requireUser('settings');
  var d = R.db();
  return {
    settings: R.clone(R.settings()),
    payment_methods: d.payment_methods.slice().sort(sortBy).map(function (m) { return Object.assign({}, m, { active: !!m.active, accepts_change: !!m.accepts_change }); }),
    delivery_zones: d.delivery_zones.slice().sort(function (a, b) { return a.neighborhood.localeCompare(b.neighborhood, 'pt-BR'); }).map(function (z) { return Object.assign({}, z, { active: !!z.active }); }),
    reviews: d.reviews.slice().sort(function (a, b) { return b.id - a.id; }).map(function (r) { return Object.assign({}, r, { active: !!r.active }); }),
    gallery: d.gallery.slice().sort(function (a, b) { return a.sort_order - b.sort_order || a.id - b.id; }).map(function (g) { return Object.assign({}, g, { active: !!g.active }); }),
    store_status: R.storeStatus()
  };
});

route('PUT', '/admin/settings', function (p, q, b) {
  requireUser('settings');
  var inn = {}, errors = {}, first = null;
  Object.keys(b).forEach(function (k) {
    if (!SCHEMA[k] || k === 'demo_flags_json' || k === 'sources_json') return;
    var type = SCHEMA[k][0], v = b[k];
    if (type === 'string') {
      v = String(v == null ? '' : v).trim();
      var limit = ['about_text', 'hero_subtitle', 'seo_description', 'hours_note', 'closed_message'].indexOf(k) >= 0 ? 1200 : 255;
      if (v.length > limit) { errors[k] = 'Texto muito longo (máximo ' + limit + ' caracteres).'; return; }
    }
    if (type === 'money') {
      if (v === '' || v === null || v === undefined) v = null;
      else { v = String(v).replace(',', '.'); if (isNaN(Number(v)) || Number(v) < 0) { errors[k] = 'Valor inválido.'; return; } v = r2(v); }
    }
    if (type === 'bool') v = !!v;
    if (type === 'json' && (typeof v !== 'object' || v === null)) { errors[k] = 'Formato inválido.'; return; }
    inn[k] = v;
  });
  if (inn.store_name !== undefined && inn.store_name.length < 2) errors.store_name = 'Informe o nome da loja.';
  if (inn.order_mode !== undefined && ['auto', 'open', 'closed'].indexOf(inn.order_mode) < 0) errors.order_mode = 'Modo inválido.';
  if (inn.pizza_price_rule !== undefined && ['max', 'avg'].indexOf(inn.pizza_price_rule) < 0) errors.pizza_price_rule = 'Regra inválida.';
  ['maps_url', 'logo_url', 'hero_image', 'about_image'].forEach(function (uk) {
    if (inn[uk] && !/^(https:\/\/|\/(?!\/)|assets\/|data:image\/)/i.test(inn[uk])) errors[uk] = 'Use um endereço que comece com https:// ou /.';
  });
  if (inn.instagram_user !== undefined) inn.instagram_user = inn.instagram_user.replace(/^@+/, '').replace(/[^A-Za-z0-9._]/g, '');
  if (inn.latitude && isNaN(Number(inn.latitude))) errors.latitude = 'Latitude inválida.';
  if (inn.longitude && isNaN(Number(inn.longitude))) errors.longitude = 'Longitude inválida.';
  if (inn.whatsapp !== undefined) { inn.whatsapp = R.onlyDigits(inn.whatsapp); if (inn.whatsapp !== '' && inn.whatsapp.length < 12) inn.whatsapp = '55' + inn.whatsapp; }
  if (inn.hours_json) {
    var clean = {};
    for (var dd = 0; dd < 7; dd++) {
      clean[String(dd)] = [];
      var ranges = inn.hours_json[String(dd)] || inn.hours_json[dd] || [];
      ranges.forEach(function (rg) {
        if (!Array.isArray(rg) || rg.length !== 2) return;
        var ok = /^([01]\d|2[0-3]):[0-5]\d$/;
        if (!ok.test(String(rg[0])) || !ok.test(String(rg[1])) || rg[0] === rg[1]) { errors.hours_json = 'Confira os horários (formato HH:MM).'; return; }
        clean[String(dd)].push([rg[0], rg[1]]);
      });
    }
    inn.hours_json = clean;
  }
  [['differentials_json', 6], ['attributes_json', 8]].forEach(function (pair) {
    var k = pair[0];
    if (inn[k]) inn[k] = inn[k].filter(function (x) { return typeof x === 'object' ? String(x.title || '').trim() !== '' : String(x).trim() !== ''; }).slice(0, pair[1]);
  });
  var keys = Object.keys(errors);
  if (keys.length) fail(422, errors[keys[0]], errors);
  var feeConfirmed = !!b.delivery_fee_confirmed;
  if (inn.delivery_fee_default !== undefined && (feeConfirmed || Number(inn.delivery_fee_default) !== Number(R.setting('delivery_fee_default')))) {
    var flags = R.clone(R.setting('demo_flags_json') || {});
    delete flags.delivery_fee_default;
    R.saveSettings({ demo_flags_json: flags });
  }
  R.saveSettings(inn);
  return { settings: R.clone(R.settings()), store_status: R.storeStatus() };
});

/* ---------- Formas de pagamento ---------- */
function savePM(b, id) {
  var d = R.db();
  var v = validate(b, { name: 'required|string|minlen:2|max:60', kind: 'required|in:dinheiro,cartao,pix,outro', instructions: 'nullable|string|max:500', fee_percent: 'nullable|money|min:0',
    accepts_change: 'bool', active: 'bool', sort_order: 'nullable|int' }, { name: 'o nome', kind: 'o tipo', fee_percent: 'a taxa' });
  if (Number(v.fee_percent || 0) > 30) fail(422, 'Taxa acima de 30% parece errada. Confira o valor.', { fee_percent: 'Máximo 30%.' });
  if (v.kind === 'pix' && v.active && !R.setting('pix_key')) fail(422, 'Cadastre a chave PIX em Configurações › Pagamentos antes de ativar o PIX.');
  var m;
  if (id) m = byId(d.payment_methods, id);
  else { m = { id: R.nextId('payment_methods'), data_source: 'real', created_at: R.now() }; d.payment_methods.push(m); }
  Object.assign(m, { name: v.name, kind: v.kind, instructions: v.instructions || null, fee_percent: Number(v.fee_percent || 0), accepts_change: v.accepts_change ? 1 : 0, active: v.active ? 1 : 0, sort_order: v.sort_order || 0, updated_at: R.now() });
  R.saveDB();
  return m.id;
}
route('POST', '/admin/payment-methods', function (p, q, b) { requireUser('settings'); return { id: savePM(b) }; });
route('PUT', '/admin/payment-methods/{id}', function (p, q, b) {
  requireUser('settings');
  if (!byId(R.db().payment_methods, p.id)) fail(404, 'Forma de pagamento não encontrada.');
  return { id: savePM(b, Number(p.id)) };
});
route('DELETE', '/admin/payment-methods/{id}', function (p) {
  requireUser('settings');
  var d = R.db(), id = Number(p.id);
  if (d.orders.some(function (o) { return o.payment_method_id === id; })) {
    byId(d.payment_methods, id).active = 0; R.saveDB();
    return { ok: true, message: 'Esta forma já foi usada em pedidos, então foi desativada em vez de excluída.' };
  }
  d.payment_methods = d.payment_methods.filter(function (m) { return m.id !== id; });
  R.saveDB();
  return { ok: true };
});

/* ---------- Bairros ---------- */
function saveZone(b, id) {
  var d = R.db();
  var v = validate(b, { neighborhood: 'required|string|minlen:2|max:100', fee: 'required|money|min:0', active: 'bool' }, { neighborhood: 'o bairro', fee: 'a taxa' });
  if (d.delivery_zones.some(function (z) { return z.id !== id && R.slugify(z.neighborhood) === R.slugify(v.neighborhood); })) fail(422, 'Este bairro já está cadastrado.', { neighborhood: 'Bairro repetido.' });
  var z;
  if (id) z = byId(d.delivery_zones, id);
  else { z = { id: R.nextId('delivery_zones'), created_at: R.now() }; d.delivery_zones.push(z); }
  Object.assign(z, { neighborhood: v.neighborhood, fee: v.fee, active: v.active ? 1 : 0, updated_at: R.now() });
  R.saveDB();
  return z.id;
}
route('POST', '/admin/delivery-zones', function (p, q, b) { requireUser('settings'); return { id: saveZone(b) }; });
route('PUT', '/admin/delivery-zones/{id}', function (p, q, b) { requireUser('settings'); return { id: saveZone(b, Number(p.id)) }; });
route('DELETE', '/admin/delivery-zones/{id}', function (p) { requireUser('settings'); var d = R.db(); d.delivery_zones = d.delivery_zones.filter(function (z) { return z.id !== Number(p.id); }); R.saveDB(); return { ok: true }; });

/* ---------- Avaliações ---------- */
function saveReview(b, id) {
  var d = R.db();
  var v = validate(b, { author: 'required|string|minlen:2|max:120', rating: 'required|int', comment: 'nullable|string|max:600', source: 'required|in:google,instagram,site,ifood,outro', review_date: 'nullable|date', active: 'bool' }, { author: 'o autor', rating: 'a nota' });
  if (v.rating < 1 || v.rating > 5) fail(422, 'A nota vai de 1 a 5.', { rating: 'De 1 a 5.' });
  var r;
  if (id) r = byId(d.reviews, id);
  else { r = { id: R.nextId('reviews'), created_at: R.now() }; d.reviews.push(r); }
  Object.assign(r, { author: v.author, rating: v.rating, comment: v.comment, source: v.source, review_date: v.review_date, active: v.active ? 1 : 0, updated_at: R.now() });
  R.saveDB();
  return r.id;
}
route('POST', '/admin/reviews', function (p, q, b) { requireUser('settings'); return { id: saveReview(b) }; });
route('PUT', '/admin/reviews/{id}', function (p, q, b) { requireUser('settings'); return { id: saveReview(b, Number(p.id)) }; });
route('DELETE', '/admin/reviews/{id}', function (p) { requireUser('settings'); var d = R.db(); d.reviews = d.reviews.filter(function (r) { return r.id !== Number(p.id); }); R.saveDB(); return { ok: true }; });

/* ---------- Galeria ---------- */
function saveGallery(b, id) {
  var d = R.db();
  var v = validate(b, { image_url: 'required|string', caption: 'nullable|string|max:300', link_url: 'nullable|string|max:255', sort_order: 'nullable|int', active: 'bool' }, { image_url: 'a imagem' });
  if (!/^(\/uploads\/|\/assets\/|https:\/\/|data:image\/)/.test(v.image_url)) fail(422, 'Endereço de imagem inválido.');
  if (v.link_url && !/^https:\/\//i.test(v.link_url)) fail(422, 'O link precisa começar com https://', { link_url: 'Use https://' });
  var g;
  if (id) g = byId(d.gallery, id);
  else { g = { id: R.nextId('gallery'), created_at: R.now() }; d.gallery.push(g); }
  Object.assign(g, { image_url: v.image_url, caption: v.caption, link_url: v.link_url, sort_order: v.sort_order || 0, active: v.active ? 1 : 0 });
  R.saveDB();
  return g.id;
}
route('POST', '/admin/gallery', function (p, q, b) { requireUser('settings'); return { id: saveGallery(b) }; });
route('PUT', '/admin/gallery/{id}', function (p, q, b) { requireUser('settings'); return { id: saveGallery(b, Number(p.id)) }; });
route('DELETE', '/admin/gallery/{id}', function (p) { requireUser('settings'); var d = R.db(); d.gallery = d.gallery.filter(function (g) { return g.id !== Number(p.id); }); R.saveDB(); return { ok: true }; });

/* ---------- Dados de demonstração ---------- */
route('GET', '/admin/demo', function () {
  requireUser('settings');
  var d = R.db(), flags = R.setting('demo_flags_json') || {};
  var cat = {};
  d.categories.forEach(function (c) { cat[c.id] = c.name; });
  return {
    products: d.products.filter(function (p) { return p.data_source === 'demo'; }).map(function (p) { return { id: p.id, name: p.name, active: !!p.active, category_name: cat[p.category_id], source_note: p.source_note }; }),
    addons: d.addons.filter(function (a) { return a.data_source === 'demo'; }).map(function (a) { return { id: a.id, name: a.name, active: !!a.active, price: a.price }; }),
    payment_methods: d.payment_methods.filter(function (m) { return m.data_source === 'demo'; }).map(function (m) { return { id: m.id, name: m.name, active: !!m.active }; }),
    promotions: d.promotions.filter(function (m) { return m.data_source === 'demo'; }).map(function (m) { return { id: m.id, name: m.name, active: !!m.active }; }),
    orders: d.orders.filter(function (o) { return o.is_demo; }).length, customers: d.customers.filter(function (c) { return c.is_demo; }).length,
    delivery_fee_demo: !!flags.delivery_fee_default, sources: R.setting('sources_json') || [],
    unpriced: d.products.filter(function (p) { return !p.active && (p.price === null || p.price === undefined) && !d.product_sizes.some(function (s) { return s.product_id === p.id; }); }).map(function (p) { return { id: p.id, name: p.name, source_note: p.source_note }; })
  };
});
route('POST', '/admin/demo/clear-orders', function () {
  requireUser('settings');
  var d = R.db(), ids = {};
  d.orders.forEach(function (o) { if (o.is_demo) ids[o.id] = 1; });
  d.orders = d.orders.filter(function (o) { return !ids[o.id]; });
  ['order_items', 'payments', 'history'].forEach(function (k) { d[k] = d[k].filter(function (r) { return !ids[r.order_id]; }); });
  d.records = d.records.filter(function (r) { return !r.is_demo; });
  d.customers = d.customers.filter(function (c) { return !c.is_demo || d.orders.some(function (o) { return o.customer_id === c.id; }); });
  d.addresses = d.addresses.filter(function (a) { return d.customers.some(function (c) { return c.id === a.customer_id; }); });
  R.saveDB();
  return { ok: true };
});
route('POST', '/admin/demo/deactivate-items', function () {
  requireUser('settings');
  var d = R.db();
  ['products', 'addons', 'promotions'].forEach(function (k) { d[k].forEach(function (x) { if (x.data_source === 'demo') x.active = 0; }); });
  R.saveDB();
  return { ok: true };
});
})();

(function () {
'use strict';
var R = window.__RV;
var realFetch = R.realFetch;

/* ---------- history.replaceState não pode falhar em file:// ---------- */
try {
  var rs = history.replaceState.bind(history);
  history.replaceState = function () { try { rs.apply(null, arguments); } catch (e) { /* file:// */ } };
} catch (e) { /* */ }

/* ---------- fetch simulado ---------- */
function sleep(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }
function json(data, status) {
  return new Response(JSON.stringify(data), { status: status || 200, headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
function abortError() { try { return new DOMException('Aborted', 'AbortError'); } catch (e) { var x = new Error('Aborted'); x.name = 'AbortError'; return x; } }

window.fetch = function (input, init) {
  var url = typeof input === 'string' ? input : (input && input.url) || String(input);
  if (url.indexOf('/api/') !== 0) return realFetch(input, init);
  init = init || {};
  var method = (init.method || 'GET').toUpperCase();
  var qi = url.indexOf('?');
  var path = (qi >= 0 ? url.slice(4, qi) : url.slice(4)).replace(/\/+$/, '') || '/';
  var query = {};
  if (qi >= 0) new URLSearchParams(url.slice(qi + 1)).forEach(function (v, k) { query[k] = v; });
  var body = {}, form = null;
  if (typeof init.body === 'string' && init.body) { try { body = JSON.parse(init.body); } catch (e) { body = {}; } }
  else if (init.body && typeof init.body.get === 'function') form = init.body;

  var signal = init.signal;
  return sleep(path === '/public/quote' ? 40 : 60 + Math.floor(Math.random() * 70)).then(function () {
    if (signal && signal.aborted) throw abortError();
    R.tick();
    var found = null, params = null, pathMatched = false;
    R.ROUTES.forEach(function (rt) {
      if (found) return;
      var m = rt.re.exec(path);
      if (!m) return;
      pathMatched = true;
      if (rt.method !== method) return;
      params = {};
      rt.names.forEach(function (n, i) { params[n] = decodeURIComponent(m[i + 1]); });
      found = rt;
    });
    if (!found) throw new R.HttpError(pathMatched ? 405 : 404, pathMatched ? 'Método não permitido.' : 'Rota não encontrada.');
    return found.handler(params, query, body, form);
  }).then(function (data) {
    if (signal && signal.aborted) throw abortError();
    return json(data === undefined ? { ok: true } : data);
  }, function (err) {
    if (err && err.name === 'AbortError') throw err;
    if (err instanceof R.HttpError) return json({ error: err.message, fields: err.fields || null }, err.status);
    if (window.console) console.error('[demo api]', err);
    return json({ error: 'Erro interno na demonstração: ' + (err && err.message), fields: null }, 500);
  });
};

/* ---------- Exportação em CSV / Excel (gerada no navegador) ---------- */
function download(blob, name) {
  var a = document.createElement('a');
  a.href = URL.createObjectURL(blob); a.download = name;
  document.body.appendChild(a); a.click();
  setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 1500);
}
function csvCell(v, isMoney) {
  if (typeof v === 'number') v = (isMoney || v % 1 !== 0) ? v.toFixed(2).replace('.', ',') : String(v);
  else {
    v = String(v == null ? '' : v);
    if (v !== '' && '=+-@\t\r'.indexOf(v.charAt(0)) >= 0) v = "'" + v;
  }
  return /[;"\n\r\t ]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
}
function buildCSV(x) {
  var money = x.money || [];
  var lines = [x.headers.map(function (h) { return csvCell(h); }).join(';')];
  x.rows.forEach(function (r) {
    lines.push(r.map(function (v, i) { return csvCell(v, money.indexOf(i) >= 0 && !/^Pedidos/.test(String(r[0]))); }).join(';'));
  });
  return new Blob(['﻿' + lines.join('\r\n') + '\r\n'], { type: 'text/csv;charset=utf-8' });
}

var CRC = (function () { var t = [], c, n, k; for (n = 0; n < 256; n++) { c = n; for (k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
function crc32(u8) { var c = 0xFFFFFFFF; for (var i = 0; i < u8.length; i++) c = CRC[(c ^ u8[i]) & 0xFF] ^ (c >>> 8); return (c ^ 0xFFFFFFFF) >>> 0; }
function zipStore(files) {
  var enc = new TextEncoder(), chunks = [], central = [], offset = 0;
  files.forEach(function (f) {
    var name = enc.encode(f.name), data = enc.encode(f.data), crc = crc32(data);
    var h = new DataView(new ArrayBuffer(30));
    h.setUint32(0, 0x04034b50, true); h.setUint16(4, 20, true); h.setUint16(6, 0x0800, true); h.setUint16(8, 0, true);
    h.setUint16(10, 0, true); h.setUint16(12, 0x21, true); h.setUint32(14, crc, true); h.setUint32(18, data.length, true); h.setUint32(22, data.length, true);
    h.setUint16(26, name.length, true); h.setUint16(28, 0, true);
    chunks.push(new Uint8Array(h.buffer), name, data);
    var c = new DataView(new ArrayBuffer(46));
    c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true); c.setUint16(10, 0, true);
    c.setUint16(12, 0, true); c.setUint16(14, 0x21, true); c.setUint32(16, crc, true); c.setUint32(20, data.length, true); c.setUint32(24, data.length, true);
    c.setUint16(28, name.length, true); c.setUint32(42, offset, true);
    central.push(new Uint8Array(c.buffer), name);
    offset += 30 + name.length + data.length;
  });
  var csize = 0;
  central.forEach(function (p) { csize += p.length; });
  var e = new DataView(new ArrayBuffer(22));
  e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, csize, true); e.setUint32(16, offset, true);
  return new Blob(chunks.concat(central, [new Uint8Array(e.buffer)]), { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
}
function xesc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); }
function xcol(i) { var s = ''; i++; while (i > 0) { var m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - m) / 26); } return s; }
function buildXLSX(x) {
  var sheet = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols>';
  x.headers.forEach(function (h, i) { sheet += '<col min="' + (i + 1) + '" max="' + (i + 1) + '" width="' + Math.max(12, Math.min(45, h.length + 6)) + '" customWidth="1"/>'; });
  sheet += '</cols><sheetData>';
  [x.headers].concat(x.rows).forEach(function (r, ri) {
    sheet += '<row r="' + (ri + 1) + '">';
    r.forEach(function (v, ci) {
      var ref = xcol(ci) + (ri + 1);
      if (ri === 0) sheet += '<c r="' + ref + '" t="inlineStr" s="1"><is><t>' + xesc(v) + '</t></is></c>';
      else if (typeof v === 'number') sheet += '<c r="' + ref + '"' + ((x.money || []).indexOf(ci) >= 0 && !/^Pedidos/.test(String(r[0])) ? ' s="2"' : '') + '><v>' + v + '</v></c>';
      else sheet += '<c r="' + ref + '" t="inlineStr"><is><t xml:space="preserve">' + xesc(v) + '</t></is></c>';
    });
    sheet += '</row>';
  });
  sheet += '</sheetData></worksheet>';
  var styles = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><numFmts count="1"><numFmt numFmtId="164" formatCode="&quot;R$&quot; #,##0.00"/></numFmts><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="1" fillId="0" borderId="0" xfId="0" applyFont="1"/><xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/></cellXfs></styleSheet>';
  var R_ = 'http://schemas.openxmlformats.org/officeDocument/2006/relationships';
  return zipStore([
    { name: '[Content_Types].xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>' },
    { name: '_rels/.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="' + R_ + '/officeDocument" Target="xl/workbook.xml"/></Relationships>' },
    { name: 'xl/workbook.xml', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="' + R_ + '"><sheets><sheet name="' + xesc(x.sheet.slice(0, 31)) + '" sheetId="1" r:id="rId1"/></sheets></workbook>' },
    { name: 'xl/_rels/workbook.xml.rels', data: '<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="' + R_ + '/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="' + R_ + '/styles" Target="styles.xml"/></Relationships>' },
    { name: 'xl/worksheets/sheet1.xml', data: sheet },
    { name: 'xl/styles.xml', data: styles }
  ]);
}

document.addEventListener('click', function (e) {
  var a = e.target.closest && e.target.closest('a[href^="/api/admin/export"]');
  if (!a) return;
  e.preventDefault();
  try {
    var q = {};
    new URLSearchParams(a.getAttribute('href').split('?')[1] || '').forEach(function (v, k) { q[k] = v; });
    var x = R.exportData(q);
    if (q.format === 'xlsx') download(buildXLSX(x), x.name + '.xlsx'); else download(buildCSV(x), x.name + '.csv');
  } catch (err) { if (window.console) console.error(err); alert('Não foi possível gerar a planilha: ' + (err && err.message)); }
}, true);

/* ---------- Elementos da demonstração (login rápido e reinício) ---------- */
var css = document.createElement('style');
css.textContent =
  '.demo-hint{background:#fff8e6;border:1px solid #f0d9a0;color:#5f4300;border-radius:10px;padding:10px 12px;font-size:13.5px;line-height:1.4;margin-bottom:4px}' +
  '.demo-hint b{display:block;margin-bottom:6px}.demo-hint .row{display:flex;flex-wrap:wrap;gap:6px}' +
  '.demo-hint button{border:1px solid #d9b45a;background:#fff;border-radius:8px;padding:5px 9px;font:600 13px system-ui,sans-serif;color:#5f4300;cursor:pointer}' +
  '.demo-hint button:hover{background:#fff1cc}' +
  '.demo-reset{position:fixed;left:50%;transform:translateX(-50%);bottom:10px;z-index:9999;border:0;border-radius:999px;padding:6px 12px;font:600 12px system-ui,sans-serif;background:rgba(20,20,20,.62);color:#fff;cursor:pointer;opacity:.55;transition:opacity .15s}' +
  '.demo-reset:hover,.demo-reset:focus-visible{opacity:1}@media(max-width:760px){.demo-reset{display:none}}';
document.head.appendChild(css);

function addResetButton() {
  var b = document.createElement('button');
  b.type = 'button'; b.className = 'demo-reset'; b.textContent = 'Demonstração · reiniciar dados';
  var t = null;
  b.addEventListener('click', function () {
    if (!t) {
      b.textContent = 'Clique de novo para apagar as alterações';
      t = setTimeout(function () { t = null; b.textContent = 'Demonstração · reiniciar dados'; }, 4000);
      return;
    }
    try { Object.keys(localStorage).forEach(function (k) { if (k.indexOf('rv_') === 0) localStorage.removeItem(k); }); } catch (e) { /* */ }
    R.resetDB();
    location.reload();
  });
  document.body.appendChild(b);
}

function enhanceLogin() {
  var f = document.getElementById('login-form');
  if (!f || f.querySelector('.demo-hint')) return;
  var box = document.createElement('div');
  box.className = 'demo-hint';
  box.innerHTML = '<b>Demonstração: entre com um perfil</b><div class="row">' +
    '<button type="button" data-u="admin@rivoly.test">Administrador</button><button type="button" data-u="gerente@rivoly.test">Gerente</button><button type="button" data-u="atendente@rivoly.test">Atendente</button></div>' +
    '<div style="margin-top:6px;font-size:12.5px">O atendente não vê valores financeiros.</div>';
  f.insertBefore(box, f.firstChild);
  var email = f.elements.email, pass = f.elements.password;
  if (!email.value) email.value = 'admin@rivoly.test';
  pass.value = 'demo1234';
  box.addEventListener('click', function (ev) {
    var btn = ev.target.closest('button[data-u]');
    if (!btn) return;
    email.value = btn.dataset.u; pass.value = 'demo1234';
    f.requestSubmit ? f.requestSubmit() : f.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
  });
}

function start() {
  addResetButton();
  new MutationObserver(enhanceLogin).observe(document.body, { childList: true, subtree: true });
  enhanceLogin();
}
if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();

(function () {
"use strict";
var __defs = {}, __cache = {};
function __req(id) { if (__cache[id]) return __cache[id].exports; var m = { exports: {} }; __cache[id] = m; __defs[id](m.exports, __req); return m.exports; }
__defs["common"] = function (exports, __req) {
/* Utilitários compartilhados entre o site, o acompanhamento e o painel. */

const API = '/api';

async function api(path, { method = 'GET', body, form, signal } = {}) {
  const headers = { 'X-Requested-With': 'rivoly' };
  let payload;
  if (form) payload = form;
  else if (body !== undefined) { headers['Content-Type'] = 'application/json'; payload = JSON.stringify(body); }
  let res;
  try {
    res = await fetch(API + path, { method, headers, body: payload, credentials: 'same-origin', signal });
  } catch (e) {
    if (e.name === 'AbortError') throw e;
    const err = new Error('Sem conexão. Confira a internet e tente de novo.');
    err.status = 0;
    throw err;
  }
  const type = res.headers.get('Content-Type') || '';
  const data = type.includes('application/json') ? await res.json().catch(() => ({})) : null;
  if (!res.ok) {
    const err = new Error((data && data.error) || 'Algo deu errado. Tente novamente.');
    err.status = res.status;
    err.fields = data && data.fields;
    throw err;
  }
  return data;
}

const brl = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const money = (v) => brl.format(Number(v) || 0);
/** Preço com "R$" menor que o número (fica mais limpo que o símbolo no mesmo peso). */
const priceHTML = (v) => `<span class="price"><small>R$</small>${money(v)}</span>`;
const moneyText = (v) => 'R$ ' + money(v);

function esc(s) {
  return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

function toast(msg, type = 'ok', ms = 3200) {
  let box = $('.toasts');
  if (!box) { box = document.createElement('div'); box.className = 'toasts'; box.setAttribute('role', 'status'); box.setAttribute('aria-live', 'polite'); document.body.append(box); }
  const t = document.createElement('div');
  t.className = 'toast ' + type;
  t.textContent = msg;
  box.append(t);
  setTimeout(() => t.remove(), ms);
}

const store = {
  get(k, def = null) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch { return def; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* navegação privada */ } },
  del(k) { try { localStorage.removeItem(k); } catch { /* */ } },
};

function maskPhone(v) {
  const d = String(v).replace(/\D/g, '').slice(0, 11);
  if (d.length <= 2) return d ? '(' + d : '';
  if (d.length <= 6) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}
function maskCep(v) {
  const d = String(v).replace(/\D/g, '').slice(0, 8);
  return d.length > 5 ? d.slice(0, 5) + '-' + d.slice(5) : d;
}
const fmtPhone = (d) => maskPhone(d || '');

function fmtDate(s, withTime = true) {
  if (!s) return '';
  const d = new Date(s.replace(' ', 'T'));
  const date = d.toLocaleDateString('pt-BR');
  return withTime ? `${date} ${d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}` : date;
}
function fmtTime(s) {
  if (!s) return '';
  return new Date(s.replace(' ', 'T')).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

const WEEKDAYS = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
const WEEKDAYS_SHORT = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];

function statusText(status) {
  if (!status) return '';
  if (status.open) return status.closes_at ? `Aberto agora · até ${status.closes_at}` : 'Aberto agora';
  const n = status.next_open;
  if (!n) return 'Fechado no momento';
  if (n.days_ahead === 0) return `Fechado · abre hoje às ${n.time}`;
  if (n.days_ahead === 1) return `Fechado · abre amanhã às ${n.time}`;
  return `Fechado · abre ${WEEKDAYS[n.weekday].toLowerCase()} às ${n.time}`;
}

/** Resume o horário em faixas: "Qua e qui · 17:30 às 22:00". */
function hoursSummary(hours) {
  const rows = [];
  for (let i = 0; i < 7; i++) {
    const d = (i + 1) % 7; // começa na segunda
    const r = (hours?.[d] || []).map((x) => `${x[0]} às ${x[1]}`).join(', ');
    const last = rows[rows.length - 1];
    if (last && last.text === r) last.days.push(d); else rows.push({ days: [d], text: r });
  }
  return rows.filter((r) => r.text).map((r) => {
    const a = WEEKDAYS_SHORT[r.days[0]], b = WEEKDAYS_SHORT[r.days[r.days.length - 1]];
    const label = r.days.length === 1 ? a : r.days.length === 2 ? `${a} e ${b}` : `${a} a ${b}`;
    return { label: label.charAt(0).toUpperCase() + label.slice(1), text: r.text };
  });
}

function waLink(number, text) {
  const n = String(number || '').replace(/\D/g, '');
  return `https://wa.me/${n}${text ? '?text=' + encodeURIComponent(text) : ''}`;
}

/* Ícones de linha (traço 1.8, cantos arredondados) */
const P = (d, extra = '') => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const ICONS = {
  cart: P('<path d="M3 4h2l2.2 10.2a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.5L20.5 8H6.2"/><circle cx="10" cy="20" r="1.3"/><circle cx="17" cy="20" r="1.3"/>'),
  plus: P('<path d="M12 5v14M5 12h14"/>'),
  minus: P('<path d="M5 12h14"/>'),
  close: P('<path d="M6 6l12 12M18 6 6 18"/>'),
  back: P('<path d="M15 5l-7 7 7 7"/>'),
  menu: P('<path d="M4 7h16M4 12h16M4 17h16"/>'),
  search: P('<circle cx="11" cy="11" r="6.5"/><path d="m20 20-4.2-4.2"/>'),
  pin: P('<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  clock: P('<circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/>'),
  phone: P('<path d="M5 4h3l1.6 4-2 1.3a11 11 0 0 0 7.1 7.1L16 14.4l4 1.6v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z"/>'),
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="M12 2.2a9.7 9.7 0 0 0-8.3 14.8L2.4 21.6l4.7-1.2A9.7 9.7 0 1 0 12 2.2zm0 17.7a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 19.9zm4.4-6c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.8.9c-.1.2-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3 2.8 2.8 0 0 0-.9 2.1 4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.7 2.2.7 3 .6a2.6 2.6 0 0 0 1.7-1.2 2.1 2.1 0 0 0 .2-1.2c-.1-.2-.3-.2-.5-.3z"/></svg>',
  instagram: P('<rect x="3.5" y="3.5" width="17" height="17" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r=".6" fill="currentColor"/>'),
  star: '<svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor"><path d="m12 3.2 2.6 5.5 6 .7-4.4 4.1 1.1 5.9L12 16.5l-5.3 2.9 1.1-5.9-4.4-4.1 6-.7z"/></svg>',
  route: P('<circle cx="6" cy="18" r="2.2"/><circle cx="18" cy="6" r="2.2"/><path d="M8.2 18H15a3 3 0 0 0 0-6H9a3 3 0 0 1 0-6h6.8"/>'),
  bike: P('<circle cx="6" cy="17" r="3"/><circle cx="18" cy="17" r="3"/><path d="M6 17l3.5-7H14l4 7M9.5 10 8 7H5.5M14 10l-1.2-3H16"/>'),
  store: P('<path d="M4 10v9h16v-9"/><path d="M3 10 5 4h14l2 6a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z"/><path d="M10 19v-4h4v4"/>'),
  slices: P('<path d="M12 3a9 9 0 0 1 9 9H12z"/><path d="M21 12a9 9 0 1 1-9-9"/><circle cx="8" cy="15" r="1"/><circle cx="12.5" cy="17" r="1"/><circle cx="7.5" cy="10.5" r="1"/>'),
  chef: P('<path d="M7 14.5V20h10v-5.5"/><path d="M7 14.5A4 4 0 0 1 6.2 6.8 4.5 4.5 0 0 1 12 4a4.5 4.5 0 0 1 5.8 2.8A4 4 0 0 1 17 14.5z"/><path d="M7 17h10"/>'),
  table: P('<path d="M4 9h16M6 9v10M18 9v10M8 5h8"/><path d="M9 13h6"/>'),
  check: P('<path d="m5 12.5 4.2 4.2L19 7"/>'),
  copy: P('<rect x="8.5" y="8.5" width="11" height="11" rx="2"/><path d="M15.5 8.5V6a1.5 1.5 0 0 0-1.5-1.5H6A1.5 1.5 0 0 0 4.5 6v8A1.5 1.5 0 0 0 6 15.5h2.5"/>'),
  bag: P('<path d="M5 8h14l-1 12H6z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>'),
  heart: P('<path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.2a4.3 4.3 0 0 1 7.5 2.6C19.5 15.4 12 20 12 20z"/>'),
};

/** Ilustração de pizza (placeholder de produto sem foto). */
function pizzaSVG(seed = 1) {
  const tops = [];
  let s = seed * 9301 + 49297;
  const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let i = 0; i < 9; i++) {
    const a = rnd() * Math.PI * 2, r = 12 + rnd() * 24;
    tops.push(`<circle cx="${(50 + Math.cos(a) * r).toFixed(1)}" cy="${(50 + Math.sin(a) * r).toFixed(1)}" r="${(3.2 + rnd() * 2).toFixed(1)}" fill="#c8391f"/>`);
  }
  for (let i = 0; i < 6; i++) {
    const a = rnd() * Math.PI * 2, r = 8 + rnd() * 28;
    tops.push(`<ellipse cx="${(50 + Math.cos(a) * r).toFixed(1)}" cy="${(50 + Math.sin(a) * r).toFixed(1)}" rx="2.6" ry="1.4" fill="#1f7a3d" transform="rotate(${Math.round(rnd() * 180)} ${(50 + Math.cos(a) * r).toFixed(1)} ${(50 + Math.sin(a) * r).toFixed(1)})"/>`);
  }
  return `<svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="46" fill="#d99a4e"/><circle cx="50" cy="50" r="40" fill="#f3c969"/><circle cx="50" cy="50" r="40" fill="url(#g${seed})" opacity=".35"/><defs><radialGradient id="g${seed}"><stop offset="0" stop-color="#fff5d6"/><stop offset="1" stop-color="#e3a646"/></radialGradient></defs>${tops.join('')}<path d="M50 50 L50 4 M50 50 L89.8 73 M50 50 L10.2 73" stroke="#d99a4e" stroke-width="1.2" opacity=".6"/></svg>`;
}

exports.api = api;
exports.esc = esc;
exports.toast = toast;
exports.maskPhone = maskPhone;
exports.maskCep = maskCep;
exports.fmtDate = fmtDate;
exports.fmtTime = fmtTime;
exports.statusText = statusText;
exports.hoursSummary = hoursSummary;
exports.waLink = waLink;
exports.pizzaSVG = pizzaSVG;
exports.API = API;
exports.money = money;
exports.priceHTML = priceHTML;
exports.moneyText = moneyText;
exports.$ = $;
exports.$$ = $$;
exports.store = store;
exports.fmtPhone = fmtPhone;
exports.WEEKDAYS = WEEKDAYS;
exports.WEEKDAYS_SHORT = WEEKDAYS_SHORT;
exports.ICONS = ICONS;

};
__defs["admin/ui"] = function (exports, __req) {
/* Componentes do painel: diálogos, formulários, filtros de período. */
const { esc, $, $$, ICONS, money } = __req("common");

const I = {
  ...ICONS,
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="3.5" width="7" height="8" rx="1.5"/><rect x="13.5" y="3.5" width="7" height="5" rx="1.5"/><rect x="13.5" y="11.5" width="7" height="9" rx="1.5"/><rect x="3.5" y="14.5" width="7" height="6" rx="1.5"/></svg>',
  orders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3.5h12v17l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6"/></svg>',
  pizza: ICONS.slices,
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 7a2 2 0 0 1 2-2h4l2 2h7a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2z"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8.5" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 5a3.5 3.5 0 0 1 0 7M21.5 20a6.5 6.5 0 0 0-4-6"/></svg>',
  money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="6" width="19" height="12" rx="2"/><circle cx="12" cy="12" r="2.8"/><path d="M6 9.5v5M18 9.5v5"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20V4M4 20h16"/><path d="M8 16v-4M12 16V8M16 16v-6M20 16v-9"/></svg>',
  tag: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 12.5v-8h8l9 9-8 8z"/><circle cx="8" cy="8" r="1.5"/></svg>',
  gear: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 4.5 6v5.5c0 4.6 3.2 8 7.5 9.5 4.3-1.5 7.5-4.9 7.5-9.5V6z"/></svg>',
  logout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 20H5a1.5 1.5 0 0 1-1.5-1.5v-13A1.5 1.5 0 0 1 5 4h4.5"/><path d="M16 16.5 20.5 12 16 7.5M20.5 12H9.5"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16z"/><path d="M13.5 6.5l4 4"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7h15M10 11v6M14 11v6M6 7l1 12.5A1.5 1.5 0 0 0 8.5 21h7a1.5 1.5 0 0 0 1.5-1.5L18 7M9 7V4.5h6V7"/></svg>',
  up: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 15 6-6 6 6"/></svg>',
  down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 8V3.5h10V8"/><rect x="3.5" y="8" width="17" height="8.5" rx="2"/><path d="M7 14h10v6.5H7z"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4v11M7 10.5l5 5 5-5M4.5 20h15"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4 2.8 19.5h18.4z"/><path d="M12 10v4.5M12 17.2v.1"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8v.1"/></svg>',
  star2: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="m12 3.5 2.5 5.3 5.8.7-4.3 4 1.1 5.7L12 16.4l-5.1 2.8 1.1-5.7-4.3-4 5.8-.7z"/></svg>',
  external: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4.5 20.5a7.5 7.5 0 0 1 15 0"/></svg>',
};

const R$ = (v) => `<small>R$</small>${money(v)}`;
const brl = (v) => 'R$ ' + money(v);

/** Abre um diálogo modal. Retorna o elemento <dialog>. */
function openDialog(html, { cls = 'modal', onClose } = {}) {
  const d = document.createElement('dialog');
  d.className = cls;
  d.innerHTML = html;
  document.body.append(d);
  d.addEventListener('close', () => { onClose?.(); d.remove(); });
  d.addEventListener('click', (e) => { if (e.target === d || e.target.closest('[data-dlg-close]')) d.close(); });
  d.showModal();
  return d;
}

function dlgHead(title) {
  return `<div class="dlg-head"><h2>${esc(title)}</h2><button class="icon-btn" type="button" data-dlg-close aria-label="Fechar">${I.close}</button></div>`;
}

function confirmDialog(message, { title = 'Confirmar', ok = 'Confirmar', danger = false, input = null } = {}) {
  return new Promise((resolve) => {
    let result = null;
    const d = openDialog(`${dlgHead(title)}
      <form method="dialog" class="dlg-body"><p style="margin:0 0 ${input ? '12px' : '0'}">${esc(message)}</p>
      ${input ? `<label class="fld"><span>${esc(input.label)}</span><textarea class="input" name="v" required maxlength="255" placeholder="${esc(input.placeholder || '')}"></textarea></label>` : ''}</form>
      <div class="dlg-foot"><button class="btn" type="button" data-dlg-close>Voltar</button><button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" type="button" data-ok>${esc(ok)}</button></div>`,
      { cls: 'modal narrow', onClose: () => resolve(result) });
    $('[data-ok]', d).addEventListener('click', () => {
      if (input) {
        const v = $('[name=v]', d).value.trim();
        if (!v) { $('[name=v]', d).focus(); return; }
        result = v;
      } else result = true;
      d.close();
    });
    if (input) setTimeout(() => $('[name=v]', d).focus(), 50);
  });
}

/** Lê um formulário respeitando data-type (number, bool, money). */
function readForm(form) {
  const out = {};
  $$('[name]', form).forEach((el) => {
    if (el.disabled || el.closest('[data-skip]')) return;
    const n = el.name;
    if (el.type === 'checkbox') { out[n] = el.checked; return; }
    if (el.type === 'radio') { if (el.checked) out[n] = el.value; return; }
    let v = el.value.trim();
    const t = el.dataset.type;
    if (t === 'money') v = v === '' ? null : Number(v.replace(/\./g, '').replace(',', '.'));
    else if (t === 'int') v = v === '' ? null : parseInt(v, 10);
    else if (t === 'nullable') v = v === '' ? null : v;
    out[n] = v;
  });
  return out;
}

function showErrors(form, err) {
  $$('.fld.invalid', form).forEach((f) => f.classList.remove('invalid'));
  if (!err?.fields) return;
  Object.entries(err.fields).forEach(([k, msg]) => {
    const el = form.querySelector(`[name="${CSS.escape(k)}"]`);
    const fld = el?.closest('.fld');
    if (!fld) return;
    fld.classList.add('invalid');
    let fe = $('.ferr', fld);
    if (!fe) { fe = document.createElement('em'); fe.className = 'ferr'; fld.append(fe); }
    fe.textContent = msg;
  });
  form.querySelector('.fld.invalid .input')?.focus();
}

const moneyInput = (v) => (v === null || v === undefined || v === '' ? '' : Number(v).toFixed(2).replace('.', ','));

function field(label, inner, { help = '', cls = '' } = {}) {
  return `<label class="fld ${cls}"><span>${esc(label)}</span>${inner}${help ? `<small class="help">${esc(help)}</small>` : ''}</label>`;
}

/* ---------- Filtro de período (compartilhado) ---------- */
const PERIODS = [['hoje', 'Hoje'], ['ontem', 'Ontem'], ['7d', '7 dias'], ['30d', '30 dias'], ['mes', 'Este mês'], ['mes_anterior', 'Mês anterior'], ['custom', 'Personalizado']];

function periodFilterHTML(state) {
  return `<div class="seg" role="group" aria-label="Período">${PERIODS.map(([k, l]) => `<button type="button" data-period="${k}" class="${state.period === k ? 'on' : ''}">${l}</button>`).join('')}</div>
    <span class="row ${state.period === 'custom' ? '' : 'hidden'}" data-custom>
      <input class="input" type="date" data-from value="${esc(state.from || '')}" aria-label="De">
      <span class="muted">até</span>
      <input class="input" type="date" data-to value="${esc(state.to || '')}" aria-label="Até">
      <button class="btn btn-sm btn-primary" type="button" data-apply>Aplicar</button>
    </span>`;
}

function bindPeriodFilter(root, state, onChange) {
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-period]');
    if (b) {
      state.period = b.dataset.period;
      $$('[data-period]', root).forEach((x) => x.classList.toggle('on', x === b));
      $('[data-custom]', root).classList.toggle('hidden', state.period !== 'custom');
      if (state.period !== 'custom') onChange();
      else {
        const t = new Date(), f = new Date(Date.now() - 6 * 864e5);
        const iso = (d) => d.toISOString().slice(0, 10);
        if (!state.from) { $('[data-from]', root).value = iso(f); $('[data-to]', root).value = iso(t); }
      }
    }
    if (e.target.closest('[data-apply]')) {
      state.from = $('[data-from]', root).value;
      state.to = $('[data-to]', root).value;
      if (!state.from || !state.to) return;
      onChange();
    }
  });
}

function periodQS(state) {
  const p = new URLSearchParams({ period: state.period });
  if (state.period === 'custom') { p.set('from', state.from); p.set('to', state.to); }
  return p;
}

const STATUS = {
  recebido: 'Pedido recebido', confirmado: 'Pedido confirmado', em_preparo: 'Em preparação', no_forno: 'No forno',
  saiu_entrega: 'Saiu para entrega', pronto_retirada: 'Pronto para retirada', entregue: 'Entregue', cancelado: 'Cancelado',
};
const statusPill = (s, label) => `<span class="st st-${esc(s)}">${esc(label || STATUS[s] || s)}</span>`;
const demoTag = (on) => (on ? '<span class="tag demo" title="Dado de demonstração">Demonstração</span>' : '');

exports.openDialog = openDialog;
exports.dlgHead = dlgHead;
exports.confirmDialog = confirmDialog;
exports.readForm = readForm;
exports.showErrors = showErrors;
exports.field = field;
exports.periodFilterHTML = periodFilterHTML;
exports.bindPeriodFilter = bindPeriodFilter;
exports.periodQS = periodQS;
exports.I = I;
exports.R$ = R$;
exports.brl = brl;
exports.moneyInput = moneyInput;
exports.PERIODS = PERIODS;
exports.STATUS = STATUS;
exports.statusPill = statusPill;
exports.demoTag = demoTag;

};
__defs["admin/bus"] = function (exports, __req) {
/* Estado compartilhado do painel. As telas importam daqui (e não do app.js),
 * para o app.js ser carregado uma única vez. */
const ctx = { user: null, storeStatus: null };
const bus = {
  refreshStoreSwitch: () => {},
  refreshFeed: () => {},
};
const refreshStoreSwitch = (s) => bus.refreshStoreSwitch(s);
const refreshFeed = () => bus.refreshFeed();

exports.ctx = ctx;
exports.bus = bus;
exports.refreshStoreSwitch = refreshStoreSwitch;
exports.refreshFeed = refreshFeed;

};
__defs["admin/charts"] = function (exports, __req) {
/* Gráficos em SVG puro (sem biblioteca): colunas e barras horizontais.
 * Traço fino, barras até 24px com ponta arredondada de 4px, grade discreta,
 * tooltip ao passar o mouse ou focar, rótulo só no ponto de destaque e
 * tabela de dados escondida em "Ver dados". */
const { esc } = __req("common");

const NS = 'http://www.w3.org/2000/svg';

function niceMax(v) {
  if (v <= 0) return 1;
  const p = Math.pow(10, Math.floor(Math.log10(v)));
  const n = v / p;
  const s = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return s * p;
}
function compact(v) {
  if (Math.abs(v) >= 1e6) return (v / 1e6).toFixed(1).replace('.', ',') + ' mi';
  if (Math.abs(v) >= 1e3) return (v / 1e3).toFixed(v >= 1e4 ? 0 : 1).replace('.', ',') + ' mil';
  return String(Math.round(v * 100) / 100).replace('.', ',');
}
function roundedTop(x, y, w, h, r) {
  r = Math.min(r, w / 2, h);
  return `M${x},${y + h}V${y + r}Q${x},${y} ${x + r},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h}Z`;
}
function roundedRight(x, y, w, h, r) {
  r = Math.min(r, h / 2, w);
  return `M${x},${y}H${x + w - r}Q${x + w},${y} ${x + w},${y + r}V${y + h - r}Q${x + w},${y + h} ${x + w - r},${y + h}H${x}Z`;
}

function tipLayer(host) {
  let tip = host.querySelector('.chart-tip');
  if (!tip) { tip = document.createElement('div'); tip.className = 'chart-tip'; tip.hidden = true; host.append(tip); }
  return {
    show(x, y, value, label) { tip.innerHTML = ''; const s = document.createElement('strong'); s.textContent = value; const l = document.createElement('span'); l.textContent = label; tip.append(s, l); tip.style.left = x + 'px'; tip.style.top = y + 'px'; tip.hidden = false; },
    hide() { tip.hidden = true; },
  };
}

function dataTable(host, rows, labelName, valueName, label, fmt) {
  const d = document.createElement('details');
  d.className = 'chart-table';
  d.innerHTML = `<summary>Ver dados</summary><div class="table-wrap" style="padding:0 14px"><table class="tbl"><thead><tr><th>${esc(labelName)}</th><th class="r">${esc(valueName)}</th></tr></thead><tbody>${rows.map((r) => `<tr><td>${esc(label(r))}</td><td class="r num">${esc(fmt(r))}</td></tr>`).join('')}</tbody></table></div>`;
  host.append(d);
}

/**
 * Colunas verticais (série única).
 * opts: { label(r), value(r), fmt(v), tickLabel(r), height, labelName, valueName }
 */
function columnChart(host, rows, opts) {
  const draw = () => {
    host.querySelectorAll('svg, .chart-empty, .chart-table').forEach((n) => n.remove());
    const total = rows.reduce((a, r) => a + opts.value(r), 0);
    if (!rows.length || total === 0) { host.insertAdjacentHTML('beforeend', `<div class="chart-empty">${esc(opts.empty || 'Sem dados no período.')}</div>`); return; }
    const W = Math.max(280, host.clientWidth - 28);
    const H = opts.height || 220;
    const m = { l: 46, r: 8, t: 22, b: 26 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const rawMax = Math.max(...rows.map(opts.value));
    const step = niceMax(rawMax / 4);
    const ticks = Math.max(1, Math.ceil(rawMax / step));
    const max = step * ticks;
    const band = iw / rows.length;
    const bw = Math.max(3, Math.min(24, band * 0.68));
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', opts.aria || '');
    let g = '';
    for (let i = 0; i <= ticks; i++) {
      const v = step * i, y = m.t + ih - (v / max) * ih;
      g += `<line class="${i === 0 ? 'base-l' : 'grid-l'}" x1="${m.l}" x2="${W - m.r}" y1="${y}" y2="${y}"/>`;
      g += `<text class="ax" x="${m.l - 8}" y="${y + 4}" text-anchor="end">${esc(opts.axisFmt ? opts.axisFmt(v) : compact(v))}</text>`;
    }
    const every = Math.ceil(rows.length / Math.max(1, Math.floor(iw / 46)));
    let peak = 0;
    rows.forEach((r, i) => { if (opts.value(r) > opts.value(rows[peak])) peak = i; });
    rows.forEach((r, i) => {
      const v = opts.value(r);
      const h = (v / max) * ih;
      const x = m.l + band * i + (band - bw) / 2;
      const y = m.t + ih - h;
      g += `<rect class="hit" x="${m.l + band * i}" y="${m.t}" width="${band}" height="${ih}" data-i="${i}" tabindex="0"/>`;
      if (v > 0) g += `<path class="bar" data-bar="${i}" d="${roundedTop(x, y, bw, Math.max(h, 1), 4)}"/>`;
      if (i % every === 0 || i === rows.length - 1 && rows.length <= 14) {
        g += `<text class="ax" x="${m.l + band * i + band / 2}" y="${H - 8}" text-anchor="middle">${esc(opts.tickLabel ? opts.tickLabel(r) : opts.label(r))}</text>`;
      }
      if (i === peak && v > 0) g += `<text class="val" x="${x + bw / 2}" y="${y - 6}" text-anchor="middle">${esc(opts.peakFmt ? opts.peakFmt(v) : compact(v))}</text>`;
    });
    svg.innerHTML = g;
    host.prepend(svg);
    const tip = tipLayer(host);
    const scale = () => svg.getBoundingClientRect().width / W;
    const onIn = (el) => {
      const i = Number(el.dataset.i);
      svg.querySelectorAll('.bar').forEach((b) => b.classList.toggle('hl', b.dataset.bar === String(i)));
      const r = rows[i];
      const s = scale();
      const h = (opts.value(r) / max) * ih;
      tip.show((m.l + band * i + band / 2) * s + 14, (m.t + ih - h) * s + 8, opts.fmt(opts.value(r)), opts.label(r) + (opts.extra ? ' · ' + opts.extra(r) : ''));
    };
    const onOut = () => { tip.hide(); svg.querySelectorAll('.bar.hl').forEach((b) => b.classList.remove('hl')); };
    svg.querySelectorAll('.hit').forEach((h) => {
      h.addEventListener('pointerenter', () => onIn(h));
      h.addEventListener('focus', () => onIn(h));
      h.addEventListener('pointerleave', onOut);
      h.addEventListener('blur', onOut);
    });
    dataTable(host, rows, opts.labelName || 'Item', opts.valueName || 'Valor', opts.label, (r) => opts.fmt(opts.value(r)));
  };
  draw();
  observe(host, draw);
}

/** Barras horizontais com rótulo em cima e valor no fim (série única). */
function hbarChart(host, rows, opts) {
  const draw = () => {
    host.querySelectorAll('svg, .chart-empty, .chart-table').forEach((n) => n.remove());
    if (!rows.length || rows.every((r) => opts.value(r) === 0)) { host.insertAdjacentHTML('beforeend', `<div class="chart-empty">${esc(opts.empty || 'Sem dados no período.')}</div>`); return; }
    const W = Math.max(260, host.clientWidth - 28);
    const rowH = 40, bh = 12;
    const H = rows.length * rowH + 4;
    const max = Math.max(...rows.map(opts.value)) || 1;
    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    svg.setAttribute('role', 'img');
    svg.setAttribute('aria-label', opts.aria || '');
    let g = '';
    rows.forEach((r, i) => {
      const y = i * rowH;
      const v = opts.value(r);
      const w = Math.max(v > 0 ? 3 : 0, (v / max) * (W - 2));
      const lab = opts.label(r);
      g += `<rect class="hit" x="0" y="${y}" width="${W}" height="${rowH}" data-i="${i}" tabindex="0"/>`;
      g += `<text class="lbl" x="0" y="${y + 15}">${esc(lab.length > 38 ? lab.slice(0, 36) + '…' : lab)}</text>`;
      g += `<text class="val" x="${W}" y="${y + 15}" text-anchor="end">${esc(opts.fmt(v))}${opts.sub ? ' · ' + esc(opts.sub(r)) : ''}</text>`;
      g += `<rect x="0" y="${y + 22}" width="${W}" height="${bh}" rx="4" fill="var(--chart-grid)" opacity=".55"/>`;
      if (w > 0) g += `<path class="bar" data-bar="${i}" d="${roundedRight(0, y + 22, w, bh, 4)}"/>`;
    });
    svg.innerHTML = g;
    host.prepend(svg);
    const tip = tipLayer(host);
    svg.querySelectorAll('.hit').forEach((h) => {
      const i = Number(h.dataset.i);
      const on = () => {
        svg.querySelectorAll('.bar').forEach((b) => b.classList.toggle('hl', b.dataset.bar === String(i)));
        const s = svg.getBoundingClientRect().width / W;
        const r = rows[i];
        tip.show(Math.min(W - 60, Math.max(60, (opts.value(r) / max) * W)) * s + 14, (i * rowH + 20) * s + 8, opts.fmt(opts.value(r)), opts.label(r) + (opts.extra ? ' · ' + opts.extra(r) : ''));
      };
      const off = () => { tip.hide(); svg.querySelectorAll('.bar.hl').forEach((b) => b.classList.remove('hl')); };
      h.addEventListener('pointerenter', on); h.addEventListener('focus', on);
      h.addEventListener('pointerleave', off); h.addEventListener('blur', off);
    });
    dataTable(host, rows, opts.labelName || 'Item', opts.valueName || 'Valor', opts.label, (r) => opts.fmt(opts.value(r)));
  };
  draw();
  observe(host, draw);
}

function observe(host, draw) {
  if (host._ro) host._ro.disconnect();
  let w = host.clientWidth;
  let t;
  host._ro = new ResizeObserver(() => {
    if (Math.abs(host.clientWidth - w) < 8) return;
    w = host.clientWidth;
    clearTimeout(t);
    t = setTimeout(draw, 80);
  });
  host._ro.observe(host);
}

exports.columnChart = columnChart;
exports.hbarChart = hbarChart;

};
__defs["admin/page-dashboard"] = function (exports, __req) {
const { api, esc, $, toast } = __req("common");
const { I, R$, brl, periodFilterHTML, bindPeriodFilter, periodQS, confirmDialog } = __req("admin/ui");
const { columnChart, hbarChart } = __req("admin/charts");
const { refreshStoreSwitch } = __req("admin/bus");

const state = { period: '30d', from: '', to: '' };
let el = null;

async function render(host) {
  el = host;
  el.innerHTML = `
    <div class="filters" id="dash-filters">${periodFilterHTML(state)}<span class="spacer"></span><span class="muted" id="dash-label"></span></div>
    <div id="dash-notices"></div>
    <div id="dash-body"><div class="card card-pad muted">Carregando indicadores…</div></div>`;
  bindPeriodFilter($('#dash-filters', el), state, load);
  await load();
}

async function load() {
  const body = $('#dash-body', el);
  body.classList.add('is-refetching');
  try {
    const d = await api('/admin/dashboard?' + periodQS(state));
    draw(d);
    refreshStoreSwitch(d.store_status);
  } catch (e) { toast(e.message, 'err'); }
  finally { body.classList.remove('is-refetching'); }
}

function notices(n) {
  const out = [];
  if (n.demo_orders) out.push(['info', `Os números abaixo incluem ${n.demo_orders} pedidos de demonstração. Quando começar a vender de verdade, apague em Configurações › Dados de demonstração.`, '#/configuracoes?aba=demo', 'Revisar']);
  if (n.demo_items) out.push(['', `${n.demo_items} item(ns) de demonstração estão ativos no cardápio (combos, sobremesa, adicionais). A casa não publicou esses preços.`, '#/configuracoes?aba=demo', 'Revisar']);
  if (n.delivery_fee_demo) out.push(['', 'A taxa de entrega padrão é um valor de demonstração. Confirme o valor real ou cadastre as taxas por bairro.', '#/configuracoes?aba=entrega', 'Ajustar']);
  if (n.pix_without_key) out.push(['bad', 'O PIX está ativo mas sem chave cadastrada.', '#/configuracoes?aba=pagamentos', 'Cadastrar']);
  return out.map(([c, t, href, a]) => `<div class="alert ${c}">${c === 'info' ? I.info : I.alert}<div class="grow">${esc(t)}</div><a class="btn btn-sm" href="${href}">${a}</a></div>`).join('');
}

function draw(d) {
  if (!$('#dash-body', el)) return;
  $('#dash-label', el).textContent = d.period.label;
  $('#dash-notices', el).innerHTML = notices(d.notices);
  if (d.restricted) return drawRestricted(d);
  const s = d.summary;
  const body = $('#dash-body', el);
  body.innerHTML = `
    <div class="kpis k7">
      <div class="kpi hero"><div class="l">Faturamento de hoje</div><div class="v">${R$(d.today.revenue)}</div><div class="s">${d.today.orders} pedido(s)</div></div>
      <div class="kpi"><div class="l">Faturamento do mês</div><div class="v">${R$(d.month.revenue)}</div><div class="s">${d.month.orders} pedido(s)</div></div>
      <div class="kpi"><div class="l">Pedidos no período</div><div class="v">${s.orders}</div><div class="s">${esc(d.period.label)}</div></div>
      <div class="kpi"><div class="l">Ticket médio</div><div class="v">${R$(s.avg_ticket)}</div><div class="s">Faturamento ${brl(s.revenue)}</div></div>
      <div class="kpi ${d.pending ? 'warn' : ''}"><div class="l">Pendentes agora</div><div class="v">${d.pending}</div><div class="s"><a href="#/pedidos">Ver pedidos abertos</a></div></div>
      <div class="kpi"><div class="l">Concluídos</div><div class="v">${d.completed}</div><div class="s">Entregues no período</div></div>
      <div class="kpi ${d.cancelled ? 'bad' : ''}"><div class="l">Cancelados</div><div class="v">${d.cancelled}</div><div class="s">${brl(s.cancelled)}</div></div>
    </div>
    <div class="grid grid-2" style="margin-top:14px">
      <div class="card chart-card span-2"><div class="card-head"><h2>Faturamento por dia</h2><span class="sub">Valor pago pelos clientes, sem cancelados</span></div><div class="chart" id="c-daily"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Quantidade de pedidos por dia</h2></div><div class="chart" id="c-orders"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Faturamento por horário</h2><span class="sub">Hora em que o pedido entrou</span></div><div class="chart" id="c-hour"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Faturamento por dia da semana</h2></div><div class="chart" id="c-week"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Produtos mais vendidos</h2><span class="sub">Quantidade</span></div><div class="chart" id="c-top"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Formas de pagamento</h2></div><div class="chart" id="c-pay"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Vendas por categoria</h2></div><div class="chart" id="c-cat"></div></div>
    </div>`;
  const dayLabel = (r) => { const [y, m, dd] = r.date.split('-'); return `${dd}/${m}`; };
  const long = (r) => new Date(r.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' });
  columnChart($('#c-daily', el), d.daily, { label: long, tickLabel: dayLabel, value: (r) => r.revenue, fmt: brl, peakFmt: brl, extra: (r) => `${r.orders} pedido(s)`, labelName: 'Dia', valueName: 'Faturamento', aria: 'Faturamento por dia', height: 240 });
  columnChart($('#c-orders', el), d.daily, { label: long, tickLabel: dayLabel, value: (r) => r.orders, fmt: (v) => `${v} pedido(s)`, peakFmt: String, labelName: 'Dia', valueName: 'Pedidos', aria: 'Pedidos por dia' });
  columnChart($('#c-hour', el), d.hourly, { label: (r) => r.label, value: (r) => r.revenue, fmt: brl, peakFmt: brl, extra: (r) => `${r.orders} pedido(s)`, labelName: 'Hora', valueName: 'Faturamento', aria: 'Faturamento por horário' });
  columnChart($('#c-week', el), d.weekday, { label: (r) => r.label, value: (r) => r.revenue, fmt: brl, peakFmt: brl, extra: (r) => `${r.orders} pedido(s)`, labelName: 'Dia da semana', valueName: 'Faturamento', aria: 'Faturamento por dia da semana' });
  hbarChart($('#c-top', el), d.top_products, { label: (r) => r.name, value: (r) => r.quantity, fmt: (v) => `${v} un.`, sub: (r) => brl(r.revenue), labelName: 'Produto', valueName: 'Quantidade', aria: 'Produtos mais vendidos' });
  hbarChart($('#c-pay', el), d.payments, { label: (r) => r.key, value: (r) => r.revenue, fmt: brl, sub: (r) => `${r.orders} pedido(s)`, labelName: 'Forma', valueName: 'Faturamento', aria: 'Faturamento por forma de pagamento' });
  hbarChart($('#c-cat', el), d.categories, { label: (r) => r.name, value: (r) => r.revenue, fmt: brl, sub: (r) => `${r.quantity} un.`, labelName: 'Categoria', valueName: 'Faturamento', aria: 'Vendas por categoria' });
}

/* Atendente: só quantidades, sem valores financeiros */
function drawRestricted(d) {
  const body = $('#dash-body', el);
  const long = (r) => new Date(r.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' });
  body.innerHTML = `
    <div class="kpis">
      <div class="kpi hero"><div class="l">Pedidos hoje</div><div class="v">${d.today.orders}</div></div>
      <div class="kpi ${d.pending ? 'warn' : ''}"><div class="l">Pendentes agora</div><div class="v">${d.pending}</div><div class="s"><a href="#/pedidos">Ver pedidos abertos</a></div></div>
      <div class="kpi"><div class="l">Concluídos no período</div><div class="v">${d.completed}</div></div>
      <div class="kpi"><div class="l">Cancelados no período</div><div class="v">${d.cancelled}</div></div>
    </div>
    <div class="grid grid-2" style="margin-top:14px">
      <div class="card chart-card span-2"><div class="card-head"><h2>Pedidos por dia</h2></div><div class="chart" id="c-orders"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Pedidos por horário</h2></div><div class="chart" id="c-hour"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Produtos mais vendidos</h2></div><div class="chart" id="c-top"></div></div>
    </div>`;
  columnChart($('#c-orders', el), d.daily, { label: long, tickLabel: (r) => r.date.slice(8, 10) + '/' + r.date.slice(5, 7), value: (r) => r.orders, fmt: (v) => `${v} pedido(s)`, peakFmt: String, labelName: 'Dia', valueName: 'Pedidos' });
  columnChart($('#c-hour', el), d.hourly, { label: (r) => r.label, value: (r) => r.orders, fmt: (v) => `${v} pedido(s)`, peakFmt: String, labelName: 'Hora', valueName: 'Pedidos' });
  hbarChart($('#c-top', el), d.top_products, { label: (r) => r.name, value: (r) => r.quantity, fmt: (v) => `${v} un.`, labelName: 'Produto', valueName: 'Quantidade' });
}

exports.render = render;

};
__defs["admin/page-orders"] = function (exports, __req) {
const { api, esc, $, $$, toast, fmtDate, fmtTime, fmtPhone, waLink, maskPhone } = __req("common");
const { I, R$, brl, openDialog, dlgHead, confirmDialog, statusPill, demoTag, STATUS, readForm, showErrors, field } = __req("admin/ui");
const { refreshFeed } = __req("admin/bus");

const state = { status: 'abertos', q: '', type: '', from: '', to: '', page: 1 };
let el = null, timer = null, data = null, openId = null;

const NEXT = {
  recebido: ['confirmado', 'Confirmar pedido'],
  confirmado: ['em_preparo', 'Enviar para preparo'],
  em_preparo: ['no_forno', 'Colocar no forno'],
  no_forno: { delivery: ['saiu_entrega', 'Saiu para entrega'], pickup: ['pronto_retirada', 'Pronto para retirada'] },
  saiu_entrega: ['entregue', 'Marcar como entregue'],
  pronto_retirada: ['entregue', 'Marcar como entregue'],
};
const cap = (t) => t.charAt(0).toUpperCase() + t.slice(1);
const nextOf = (o) => { const n = NEXT[o.status]; return !n ? null : Array.isArray(n) ? n : n[o.order_type]; };

function destroy() { clearInterval(timer); document.removeEventListener('rv:new-orders', onNew); }
function onNew() { if (state.page === 1) load(true); }

async function render(host) {
  el = host;
  el.innerHTML = `
    <div class="tabs" id="o-tabs" role="tablist"></div>
    <div class="filters">
      <div class="search-input">${I.search}<input class="input" type="search" id="o-q" placeholder="Nome, telefone ou nº" value="${esc(state.q)}" aria-label="Buscar pedido"></div>
      <select class="input" id="o-type" aria-label="Tipo"><option value="">Entrega e retirada</option><option value="delivery">Só entrega</option><option value="pickup">Só retirada</option></select>
      <input class="input" type="date" id="o-from" aria-label="De" value="${esc(state.from)}"><input class="input" type="date" id="o-to" aria-label="Até" value="${esc(state.to)}">
      <span class="spacer"></span>
      <button class="btn btn-primary" type="button" id="o-new">${I.plus}Lançar pedido</button>
    </div>
    <div id="o-list"><div class="card card-pad muted">Carregando pedidos…</div></div>`;
  $('#o-type', el).value = state.type;
  let t;
  $('#o-q', el).addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); state.page = 1; load(); }, 300); });
  $('#o-type', el).addEventListener('change', (e) => { state.type = e.target.value; state.page = 1; load(); });
  $('#o-from', el).addEventListener('change', (e) => { state.from = e.target.value; state.page = 1; load(); });
  $('#o-to', el).addEventListener('change', (e) => { state.to = e.target.value; state.page = 1; load(); });
  $('#o-new', el).addEventListener('click', newOrderDialog);
  el.addEventListener('click', (e) => {
    const tab = e.target.closest('[data-tab]');
    if (tab) { state.status = tab.dataset.tab; state.page = 1; load(); return; }
    const row = e.target.closest('[data-order]');
    if (row && !e.target.closest('button, a')) { openOrder(Number(row.dataset.order)); return; }
    const adv = e.target.closest('[data-advance]');
    if (adv) { e.stopPropagation(); quickAdvance(Number(adv.dataset.advance), adv); return; }
    const pg = e.target.closest('[data-page]');
    if (pg) { state.page = Number(pg.dataset.page); load(); }
  });
  document.addEventListener('rv:new-orders', onNew);
  await load();
  timer = setInterval(() => load(true), 20000);
  const m = location.hash.match(/pedido=(\d+)/);
  if (m) openOrder(Number(m[1]));
}

async function load(silent = false) {
  const list = $('#o-list', el);
  if (!list) return;
  if (!silent) list.classList.add('is-refetching');
  const p = new URLSearchParams({ status: state.status === 'todos' ? '' : state.status, page: state.page, per: 30 });
  if (state.q) p.set('q', state.q);
  if (state.type) p.set('type', state.type);
  if (state.from) p.set('from', state.from);
  if (state.to) p.set('to', state.to);
  try {
    data = await api('/admin/orders?' + p);
    drawTabs();
    drawList();
  } catch (e) { if (!silent) toast(e.message, 'err'); }
  finally { list.classList.remove('is-refetching'); }
}

function drawTabs() {
  if (!$('#o-tabs', el)) return;
  const c = data.counts;
  const open = ['recebido', 'confirmado', 'em_preparo', 'no_forno', 'saiu_entrega', 'pronto_retirada'].reduce((a, s) => a + (c[s] || 0), 0);
  const tabs = [['abertos', 'Em andamento', open], ...Object.entries(STATUS).map(([k, l]) => [k, l.replace('Pedido ', ''), c[k] || 0]), ['todos', 'Todos', null]];
  $('#o-tabs', el).innerHTML = tabs.map(([k, l, n]) => `<button type="button" role="tab" data-tab="${k}" class="${state.status === k ? 'on' : ''}" aria-selected="${state.status === k}">${esc(l.charAt(0).toUpperCase() + l.slice(1))}${n !== null ? `<span class="n">${n}</span>` : ''}</button>`).join('');
}

function ago(s) {
  const m = Math.round((Date.now() - new Date(s.replace(' ', 'T')).getTime()) / 60000);
  if (m < 1) return 'agora';
  if (m < 60) return `há ${m} min`;
  if (m < 1440) return `há ${Math.floor(m / 60)} h`;
  return fmtDate(s);
}

function drawList() {
  if (!$('#o-list', el)) return;
  const rows = data.data;
  const list = $('#o-list', el);
  if (!rows.length) { list.innerHTML = `<div class="card empty">Nenhum pedido ${state.status === 'abertos' ? 'em andamento agora' : 'encontrado com esses filtros'}.</div>`; return; }
  const pages = Math.ceil(data.total / data.per);
  const adv = (o) => { const n = nextOf(o); return n ? `<button class="btn btn-sm" type="button" data-advance="${o.id}" data-to="${n[0]}">${esc(n[1])}</button>` : ''; };
  list.innerHTML = `
    <div class="card desktop-only"><div class="table-wrap"><table class="tbl">
      <thead><tr><th>Pedido</th><th>Cliente</th><th>Tipo</th><th>Itens</th><th class="r">Total</th><th>Pagamento</th><th>Status</th><th></th></tr></thead>
      <tbody>${rows.map((o) => `<tr class="click" data-order="${o.id}">
        <td class="nowrap"><strong>#${o.number}</strong> ${demoTag(o.is_demo)}<br><span class="muted">${esc(ago(o.created_at))}</span></td>
        <td>${esc(o.customer_name)}<br><span class="muted">${esc(fmtPhone(o.customer_phone))}</span></td>
        <td>${o.order_type === 'delivery' ? `Entrega<br><span class="muted">${esc(o.neighborhood || '')}</span>` : 'Retirada'}</td>
        <td class="num">${o.items_count}</td>
        <td class="r num nowrap"><strong>${brl(o.total)}</strong></td>
        <td>${esc(o.payment_method_name)}<br><span class="muted">${o.payment_status === 'pago' ? 'Pago' : o.payment_status === 'estornado' ? 'Estornado' : 'A receber'}</span></td>
        <td>${statusPill(o.status, o.status_label)}</td>
        <td class="r">${adv(o)}</td></tr>`).join('')}</tbody></table></div>
      ${pages > 1 ? pager(pages) : ''}</div>
    <div class="order-cards mobile">${rows.map((o) => `
      <div class="order-card ${o.status === 'recebido' ? 'new' : ''}" data-order="${o.id}">
        <div class="top"><strong>#${o.number}</strong>${statusPill(o.status, o.status_label)}<span class="spacer"></span><strong class="num">${brl(o.total)}</strong></div>
        <div>${esc(o.customer_name)} ${demoTag(o.is_demo)}</div>
        <div class="meta">${o.order_type === 'delivery' ? 'Entrega · ' + esc(o.neighborhood || '') : 'Retirada'} · ${o.items_count} item(ns) · ${esc(o.payment_method_name)} · ${esc(ago(o.created_at))}</div>
        ${adv(o) ? `<div>${adv(o)}</div>` : ''}
      </div>`).join('')}${pages > 1 ? `<div class="card">${pager(pages)}</div>` : ''}</div>`;
}

function pager(pages) {
  return `<div class="pager"><span>${data.total} pedido(s) · página ${state.page} de ${pages}</span><span class="row">
    <button class="btn btn-sm" type="button" data-page="${state.page - 1}" ${state.page <= 1 ? 'disabled' : ''}>Anterior</button>
    <button class="btn btn-sm" type="button" data-page="${state.page + 1}" ${state.page >= pages ? 'disabled' : ''}>Próxima</button></span></div>`;
}

async function quickAdvance(id, btn) {
  btn.classList.add('is-loading');
  try {
    const o = await api(`/admin/orders/${id}/status`, { method: 'PATCH', body: { status: btn.dataset.to } });
    toast(`Pedido #${o.number}: ${o.status_label}`);
    await load(true);
    refreshFeed();
  } catch (e) { toast(e.message, 'err'); btn.classList.remove('is-loading'); }
}

/* ---------------- Detalhe do pedido ---------------- */

async function openOrder(id) {
  openId = id;
  let o;
  try { o = await api('/admin/orders/' + id); } catch (e) { toast(e.message, 'err'); return; }
  const d = openDialog('', { cls: 'drawer', onClose: () => { openId = null; } });
  drawOrder(d, o);
}

function statusMessage(o) {
  const first = o.customer_name.split(' ')[0];
  const link = `${new URL('pedido.html', location.href).href}?c=${o.tracking_code}`;
  const msg = {
    recebido: `Olá, ${first}! Recebemos seu pedido #${o.number} na Pizzaria Rivoly.`,
    confirmado: `Olá, ${first}! Seu pedido #${o.number} foi confirmado e já vai para a cozinha.`,
    em_preparo: `${first}, seu pedido #${o.number} está em preparação.`,
    no_forno: `${first}, sua pizza (pedido #${o.number}) está no forno!`,
    saiu_entrega: `${first}, seu pedido #${o.number} saiu para entrega.`,
    pronto_retirada: `${first}, seu pedido #${o.number} está pronto para retirada no balcão.`,
    entregue: `Obrigado pelo pedido, ${first}! Bom apetite.`,
    cancelado: `${first}, seu pedido #${o.number} foi cancelado. ${o.cancel_reason || ''}`,
  }[o.status];
  return `${msg}\nAcompanhe: ${link}`;
}

function drawOrder(d, o) {
  const n = nextOf(o);
  const addr = o.order_type === 'delivery' ? [`${o.street}, ${o.address_number}`, o.complement, o.neighborhood, o.city, o.zip, o.reference ? 'Ref.: ' + o.reference : ''].filter(Boolean).join(' · ') : null;
  const flow = o.order_type === 'delivery' ? ['recebido', 'confirmado', 'em_preparo', 'no_forno', 'saiu_entrega', 'entregue'] : ['recebido', 'confirmado', 'em_preparo', 'no_forno', 'pronto_retirada', 'entregue'];
  const phone = '55' + o.customer_phone;
  d.innerHTML = `${dlgHead(`Pedido #${o.number}`)}
    <div class="dlg-body">
      <div class="od-section">
        <div class="row" style="margin-bottom:8px">${statusPill(o.status, o.status_label)} ${demoTag(o.is_demo)} <span class="tag">${o.order_type === 'delivery' ? 'Entrega' : 'Retirada'}</span> <span class="tag">${esc({ site: 'Site', balcao: 'Balcão', telefone: 'Telefone', whatsapp: 'WhatsApp' }[o.channel] || o.channel)}</span><span class="spacer"></span><span class="muted">${esc(fmtDate(o.created_at))}</span></div>
        ${o.status !== 'cancelado' ? `<div class="status-flow">${flow.map((s) => `<button class="btn btn-sm ${s === o.status ? 'btn-primary' : ''}" type="button" data-set="${s}" ${s === o.status ? 'disabled' : ''}>${esc(cap(STATUS[s].replace('Pedido ', '')))}</button>`).join('')}</div>` : `<div class="alert bad">${I.alert}<div class="grow"><strong>Cancelado.</strong> ${esc(o.cancel_reason || '')}</div></div>`}
      </div>
      <div class="od-section">
        <h3>Cliente</h3>
        <div class="row"><div class="grow" style="flex:1"><strong>${esc(o.customer_name)}</strong><br><a href="tel:+${phone}">${esc(fmtPhone(o.customer_phone))}</a> · ${o.customer_orders} pedido(s) no total</div>
          <a class="btn btn-sm" href="${waLink(phone, statusMessage(o))}" target="_blank" rel="noopener">${I.whatsapp}Avisar no WhatsApp</a></div>
        ${addr ? `<p style="margin:8px 0 0">${I.pin.replace('<svg', '<svg style="width:16px;height:16px;vertical-align:-3px"')} ${esc(addr)}</p>
          <p style="margin:4px 0 0"><a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${o.street}, ${o.address_number}, ${o.neighborhood}, ${o.city}`)}" target="_blank" rel="noopener">Abrir endereço no mapa</a></p>` : ''}
      </div>
      <div class="od-section">
        <h3>Itens</h3>
        ${o.items.map((i) => `<div class="od-item"><div><strong>${i.quantity}x ${esc(i.product_name)}${i.size_name ? ' · ' + esc(i.size_name) : ''}</strong>
          ${i.flavors.length > 1 ? `<div class="sub">Sabores: ${esc(i.flavors.map((f) => f.name).join(' / '))}</div>` : ''}
          ${i.options.map((g) => `<div class="sub">${esc(g.group)}: ${esc(g.choices.join(', '))}</div>`).join('')}
          ${i.addons.length ? `<div class="sub">+ ${esc(i.addons.map((a) => a.name).join(', '))}</div>` : ''}
          ${i.notes ? `<div class="sub" style="color:var(--red-2)"><strong>Obs.:</strong> ${esc(i.notes)}</div>` : ''}</div>
          <span class="num nowrap">${brl(i.line_total)}</span></div>`).join('')}
        ${o.notes ? `<div class="alert" style="margin-top:8px">${I.info}<div class="grow"><strong>Observação do pedido:</strong> ${esc(o.notes)}</div></div>` : ''}
      </div>
      <div class="od-section od-totals">
        <div><span>Subtotal</span><span class="num">${brl(o.subtotal)}</span></div>
        ${o.order_type === 'delivery' ? `<div><span>Entrega</span><span class="num">${brl(o.delivery_fee)}</span></div>` : ''}
        ${o.discount ? `<div><span>Desconto${o.coupon_code ? ' (' + esc(o.coupon_code) + ')' : ''}</span><span class="num">− ${brl(o.discount)}</span></div>` : ''}
        <div class="grand"><span>Total</span><span class="num">${brl(o.total)}</span></div>
        <div style="margin-top:8px"><span>${esc(o.payment_method_name)}${o.change_for ? ` · troco para ${brl(o.change_for)} (${brl(o.change_for - o.total)})` : ''}</span>
          <span>${o.payment?.status === 'pago' ? '<span class="tag green">Pago</span>' : o.payment?.status === 'estornado' ? '<span class="tag">Estornado</span>' : o.status !== 'cancelado' ? '<button class="btn btn-sm" type="button" data-paid>Marcar como pago</button>' : ''}</span></div>
      </div>
      <div class="od-section" style="border:0">
        <h3>Histórico</h3>
        <ul class="hist">${o.history.map((h) => `<li><time>${esc(fmtTime(h.created_at))}</time><span>${esc(STATUS[h.status] || h.status)}${h.user_name ? ` · ${esc(h.user_name)}` : ''}${h.note ? ` · <span class="muted">${esc(h.note)}</span>` : ''}</span></li>`).join('')}</ul>
      </div>
    </div>
    <div class="dlg-foot">
      <button class="btn" type="button" data-print>${I.print}Imprimir comanda</button>
      ${o.status !== 'cancelado' && o.status !== 'entregue' ? '<button class="btn" type="button" data-cancel style="color:var(--red-2)">Cancelar pedido</button>' : ''}
      <span class="spacer"></span>
      ${n ? `<button class="btn btn-primary" type="button" data-set="${n[0]}">${esc(n[1])}</button>` : ''}
    </div>`;

  d.onclick = async (e) => {
    const set = e.target.closest('[data-set]');
    if (set) return changeStatus(d, o, set.dataset.set, set);
    if (e.target.closest('[data-cancel]')) {
      const reason = await confirmDialog(`Cancelar o pedido #${o.number}? O cliente verá o motivo na página de acompanhamento.`, { title: 'Cancelar pedido', ok: 'Cancelar pedido', danger: true, input: { label: 'Motivo', placeholder: 'Ex.: cliente desistiu, endereço fora da área' } });
      if (reason) changeStatus(d, o, 'cancelado', null, reason);
      return;
    }
    if (e.target.closest('[data-paid]')) {
      try { const r = await api(`/admin/orders/${o.id}/payment`, { method: 'PATCH' }); toast('Pagamento registrado.'); drawOrder(d, r); load(true); } catch (ex) { toast(ex.message, 'err'); }
      return;
    }
    if (e.target.closest('[data-print]')) printTicket(o);
  };
}

async function changeStatus(d, o, status, btn, note = null) {
  btn?.classList.add('is-loading');
  try {
    const r = await api(`/admin/orders/${o.id}/status`, { method: 'PATCH', body: { status, note } });
    r.customer_orders = o.customer_orders;
    toast(`Pedido #${r.number}: ${r.status_label}`);
    drawOrder(d, r);
    load(true);
    refreshFeed();
  } catch (e) { toast(e.message, 'err'); btn?.classList.remove('is-loading'); }
}

function printTicket(o) {
  const area = $('#print-area');
  const line = (a, b) => `<div class="r"><span>${a}</span><span>${b}</span></div>`;
  area.innerHTML = `<h1>PIZZARIA RIVOLY</h1><div>Pedido #${o.number} · ${esc(fmtDate(o.created_at))}</div><div>${o.order_type === 'delivery' ? 'ENTREGA' : 'RETIRADA'}</div><hr>
    <div><strong>${esc(o.customer_name)}</strong> · ${esc(fmtPhone(o.customer_phone))}</div>
    ${o.order_type === 'delivery' ? `<div>${esc(`${o.street}, ${o.address_number}${o.complement ? ' - ' + o.complement : ''}`)}</div><div>${esc(o.neighborhood || '')}${o.reference ? ' · Ref.: ' + esc(o.reference) : ''}</div>` : ''}<hr>
    ${o.items.map((i) => `<div><strong>${i.quantity}x ${esc(i.product_name)}${i.size_name ? ' ' + esc(i.size_name) : ''}</strong></div>
      ${i.flavors.length > 1 ? `<div>  Sabores: ${esc(i.flavors.map((f) => f.name).join(' / '))}</div>` : ''}
      ${i.options.map((g) => `<div>  ${esc(g.group)}: ${esc(g.choices.join(', '))}</div>`).join('')}
      ${i.addons.length ? `<div>  + ${esc(i.addons.map((a) => a.name).join(', '))}</div>` : ''}
      ${i.notes ? `<div>  OBS: ${esc(i.notes)}</div>` : ''}${line('', brl(i.line_total))}`).join('')}<hr>
    ${line('Subtotal', brl(o.subtotal))}${o.delivery_fee ? line('Entrega', brl(o.delivery_fee)) : ''}${o.discount ? line('Desconto', '- ' + brl(o.discount)) : ''}${line('<strong>TOTAL</strong>', '<strong>' + brl(o.total) + '</strong>')}
    <div>Pagamento: ${esc(o.payment_method_name)}${o.change_for ? ` · troco p/ ${brl(o.change_for)}` : ''}${o.payment?.status === 'pago' ? ' (PAGO)' : ''}</div>
    ${o.notes ? `<hr><div>OBS: ${esc(o.notes)}</div>` : ''}`;
  document.body.classList.add('printing');
  window.print();
  setTimeout(() => document.body.classList.remove('printing'), 500);
}

/* ---------------- Lançar pedido (balcão, telefone, WhatsApp) ---------------- */

async function newOrderDialog() {
  let menu, store;
  try { [menu, store] = await Promise.all([api('/public/menu'), api('/public/store')]); } catch (e) { toast(e.message, 'err'); return; }
  const products = menu.categories.flatMap((c) => c.products.map((p) => ({ ...p, cat: c.name })));
  const optionsHTML = products.map((p) => p.sizes.length
    ? p.sizes.map((s) => `<option value="${p.id}:${s.id}">${esc(p.name)} · ${esc(s.name)} (${brl(s.promo_price && s.promo_price < s.price ? s.promo_price : s.price)})</option>`).join('')
    : `<option value="${p.id}:" ${p.options.length ? 'disabled' : ''}>${esc(p.name)} (${brl(p.from_price)})${p.options.length ? ' · use o site' : ''}</option>`).join('');
  const lineHTML = () => `<div class="row" data-line style="margin-bottom:8px;flex-wrap:nowrap"><select class="input" style="flex:1;min-width:0" data-prod><option value="">Escolha o item</option>${optionsHTML}</select><input class="input" type="number" min="1" max="50" value="1" style="width:70px" data-qty aria-label="Quantidade"><button class="icon-btn" type="button" data-rm aria-label="Remover">${I.trash}</button></div>`;
  const d = openDialog(`${dlgHead('Lançar pedido')}
    <form class="dlg-body form" id="new-order" novalidate>
      <div class="form-grid c2">
        ${field('Canal', '<select class="input" name="channel"><option value="balcao">Balcão</option><option value="telefone">Telefone</option><option value="whatsapp">WhatsApp</option></select>')}
        ${field('Tipo', '<select class="input" name="order_type"><option value="pickup">Retirada / balcão</option><option value="delivery">Entrega</option></select>')}
        ${field('Nome do cliente', '<input class="input" name="name" required>')}
        ${field('Telefone', '<input class="input" name="phone" inputmode="tel" required placeholder="(71) 90000-0000">')}
      </div>
      <fieldset class="fieldset hidden" data-addr><legend>Endereço</legend><div class="form-grid c2">
        ${field('Rua', '<input class="input" name="street">')}${field('Número', '<input class="input" name="number">')}
        ${field('Bairro', `<input class="input" name="neighborhood" list="nz">`)}${field('Complemento', '<input class="input" name="complement">')}
        <datalist id="nz">${store.delivery_zones.map((z) => `<option value="${esc(z.neighborhood)}">`).join('')}</datalist>
      </div></fieldset>
      <fieldset class="fieldset"><legend>Itens</legend><div data-lines>${lineHTML()}</div><button class="btn btn-sm" type="button" data-addline>${I.plus}Adicionar item</button></fieldset>
      <div class="form-grid c2">
        ${field('Pagamento', `<select class="input" name="payment_method_id">${store.payment_methods.map((m) => `<option value="${m.id}">${esc(m.name)}</option>`).join('')}</select>`)}
        ${field('Observações', '<input class="input" name="notes" maxlength="500">')}
      </div>
      <div class="alert info" id="no-total">${I.info}<div class="grow" id="no-total-text">Escolha os itens para ver o total.</div></div>
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Lançar pedido</button></div>`, { cls: 'modal wide' });
  const f = $('#new-order', d);
  const items = () => $$('[data-line]', f).map((l) => { const [pid, sid] = ($('[data-prod]', l).value || ':').split(':'); return pid ? { product_id: Number(pid), size_id: sid ? Number(sid) : null, quantity: Number($('[data-qty]', l).value) || 1 } : null; }).filter(Boolean);
  const quote = async () => {
    const it = items();
    if (!it.length) { $('#no-total-text', d).textContent = 'Escolha os itens para ver o total.'; return; }
    try {
      const q = await api('/public/quote', { method: 'POST', body: { items: it, order_type: f.elements.order_type.value, neighborhood: f.elements.neighborhood.value } });
      $('#no-total-text', d).innerHTML = `Subtotal ${brl(q.subtotal)}${q.order_type === 'delivery' ? ` · entrega ${brl(q.delivery_fee)}` : ''} · <strong>Total ${brl(q.total)}</strong>`;
    } catch (e) { $('#no-total-text', d).textContent = e.message; }
  };
  f.addEventListener('change', (e) => {
    if (e.target.name === 'order_type') $('[data-addr]', f).classList.toggle('hidden', e.target.value !== 'delivery');
    quote();
  });
  f.addEventListener('input', (e) => { if (e.target.name === 'phone') e.target.value = maskPhone(e.target.value); });
  f.addEventListener('click', (e) => {
    if (e.target.closest('[data-addline]')) $('[data-lines]', f).insertAdjacentHTML('beforeend', lineHTML());
    const rm = e.target.closest('[data-rm]');
    if (rm && $$('[data-line]', f).length > 1) { rm.closest('[data-line]').remove(); quote(); }
  });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const v = readForm(f);
    const body = { channel: v.channel, order_type: v.order_type, name: v.name, phone: v.phone, payment_method_id: Number(v.payment_method_id), notes: v.notes || null, items: items(),
      address: v.order_type === 'delivery' ? { street: v.street, number: v.number, neighborhood: v.neighborhood, complement: v.complement || null, city: 'Salvador' } : null };
    if (!body.items.length) { toast('Adicione pelo menos um item.', 'err'); return; }
    e.target.classList.add('is-loading');
    try {
      const r = await api('/admin/orders', { method: 'POST', body });
      toast(`Pedido #${r.number} lançado.`);
      d.close();
      state.status = 'abertos'; state.page = 1;
      await load();
      openOrder(r.id);
    } catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

exports.destroy = destroy;
exports.render = render;

};
__defs["admin/page-products"] = function (exports, __req) {
const { api, esc, $, $$, toast } = __req("common");
const { I, brl, openDialog, dlgHead, confirmDialog, readForm, showErrors, field, moneyInput, demoTag } = __req("admin/ui");

let el = null, products = [], categories = [], addons = [], tab = 'produtos';
const filt = { cat: '', q: '', status: '' };

async function render(host) {
  el = host;
  tab = location.hash.includes('aba=adicionais') ? 'adicionais' : 'produtos';
  await loadAll();
}

async function loadAll() {
  const [p, c, a] = await Promise.all([api('/admin/products'), api('/admin/categories'), api('/admin/addons')]);
  products = p.data; categories = c.data; addons = a.data;
  draw();
}

function draw() {
  el.innerHTML = `
    <div class="tabs"><button type="button" data-tab="produtos" class="${tab === 'produtos' ? 'on' : ''}">Produtos <span class="n">${products.length}</span></button><button type="button" data-tab="adicionais" class="${tab === 'adicionais' ? 'on' : ''}">Adicionais <span class="n">${addons.length}</span></button></div>
    <div id="tab-body"></div>`;
  $$('[data-tab]', el).forEach((b) => b.addEventListener('click', () => { tab = b.dataset.tab; history.replaceState(null, '', '#/produtos' + (tab === 'adicionais' ? '?aba=adicionais' : '')); draw(); }));
  tab === 'produtos' ? drawProducts() : drawAddons();
}

function priceCell(p) {
  if (p.sizes.length) return p.sizes.filter((s) => s.active).map((s) => `<span class="nowrap">${esc(s.name)} ${brl(s.promo_price && s.promo_price < s.price ? s.promo_price : s.price)}</span>`).join('<br>') || '<span class="muted">sem tamanho ativo</span>';
  if (p.price === null) return '<span class="tag demo">sem preço</span>';
  return p.promo_price ? `<s class="muted">${brl(p.price)}</s> ${brl(p.promo_price)}` : brl(p.price);
}

function drawProducts() {
  const body = $('#tab-body', el);
  const q = filt.q.toLowerCase();
  const list = products.filter((p) => (!filt.cat || p.category_id === Number(filt.cat)) && (!q || p.name.toLowerCase().includes(q)) && (!filt.status || (filt.status === 'on' ? p.active : filt.status === 'off' ? !p.active : p.data_source === 'demo')));
  body.innerHTML = `
    <div class="filters">
      <div class="search-input">${I.search}<input class="input" type="search" id="p-q" placeholder="Buscar produto" value="${esc(filt.q)}"></div>
      <select class="input" id="p-cat"><option value="">Todas as categorias</option>${categories.map((c) => `<option value="${c.id}" ${String(c.id) === filt.cat ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>
      <select class="input" id="p-st"><option value="">Todos</option><option value="on" ${filt.status === 'on' ? 'selected' : ''}>Ativos</option><option value="off" ${filt.status === 'off' ? 'selected' : ''}>Desativados</option><option value="demo" ${filt.status === 'demo' ? 'selected' : ''}>Demonstração</option></select>
      <span class="spacer"></span>
      <button class="btn btn-primary" type="button" id="p-new">${I.plus}Novo produto</button>
    </div>
    <div class="card"><div class="table-wrap"><table class="tbl">
      <thead><tr><th></th><th>Produto</th><th>Categoria</th><th>Preço</th><th class="r">Vendidos</th><th>Destaque</th><th>Ativo</th><th></th></tr></thead>
      <tbody>${list.map((p) => `<tr>
        <td style="width:54px">${p.image_url ? `<img class="thumb" src="${esc(p.image_url)}" alt="" loading="lazy">` : '<div class="thumb"></div>'}</td>
        <td><strong>${esc(p.name)}</strong> ${demoTag(p.data_source === 'demo')}${p.has_options ? ' <span class="tag">personalizável</span>' : ''}<br><span class="muted" style="font-size:13px">${esc((p.ingredients || p.description || '').slice(0, 80))}</span></td>
        <td>${esc(p.category_name)}</td>
        <td class="num" style="font-size:13.5px">${priceCell(p)}</td>
        <td class="r num">${p.sold}</td>
        <td><button class="icon-btn" type="button" data-feat="${p.id}" aria-label="Destaque" title="${p.is_featured ? 'Tirar dos destaques' : 'Destacar no site'}" style="color:${p.is_featured ? '#d99a1e' : 'var(--line-2)'}">${p.is_featured ? I.star : I.star2}</button></td>
        <td><label class="switch"><input type="checkbox" data-toggle="${p.id}" ${p.active ? 'checked' : ''} aria-label="Ativo"></label></td>
        <td class="r nowrap"><button class="icon-btn" type="button" data-edit="${p.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" type="button" data-del="${p.id}" aria-label="Excluir">${I.trash}</button></td>
      </tr>`).join('') || '<tr><td colspan="8" class="empty">Nenhum produto encontrado.</td></tr>'}</tbody></table></div></div>`;
  let t;
  $('#p-q', body).addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => { filt.q = e.target.value; drawProducts(); $('#p-q', el).focus(); $('#p-q', el).setSelectionRange(99, 99); }, 200); });
  $('#p-cat', body).addEventListener('change', (e) => { filt.cat = e.target.value; drawProducts(); });
  $('#p-st', body).addEventListener('change', (e) => { filt.status = e.target.value; drawProducts(); });
  $('#p-new', body).addEventListener('click', () => editProduct(null));
  body.onclick = async (e) => {
    const ed = e.target.closest('[data-edit]'); if (ed) return editProduct(Number(ed.dataset.edit));
    const del = e.target.closest('[data-del]');
    if (del) {
      const p = products.find((x) => x.id === Number(del.dataset.del));
      if (!(await confirmDialog(`Excluir "${p.name}"? Os pedidos antigos continuam com o nome do produto. Se quiser só tirar do site, desative em vez de excluir.`, { title: 'Excluir produto', ok: 'Excluir', danger: true }))) return;
      try { await api('/admin/products/' + p.id, { method: 'DELETE' }); toast('Produto excluído.'); loadAll(); } catch (ex) { toast(ex.message, 'err'); }
      return;
    }
    const ft = e.target.closest('[data-feat]');
    if (ft) {
      const p = products.find((x) => x.id === Number(ft.dataset.feat));
      try { const r = await api('/admin/products/' + p.id, { method: 'PATCH', body: { is_featured: !p.is_featured } }); p.is_featured = r.is_featured; drawProducts(); } catch (ex) { toast(ex.message, 'err'); }
    }
  };
  body.onchange = async (e) => {
    const tg = e.target.closest('[data-toggle]');
    if (!tg) return;
    const p = products.find((x) => x.id === Number(tg.dataset.toggle));
    try { const r = await api('/admin/products/' + p.id, { method: 'PATCH', body: { active: tg.checked } }); p.active = r.active; toast(r.active ? `${p.name} ativo no site.` : `${p.name} saiu do site.`); }
    catch (ex) { tg.checked = !tg.checked; toast(ex.message, 'err'); }
  };
}

/* ---------------- Editor de produto ---------------- */

const sizeRowHTML = (s = {}) => `<div class="size-row" data-size>
  <input type="hidden" data-k="id" value="${s.id || ''}">
  <input class="input" data-k="name" placeholder="Ex.: Grande" value="${esc(s.name || '')}" aria-label="Nome do tamanho">
  <input class="input" data-k="slices" type="number" min="0" placeholder="Fatias" value="${s.slices ?? ''}" aria-label="Fatias">
  <input class="input" data-k="max_flavors" type="number" min="1" max="8" placeholder="Sabores" value="${s.max_flavors ?? 1}" aria-label="Máximo de sabores">
  <input class="input" data-k="price" inputmode="decimal" placeholder="Preço" value="${moneyInput(s.price)}" aria-label="Preço">
  <input class="input" data-k="promo_price" inputmode="decimal" placeholder="Promo" value="${moneyInput(s.promo_price)}" aria-label="Preço promocional">
  <label class="switch" title="Ativo"><input type="checkbox" data-k="active" ${s.active === false ? '' : 'checked'} aria-label="Tamanho ativo"></label>
  <button class="icon-btn" type="button" data-rm-size aria-label="Remover tamanho">${I.trash}</button></div>`;

const optGroupHTML = (g = { name: '', min: 0, max: 1, choices: [] }) => `<div class="opt-group" data-group>
  <div class="form-grid c3"><label class="fld"><span>Nome do grupo</span><input class="input" data-g="name" value="${esc(g.name)}" placeholder="Ex.: Escolha o refrigerante"></label>
  <label class="fld"><span>Mínimo</span><input class="input" data-g="min" type="number" min="0" value="${g.min}"></label>
  <label class="fld"><span>Máximo</span><input class="input" data-g="max" type="number" min="1" value="${g.max}"></label></div>
  <div data-choices style="margin-top:10px">${(g.choices.length ? g.choices : [{ name: '', price: 0 }]).map(choiceHTML).join('')}</div>
  <div class="row"><button class="btn btn-sm" type="button" data-add-choice>${I.plus}Opção</button><span class="spacer"></span><button class="btn btn-sm btn-ghost" type="button" data-rm-group style="color:var(--red-2)">Remover grupo</button></div></div>`;
const choiceHTML = (c) => `<div class="row" data-choice style="margin-bottom:6px;flex-wrap:nowrap"><input class="input" style="flex:1;min-width:0" data-c="name" value="${esc(c.name)}" placeholder="Nome da opção"><input class="input" style="width:110px" data-c="price" inputmode="decimal" value="${moneyInput(c.price || 0)}" placeholder="+ preço"><button class="icon-btn" type="button" data-rm-choice aria-label="Remover opção">${I.trash}</button></div>`;

async function editProduct(id) {
  let p = { name: '', category_id: categories[0]?.id, description: '', ingredients: '', image_url: '', price: null, promo_price: null, is_featured: false, active: true, sort_order: 0, sizes: [], options: [] };
  if (id) { try { p = await api('/admin/products/' + id); } catch (e) { toast(e.message, 'err'); return; } }
  const useSizes = p.sizes.length > 0;
  const d = openDialog(`${dlgHead(id ? 'Editar produto' : 'Novo produto')}
    <form class="dlg-body form" id="pf" novalidate>
      ${p.data_source === 'demo' ? `<div class="alert">${I.alert}<div class="grow"><strong>Item de demonstração.</strong> ${esc(p.source_note || '')}</div></div>` : ''}
      ${p.source_note && p.data_source !== 'demo' ? `<div class="alert info">${I.info}<div class="grow">Origem: ${esc(p.source_note)}</div></div>` : ''}
      <div class="form-grid c2">
        ${field('Nome', `<input class="input" name="name" required maxlength="120" value="${esc(p.name)}">`)}
        ${field('Categoria', `<select class="input" name="category_id" data-type="int">${categories.map((c) => `<option value="${c.id}" ${c.id === p.category_id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>`)}
        ${field('Ingredientes', `<textarea class="input" name="ingredients" maxlength="500" rows="2">${esc(p.ingredients || '')}</textarea>`, { cls: 'full', help: 'Aparece embaixo do nome no cardápio.' })}
        ${field('Descrição', `<textarea class="input" name="description" maxlength="500" rows="2">${esc(p.description || '')}</textarea>`, { cls: 'full' })}
      </div>
      <div class="fld"><span>Imagem</span><div class="img-drop"><div class="prev" id="img-prev">${p.image_url ? `<img src="${esc(p.image_url)}" alt="">` : 'Sem foto'}</div>
        <div class="stack" style="gap:6px"><input type="hidden" name="image_url" value="${esc(p.image_url || '')}"><label class="btn btn-sm">${I.download.replace('M12 4v11M7 10.5l5 5 5-5', 'M12 15V4M7 8.5l5-5 5 5')}Enviar foto<input type="file" accept="image/jpeg,image/png,image/webp" hidden data-upload></label>
        ${p.image_url ? '<button class="btn btn-sm btn-ghost" type="button" data-noimg>Remover foto</button>' : ''}<small class="help muted">JPG, PNG ou WEBP. A imagem é reduzida e otimizada automaticamente.</small></div></div></div>
      <fieldset class="fieldset"><legend>Preço</legend>
        <label class="switch" style="margin-bottom:12px"><input type="checkbox" id="use-sizes" ${useSizes ? 'checked' : ''}> Vender por tamanho (média, grande, família…)</label>
        <div id="single-price" class="form-grid c2 ${useSizes ? 'hidden' : ''}">
          ${field('Preço', `<input class="input" name="price" data-type="money" inputmode="decimal" value="${moneyInput(p.price)}" placeholder="0,00">`)}
          ${field('Preço promocional', `<input class="input" name="promo_price" data-type="money" inputmode="decimal" value="${moneyInput(p.promo_price)}" placeholder="opcional">`)}
        </div>
        <div id="sizes-box" class="${useSizes ? '' : 'hidden'}">
          <div class="size-row size-head"><span>Tamanho</span><span>Fatias</span><span>Sabores</span><span>Preço</span><span>Promo</span><span>Ativo</span><span></span></div>
          <div id="sizes">${p.sizes.map(sizeRowHTML).join('')}</div>
          <button class="btn btn-sm" type="button" id="add-size">${I.plus}Tamanho</button>
          <p class="muted" style="font-size:13px;margin:8px 0 0">"Sabores" é o máximo de sabores na mesma pizza desse tamanho.</p>
        </div>
      </fieldset>
      <fieldset class="fieldset"><legend>Opções de personalização</legend>
        <p class="muted" style="margin:0 0 10px;font-size:13.5px">Use para combos e itens que o cliente monta (ex.: escolher sabores, refrigerante, ponto). Os adicionais pagos ficam na aba Adicionais.</p>
        <div id="groups">${p.options.map(optGroupHTML).join('')}</div>
        <button class="btn btn-sm" type="button" id="add-group">${I.plus}Grupo de opções</button>
      </fieldset>
      <div class="row" style="gap:18px">
        <label class="switch"><input type="checkbox" name="active" ${p.active ? 'checked' : ''}> Ativo no site</label>
        <label class="switch"><input type="checkbox" name="is_featured" ${p.is_featured ? 'checked' : ''}> Destaque na página inicial</label>
        <label class="fld" style="width:120px"><span>Ordem</span><input class="input" name="sort_order" type="number" data-type="int" value="${p.sort_order || 0}"></label>
      </div>
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar produto</button></div>`, { cls: 'modal wide' });
  const f = $('#pf', d);
  $('#use-sizes', d).addEventListener('change', (e) => {
    $('#single-price', d).classList.toggle('hidden', e.target.checked);
    $('#sizes-box', d).classList.toggle('hidden', !e.target.checked);
    if (e.target.checked && !$$('[data-size]', d).length) $('#sizes', d).insertAdjacentHTML('beforeend', sizeRowHTML());
  });
  $('#add-size', d).addEventListener('click', () => $('#sizes', d).insertAdjacentHTML('beforeend', sizeRowHTML()));
  $('#add-group', d).addEventListener('click', () => $('#groups', d).insertAdjacentHTML('beforeend', optGroupHTML()));
  f.addEventListener('click', (e) => {
    if (e.target.closest('[data-rm-size]')) e.target.closest('[data-size]').remove();
    if (e.target.closest('[data-rm-group]')) e.target.closest('[data-group]').remove();
    if (e.target.closest('[data-rm-choice]')) e.target.closest('[data-choice]').remove();
    if (e.target.closest('[data-add-choice]')) $('[data-choices]', e.target.closest('[data-group]')).insertAdjacentHTML('beforeend', choiceHTML({ name: '', price: 0 }));
    if (e.target.closest('[data-noimg]')) { f.elements.image_url.value = ''; $('#img-prev', d).textContent = 'Sem foto'; }
  });
  $('[data-upload]', d).addEventListener('change', async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const fd = new FormData(); fd.append('file', file);
    $('#img-prev', d).textContent = 'Enviando…';
    try { const r = await api('/admin/upload', { method: 'POST', form: fd }); f.elements.image_url.value = r.url; $('#img-prev', d).innerHTML = `<img src="${esc(r.url)}" alt="">`; }
    catch (ex) { toast(ex.message, 'err'); $('#img-prev', d).textContent = 'Sem foto'; }
  });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const body = readForm(f);
    const num = (v) => (v === '' ? null : Number(String(v).replace(/\./g, '').replace(',', '.')));
    body.sizes = $('#use-sizes', d).checked ? $$('[data-size]', d).map((r) => ({
      id: Number($('[data-k=id]', r).value) || null, name: $('[data-k=name]', r).value.trim(), slices: num($('[data-k=slices]', r).value),
      max_flavors: num($('[data-k=max_flavors]', r).value) || 1, price: num($('[data-k=price]', r).value), promo_price: num($('[data-k=promo_price]', r).value), active: $('[data-k=active]', r).checked,
    })) : [];
    if ($('#use-sizes', d).checked && !body.sizes.length) { toast('Adicione pelo menos um tamanho.', 'err'); return; }
    body.options = $$('[data-group]', d).map((g) => ({ name: $('[data-g=name]', g).value.trim(), min: Number($('[data-g=min]', g).value) || 0, max: Number($('[data-g=max]', g).value) || 1,
      choices: $$('[data-choice]', g).map((c) => ({ name: $('[data-c=name]', c).value.trim(), price: num($('[data-c=price]', c).value) || 0 })).filter((c) => c.name) }));
    e.target.classList.add('is-loading');
    try {
      await api(id ? '/admin/products/' + id : '/admin/products', { method: id ? 'PUT' : 'POST', body });
      toast('Produto salvo. O site já mostra a alteração.');
      d.close();
      loadAll();
    } catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

/* ---------------- Adicionais ---------------- */

function drawAddons() {
  const body = $('#tab-body', el);
  const catName = (ids) => ids.length ? ids.map((i) => categories.find((c) => c.id === i)?.name).filter(Boolean).join(', ') : 'Todas';
  body.innerHTML = `
    <div class="filters"><p class="muted" style="margin:0">Adicionais aparecem na montagem dos produtos das categorias escolhidas (ex.: borda recheada nas pizzas).</p><span class="spacer"></span><button class="btn btn-primary" type="button" id="a-new">${I.plus}Novo adicional</button></div>
    <div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>Adicional</th><th>Categorias</th><th class="r">Preço</th><th>Ativo</th><th></th></tr></thead>
    <tbody>${addons.map((a) => `<tr><td><strong>${esc(a.name)}</strong> ${demoTag(a.data_source === 'demo')}${a.description ? `<br><span class="muted">${esc(a.description)}</span>` : ''}</td><td>${esc(catName(a.category_ids))}</td><td class="r num">${brl(a.price)}</td>
      <td>${a.active ? '<span class="tag green">Ativo</span>' : '<span class="tag off">Desativado</span>'}</td>
      <td class="r nowrap"><button class="icon-btn" type="button" data-edit="${a.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" type="button" data-del="${a.id}" aria-label="Excluir">${I.trash}</button></td></tr>`).join('') || '<tr><td colspan="5" class="empty">Nenhum adicional.</td></tr>'}</tbody></table></div></div>`;
  $('#a-new', body).addEventListener('click', () => editAddon(null));
  body.onclick = async (e) => {
    const ed = e.target.closest('[data-edit]'); if (ed) return editAddon(addons.find((a) => a.id === Number(ed.dataset.edit)));
    const del = e.target.closest('[data-del]');
    if (del && await confirmDialog('Excluir este adicional?', { title: 'Excluir adicional', ok: 'Excluir', danger: true })) {
      try { await api('/admin/addons/' + del.dataset.del, { method: 'DELETE' }); toast('Adicional excluído.'); loadAll(); } catch (ex) { toast(ex.message, 'err'); }
    }
  };
  body.onchange = null;
}

function editAddon(a) {
  a = a || { name: '', description: '', price: 0, active: true, sort_order: 0, category_ids: [] };
  const d = openDialog(`${dlgHead(a.id ? 'Editar adicional' : 'Novo adicional')}
    <form class="dlg-body form" id="af" novalidate>
      ${a.data_source === 'demo' ? `<div class="alert">${I.alert}<div class="grow">Adicional de demonstração: confirme nome e preço com a casa.</div></div>` : ''}
      <div class="form-grid c2">
        ${field('Nome', `<input class="input" name="name" required value="${esc(a.name)}">`)}
        ${field('Preço', `<input class="input" name="price" data-type="money" inputmode="decimal" value="${moneyInput(a.price)}">`)}
        ${field('Descrição', `<input class="input" name="description" value="${esc(a.description || '')}">`, { cls: 'full' })}
      </div>
      <div class="fld"><span>Aparece em</span><div class="row">${categories.map((c) => `<label class="check" style="font-weight:500"><input type="checkbox" data-cat="${c.id}" ${a.category_ids.includes(c.id) ? 'checked' : ''}>${esc(c.name)}</label>`).join('')}</div><small class="help">Sem nenhuma marcada, aparece em todas.</small></div>
      <label class="switch"><input type="checkbox" name="active" ${a.active ? 'checked' : ''}> Ativo</label>
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar</button></div>`);
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#af', d);
    const body = readForm(f);
    body.category_ids = $$('[data-cat]', f).filter((x) => x.checked).map((x) => Number(x.dataset.cat));
    e.target.classList.add('is-loading');
    try { await api(a.id ? '/admin/addons/' + a.id : '/admin/addons', { method: a.id ? 'PUT' : 'POST', body }); toast('Adicional salvo.'); d.close(); loadAll(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

exports.render = render;

};
__defs["admin/page-categories"] = function (exports, __req) {
const { api, esc, $, toast } = __req("common");
const { I, openDialog, dlgHead, confirmDialog, readForm, showErrors, field, demoTag } = __req("admin/ui");

let el = null, cats = [], types = {};

async function render(host) { el = host; await load(); }

async function load() {
  const r = await api('/admin/categories');
  cats = r.data; types = r.types;
  el.innerHTML = `
    <div class="filters"><p class="muted" style="margin:0">A ordem aqui é a ordem do cardápio no site. Categorias sem produto ativo não aparecem para o cliente.</p><span class="spacer"></span><button class="btn btn-primary" type="button" id="c-new">${I.plus}Nova categoria</button></div>
    <div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th style="width:90px">Ordem</th><th>Categoria</th><th>Tipo</th><th class="r">Produtos</th><th>Situação</th><th></th></tr></thead>
    <tbody>${cats.map((c, i) => `<tr>
      <td class="nowrap"><button class="icon-btn" type="button" data-move="${i}" data-d="-1" aria-label="Subir" ${i === 0 ? 'disabled' : ''}>${I.up}</button><button class="icon-btn" type="button" data-move="${i}" data-d="1" aria-label="Descer" ${i === cats.length - 1 ? 'disabled' : ''}>${I.down}</button></td>
      <td><strong>${esc(c.name)}</strong> ${demoTag(c.data_source === 'demo')}${c.description ? `<br><span class="muted">${esc(c.description)}</span>` : ''}</td>
      <td>${esc(types[c.type] || c.type)}</td>
      <td class="r num">${c.active_count} ativo(s) de ${c.products_count}</td>
      <td>${c.active ? '<span class="tag green">Visível</span>' : '<span class="tag off">Oculta</span>'}</td>
      <td class="r nowrap"><button class="icon-btn" type="button" data-edit="${c.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" type="button" data-del="${c.id}" aria-label="Excluir">${I.trash}</button></td></tr>`).join('')}</tbody></table></div></div>`;
  $('#c-new', el).addEventListener('click', () => edit(null));
  el.onclick = async (e) => {
    const mv = e.target.closest('[data-move]');
    if (mv) {
      const i = Number(mv.dataset.move), j = i + Number(mv.dataset.d);
      [cats[i], cats[j]] = [cats[j], cats[i]];
      try { await api('/admin/categories/reorder', { method: 'POST', body: { ids: cats.map((c) => c.id) } }); load(); } catch (ex) { toast(ex.message, 'err'); }
      return;
    }
    const ed = e.target.closest('[data-edit]'); if (ed) return edit(cats.find((c) => c.id === Number(ed.dataset.edit)));
    const del = e.target.closest('[data-del]');
    if (del && await confirmDialog('Excluir esta categoria?', { title: 'Excluir categoria', ok: 'Excluir', danger: true })) {
      try { await api('/admin/categories/' + del.dataset.del, { method: 'DELETE' }); toast('Categoria excluída.'); load(); } catch (ex) { toast(ex.message, 'err'); }
    }
  };
}

function edit(c) {
  c = c || { name: '', type: 'pizza', description: '', active: true, sort_order: cats.length + 1 };
  const d = openDialog(`${dlgHead(c.id ? 'Editar categoria' : 'Nova categoria')}
    <form class="dlg-body form" id="cf" novalidate>
      ${field('Nome', `<input class="input" name="name" required maxlength="80" value="${esc(c.name)}">`)}
      ${field('Tipo', `<select class="input" name="type">${Object.entries(types).map(([k, v]) => `<option value="${k}" ${k === c.type ? 'selected' : ''}>${esc(v)}</option>`).join('')}</select>`, { help: 'Pizza e Pizza doce permitem juntar sabores. Adicionais mostra a lista de adicionais no cardápio.' })}
      ${field('Descrição curta', `<input class="input" name="description" maxlength="255" value="${esc(c.description || '')}">`)}
      <input type="hidden" name="sort_order" data-type="int" value="${c.sort_order || 0}">
      <label class="switch"><input type="checkbox" name="active" ${c.active ? 'checked' : ''}> Visível no site</label>
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar</button></div>`, { cls: 'modal narrow' });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#cf', d);
    e.target.classList.add('is-loading');
    try { await api(c.id ? '/admin/categories/' + c.id : '/admin/categories', { method: c.id ? 'PUT' : 'POST', body: readForm(f) }); toast('Categoria salva.'); d.close(); load(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

exports.render = render;

};
__defs["admin/page-customers"] = function (exports, __req) {
const { api, esc, $, toast, fmtDate, fmtPhone, waLink } = __req("common");
const { I, R$, brl, openDialog, dlgHead, readForm, showErrors, field, statusPill, demoTag } = __req("admin/ui");

const state = { q: '', sort: 'recent', page: 1 };
let el = null;

async function render(host) {
  el = host;
  el.innerHTML = `
    <div class="filters">
      <div class="search-input">${I.search}<input class="input" type="search" id="c-q" placeholder="Nome ou telefone" value="${esc(state.q)}"></div>
      <select class="input" id="c-sort"><option value="recent">Pedido mais recente</option><option value="spent">Maior valor gasto</option><option value="orders">Mais pedidos</option><option value="name">Nome (A a Z)</option></select>
    </div>
    <div id="c-list"><div class="card card-pad muted">Carregando…</div></div>`;
  $('#c-sort', el).value = state.sort;
  let t;
  $('#c-q', el).addEventListener('input', (e) => { clearTimeout(t); t = setTimeout(() => { state.q = e.target.value.trim(); state.page = 1; load(); }, 300); });
  $('#c-sort', el).addEventListener('change', (e) => { state.sort = e.target.value; state.page = 1; load(); });
  el.addEventListener('click', (e) => {
    const r = e.target.closest('[data-cust]'); if (r && !e.target.closest('a')) openCustomer(Number(r.dataset.cust));
    const pg = e.target.closest('[data-page]'); if (pg) { state.page = Number(pg.dataset.page); load(); }
  });
  await load();
}

async function load() {
  const box = $('#c-list', el);
  box.classList.add('is-refetching');
  try {
    const r = await api('/admin/customers?' + new URLSearchParams({ q: state.q, sort: state.sort, page: state.page }));
    if (!box.isConnected) return;
    const pages = Math.ceil(r.total / r.per);
    box.innerHTML = `<div class="card"><div class="table-wrap"><table class="tbl">
      <thead><tr><th>Cliente</th><th>Telefone</th><th>Bairro</th><th class="r">Pedidos</th><th class="r">Total gasto</th><th>Último pedido</th></tr></thead>
      <tbody>${r.data.map((c) => `<tr class="click" data-cust="${c.id}"><td><strong>${esc(c.name)}</strong> ${demoTag(c.is_demo)}</td><td class="nowrap">${esc(fmtPhone(c.phone))}</td><td>${esc(c.neighborhood || '')}</td>
        <td class="r num">${c.orders_count}</td><td class="r num nowrap">${brl(c.total_spent)}</td><td class="nowrap">${c.last_order_at ? esc(fmtDate(c.last_order_at)) : '<span class="muted">·</span>'}</td></tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum cliente ainda. Eles aparecem aqui ao fazer o primeiro pedido.</td></tr>'}</tbody></table></div>
      ${pages > 1 ? `<div class="pager"><span>${r.total} cliente(s) · página ${state.page} de ${pages}</span><span class="row"><button class="btn btn-sm" data-page="${state.page - 1}" ${state.page <= 1 ? 'disabled' : ''}>Anterior</button><button class="btn btn-sm" data-page="${state.page + 1}" ${state.page >= pages ? 'disabled' : ''}>Próxima</button></span></div>` : `<div class="pager"><span>${r.total} cliente(s)</span></div>`}</div>`;
  } catch (e) { toast(e.message, 'err'); }
  finally { box.classList.remove('is-refetching'); }
}

async function openCustomer(id) {
  let c;
  try { c = await api('/admin/customers/' + id); } catch (e) { toast(e.message, 'err'); return; }
  const d = openDialog(`${dlgHead(c.name)}
    <div class="dlg-body">
      <div class="row" style="margin-bottom:12px"><a href="tel:+55${esc(c.phone)}">${esc(fmtPhone(c.phone))}</a>${demoTag(c.is_demo)}<span class="spacer"></span><a class="btn btn-sm" href="${waLink('55' + c.phone, `Olá, ${c.name.split(' ')[0]}! Aqui é da Pizzaria Rivoly.`)}" target="_blank" rel="noopener">${I.whatsapp}WhatsApp</a></div>
      <div class="kpis" style="grid-template-columns:repeat(2,minmax(0,1fr))">
        <div class="kpi"><div class="l">Pedidos</div><div class="v">${c.orders_count}</div></div>
        <div class="kpi"><div class="l">Total gasto</div><div class="v">${R$(c.total_spent)}</div></div>
        <div class="kpi"><div class="l">Ticket médio</div><div class="v">${R$(c.avg_ticket)}</div></div>
        <div class="kpi"><div class="l">Último pedido</div><div class="v" style="font-size:16px">${c.last_order_at ? esc(fmtDate(c.last_order_at)) : '·'}</div><div class="s">Cliente desde ${esc(fmtDate(c.created_at, false))}</div></div>
      </div>
      ${c.favorites.length ? `<div class="od-section" style="margin-top:14px"><h3>Mais pede</h3>${c.favorites.map((f) => `<span class="tag" style="margin:0 4px 4px 0">${esc(f.product_name)} · ${f.n}</span>`).join('')}</div>` : ''}
      <div class="od-section"><h3>Endereços</h3>${c.addresses.map((a) => `<p style="margin:4px 0">${esc(`${a.street}, ${a.number}${a.complement ? ' - ' + a.complement : ''} · ${a.neighborhood} · ${a.city}`)}${a.reference ? `<br><span class="muted">Ref.: ${esc(a.reference)}</span>` : ''}</p>`).join('') || '<p class="muted" style="margin:0">Só fez pedidos para retirada.</p>'}</div>
      <form class="od-section form" id="cf" novalidate>
        <h3>Dados</h3>
        <div class="form-grid c2">${field('Nome', `<input class="input" name="name" value="${esc(c.name)}">`)}${field('E-mail', `<input class="input" name="email" type="email" data-type="nullable" value="${esc(c.email || '')}">`)}</div>
        ${field('Anotações internas', `<textarea class="input" name="notes" data-type="nullable" rows="2" placeholder="Ex.: prefere massa bem assada">${esc(c.notes || '')}</textarea>`)}
        <div><button class="btn btn-sm btn-primary" type="button" data-save>Salvar dados</button></div>
      </form>
      <div class="od-section" style="border:0"><h3>Histórico de pedidos</h3>
        <table class="tbl"><tbody>${c.orders.map((o) => `<tr><td><a href="#/pedidos?pedido=${o.id}">#${o.number}</a></td><td class="nowrap">${esc(fmtDate(o.created_at))}</td><td>${statusPill(o.status, o.status_label)}</td><td class="r num nowrap">${brl(o.total)}</td></tr>`).join('')}</tbody></table>
      </div>
    </div>`, { cls: 'drawer' });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#cf', d);
    e.target.classList.add('is-loading');
    try { await api('/admin/customers/' + c.id, { method: 'PUT', body: readForm(f) }); toast('Cliente atualizado.'); load(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); }
    e.target.classList.remove('is-loading');
  });
  d.addEventListener('click', (e) => { if (e.target.closest('a[href^="#/pedidos"]')) d.close(); });
}

exports.render = render;

};
__defs["admin/pdf"] = function (exports, __req) {
/* Exportação em PDF. Usa jsPDF + AutoTable (cdnjs); se a internet bloquear o
 * carregamento, abre a versão para impressão, onde dá para "Salvar como PDF". */
const { esc } = __req("common");

let loading = null;
function loadScript(src) {
  return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = rej; document.head.append(s); });
}
async function ensureJsPDF() {
  if (window.jspdf?.jsPDF?.API?.autoTable) return true;
  loading ||= loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js')
    .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js'));
  try { await loading; return true; } catch { loading = null; return false; }
}

/**
 * sections: [{ title, head: [..], rows: [[..]], align?: ['left','right'] }]
 * kpis: [[label, value], ...]
 */
async function exportPDF({ filename, title, subtitle, kpis = [], sections = [] }) {
  if (await ensureJsPDF()) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'pt', format: 'a4' });
    const green = [31, 122, 61];
    doc.setFillColor(14, 45, 29); doc.rect(0, 0, 595, 64, 'F');
    doc.setTextColor(255, 255, 255); doc.setFont('helvetica', 'bold'); doc.setFontSize(16);
    doc.text('Pizzaria Rivoly', 40, 30);
    doc.setFont('helvetica', 'normal'); doc.setFontSize(10);
    doc.text(`${title}  ·  ${subtitle}`, 40, 48);
    doc.setTextColor(20, 20, 20);
    let y = 90;
    if (kpis.length) {
      doc.autoTable({ startY: y, head: [['Indicador', 'Valor']], body: kpis, theme: 'grid', headStyles: { fillColor: green }, styles: { fontSize: 9.5 }, columnStyles: { 1: { halign: 'right' } }, margin: { left: 40, right: 40 } });
      y = doc.lastAutoTable.finalY + 22;
    }
    sections.forEach((s) => {
      if (y > 740) { doc.addPage(); y = 50; }
      doc.setFont('helvetica', 'bold'); doc.setFontSize(11.5); doc.text(s.title, 40, y); y += 8;
      const colStyles = {};
      (s.align || []).forEach((a, i) => { if (a === 'right') colStyles[i] = { halign: 'right' }; });
      doc.autoTable({ startY: y, head: [s.head], body: s.rows, theme: 'striped', headStyles: { fillColor: green }, styles: { fontSize: 8.5, cellPadding: 4 }, columnStyles: colStyles, margin: { left: 40, right: 40 } });
      y = doc.lastAutoTable.finalY + 24;
    });
    const pages = doc.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      doc.setPage(i); doc.setFontSize(8); doc.setTextColor(130);
      doc.text(`Gerado em ${new Date().toLocaleString('pt-BR')}  ·  página ${i} de ${pages}`, 40, 820);
    }
    doc.save(filename + '.pdf');
    return;
  }
  // Plano B: janela de impressão
  const w = window.open('', '_blank');
  if (!w) { alert('Permita pop-ups para gerar o PDF.'); return; }
  const table = (head, rows, align = []) => `<table><thead><tr>${head.map((h, i) => `<th style="text-align:${align[i] || 'left'}">${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td style="text-align:${align[i] || 'left'}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  w.document.write(`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><title>${esc(filename)}</title><style>
    body{font:12px/1.4 system-ui,sans-serif;color:#111;margin:24px}h1{font-size:18px;margin:0}h2{font-size:14px;margin:18px 0 6px}
    table{width:100%;border-collapse:collapse}th,td{border-bottom:1px solid #ddd;padding:5px 6px}th{background:#1f7a3d;color:#fff}
  </style></head><body><h1>Pizzaria Rivoly · ${esc(title)}</h1><p>${esc(subtitle)}</p>
  ${kpis.length ? table(['Indicador', 'Valor'], kpis, ['left', 'right']) : ''}
  ${sections.map((s) => `<h2>${esc(s.title)}</h2>${table(s.head, s.rows, s.align)}`).join('')}
  <script>window.onload=()=>{window.print()}<\/script></body></html>`);
  w.document.close();
}

exports.exportPDF = exportPDF;

};
__defs["admin/page-finance"] = function (exports, __req) {
const { api, esc, $, $$, toast, fmtDate } = __req("common");
const { I, R$, brl, periodFilterHTML, bindPeriodFilter, periodQS, statusPill, demoTag, openDialog, dlgHead, readForm, showErrors, field, confirmDialog } = __req("admin/ui");
const { columnChart, hbarChart } = __req("admin/charts");
const { exportPDF } = __req("admin/pdf");

const state = { period: 'mes', from: '', to: '', payment: '', type: '', status: '', product_id: '', category_id: '' };
let el = null, data = null;

async function render(host) {
  el = host;
  el.innerHTML = `
    <div class="filters" id="f-period">${periodFilterHTML(state)}</div>
    <div class="filters" id="f-more"></div>
    <div id="f-body"><div class="card card-pad muted">Carregando…</div></div>`;
  bindPeriodFilter($('#f-period', el), state, load);
  await load();
}

function qs() {
  const p = periodQS(state);
  ['payment', 'type', 'status', 'product_id', 'category_id'].forEach((k) => { if (state[k]) p.set(k, state[k]); });
  return p;
}

async function load() {
  const body = $('#f-body', el);
  body.classList.add('is-refetching');
  try { data = await api('/admin/finance?' + qs()); draw(); }
  catch (e) { toast(e.message, 'err'); }
  finally { body.classList.remove('is-refetching'); }
}

function drawFilters() {
  const o = data.options;
  const sel = (k, label, opts) => `<select class="input" data-f="${k}" aria-label="${label}"><option value="">${label}</option>${opts.map(([v, l]) => `<option value="${esc(v)}" ${String(state[k]) === String(v) ? 'selected' : ''}>${esc(l)}</option>`).join('')}</select>`;
  $('#f-more', el).innerHTML = `
    ${sel('payment', 'Toda forma de pagamento', o.payments.map((p) => [p, p]))}
    ${sel('type', 'Entrega e retirada', [['delivery', 'Entrega'], ['pickup', 'Retirada']])}
    ${sel('status', 'Todo status', Object.entries(o.statuses))}
    ${sel('category_id', 'Toda categoria', o.categories.map((c) => [c.id, c.name]))}
    ${sel('product_id', 'Todo produto', o.products.map((c) => [c.id, c.name]))}
    <span class="spacer"></span>
    <div class="row">
      <a class="btn btn-sm" href="/api/admin/export?${qs()}&dataset=pedidos&format=csv">${I.download}CSV</a>
      <a class="btn btn-sm" href="/api/admin/export?${qs()}&dataset=pedidos&format=xlsx">${I.download}Excel</a>
      <button class="btn btn-sm" type="button" id="f-pdf">${I.download}PDF</button>
    </div>`;
  $$('[data-f]', el).forEach((s) => s.addEventListener('change', () => { state[s.dataset.f] = s.value; load(); }));
  $('#f-pdf', el).addEventListener('click', pdf);
}

function draw() {
  if (!$('#f-body', el)) return;
  drawFilters();
  const s = data.summary;
  const filtered = state.product_id || state.category_id;
  $('#f-body', el).innerHTML = `
    ${filtered ? `<div class="alert info">${I.info}<div class="grow">Com filtro de produto ou categoria, os valores consideram só os itens filtrados, com desconto e taxa rateados.</div></div>` : ''}
    <div class="kpis k7">
      <div class="kpi"><div class="l">Faturamento bruto</div><div class="v">${R$(s.gross)}</div><div class="s">Itens + entrega</div></div>
      <div class="kpi"><div class="l">Descontos</div><div class="v">${R$(s.discounts)}</div><div class="s">Cupons e promoções</div></div>
      <div class="kpi"><div class="l">Taxas</div><div class="v">${R$(s.fees)}</div><div class="s">Maquininha e lançamentos</div></div>
      <div class="kpi ${s.cancelled ? 'bad' : ''}"><div class="l">Cancelamentos</div><div class="v">${R$(s.cancelled)}</div><div class="s">${s.cancelled_count} pedido(s)</div></div>
      <div class="kpi hero"><div class="l">Faturamento líquido</div><div class="v">${R$(s.net)}</div><div class="s">Bruto − descontos − taxas</div></div>
      <div class="kpi"><div class="l">Pedidos</div><div class="v">${s.orders}</div><div class="s">Sem cancelados</div></div>
      <div class="kpi"><div class="l">Ticket médio</div><div class="v">${R$(s.avg_ticket)}</div><div class="s">Entrega recebida ${brl(s.delivery_fees)}</div></div>
    </div>
    <div class="grid grid-2" style="margin-top:14px">
      <div class="card chart-card span-2"><div class="card-head"><h2>Faturamento por dia</h2><span class="sub">${esc(data.period.label)}</span></div><div class="chart" id="fc-daily"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Por forma de pagamento</h2></div><div class="chart" id="fc-pay"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Por categoria</h2></div><div class="chart" id="fc-cat"></div></div>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="card-head"><h2>Pedidos do período</h2><span class="sub">${data.orders_total} pedido(s)${data.orders_total > 500 ? ' · mostrando 500, exporte para ver todos' : ''}</span></div>
      <div class="table-wrap" style="max-height:520px"><table class="tbl"><thead><tr><th>Pedido</th><th>Data</th><th>Cliente</th><th>Tipo</th><th>Pagamento</th><th>Status</th><th class="r">Bruto</th><th class="r">Desconto</th><th class="r">Taxa</th><th class="r">Total</th></tr></thead>
      <tbody>${data.orders.map((o) => `<tr><td><a href="#/pedidos?pedido=${o.id}">#${o.number}</a> ${demoTag(o.is_demo)}</td><td class="nowrap">${esc(fmtDate(o.created_at))}</td><td>${esc(o.customer_name)}</td><td>${o.order_type === 'delivery' ? 'Entrega' : 'Retirada'}</td>
        <td>${esc(o.payment_method_name)}</td><td>${statusPill(o.status, o.status_label)}</td><td class="r num">${brl(o.gross)}</td><td class="r num">${o.discount ? brl(o.discount) : '·'}</td><td class="r num">${o.fees ? brl(o.fees) : '·'}</td><td class="r num"><strong>${brl(o.total)}</strong></td></tr>`).join('') || '<tr><td colspan="10" class="empty">Nenhum pedido no período.</td></tr>'}</tbody></table></div>
    </div>
    <div class="card" style="margin-top:14px">
      <div class="card-head"><h2>Lançamentos financeiros</h2><span class="sub">Receitas de pedidos pagos, estornos e lançamentos manuais</span><span class="spacer"></span><button class="btn btn-sm btn-primary" type="button" id="rec-new">${I.plus}Lançar taxa ou ajuste</button></div>
      <div class="table-wrap" style="max-height:420px"><table class="tbl"><thead><tr><th>Data</th><th>Tipo</th><th>Descrição</th><th>Forma</th><th class="r">Valor</th><th></th></tr></thead>
      <tbody>${data.records.map((r) => `<tr><td class="nowrap">${esc(fmtDate(r.occurred_at))}</td><td>${{ receita: '<span class="tag green">Receita</span>', estorno: '<span class="tag" style="color:var(--red-2)">Estorno</span>', taxa: '<span class="tag">Taxa</span>', ajuste: '<span class="tag">Ajuste</span>', despesa: '<span class="tag">Despesa</span>' }[r.type] || esc(r.type)} ${demoTag(r.is_demo)}</td>
        <td>${esc(r.description)}${r.user_name ? `<br><span class="muted">${esc(r.user_name)}</span>` : ''}</td><td>${esc(r.payment_method_name || '')}</td><td class="r num">${['receita'].includes(r.type) ? '' : '− '}${brl(r.amount)}</td>
        <td class="r">${!r.order_id ? `<button class="icon-btn" type="button" data-del-rec="${r.id}" aria-label="Excluir">${I.trash}</button>` : ''}</td></tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhum lançamento no período.</td></tr>'}</tbody></table></div>
    </div>`;
  columnChart($('#fc-daily', el), data.daily, { label: (r) => new Date(r.date + 'T12:00').toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: '2-digit' }), tickLabel: (r) => r.date.slice(8, 10) + '/' + r.date.slice(5, 7), value: (r) => r.revenue, fmt: brl, peakFmt: brl, extra: (r) => `${r.orders} pedido(s)`, labelName: 'Dia', valueName: 'Faturamento', height: 240 });
  hbarChart($('#fc-pay', el), data.by_payment, { label: (r) => r.key, value: (r) => r.revenue, fmt: brl, sub: (r) => `${r.orders} pedido(s)`, labelName: 'Forma', valueName: 'Faturamento' });
  hbarChart($('#fc-cat', el), data.by_category, { label: (r) => r.name, value: (r) => r.revenue, fmt: brl, sub: (r) => `${r.quantity} un.`, labelName: 'Categoria', valueName: 'Faturamento' });
  $('#rec-new', el).addEventListener('click', newRecord);
  $('#f-body', el).onclick = async (e) => {
    const b = e.target.closest('[data-del-rec]');
    if (b && await confirmDialog('Excluir este lançamento manual?', { title: 'Excluir lançamento', ok: 'Excluir', danger: true })) {
      try { await api('/admin/finance/records/' + b.dataset.delRec, { method: 'DELETE' }); toast('Lançamento excluído.'); load(); } catch (ex) { toast(ex.message, 'err'); }
    }
  };
}

function newRecord() {
  const now = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().slice(0, 16);
  const d = openDialog(`${dlgHead('Lançamento manual')}
    <form class="dlg-body form" id="rf" novalidate>
      ${field('Tipo', '<select class="input" name="type"><option value="taxa">Taxa (maquininha, aplicativo, banco)</option><option value="ajuste">Ajuste</option><option value="despesa">Despesa</option></select>', { help: 'Taxas entram no cálculo do faturamento líquido.' })}
      ${field('Descrição', '<input class="input" name="description" required maxlength="255" placeholder="Ex.: taxa da maquininha de setembro">')}
      <div class="form-grid c2">${field('Valor', '<input class="input" name="amount" data-type="money" inputmode="decimal" required placeholder="0,00">')}${field('Data', `<input class="input" type="datetime-local" name="occurred_at" value="${now}">`)}</div>
      ${field('Forma de pagamento (opcional)', '<input class="input" name="payment_method_name" data-type="nullable">')}
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Lançar</button></div>`, { cls: 'modal narrow' });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#rf', d);
    e.target.classList.add('is-loading');
    try { await api('/admin/finance/records', { method: 'POST', body: readForm(f) }); toast('Lançamento registrado.'); d.close(); load(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

function pdf() {
  const s = data.summary;
  exportPDF({
    filename: `rivoly-faturamento-${data.period.from}-${data.period.to}`,
    title: 'Faturamento',
    subtitle: data.period.label,
    kpis: [['Faturamento bruto', brl(s.gross)], ['Descontos', brl(s.discounts)], ['Taxas', brl(s.fees)], ['Cancelamentos', `${brl(s.cancelled)} (${s.cancelled_count})`], ['Faturamento líquido', brl(s.net)], ['Pedidos', String(s.orders)], ['Ticket médio', brl(s.avg_ticket)]],
    sections: [
      { title: 'Por forma de pagamento', head: ['Forma', 'Pedidos', 'Faturamento'], rows: data.by_payment.map((r) => [r.key, r.orders, brl(r.revenue)]), align: ['left', 'right', 'right'] },
      { title: 'Por dia', head: ['Dia', 'Pedidos', 'Faturamento'], rows: data.daily.filter((d) => d.orders).map((d) => [d.date.split('-').reverse().join('/'), d.orders, brl(d.revenue)]), align: ['left', 'right', 'right'] },
      { title: 'Pedidos', head: ['Pedido', 'Data', 'Cliente', 'Pagamento', 'Status', 'Total'], rows: data.orders.map((o) => ['#' + o.number, fmtDate(o.created_at), o.customer_name, o.payment_method_name, o.status_label, brl(o.total)]), align: ['left', 'left', 'left', 'left', 'left', 'right'] },
    ],
  });
}

exports.render = render;

};
__defs["admin/page-reports"] = function (exports, __req) {
const { api, esc, $, toast, fmtPhone } = __req("common");
const { I, R$, brl, periodFilterHTML, bindPeriodFilter, periodQS } = __req("admin/ui");
const { columnChart, hbarChart } = __req("admin/charts");
const { exportPDF } = __req("admin/pdf");

const state = { period: '30d', from: '', to: '' };
let el = null, data = null;

async function render(host) {
  el = host;
  el.innerHTML = `<div class="filters" id="r-period">${periodFilterHTML(state)}<span class="spacer"></span><button class="btn btn-sm" type="button" id="r-pdf">${I.download}Relatório em PDF</button></div><div id="r-body"><div class="card card-pad muted">Carregando…</div></div>`;
  bindPeriodFilter($('#r-period', el), state, load);
  $('#r-pdf', el).addEventListener('click', pdf);
  await load();
}

async function load() {
  const b = $('#r-body', el);
  b.classList.add('is-refetching');
  try { data = await api('/admin/reports?' + periodQS(state)); draw(); } catch (e) { toast(e.message, 'err'); }
  finally { b.classList.remove('is-refetching'); }
}

const exp = (dataset) => `<span class="row"><a class="btn btn-sm" href="/api/admin/export?${periodQS(state)}&dataset=${dataset}&format=csv">${I.download}CSV</a><a class="btn btn-sm" href="/api/admin/export?${periodQS(state)}&dataset=${dataset}&format=xlsx">${I.download}Excel</a></span>`;

function draw() {
  if (!$('#r-body', el)) return;
  const s = data.summary;
  $('#r-body', el).innerHTML = `
    <div class="kpis">
      <div class="kpi"><div class="l">Faturamento</div><div class="v">${R$(s.revenue)}</div><div class="s">${esc(data.period.label)}</div></div>
      <div class="kpi"><div class="l">Pedidos</div><div class="v">${s.orders}</div><div class="s">Ticket médio ${brl(s.avg_ticket)}</div></div>
      <div class="kpi"><div class="l">Clientes novos</div><div class="v">${s.new_customers}</div><div class="s">Primeiro pedido no período</div></div>
      <div class="kpi"><div class="l">Entrega x retirada</div><div class="v" style="font-size:19px">${data.types.map((t) => `${t.orders} ${t.key.toLowerCase()}`).join(' · ') || '·'}</div></div>
    </div>
    <div class="grid grid-2" style="margin-top:14px">
      <div class="card"><div class="card-head"><h2>Vendas por produto</h2>${exp('produtos')}</div>
        <div class="table-wrap" style="max-height:420px"><table class="tbl"><thead><tr><th>Produto</th><th>Categoria</th><th class="r">Qtd.</th><th class="r">Faturamento</th></tr></thead>
        <tbody>${data.products.map((p) => `<tr><td>${esc(p.name)}</td><td class="muted">${esc(p.category || '')}</td><td class="r num">${p.quantity}</td><td class="r num">${brl(p.revenue)}</td></tr>`).join('') || '<tr><td colspan="4" class="empty">Sem vendas.</td></tr>'}</tbody></table></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Sabores que mais saem</h2><span class="sub">Conta também as pizzas com mais de um sabor</span></div><div class="chart" id="r-flav"></div></div>
      <div class="card"><div class="card-head"><h2>Vendas por categoria</h2>${exp('categorias')}</div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>Categoria</th><th class="r">Qtd.</th><th class="r">Faturamento</th></tr></thead>
        <tbody>${data.categories.map((c) => `<tr><td>${esc(c.name)}</td><td class="r num">${c.quantity}</td><td class="r num">${brl(c.revenue)}</td></tr>`).join('') || '<tr><td colspan="3" class="empty">Sem vendas.</td></tr>'}</tbody></table></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Tamanhos de pizza</h2></div><div class="chart" id="r-size"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Pedidos por horário</h2></div><div class="chart" id="r-hour"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Pedidos por dia da semana</h2></div><div class="chart" id="r-week"></div></div>
      <div class="card chart-card"><div class="card-head"><h2>Entregas por bairro</h2></div><div class="chart" id="r-nb"></div></div>
      <div class="card"><div class="card-head"><h2>Melhores clientes</h2>${exp('clientes')}</div>
        <div class="table-wrap"><table class="tbl"><thead><tr><th>Cliente</th><th>Telefone</th><th class="r">Pedidos</th><th class="r">Total</th></tr></thead>
        <tbody>${data.customers.map((c) => `<tr><td>${esc(c.name)}</td><td class="nowrap">${esc(fmtPhone(c.phone))}</td><td class="r num">${c.orders}</td><td class="r num">${brl(c.revenue)}</td></tr>`).join('') || '<tr><td colspan="4" class="empty">Sem pedidos.</td></tr>'}</tbody></table></div></div>
    </div>
    <div class="card card-pad" style="margin-top:14px"><div class="row"><strong>Exportar pedidos e faturamento do período</strong><span class="spacer"></span>${exp('pedidos')}<a class="btn btn-sm" href="/api/admin/export?${periodQS(state)}&dataset=faturamento&format=xlsx">${I.download}Resumo financeiro (Excel)</a></div></div>`;
  hbarChart($('#r-flav', el), data.flavors.slice(0, 12), { label: (r) => r.name, value: (r) => r.quantity, fmt: (v) => `${v} pizza(s)`, labelName: 'Sabor', valueName: 'Pizzas' });
  hbarChart($('#r-size', el), data.sizes, { label: (r) => r.name, value: (r) => r.quantity, fmt: (v) => `${v} un.`, sub: (r) => brl(r.revenue), labelName: 'Tamanho', valueName: 'Quantidade' });
  columnChart($('#r-hour', el), data.hourly, { label: (r) => r.label, value: (r) => r.orders, fmt: (v) => `${v} pedido(s)`, peakFmt: String, labelName: 'Hora', valueName: 'Pedidos' });
  columnChart($('#r-week', el), data.weekday, { label: (r) => r.label, value: (r) => r.orders, fmt: (v) => `${v} pedido(s)`, peakFmt: String, extra: (r) => brl(r.revenue), labelName: 'Dia', valueName: 'Pedidos' });
  hbarChart($('#r-nb', el), data.neighborhoods.slice(0, 12), { label: (r) => r.key, value: (r) => r.orders, fmt: (v) => `${v} entrega(s)`, sub: (r) => brl(r.revenue), labelName: 'Bairro', valueName: 'Entregas', empty: 'Sem entregas no período.' });
}

function pdf() {
  if (!data) return;
  const s = data.summary;
  exportPDF({
    filename: `rivoly-relatorio-${data.period.from}-${data.period.to}`,
    title: 'Relatório de vendas', subtitle: data.period.label,
    kpis: [['Faturamento', brl(s.revenue)], ['Pedidos', String(s.orders)], ['Ticket médio', brl(s.avg_ticket)], ['Clientes novos', String(s.new_customers)], ['Cancelamentos', `${brl(s.cancelled)} (${s.cancelled_count})`]],
    sections: [
      { title: 'Vendas por produto', head: ['Produto', 'Categoria', 'Qtd.', 'Faturamento'], rows: data.products.map((p) => [p.name, p.category || '', p.quantity, brl(p.revenue)]), align: ['left', 'left', 'right', 'right'] },
      { title: 'Vendas por categoria', head: ['Categoria', 'Qtd.', 'Faturamento'], rows: data.categories.map((c) => [c.name, c.quantity, brl(c.revenue)]), align: ['left', 'right', 'right'] },
      { title: 'Sabores', head: ['Sabor', 'Pizzas'], rows: data.flavors.map((f) => [f.name, f.quantity]), align: ['left', 'right'] },
      { title: 'Entregas por bairro', head: ['Bairro', 'Entregas', 'Faturamento'], rows: data.neighborhoods.map((n) => [n.key, n.orders, brl(n.revenue)]), align: ['left', 'right', 'right'] },
      { title: 'Melhores clientes', head: ['Cliente', 'Pedidos', 'Total'], rows: data.customers.map((c) => [c.name, c.orders, brl(c.revenue)]), align: ['left', 'right', 'right'] },
    ],
  });
}

exports.render = render;

};
__defs["admin/page-promotions"] = function (exports, __req) {
const { api, esc, $, toast, fmtDate } = __req("common");
const { I, brl, openDialog, dlgHead, confirmDialog, readForm, showErrors, field, moneyInput, demoTag } = __req("admin/ui");

let el = null, list = [], cats = [];
const TYPE = { percent: 'Desconto em %', fixed: 'Desconto em R$', free_delivery: 'Entrega grátis' };

async function render(host) { el = host; await load(); }

async function load() {
  const [p, c] = await Promise.all([api('/admin/promotions'), api('/admin/categories')]);
  list = p.data; cats = c.data;
  const val = (p) => p.type === 'percent' ? `${Number(p.value).toLocaleString('pt-BR')}%` : p.type === 'fixed' ? brl(p.value) : 'Frete grátis';
  el.innerHTML = `
    <div class="filters"><p class="muted" style="margin:0;max-width:640px">Com cupom, o cliente digita o código no carrinho. Sem cupom, a promoção vale sozinha para todo pedido que cumprir as regras (a de maior desconto ganha).</p><span class="spacer"></span><button class="btn btn-primary" type="button" id="pr-new">${I.plus}Nova promoção</button></div>
    <div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>Promoção</th><th>Tipo</th><th>Cupom</th><th>Regras</th><th>Validade</th><th class="r">Usos</th><th>Situação</th><th></th></tr></thead>
    <tbody>${list.map((p) => `<tr>
      <td><strong>${esc(p.name)}</strong> ${demoTag(p.data_source === 'demo')}${p.description ? `<br><span class="muted">${esc(p.description)}</span>` : ''}</td>
      <td class="nowrap">${TYPE[p.type]}<br><strong>${val(p)}</strong></td>
      <td>${p.code ? `<code>${esc(p.code)}</code>` : '<span class="muted">automática</span>'}</td>
      <td style="font-size:13.5px">${p.min_order ? `Mínimo ${brl(p.min_order)}` : 'Sem mínimo'}${p.category_name ? `<br>Só ${esc(p.category_name)}` : ''}${p.show_on_site ? '<br>Anunciada no site' : ''}</td>
      <td class="nowrap" style="font-size:13.5px">${p.starts_at ? 'De ' + esc(fmtDate(p.starts_at)) : 'Sem início'}<br>${p.ends_at ? 'Até ' + esc(fmtDate(p.ends_at)) : 'Sem fim'}</td>
      <td class="r num">${p.used_count}${p.usage_limit ? ' / ' + p.usage_limit : ''}</td>
      <td>${p.running ? '<span class="tag green">Valendo</span>' : p.active ? '<span class="tag">Fora do período</span>' : '<span class="tag off">Desativada</span>'}</td>
      <td class="r nowrap"><button class="icon-btn" type="button" data-edit="${p.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" type="button" data-del="${p.id}" aria-label="Excluir">${I.trash}</button></td></tr>`).join('') || '<tr><td colspan="8" class="empty">Nenhuma promoção cadastrada.</td></tr>'}</tbody></table></div></div>`;
  $('#pr-new', el).addEventListener('click', () => edit(null));
  el.onclick = async (e) => {
    const ed = e.target.closest('[data-edit]'); if (ed) return edit(list.find((p) => p.id === Number(ed.dataset.edit)));
    const del = e.target.closest('[data-del]');
    if (del && await confirmDialog('Excluir esta promoção? Pedidos antigos continuam com o desconto registrado.', { title: 'Excluir promoção', ok: 'Excluir', danger: true })) {
      try { await api('/admin/promotions/' + del.dataset.del, { method: 'DELETE' }); toast('Promoção excluída.'); load(); } catch (ex) { toast(ex.message, 'err'); }
    }
  };
}

const dtl = (s) => (s ? s.replace(' ', 'T').slice(0, 16) : '');

function edit(p) {
  p = p || { name: '', description: '', type: 'percent', value: 10, code: '', min_order: 0, category_id: null, starts_at: null, ends_at: null, usage_limit: null, show_on_site: true, active: true };
  const d = openDialog(`${dlgHead(p.id ? 'Editar promoção' : 'Nova promoção')}
    <form class="dlg-body form" id="prf" novalidate>
      <div class="form-grid c2">
        ${field('Nome', `<input class="input" name="name" required value="${esc(p.name)}" placeholder="Ex.: Quarta da família">`, { cls: 'full' })}
        ${field('Descrição (aparece no site)', `<input class="input" name="description" data-type="nullable" value="${esc(p.description || '')}">`, { cls: 'full' })}
        ${field('Tipo', `<select class="input" name="type">${Object.entries(TYPE).map(([k, v]) => `<option value="${k}" ${k === p.type ? 'selected' : ''}>${v}</option>`).join('')}</select>`)}
        ${field('Valor', `<input class="input" name="value" data-type="money" inputmode="decimal" value="${moneyInput(p.value)}">`, { help: 'Percentual ou valor em reais. Ignorado em entrega grátis.' })}
        ${field('Cupom', `<input class="input" name="code" data-type="nullable" value="${esc(p.code || '')}" style="text-transform:uppercase" placeholder="Vazio = automática">`)}
        ${field('Pedido mínimo', `<input class="input" name="min_order" data-type="money" inputmode="decimal" value="${moneyInput(p.min_order)}">`)}
        ${field('Só na categoria', `<select class="input" name="category_id" data-type="int"><option value="">Pedido inteiro</option>${cats.map((c) => `<option value="${c.id}" ${c.id === p.category_id ? 'selected' : ''}>${esc(c.name)}</option>`).join('')}</select>`)}
        ${field('Limite de usos', `<input class="input" name="usage_limit" type="number" min="1" data-type="int" value="${p.usage_limit ?? ''}" placeholder="Sem limite">`)}
        ${field('Começa em', `<input class="input" type="datetime-local" name="starts_at" data-type="nullable" value="${dtl(p.starts_at)}">`)}
        ${field('Termina em', `<input class="input" type="datetime-local" name="ends_at" data-type="nullable" value="${dtl(p.ends_at)}">`)}
      </div>
      <div class="row" style="gap:18px"><label class="switch"><input type="checkbox" name="active" ${p.active ? 'checked' : ''}> Ativa</label><label class="switch"><input type="checkbox" name="show_on_site" ${p.show_on_site ? 'checked' : ''}> Anunciar no site</label></div>
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar</button></div>`);
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#prf', d);
    e.target.classList.add('is-loading');
    try { await api(p.id ? '/admin/promotions/' + p.id : '/admin/promotions', { method: p.id ? 'PUT' : 'POST', body: readForm(f) }); toast('Promoção salva.'); d.close(); load(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

exports.render = render;

};
__defs["admin/page-settings"] = function (exports, __req) {
const { api, esc, $, $$, toast, WEEKDAYS } = __req("common");
const { I, brl, openDialog, dlgHead, confirmDialog, readForm, showErrors, field, moneyInput, demoTag } = __req("admin/ui");
const { refreshStoreSwitch } = __req("admin/bus");

const TABS = [['loja', 'Dados da loja'], ['horarios', 'Horários'], ['entrega', 'Entrega e pedidos'], ['pagamentos', 'Pagamentos'], ['site', 'Conteúdo do site'], ['avaliacoes', 'Avaliações'], ['galeria', 'Galeria'], ['demo', 'Dados de demonstração']];
let el = null, data = null, tab = 'loja';

async function render(host) {
  el = host;
  const m = location.hash.match(/aba=([\w-]+)/);
  tab = m && TABS.some((t) => t[0] === m[1]) ? m[1] : 'loja';
  await load();
}

async function load() { data = await api('/admin/settings'); draw(); }

function draw() {
  el.innerHTML = `<div class="tabs">${TABS.map(([k, l]) => `<button type="button" data-tab="${k}" class="${tab === k ? 'on' : ''}">${l}</button>`).join('')}</div><div id="s-body"></div>`;
  $$('[data-tab]', el).forEach((b) => b.addEventListener('click', () => { tab = b.dataset.tab; history.replaceState(null, '', '#/configuracoes?aba=' + tab); draw(); }));
  ({ loja, horarios, entrega, pagamentos, site, avaliacoes, galeria, demo })[tab]($('#s-body', el));
}

const S = () => data.settings;
const inp = (name, extra = '') => `<input class="input" name="${name}" value="${esc(S()[name] ?? '')}" ${extra}>`;
const area = (name, rows = 3) => `<textarea class="input" name="${name}" rows="${rows}">${esc(S()[name] ?? '')}</textarea>`;
const sw = (name, label) => `<label class="switch"><input type="checkbox" name="${name}" ${S()[name] ? 'checked' : ''}> ${esc(label)}</label>`;

function settingsForm(host, inner, collect) {
  host.innerHTML = `<form class="card card-pad form" id="sf" novalidate>${inner}<div><button class="btn btn-primary" type="submit">Salvar alterações</button></div></form>`;
  const f = $('#sf', host);
  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type=submit]', f);
    const body = collect ? collect(f) : readForm(f);
    btn.classList.add('is-loading');
    try {
      const r = await api('/admin/settings', { method: 'PUT', body });
      data.settings = r.settings;
      refreshStoreSwitch(r.store_status);
      toast('Salvo. O site já mostra as alterações.');
    } catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); }
    btn.classList.remove('is-loading');
  });
  return f;
}

/* ---------- Dados da loja ---------- */
function loja(host) {
  settingsForm(host, `
    <div class="form-grid c2">
      ${field('Nome da loja', inp('store_name', 'required'))}
      ${field('Frase de apresentação', inp('tagline'), { help: 'Do Instagram: "Essência da Itália".' })}
      ${field('Categoria', inp('category_label'))}
      ${field('Telefone exibido', inp('phone'))}
      ${field('WhatsApp (com DDD)', inp('whatsapp', 'inputmode="tel"'), { help: 'Só números. Ex.: 5571992902891' })}
      ${field('E-mail (opcional)', inp('email', 'type="email"'))}
      ${field('Instagram (usuário)', inp('instagram_user'))}
      ${field('Link do Google Maps', inp('maps_url'))}
    </div>
    <fieldset class="fieldset"><legend>Endereço</legend><div class="form-grid c3">
      ${field('Rua', inp('address_street'))}${field('Número', inp('address_number'))}${field('Bairro', inp('address_neighborhood'))}
      ${field('Cidade', inp('address_city'))}${field('UF', inp('address_state', 'maxlength="2"'))}${field('CEP', inp('address_zip'))}
      ${field('Latitude', inp('latitude'))}${field('Longitude', inp('longitude'))}${field('Referência', inp('address_reference'))}
    </div><p class="muted" style="margin:8px 0 0;font-size:13px">Latitude e longitude posicionam o mapa e o botão "Como chegar". Os valores atuais vieram do Google Maps.</p></fieldset>
    <fieldset class="fieldset"><legend>Avaliação no Google</legend><div class="form-grid c2">
      ${field('Nota', inp('google_rating'), { help: 'Como aparece no Google. Ex.: 4,8' })}${field('Quantidade de avaliações', inp('google_reviews_count'))}
    </div></fieldset>`);
}

/* ---------- Horários ---------- */
function horarios(host) {
  const h = S().hours_json || {};
  const rowHTML = (d) => {
    const ranges = h[d] || [];
    return `<tr data-day="${d}"><td><strong>${WEEKDAYS[d]}</strong></td><td><label class="switch"><input type="checkbox" data-open ${ranges.length ? 'checked' : ''}> Abre</label></td>
      <td><input class="input" type="time" data-a value="${ranges[0]?.[0] || '17:30'}" ${ranges.length ? '' : 'disabled'} aria-label="Abre às"></td>
      <td><input class="input" type="time" data-b value="${ranges[0]?.[1] || '23:00'}" ${ranges.length ? '' : 'disabled'} aria-label="Fecha às"></td></tr>`;
  };
  const f = settingsForm(host, `
    ${S().hours_note ? `<div class="alert info">${I.info}<div class="grow">${esc(S().hours_note)}</div></div>` : ''}
    <div class="table-wrap"><table class="tbl" style="max-width:620px"><thead><tr><th>Dia</th><th></th><th>Abre</th><th>Fecha</th></tr></thead><tbody>${[1, 2, 3, 4, 5, 6, 0].map(rowHTML).join('')}</tbody></table></div>
    <p class="muted" style="margin:0;font-size:13px">Se fechar depois da meia-noite, é só colocar o horário (ex.: abre 18:00, fecha 01:00).</p>
    ${field('Recebimento de pedidos pelo site', `<select class="input" name="order_mode"><option value="auto">Seguir o horário acima</option><option value="open">Forçar aberto</option><option value="closed">Forçar fechado</option></select>`)}
    ${field('Mensagem quando estiver fechado', area('closed_message', 2))}
    ${field('Aviso no topo do site (opcional)', inp('announcement', 'maxlength="160" placeholder="Ex.: Hoje abrimos às 19h"'))}
    ${field('Anotação interna sobre o horário', area('hours_note', 2))}`,
  (form) => {
    const hours = {};
    $$('[data-day]', form).forEach((r) => { hours[r.dataset.day] = $('[data-open]', r).checked ? [[$('[data-a]', r).value, $('[data-b]', r).value]] : []; });
    return { ...readForm(form), hours_json: hours };
  });
  f.elements.order_mode.value = S().order_mode || 'auto';
  f.addEventListener('change', (e) => { if (e.target.matches('[data-open]')) { const r = e.target.closest('tr'); $('[data-a]', r).disabled = $('[data-b]', r).disabled = !e.target.checked; } });
}

/* ---------- Entrega ---------- */
function entrega(host) {
  const demoFee = data.settings.demo_flags_json?.delivery_fee_default;
  host.innerHTML = `<div id="e-form"></div>
    <div class="card" style="margin-top:14px"><div class="card-head"><h2>Taxa por bairro</h2><span class="sub">Quando o bairro do cliente está aqui, vale esta taxa</span><span class="spacer"></span><button class="btn btn-sm btn-primary" type="button" id="z-new">${I.plus}Bairro</button></div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Bairro</th><th class="r">Taxa</th><th>Situação</th><th></th></tr></thead>
    <tbody>${data.delivery_zones.map((z) => `<tr><td>${esc(z.neighborhood)}</td><td class="r num">${brl(z.fee)}</td><td>${z.active ? '<span class="tag green">Ativo</span>' : '<span class="tag off">Desativado</span>'}</td><td class="r nowrap"><button class="icon-btn" data-z-edit="${z.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" data-z-del="${z.id}" aria-label="Excluir">${I.trash}</button></td></tr>`).join('') || '<tr><td colspan="4" class="empty">Nenhum bairro cadastrado. Todos os pedidos usam a taxa padrão.</td></tr>'}</tbody></table></div></div>`;
  const f = settingsForm($('#e-form', host), `
    ${demoFee ? `<div class="alert">${I.alert}<div class="grow">A taxa padrão de R$ 5,00 é de demonstração: a casa não publicou o valor. Altere para o valor real, ou marque a confirmação abaixo se R$ 5,00 estiver certo.<br><label class="check" style="margin-top:6px"><input type="checkbox" name="delivery_fee_confirmed"> Confirmo que a taxa padrão está correta</label></div></div>` : ''}
    <div class="row" style="gap:18px">${sw('delivery_enabled', 'Fazer entregas')}${sw('pickup_enabled', 'Aceitar retirada no balcão')}${sw('delivery_only_zones', 'Entregar só nos bairros cadastrados')}</div>
    <div class="form-grid c3">
      ${field('Taxa de entrega padrão', `<input class="input" name="delivery_fee_default" data-type="money" inputmode="decimal" value="${moneyInput(S().delivery_fee_default)}">`)}
      ${field('Pedido mínimo', `<input class="input" name="min_order" data-type="money" inputmode="decimal" value="${moneyInput(S().min_order)}">`, { help: 'Anota AI da casa: R$ 5,00.' })}
      ${field('Regra de preço com vários sabores', `<select class="input" name="pizza_price_rule"><option value="max">Cobra o sabor mais caro</option><option value="avg">Cobra a média dos sabores</option></select>`)}
      ${field('Tempo de entrega (texto)', inp('delivery_time', 'placeholder="Ex.: 40 a 60 min"'))}
      ${field('Tempo de retirada (texto)', inp('pickup_time', 'placeholder="Ex.: 25 a 35 min"'))}
    </div>`);
  f.elements.pizza_price_rule.value = S().pizza_price_rule || 'max';
  $('#z-new', host).addEventListener('click', () => zoneDialog(null));
  host.addEventListener('click', async (e) => {
    const ed = e.target.closest('[data-z-edit]'); if (ed) return zoneDialog(data.delivery_zones.find((z) => z.id === Number(ed.dataset.zEdit)));
    const del = e.target.closest('[data-z-del]');
    if (del && await confirmDialog('Excluir este bairro?', { title: 'Excluir bairro', ok: 'Excluir', danger: true })) {
      try { await api('/admin/delivery-zones/' + del.dataset.zDel, { method: 'DELETE' }); toast('Bairro excluído.'); await load(); } catch (ex) { toast(ex.message, 'err'); }
    }
  });
}

function crudDialog({ title, html, url, id, onDone }) {
  const d = openDialog(`${dlgHead(title)}<form class="dlg-body form" id="cd" novalidate>${html}</form><div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar</button></div>`, { cls: 'modal narrow' });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#cd', d);
    e.target.classList.add('is-loading');
    try { await api(id ? `${url}/${id}` : url, { method: id ? 'PUT' : 'POST', body: readForm(f) }); toast('Salvo.'); d.close(); await load(); onDone?.(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
  return d;
}

function zoneDialog(z) {
  z = z || { neighborhood: '', fee: 0, active: true };
  crudDialog({ title: z.id ? 'Editar bairro' : 'Novo bairro', url: '/admin/delivery-zones', id: z.id, html: `
    ${field('Bairro', `<input class="input" name="neighborhood" required value="${esc(z.neighborhood)}">`)}
    ${field('Taxa de entrega', `<input class="input" name="fee" data-type="money" inputmode="decimal" value="${moneyInput(z.fee)}">`)}
    <label class="switch"><input type="checkbox" name="active" ${z.active ? 'checked' : ''}> Ativo</label>` });
}

/* ---------- Pagamentos ---------- */
function pagamentos(host) {
  host.innerHTML = `<div id="pix-form"></div>
    <div class="card" style="margin-top:14px"><div class="card-head"><h2>Formas de pagamento</h2><span class="sub">Aparecem no checkout na ordem abaixo</span><span class="spacer"></span><button class="btn btn-sm btn-primary" type="button" id="pm-new">${I.plus}Forma de pagamento</button></div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Nome</th><th>Tipo</th><th>Instruções</th><th class="r">Taxa</th><th>Troco</th><th>Situação</th><th></th></tr></thead>
    <tbody>${data.payment_methods.map((m) => `<tr><td><strong>${esc(m.name)}</strong> ${demoTag(m.data_source === 'demo')}</td><td>${esc({ dinheiro: 'Dinheiro', cartao: 'Cartão', pix: 'PIX', outro: 'Outro' }[m.kind])}</td><td class="muted" style="font-size:13px">${esc(m.instructions || '')}</td>
      <td class="r num">${Number(m.fee_percent).toLocaleString('pt-BR')}%</td><td>${m.accepts_change ? 'Sim' : '·'}</td><td>${m.active ? '<span class="tag green">Ativa</span>' : '<span class="tag off">Desativada</span>'}</td>
      <td class="r nowrap"><button class="icon-btn" data-pm-edit="${m.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" data-pm-del="${m.id}" aria-label="Excluir">${I.trash}</button></td></tr>`).join('')}</tbody></table></div>
    <p class="muted" style="padding:0 18px 14px;margin:0;font-size:13px">No Anota AI a casa aceita dinheiro e cartão de crédito na entrega. Débito e PIX entraram desativados para você ativar se a casa aceitar.</p></div>`;
  settingsForm($('#pix-form', host), `<div class="form-grid c2">${field('Chave PIX', inp('pix_key', 'placeholder="CNPJ, telefone, e-mail ou chave aleatória"'), { help: 'Mostrada ao cliente na página do pedido quando ele escolhe PIX.' })}${field('Nome do favorecido', inp('pix_holder'))}</div>`);
  $('#pm-new', host).addEventListener('click', () => pmDialog(null));
  host.addEventListener('click', async (e) => {
    const ed = e.target.closest('[data-pm-edit]'); if (ed) return pmDialog(data.payment_methods.find((m) => m.id === Number(ed.dataset.pmEdit)));
    const del = e.target.closest('[data-pm-del]');
    if (del && await confirmDialog('Excluir esta forma de pagamento?', { title: 'Excluir', ok: 'Excluir', danger: true })) {
      try { const r = await api('/admin/payment-methods/' + del.dataset.pmDel, { method: 'DELETE' }); toast(r.message || 'Excluída.'); await load(); } catch (ex) { toast(ex.message, 'err'); }
    }
  });
}

function pmDialog(m) {
  m = m || { name: '', kind: 'outro', instructions: '', fee_percent: 0, accepts_change: false, active: true, sort_order: data.payment_methods.length };
  crudDialog({ title: m.id ? 'Editar forma de pagamento' : 'Nova forma de pagamento', url: '/admin/payment-methods', id: m.id, html: `
    ${field('Nome', `<input class="input" name="name" required value="${esc(m.name)}" placeholder="Ex.: Vale-refeição">`)}
    ${field('Tipo', `<select class="input" name="kind">${[['dinheiro', 'Dinheiro'], ['cartao', 'Cartão'], ['pix', 'PIX'], ['outro', 'Outro']].map(([k, v]) => `<option value="${k}" ${k === m.kind ? 'selected' : ''}>${v}</option>`).join('')}</select>`)}
    ${field('Instruções para o cliente', `<input class="input" name="instructions" value="${esc(m.instructions || '')}" placeholder="Ex.: maquininha na entrega">`)}
    <div class="form-grid c2">${field('Taxa (%)', `<input class="input" name="fee_percent" data-type="money" inputmode="decimal" value="${moneyInput(m.fee_percent)}">`, { help: 'Usada no faturamento líquido.' })}${field('Ordem', `<input class="input" name="sort_order" type="number" data-type="int" value="${m.sort_order || 0}">`)}</div>
    <label class="switch"><input type="checkbox" name="accepts_change" ${m.accepts_change ? 'checked' : ''}> Pergunta se precisa de troco</label>
    <label class="switch"><input type="checkbox" name="active" ${m.active ? 'checked' : ''}> Ativa no checkout</label>` });
}

/* ---------- Conteúdo do site ---------- */
function uploadField(name, label) {
  const v = S()[name] || '';
  return `<div class="fld"><span>${esc(label)}</span><div class="img-drop"><div class="prev" data-prev="${name}">${v ? `<img src="${esc(v)}" alt="">` : 'Automática'}</div>
    <div class="stack" style="gap:6px"><input type="hidden" name="${name}" value="${esc(v)}"><label class="btn btn-sm">Enviar imagem<input type="file" accept="image/jpeg,image/png,image/webp" hidden data-up="${name}"></label>${v ? `<button class="btn btn-sm btn-ghost" type="button" data-clear="${name}">Usar automática</button>` : ''}</div></div></div>`;
}

function site(host) {
  const diffs = S().differentials_json || [];
  const f = settingsForm(host, `
    <fieldset class="fieldset"><legend>Topo da página</legend><div class="form-grid c2">
      ${field('Título principal', inp('hero_title', 'maxlength="80"'), { cls: 'full' })}
      ${field('Texto de apoio', area('hero_subtitle', 2), { cls: 'full' })}
      ${uploadField('hero_image', 'Foto principal (sem foto, usa a primeira da galeria)')}
      ${uploadField('logo_url', 'Logo')}
    </div></fieldset>
    <fieldset class="fieldset"><legend>Sobre a casa</legend><div class="form-grid c2">
      ${field('Título', inp('about_title'), { cls: 'full' })}${field('Texto', area('about_text', 4), { cls: 'full' })}
      ${uploadField('about_image', 'Foto (sem foto, usa a segunda da galeria)')}
      ${field('Selos (um por linha)', `<textarea class="input" data-attrs rows="3">${esc((S().attributes_json || []).join('\n'))}</textarea>`, { help: 'Vieram do Google Maps.' })}
    </div></fieldset>
    <fieldset class="fieldset"><legend>Diferenciais (até 6)</legend><div id="diffs">${[0, 1, 2, 3, 4, 5].map((i) => `<div class="form-grid c2" data-diff style="margin-bottom:10px"><input class="input" data-dt placeholder="Título" value="${esc(diffs[i]?.title || '')}"><input class="input" data-dx placeholder="Texto curto" value="${esc(diffs[i]?.text || '')}"></div>`).join('')}</div></fieldset>
    <fieldset class="fieldset"><legend>Google e redes (SEO)</legend><div class="form-grid">
      ${field('Título da página', inp('seo_title', 'maxlength="70"'), { help: 'Até ~60 caracteres. Nome, bairro e cidade ajudam na busca local.' })}
      ${field('Descrição', area('seo_description', 2), { help: 'Até ~155 caracteres.' })}
    </div></fieldset>`,
  (form) => ({
    ...readForm(form),
    attributes_json: $('[data-attrs]', form).value.split('\n').map((s) => s.trim()).filter(Boolean),
    differentials_json: $$('[data-diff]', form).map((r) => ({ title: $('[data-dt]', r).value.trim(), text: $('[data-dx]', r).value.trim() })).filter((x) => x.title),
  }));
  f.addEventListener('change', async (e) => {
    const up = e.target.closest('[data-up]');
    if (!up || !up.files[0]) return;
    const fd = new FormData(); fd.append('file', up.files[0]);
    const prev = $(`[data-prev="${up.dataset.up}"]`, f);
    prev.textContent = 'Enviando…';
    try { const r = await api('/admin/upload', { method: 'POST', form: fd }); f.elements[up.dataset.up].value = r.url; prev.innerHTML = `<img src="${esc(r.url)}" alt="">`; toast('Imagem enviada. Clique em Salvar.'); }
    catch (ex) { prev.textContent = 'Erro'; toast(ex.message, 'err'); }
  });
  f.addEventListener('click', (e) => { const c = e.target.closest('[data-clear]'); if (c) { f.elements[c.dataset.clear].value = ''; $(`[data-prev="${c.dataset.clear}"]`, f).textContent = 'Automática'; } });
}

/* ---------- Avaliações ---------- */
function avaliacoes(host) {
  host.innerHTML = `<div class="card"><div class="card-head"><h2>Avaliações exibidas no site</h2><span class="sub">Copie avaliações reais do Google ou de clientes. Não invente depoimentos.</span><span class="spacer"></span><button class="btn btn-sm btn-primary" id="rv-new" type="button">${I.plus}Avaliação</button></div>
    <div class="table-wrap"><table class="tbl"><thead><tr><th>Autor</th><th>Nota</th><th>Comentário</th><th>Fonte</th><th>Situação</th><th></th></tr></thead>
    <tbody>${data.reviews.map((r) => `<tr><td>${esc(r.author)}</td><td>${'★'.repeat(r.rating)}</td><td>${esc(r.comment || '')}</td><td>${esc(r.source)}</td><td>${r.active ? '<span class="tag green">No site</span>' : '<span class="tag off">Oculta</span>'}</td>
      <td class="r nowrap"><button class="icon-btn" data-rv-edit="${r.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" data-rv-del="${r.id}" aria-label="Excluir">${I.trash}</button></td></tr>`).join('') || '<tr><td colspan="6" class="empty">Nenhuma avaliação.</td></tr>'}</tbody></table></div></div>`;
  const dlg = (r) => {
    r = r || { author: '', rating: 5, comment: '', source: 'google', review_date: '', active: true };
    crudDialog({ title: r.id ? 'Editar avaliação' : 'Nova avaliação', url: '/admin/reviews', id: r.id, html: `
      ${field('Autor', `<input class="input" name="author" required value="${esc(r.author)}">`)}
      <div class="form-grid c2">${field('Nota', `<select class="input" name="rating" data-type="int">${[5, 4, 3, 2, 1].map((n) => `<option value="${n}" ${n === r.rating ? 'selected' : ''}>${n}</option>`).join('')}</select>`)}
      ${field('Fonte', `<select class="input" name="source">${['google', 'instagram', 'ifood', 'site', 'outro'].map((s) => `<option ${s === r.source ? 'selected' : ''}>${s}</option>`).join('')}</select>`)}</div>
      ${field('Comentário', `<textarea class="input" name="comment" rows="3">${esc(r.comment || '')}</textarea>`)}
      ${field('Data', `<input class="input" type="date" name="review_date" data-type="nullable" value="${esc(r.review_date || '')}">`)}
      <label class="switch"><input type="checkbox" name="active" ${r.active ? 'checked' : ''}> Mostrar no site</label>` });
  };
  $('#rv-new', host).addEventListener('click', () => dlg(null));
  host.onclick = async (e) => {
    const ed = e.target.closest('[data-rv-edit]'); if (ed) return dlg(data.reviews.find((x) => x.id === Number(ed.dataset.rvEdit)));
    const del = e.target.closest('[data-rv-del]');
    if (del && await confirmDialog('Excluir esta avaliação?', { title: 'Excluir', ok: 'Excluir', danger: true })) { await api('/admin/reviews/' + del.dataset.rvDel, { method: 'DELETE' }).catch((x) => toast(x.message, 'err')); await load(); }
  };
}

/* ---------- Galeria ---------- */
function galeria(host) {
  host.innerHTML = `<div class="card"><div class="card-head"><h2>Galeria (seção Instagram do site)</h2><span class="sub">Use fotos publicadas pela casa. Coloque o link do post para o cliente abrir no Instagram.</span><span class="spacer"></span><label class="btn btn-sm btn-primary">${I.plus}Enviar fotos<input type="file" accept="image/jpeg,image/png,image/webp" multiple hidden id="g-up"></label></div>
    <div class="card-pad" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:12px">
    ${data.gallery.map((g) => `<div style="border:1px solid var(--line);border-radius:10px;overflow:hidden;${g.active ? '' : 'opacity:.5'}"><img src="${esc(g.image_url)}" alt="" style="width:100%;aspect-ratio:1;object-fit:cover" loading="lazy">
      <div style="padding:8px;font-size:13px"><div style="min-height:34px">${esc((g.caption || 'Sem legenda').slice(0, 60))}</div><div class="row" style="justify-content:space-between"><span class="tag">${g.sort_order}</span><span><button class="icon-btn" data-g-edit="${g.id}" aria-label="Editar">${I.edit}</button><button class="icon-btn" data-g-del="${g.id}" aria-label="Excluir">${I.trash}</button></span></div></div></div>`).join('') || '<p class="muted">Nenhuma foto ainda.</p>'}
    </div></div>`;
  $('#g-up', host).addEventListener('change', async (e) => {
    const files = [...e.target.files];
    for (const [i, file] of files.entries()) {
      const fd = new FormData(); fd.append('file', file);
      try { const r = await api('/admin/upload', { method: 'POST', form: fd }); await api('/admin/gallery', { method: 'POST', body: { image_url: r.url, caption: '', link_url: null, sort_order: data.gallery.length + i + 1, active: true } }); }
      catch (ex) { toast(ex.message, 'err'); }
    }
    toast('Fotos adicionadas.');
    await load();
  });
  host.onclick = async (e) => {
    const ed = e.target.closest('[data-g-edit]');
    if (ed) {
      const g = data.gallery.find((x) => x.id === Number(ed.dataset.gEdit));
      crudDialog({ title: 'Editar foto', url: '/admin/gallery', id: g.id, html: `<img src="${esc(g.image_url)}" alt="" style="width:100%;max-height:240px;object-fit:cover;border-radius:10px"><input type="hidden" name="image_url" value="${esc(g.image_url)}">
        ${field('Legenda', `<input class="input" name="caption" data-type="nullable" value="${esc(g.caption || '')}">`)}
        ${field('Link do post no Instagram', `<input class="input" name="link_url" data-type="nullable" value="${esc(g.link_url || '')}" placeholder="https://www.instagram.com/p/...">`)}
        ${field('Ordem', `<input class="input" type="number" name="sort_order" data-type="int" value="${g.sort_order}">`)}
        <label class="switch"><input type="checkbox" name="active" ${g.active ? 'checked' : ''}> Mostrar no site</label>` });
    }
    const del = e.target.closest('[data-g-del]');
    if (del && await confirmDialog('Tirar esta foto da galeria?', { title: 'Excluir foto', ok: 'Excluir', danger: true })) { await api('/admin/gallery/' + del.dataset.gDel, { method: 'DELETE' }).catch((x) => toast(x.message, 'err')); await load(); }
  };
}

/* ---------- Demonstração ---------- */
async function demo(host) {
  host.innerHTML = '<div class="card card-pad muted">Carregando…</div>';
  const d = await api('/admin/demo');
  const row = (items, label) => items.length ? `<p style="margin:6px 0"><strong>${label}:</strong> ${items.map((i) => `${esc(i.name)}${i.active ? '' : ' <span class="tag off">desativado</span>'}`).join(', ')}</p>` : '';
  host.innerHTML = `
    <div class="card card-pad stack">
      <div class="alert info">${I.info}<div class="grow">O sistema começou com os dados reais que estavam publicados. O que não estava publicado entrou como <strong>demonstração</strong>, com a etiqueta amarela no painel. Revise antes de divulgar o site.</div></div>
      <div><h3 style="margin:0 0 6px">Fontes consultadas</h3>${d.sources.map((s) => `<p style="margin:4px 0"><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a> <span class="muted">· conferido em ${esc(s.checked_at.split('-').reverse().join('/'))}</span></p>`).join('')}</div>
      <div><h3 style="margin:12px 0 6px">Itens de demonstração</h3>
        ${row(d.products, 'Produtos')}${row(d.addons, 'Adicionais')}${row(d.payment_methods, 'Formas de pagamento')}${row(d.promotions, 'Promoções')}
        ${d.delivery_fee_demo ? '<p style="margin:6px 0"><strong>Taxa de entrega padrão:</strong> R$ 5,00 (não publicada pela casa)</p>' : ''}
        <button class="btn btn-sm" type="button" id="dm-off" style="margin-top:6px">Desativar todos os itens de demonstração</button></div>
      ${d.unpriced.length ? `<div><h3 style="margin:12px 0 6px">Publicados sem preço (entraram desativados)</h3>${d.unpriced.map((u) => `<p style="margin:4px 0"><a href="#/produtos">${esc(u.name)}</a> <span class="muted">· ${esc(u.source_note || '')}</span></p>`).join('')}</div>` : ''}
      <div><h3 style="margin:12px 0 6px">Pedidos de demonstração</h3><p style="margin:0 0 8px">${d.orders} pedido(s) e ${d.customers} cliente(s) de exemplo, usados para mostrar o dashboard.</p>
        <button class="btn btn-sm btn-danger" type="button" id="dm-clear" ${d.orders ? '' : 'disabled'}>Apagar pedidos de demonstração</button></div>
    </div>`;
  $('#dm-off', host).addEventListener('click', async () => {
    if (!(await confirmDialog('Desativar todos os produtos, adicionais e promoções de demonstração? Eles saem do site, mas continuam no painel para você editar.', { title: 'Desativar demonstração', ok: 'Desativar' }))) return;
    await api('/admin/demo/deactivate-items', { method: 'POST' }); toast('Itens de demonstração desativados.'); demo(host);
  });
  $('#dm-clear', host).addEventListener('click', async () => {
    if (!(await confirmDialog('Apagar todos os pedidos, clientes e lançamentos de demonstração? Isso não mexe em pedidos reais e não pode ser desfeito.', { title: 'Apagar demonstração', ok: 'Apagar', danger: true }))) return;
    await api('/admin/demo/clear-orders', { method: 'POST' }); toast('Pedidos de demonstração apagados.'); demo(host);
  });
}

exports.render = render;

};
__defs["admin/page-users"] = function (exports, __req) {
const { api, esc, $, toast, fmtDate } = __req("common");
const { I, openDialog, dlgHead, confirmDialog, readForm, showErrors, field } = __req("admin/ui");
const { ctx } = __req("admin/bus");

let el = null, users = [], roles = {};
const ROLE_HELP = {
  admin: 'Acesso total, inclusive usuários.',
  gerente: 'Tudo, menos cadastrar usuários.',
  atendente: 'Pedidos, clientes e dashboard.',
};

async function render(host) { el = host; await load(); }

async function load() {
  const r = await api('/admin/users');
  users = r.data; roles = r.roles;
  el.innerHTML = `
    <div class="filters"><p class="muted" style="margin:0">${Object.entries(ROLE_HELP).map(([k, v]) => `<strong>${esc(roles[k])}:</strong> ${esc(v)}`).join(' · ')}</p><span class="spacer"></span><button class="btn btn-primary" type="button" id="u-new">${I.plus}Novo usuário</button></div>
    <div class="card"><div class="table-wrap"><table class="tbl"><thead><tr><th>Nome</th><th>E-mail</th><th>Perfil</th><th>Último acesso</th><th>Situação</th><th></th></tr></thead>
    <tbody>${users.map((u) => `<tr><td><strong>${esc(u.name)}</strong>${u.id === ctx.user.id ? ' <span class="tag">você</span>' : ''}</td><td>${esc(u.email)}</td><td>${esc(roles[u.role])}</td>
      <td class="nowrap">${u.last_login_at ? esc(fmtDate(u.last_login_at)) : '<span class="muted">Nunca entrou</span>'}</td><td>${u.active ? '<span class="tag green">Ativo</span>' : '<span class="tag off">Bloqueado</span>'}</td>
      <td class="r nowrap"><button class="icon-btn" type="button" data-edit="${u.id}" aria-label="Editar">${I.edit}</button>${u.id !== ctx.user.id ? `<button class="icon-btn" type="button" data-del="${u.id}" aria-label="Excluir">${I.trash}</button>` : ''}</td></tr>`).join('')}</tbody></table></div></div>`;
  $('#u-new', el).addEventListener('click', () => edit(null));
  el.onclick = async (e) => {
    const ed = e.target.closest('[data-edit]'); if (ed) return edit(users.find((u) => u.id === Number(ed.dataset.edit)));
    const del = e.target.closest('[data-del]');
    if (del && await confirmDialog('Excluir este usuário? Ele perde o acesso na hora.', { title: 'Excluir usuário', ok: 'Excluir', danger: true })) {
      try { await api('/admin/users/' + del.dataset.del, { method: 'DELETE' }); toast('Usuário excluído.'); load(); } catch (ex) { toast(ex.message, 'err'); }
    }
  };
}

function edit(u) {
  u = u || { name: '', email: '', role: 'atendente', active: true };
  const d = openDialog(`${dlgHead(u.id ? 'Editar usuário' : 'Novo usuário')}
    <form class="dlg-body form" id="uf" novalidate>
      ${field('Nome', `<input class="input" name="name" required value="${esc(u.name)}">`)}
      ${field('E-mail (login)', `<input class="input" name="email" type="email" required value="${esc(u.email)}" autocomplete="off">`)}
      ${field('Perfil', `<select class="input" name="role">${Object.entries(roles).map(([k, v]) => `<option value="${k}" ${k === u.role ? 'selected' : ''}>${esc(v)} · ${esc(ROLE_HELP[k])}</option>`).join('')}</select>`)}
      ${field(u.id ? 'Nova senha (deixe vazio para manter)' : 'Senha', '<input class="input" name="password" type="password" autocomplete="new-password" data-type="nullable">', { help: 'Mínimo de 8 caracteres, com letras e números.' })}
      <label class="switch"><input type="checkbox" name="active" ${u.active ? 'checked' : ''}> Pode entrar no painel</label>
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar</button></div>`, { cls: 'modal narrow' });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#uf', d);
    e.target.classList.add('is-loading');
    try { await api(u.id ? '/admin/users/' + u.id : '/admin/users', { method: u.id ? 'PUT' : 'POST', body: readForm(f) }); toast('Usuário salvo.'); d.close(); load(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

exports.render = render;

};
__defs["admin/app"] = function (exports, __req) {
/* Painel administrativo: autenticação, layout, rotas e avisos de novos pedidos. */
const { api, esc, $, $$, toast, store } = __req("common");
const { I, confirmDialog, openDialog, dlgHead, readForm, showErrors, field } = __req("admin/ui");

const root = $('#root');
const { ctx, bus } = __req("admin/bus");

const PAGES = [
  { id: 'dashboard', label: 'Dashboard', icon: 'dashboard', perm: 'dashboard', load: () => Promise.resolve().then(function () { return __req("admin/page-dashboard"); }) },
  { id: 'pedidos', label: 'Pedidos', icon: 'orders', perm: 'orders', load: () => Promise.resolve().then(function () { return __req("admin/page-orders"); }) },
  { id: 'produtos', label: 'Produtos', icon: 'pizza', perm: 'products', load: () => Promise.resolve().then(function () { return __req("admin/page-products"); }) },
  { id: 'categorias', label: 'Categorias', icon: 'folder', perm: 'categories', load: () => Promise.resolve().then(function () { return __req("admin/page-categories"); }) },
  { id: 'clientes', label: 'Clientes', icon: 'users', perm: 'customers', load: () => Promise.resolve().then(function () { return __req("admin/page-customers"); }) },
  { id: 'faturamento', label: 'Faturamento', icon: 'money', perm: 'finance', load: () => Promise.resolve().then(function () { return __req("admin/page-finance"); }) },
  { id: 'relatorios', label: 'Relatórios', icon: 'chart', perm: 'reports', load: () => Promise.resolve().then(function () { return __req("admin/page-reports"); }) },
  { id: 'promocoes', label: 'Promoções', icon: 'tag', perm: 'promotions', load: () => Promise.resolve().then(function () { return __req("admin/page-promotions"); }) },
  { id: 'configuracoes', label: 'Configurações', icon: 'gear', perm: 'settings', load: () => Promise.resolve().then(function () { return __req("admin/page-settings"); }) },
  { id: 'usuarios', label: 'Usuários', icon: 'shield', perm: 'users', load: () => Promise.resolve().then(function () { return __req("admin/page-users"); }) },
];

async function boot() {
  try {
    const st = await api('/auth/state');
    if (st.needs_setup) return renderSetup();
    if (!st.user) return renderLogin();
    ctx.user = st.user;
    renderShell();
  } catch (e) {
    root.innerHTML = `<div class="login"><div class="login-card"><h1>Painel indisponível</h1><p class="err">${esc(e.message)}</p><button class="btn btn-primary" onclick="location.reload()">Tentar de novo</button></div></div>`;
  }
}

function authCard(title, sub, form) {
  return `<div class="login"><div class="login-card">
    <div class="logo"><img src="assets/img/logo-rivoly.jpg" onerror="this.remove()" alt=""><div><h1>${esc(title)}</h1><span class="muted">${esc(sub)}</span></div></div>
    ${form}</div></div>`;
}

function renderLogin() {
  const saved = store.get('rv_admin_email', '');
  root.innerHTML = authCard('Pizzaria Rivoly', 'Painel administrativo', `
    <form class="form" id="login-form" novalidate>
      <div class="err hidden" id="login-err" role="alert"></div>
      ${field('E-mail', `<input class="input" name="email" type="email" autocomplete="username" required value="${esc(saved)}">`)}
      ${field('Senha', '<input class="input" name="password" type="password" autocomplete="current-password" required>')}
      <label class="check"><input type="checkbox" name="remember" ${saved ? 'checked' : ''}> Manter conectado neste aparelho</label>
      <button class="btn btn-primary" type="submit">Entrar</button>
      <a class="muted" href="index.html" style="text-align:center;font-size:14px">Voltar ao site</a>
    </form>`);
  const f = $('#login-form');
  (saved ? f.elements.password : f.elements.email).focus();
  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type=submit]', f);
    const d = readForm(f);
    const err = $('#login-err');
    if (!d.email || !d.password) { err.textContent = 'Informe e-mail e senha.'; err.classList.remove('hidden'); return; }
    btn.classList.add('is-loading');
    try {
      await api('/auth/login', { method: 'POST', body: d });
      if (d.remember) store.set('rv_admin_email', d.email); else store.del('rv_admin_email');
      boot();
    } catch (ex) {
      err.textContent = ex.message; err.classList.remove('hidden');
      btn.classList.remove('is-loading');
      f.elements.password.value = ''; f.elements.password.focus();
    }
  });
}

function renderSetup() {
  root.innerHTML = authCard('Primeiro acesso', 'Cadastre o administrador do painel', `
    <form class="form" id="setup-form" novalidate>
      <p class="muted" style="margin:0">Este usuário terá acesso total. Depois você pode criar usuários para a equipe.</p>
      <div class="err hidden" id="setup-err" role="alert"></div>
      ${field('Chave de instalação', '<input class="input" name="install_key" type="password" autocomplete="off" required>', { help: 'É a install_key do arquivo api/config.php. Protege este cadastro.' })}
      ${field('Nome', '<input class="input" name="name" autocomplete="name" required>')}
      ${field('E-mail', '<input class="input" name="email" type="email" autocomplete="username" required>')}
      ${field('Senha', '<input class="input" name="password" type="password" autocomplete="new-password" required minlength="8">', { help: 'Mínimo de 8 caracteres, com letras e números.' })}
      <button class="btn btn-primary" type="submit">Criar administrador e entrar</button>
    </form>`);
  const f = $('#setup-form');
  f.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = $('button[type=submit]', f);
    btn.classList.add('is-loading');
    try { await api('/auth/setup', { method: 'POST', body: readForm(f) }); boot(); }
    catch (ex) { const er = $('#setup-err'); er.textContent = ex.message; er.classList.remove('hidden'); showErrors(f, ex); btn.classList.remove('is-loading'); }
  });
}

/* ---------------- Layout ---------------- */

function allowed() { return PAGES.filter((p) => ctx.user.permissions.includes(p.perm)); }

function renderShell() {
  const pages = allowed();
  root.innerHTML = `<div class="app">
    <aside class="sidebar" id="sidebar" aria-label="Menu do painel">
      <a class="side-brand" href="#/dashboard"><img src="assets/img/logo-rivoly.jpg" onerror="this.remove()" alt=""><span><strong>Rivoly</strong><small>Painel</small></span></a>
      <nav class="side-nav">
        ${pages.map((p) => `<a href="#/${p.id}" data-nav="${p.id}">${I[p.icon]}<span>${p.label}</span>${p.id === 'pedidos' ? '<span class="count hidden" id="orders-count">0</span>' : ''}</a>`).join('')}
        <div class="side-sep"></div>
        <a href="index.html" target="_blank" rel="noopener">${I.external}<span>Ver site</span></a>
        <a href="#" data-action="account">${I.user}<span>Minha conta</span></a>
        <a href="#" data-action="logout">${I.logout}<span>Sair</span></a>
      </nav>
      <div class="side-foot"><strong style="color:#fff">${esc(ctx.user.name)}</strong><br><span>${esc({ admin: 'Administrador', gerente: 'Gerente', atendente: 'Atendente' }[ctx.user.role])}</span></div>
    </aside>
    <div class="scrim" id="scrim"></div>
    <div class="main">
      <header class="topbar">
        <button class="icon-btn menu-btn" type="button" id="menu-btn" aria-label="Abrir menu">${I.menu}</button>
        <h1 id="page-title">Painel</h1>
        <button class="store-switch" type="button" id="store-switch" title="Abrir ou fechar a loja para pedidos"><span class="d"></span><span id="store-label">…</span></button>
      </header>
      <main class="content" id="page"></main>
    </div>
  </div>`;
  const sb = $('#sidebar'), scrim = $('#scrim');
  const closeMenu = () => { sb.classList.remove('open'); scrim.classList.remove('show'); };
  $('#menu-btn').addEventListener('click', () => { sb.classList.add('open'); scrim.classList.add('show'); });
  scrim.addEventListener('click', closeMenu);
  $$('.side-nav a', sb).forEach((a) => a.addEventListener('click', closeMenu));
  $('[data-action=logout]').addEventListener('click', async (e) => {
    e.preventDefault();
    await api('/auth/logout', { method: 'POST' }).catch(() => {});
    location.hash = '';
    boot();
  });
  $('[data-action=account]').addEventListener('click', (e) => { e.preventDefault(); accountDialog(); });
  $('#store-switch').addEventListener('click', storeSwitchDialog);
  if (!shellReady) { window.addEventListener('hashchange', route); shellReady = true; }
  route();
  startFeed();
  refreshStoreSwitch();
}

function setTitle(t) { $('#page-title').textContent = t; document.title = `${t} | Painel Rivoly`; }

let currentPage = null;
let routeSeq = 0;
let shellReady = false;
async function route() {
  const seq = ++routeSeq;
  const id = (location.hash.match(/^#\/([\w-]+)/) || [])[1] || allowed()[0].id;
  const page = allowed().find((p) => p.id === id) || allowed()[0];
  $$('[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === page.id));
  setTitle(page.label);
  if (currentPage?.destroy) currentPage.destroy();
  // elemento novo a cada troca de tela: descarta os ouvintes de eventos da tela anterior
  const old = $('#page');
  const el = old.cloneNode(false);
  old.replaceWith(el);
  el.innerHTML = '<div class="card card-pad muted">Carregando…</div>';
  try {
    const mod = await page.load();
    if (seq !== routeSeq) return; // o usuário já trocou de tela
    currentPage = mod;
    await mod.render(el, ctx);
  } catch (e) {
    if (e.status === 401) { toast('Sua sessão expirou. Entre novamente.', 'err'); boot(); return; }
    el.innerHTML = `<div class="alert bad">${I.alert}<div class="grow">${esc(e.message)}</div></div>`;
    console.error(e);
  }
  window.scrollTo(0, 0);
}

/* ---------------- Abrir/fechar loja ---------------- */
async function refreshStoreSwitch(status) {
  try {
    if (!status) {
      if (!ctx.user.permissions.includes('dashboard')) return;
      status = (await api('/admin/dashboard?period=hoje')).store_status;
    }
    const b = $('#store-switch');
    b.classList.toggle('on', status.open);
    b.classList.toggle('off', !status.open);
    $('#store-label').textContent = (status.open ? 'Aberta' : 'Fechada') + (status.mode === 'auto' ? '' : ' (manual)');
    ctx.storeStatus = status;
  } catch { /* */ }
}
bus.refreshStoreSwitch = refreshStoreSwitch;

function storeSwitchDialog() {
  if (!ctx.user.permissions.includes('settings')) { toast('Só gerente ou administrador pode abrir ou fechar a loja.', 'err'); return; }
  const cur = ctx.storeStatus?.mode || 'auto';
  const d = openDialog(`${dlgHead('Recebimento de pedidos')}
    <div class="dlg-body form">
      ${[['auto', 'Seguir o horário de funcionamento', 'Abre e fecha sozinho conforme o horário cadastrado.'],
         ['open', 'Forçar aberto agora', 'Aceita pedidos mesmo fora do horário.'],
         ['closed', 'Forçar fechado agora', 'Pausa os pedidos pelo site (ex.: forno cheio, imprevisto).']].map(([v, t, s]) => `
        <label class="check" style="align-items:flex-start;padding:10px;border:1px solid var(--line);border-radius:10px"><input type="radio" name="mode" value="${v}" ${cur === v ? 'checked' : ''} style="margin-top:3px"><span><strong>${t}</strong><br><span class="muted" style="font-weight:500">${s}</span></span></label>`).join('')}
    </div>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Cancelar</button><button class="btn btn-primary" data-save>Salvar</button></div>`, { cls: 'modal narrow' });
  $('[data-save]', d).addEventListener('click', async () => {
    const mode = $('input[name=mode]:checked', d).value;
    try {
      const r = await api('/admin/settings', { method: 'PUT', body: { order_mode: mode } });
      refreshStoreSwitch(r.store_status);
      toast(r.store_status.open ? 'Loja aberta para pedidos.' : 'Loja fechada para pedidos.');
      d.close();
    } catch (e) { toast(e.message, 'err'); }
  });
}

/* ---------------- Minha conta ---------------- */
function accountDialog() {
  const d = openDialog(`${dlgHead('Minha conta')}
    <form class="dlg-body form" id="acc-form" novalidate>
      <p style="margin:0"><strong>${esc(ctx.user.name)}</strong><br><span class="muted">${esc(ctx.user.email)}</span></p>
      ${field('Senha atual', '<input class="input" type="password" name="current" autocomplete="current-password" required>')}
      ${field('Nova senha', '<input class="input" type="password" name="password" autocomplete="new-password" required>', { help: 'Mínimo de 8 caracteres, com letras e números.' })}
    </form>
    <div class="dlg-foot"><button class="btn" data-dlg-close>Fechar</button><button class="btn btn-primary" data-save>Trocar senha</button></div>`, { cls: 'modal narrow' });
  $('[data-save]', d).addEventListener('click', async (e) => {
    const f = $('#acc-form', d);
    e.target.classList.add('is-loading');
    try { await api('/auth/password', { method: 'POST', body: readForm(f) }); toast('Senha alterada.'); d.close(); }
    catch (ex) { showErrors(f, ex); toast(ex.message, 'err'); e.target.classList.remove('is-loading'); }
  });
}

/* ---------------- Novos pedidos (aviso sonoro) ---------------- */
let feedTimer = null;
let lastId = 0;
function beep() {
  try {
    const ac = new (window.AudioContext || window.webkitAudioContext)();
    [0, 0.22].forEach((t) => {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = 'sine'; o.frequency.value = 880;
      g.gain.setValueAtTime(0.0001, ac.currentTime + t);
      g.gain.exponentialRampToValueAtTime(0.25, ac.currentTime + t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, ac.currentTime + t + 0.18);
      o.connect(g).connect(ac.destination); o.start(ac.currentTime + t); o.stop(ac.currentTime + t + 0.2);
    });
  } catch { /* navegador sem áudio */ }
}
async function pollFeed() {
  if (!ctx.user.permissions.includes('orders')) return;
  try {
    const r = await api('/admin/orders/feed?after=' + lastId);
    if (lastId && r.new.length) {
      beep();
      r.new.forEach((o) => toast(`Novo pedido #${o.number} · ${o.customer_name}`));
      document.dispatchEvent(new CustomEvent('rv:new-orders', { detail: r.new }));
    }
    lastId = r.latest_id;
    const c = $('#orders-count');
    if (c) { c.textContent = r.waiting; c.classList.toggle('hidden', !r.waiting); }
    document.title = (r.waiting ? `(${r.waiting}) ` : '') + document.title.replace(/^\(\d+\) /, '');
  } catch (e) {
    if (e.status === 401) { clearInterval(feedTimer); toast('Sua sessão expirou. Entre novamente.', 'err'); boot(); }
  }
}
function startFeed() {
  clearInterval(feedTimer);
  pollFeed();
  feedTimer = setInterval(pollFeed, 15000);
}
bus.refreshFeed = () => pollFeed();

boot();


};
__req("admin/app");
})();
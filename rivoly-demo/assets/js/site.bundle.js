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
__defs["site"] = function (exports, __req) {
/* Site público: landing, cardápio, carrinho e checkout.
 * Tudo que aparece aqui vem da API (banco de dados); o painel altera e o site reflete. */
const { api, esc, money, moneyText, priceHTML, $, $$, toast, store, maskPhone, maskCep, statusText, hoursSummary, waLink, ICONS, pizzaSVG, WEEKDAYS } = __req("common");

const S = {
  store: null,
  menu: null,
  products: new Map(),
  addons: new Map(),
  cart: store.get('rv_cart', []),
  customer: store.get('rv_customer', {}),
  coupon: store.get('rv_coupon', ''),
  quote: null,
  quoteError: null,
  step: 'cart',
  orderType: store.get('rv_customer', {}).order_type || 'delivery',
};

const PIZZA_TYPES = ['pizza', 'pizza_doce'];
const icon = (n) => ICONS[n] || '';
function paintIcons(root = document) { $$('[data-icon]', root).forEach((el) => { if (!el.dataset.painted) { el.innerHTML = icon(el.dataset.icon); el.dataset.painted = '1'; el.style.display = 'inline-flex'; } }); }

/* ============================ Carregamento ============================ */

async function init() {
  paintIcons();
  $('#year').textContent = new Date().getFullYear();
  bindHeader();
  try {
    const [st, menu] = await Promise.all([api('/public/store'), api('/public/menu')]);
    S.store = st;
    S.menu = menu;
    menu.addons.forEach((a) => S.addons.set(a.id, a));
    menu.categories.forEach((c) => c.products.forEach((p) => S.products.set(p.id, { ...p, category: c })));
    renderAll();
    pruneCart();
    updateCartUI();
    const pid = new URLSearchParams(location.search).get('produto');
    if (pid && S.products.has(Number(pid))) openProduct(Number(pid));
  } catch (e) {
    $('#menu-body').innerHTML = `<div class="notice err">Não foi possível carregar o cardápio. ${esc(e.message)} <button class="link-btn" onclick="location.reload()">Tentar de novo</button></div>`;
    $('#status-text').textContent = 'Não foi possível carregar o horário';
  }
  setInterval(refreshStatus, 60000);
}

async function refreshStatus() {
  try { const st = await api('/public/store'); S.store.status = st.status; renderStatus(); } catch { /* silencioso */ }
}

function renderAll() {
  const s = S.store.settings;
  $$('[data-bind]').forEach((el) => { const v = s[el.dataset.bind]; if (v) el.textContent = v; });
  if (s.logo_url) $$('[data-bind-logo]').forEach((img) => { img.src = s.logo_url; });
  renderStatus();
  renderHero();
  renderFeatured();
  renderMenu();
  renderDiffs();
  renderAbout();
  renderReviews();
  renderInsta();
  renderLocation();
  renderFooter();
  paintIcons();
  setupReveal();
}

/* ============================ Seções ============================ */

function renderStatus() {
  const st = S.store.status;
  $('#status-dot').className = 'dot ' + (st.open ? 'on' : 'off');
  const ann = S.store.settings.announcement;
  $('#status-text').textContent = statusText(st) + (ann ? ' · ' + ann : '');
}

function openDaysLabel(hours) {
  const rows = hoursSummary(hours);
  if (!rows.length) return '';
  const starts = new Set();
  for (let d = 0; d < 7; d++) (hours?.[d] || []).forEach((r) => starts.add(r[0]));
  const openDays = [1, 2, 3, 4, 5, 6, 0].filter((d) => (hours?.[d] || []).length);
  const sh = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb'];
  let label = openDays.length === 7 ? 'Todos os dias' : `${sh[openDays[0]]} a ${sh[openDays[openDays.length - 1]]}`;
  label = label.charAt(0).toUpperCase() + label.slice(1);
  return starts.size === 1 ? `${label} · a partir das ${[...starts][0]}` : label;
}

function renderHero() {
  const s = S.store.settings;
  if (s.hero_title) $('#hero-title').textContent = s.hero_title;
  if (s.hero_subtitle) $('#hero-sub').textContent = s.hero_subtitle;
  $('#hero-script').textContent = s.tagline || '';
  $('#hero-kicker').textContent = [s.category_label || 'Pizzaria', [s.address_neighborhood, s.address_city].filter(Boolean).join(', ')].filter(Boolean).join(' · ');
  const wa = $('#hero-wa');
  if (s.whatsapp) wa.href = waLink(s.whatsapp, `Olá, ${s.store_name}! Vim pelo site.`); else wa.hidden = true;

  const facts = [];
  const days = openDaysLabel(s.hours_json);
  if (days) facts.push(['clock', days]);
  const modes = [s.delivery_enabled && 'Delivery', s.pickup_enabled && 'retirada'].filter(Boolean).join(' e ');
  if (modes) facts.push(['bike', modes.charAt(0).toUpperCase() + modes.slice(1)]);
  if (s.google_rating) facts.push(['star', `${s.google_rating} no Google` + (s.google_reviews_count ? ` (${s.google_reviews_count} ${s.google_reviews_count === '1' ? 'avaliação' : 'avaliações'})` : '')]);
  $('#hero-facts').innerHTML = facts.map(([i, t]) => `<li>${icon(i)}<span>${esc(t)}</span></li>`).join('');

  const img = s.hero_image || S.store.gallery[0]?.image_url;
  const box = $('#hero-photo');
  if (img) {
    box.classList.remove('placeholder');
    box.innerHTML = `<img src="${esc(img)}" alt="Pizza da ${esc(s.store_name)}" fetchpriority="high" decoding="async">`;
  } else {
    box.innerHTML = `<div class="pizza-art dark">${pizzaSVG(3)}</div>`;
  }
  const feat = [...S.products.values()].find((p) => p.is_featured && PIZZA_TYPES.includes(p.category.type));
  if (feat) {
    const card = $('#hero-card');
    card.hidden = false;
    card.href = '#cardapio';
    card.innerHTML = `<div><span class="tag">Sabor da casa</span><strong>${esc(feat.name)}</strong></div><span class="price"><small>a partir de R$</small>${money(feat.from_price)}</span>`;
    card.addEventListener('click', (e) => { e.preventDefault(); openProduct(feat.id); });
  }
}

function productArt(p, i = 1) {
  if (p.image_url) return `<img src="${esc(p.image_url)}" alt="${esc(p.name)}" loading="lazy" decoding="async">`;
  return `<div class="pizza-art">${pizzaSVG(p.id || i)}</div>`;
}

function renderFeatured() {
  const list = [...S.products.values()].filter((p) => p.is_featured).slice(0, 6);
  const sec = $('#destaques');
  if (!list.length) { sec.hidden = true; return; }
  $('#featured').innerHTML = list.map((p) => `
    <button class="feat-card" type="button" data-open="${p.id}">
      <div class="ph">${productArt(p)}</div>
      <div class="body">
        <span class="pill">${esc(p.category.name)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.ingredients || p.description || '')}</p>
        <div class="foot">
          <span><span class="from">a partir de</span><br>${priceHTML(p.from_price)}</span>
          <span class="add-mini" aria-hidden="true">${icon('plus')}</span>
        </div>
      </div>
    </button>`).join('');
}

function sizeColumns(cat) {
  const names = [];
  cat.products.forEach((p) => p.sizes.forEach((s) => { if (!names.includes(s.name)) names.push(s.name); }));
  return names.slice(0, 3);
}

function renderMenu() {
  const cats = S.menu.categories;
  $('#cat-tabs').innerHTML = cats.map((c, i) => `<a href="#cat-${esc(c.slug)}" data-cat="${esc(c.slug)}" class="${i === 0 ? 'active' : ''}">${esc(c.name)}</a>`).join('');
  $('#menu-body').innerHTML = cats.map((c) => {
    let body = '';
    if (c.type === 'adicional') {
      body = `<div class="item-grid">${c.addons.map((a) => `
        <div class="item" style="cursor:default"><div class="item-main"><strong>${esc(a.name)}</strong>${a.description ? `<span>${esc(a.description)}</span>` : ''}</div>${priceHTML(a.price)}</div>`).join('')}</div>
        <p class="addon-note">Os adicionais aparecem na hora de montar a pizza.</p>`;
    } else if (PIZZA_TYPES.includes(c.type) && c.products.some((p) => p.sizes.length)) {
      const cols = sizeColumns(c);
      const slices = cols.map((n) => { const s = c.products[0]?.sizes.find((x) => x.name === n); return s?.slices ? `${n} · ${s.slices} fatias` : n; });
      body = `<div class="size-legend" aria-hidden="true"><span style="text-align:left">Sabor</span>${slices.map((n) => `<span>${esc(n)}</span>`).join('')}<span></span></div>
      <ul class="flavor-list">${c.products.map((p) => `
        <li class="flavor" data-open="${p.id}" data-search="${esc((p.name + ' ' + (p.ingredients || '')).toLowerCase())}" tabindex="0" role="button" aria-label="${esc(p.name)}, a partir de ${moneyText(p.from_price)}">
          <span class="flavor-name">${esc(p.name)}${p.is_featured ? '<span class="pill red">da casa</span>' : ''}</span>
          <span class="flavor-ing">${esc(p.ingredients || p.description || '')}</span>
          <span class="flavor-prices">
            <span class="from">a partir de${priceHTML(p.from_price)}</span>
            <span class="sizes">${cols.map((n) => { const s = p.sizes.find((x) => x.name === n); return `<span>${s ? priceHTML(s.promo_price && s.promo_price < s.price ? s.promo_price : s.price) : '<span class="muted">·</span>'}</span>`; }).join('')}</span>
            <span class="add-mini" aria-hidden="true">${icon('plus')}</span>
          </span>
        </li>`).join('')}</ul>`;
    } else {
      body = `<div class="item-grid ${c.products.length > 8 ? 'cols-3' : ''}">${c.products.map((p) => {
        const promo = p.promo_price && p.price && p.promo_price < p.price;
        const thumb = p.image_url ? `<div class="item-thumb"><img src="${esc(p.image_url)}" alt="" loading="lazy"></div>` : (c.type === 'combo' ? `<div class="item-thumb"><div class="pizza-art">${pizzaSVG(p.id)}</div></div>` : '');
        return `<div class="item" data-open="${p.id}" data-search="${esc((p.name + ' ' + (p.description || '')).toLowerCase())}" tabindex="0" role="button">
          ${thumb}
          <div class="item-main"><strong>${esc(p.name)}</strong>${p.description || p.ingredients ? `<span>${esc(p.description || p.ingredients)}</span>` : ''}</div>
          <div>${promo ? `<span class="old">${moneyText(p.price)}</span>` : ''}${priceHTML(p.from_price)}</div>
          <span class="add-mini" aria-hidden="true">${icon('plus')}</span>
        </div>`;
      }).join('')}</div>`;
    }
    return `<section class="menu-cat" id="cat-${esc(c.slug)}" data-cat="${esc(c.slug)}" aria-labelledby="h-${esc(c.slug)}">
      <div class="menu-cat-head"><h3 id="h-${esc(c.slug)}">${esc(c.name)}</h3>${c.description ? `<p>${esc(c.description)}</p>` : ''}</div>
      ${body}
    </section>`;
  }).join('') + '<p class="empty-search" id="empty-search" hidden>Nenhum item encontrado. Tente outro nome.</p>';

  setupScrollSpy();
  setupSearch();
}

function setupScrollSpy() {
  const tabs = $('#cat-tabs');
  const setActive = (slug) => {
    $$('a', tabs).forEach((a) => a.classList.toggle('active', a.dataset.cat === slug));
    const act = $(`a[data-cat="${CSS.escape(slug)}"]`, tabs);
    if (act) tabs.scrollTo({ left: act.offsetLeft - tabs.clientWidth / 2 + act.clientWidth / 2, behavior: 'smooth' });
  };
  const obs = new IntersectionObserver((entries) => {
    const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (vis[0]) setActive(vis[0].target.dataset.cat);
  }, { rootMargin: '-140px 0px -60% 0px' });
  $$('.menu-cat').forEach((s) => obs.observe(s));
}

function setupSearch() {
  const input = $('#menu-search');
  const box = $('#search-box');
  input.addEventListener('focus', () => box.classList.add('open'));
  input.addEventListener('blur', () => { if (!input.value) box.classList.remove('open'); });
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    let any = false;
    $$('.menu-cat').forEach((sec) => {
      let shown = 0;
      $$('[data-search]', sec).forEach((el) => {
        const t = el.dataset.search.normalize('NFD').replace(/[̀-ͯ]/g, '');
        const ok = !q || t.includes(q);
        el.hidden = !ok;
        if (ok) shown++;
      });
      const hasItems = $$('[data-search]', sec).length > 0;
      sec.hidden = q ? (!hasItems || shown === 0) : false;
      if (!sec.hidden) any = true;
    });
    $('#empty-search').hidden = any;
  });
}

const DIFF_ICONS = ['slices', 'chef', 'bike', 'table', 'heart', 'star'];
function renderDiffs() {
  const d = S.store.settings.differentials_json || [];
  if (!d.length) { $('#diferenciais').hidden = true; return; }
  $('#diffs').innerHTML = d.map((x, i) => `<div class="diff reveal"><div class="ico">${icon(DIFF_ICONS[i % DIFF_ICONS.length])}</div><h3>${esc(x.title)}</h3><p>${esc(x.text || '')}</p></div>`).join('');
}

function renderAbout() {
  const s = S.store.settings;
  if (s.about_title) $('#sobre-t').textContent = s.about_title;
  $('#about-text').textContent = s.about_text || '';
  $('#about-tags').innerHTML = (s.attributes_json || []).map((t) => `<span class="pill">${esc(t)}</span>`).join('');
  const img = s.about_image || S.store.gallery[1]?.image_url;
  $('#about-photo').innerHTML = img ? `<img src="${esc(img)}" alt="${esc(s.store_name)}" loading="lazy">` : `<div class="pizza-art dark">${pizzaSVG(8)}</div>`;
}

function stars(n) { return `<span class="stars" aria-label="${n} de 5 estrelas">${Array.from({ length: 5 }, (_, i) => `<span style="opacity:${i < n ? 1 : .25}">${icon('star')}</span>`).join('')}</span>`; }

function renderReviews() {
  const s = S.store.settings;
  const list = S.store.reviews;
  const rating = s.google_rating;
  if (!rating && !list.length) { $('#avaliacoes').hidden = true; return; }
  const src = { google: 'Google', instagram: 'Instagram', site: 'Site', ifood: 'iFood', outro: '' };
  const r = parseFloat(String(rating).replace(',', '.')) || 0;
  $('#reviews').innerHTML = `
    <div class="rating-card reveal">
      ${rating ? `<div class="big">${esc(rating)}</div>${stars(Math.round(r))}<p>Nota no Google${s.google_reviews_count ? ` com ${esc(s.google_reviews_count)} ${s.google_reviews_count === '1' ? 'avaliação' : 'avaliações'}` : ''}.</p>` : ''}
      ${s.maps_url ? `<a class="btn btn-light" href="${esc(s.maps_url)}" target="_blank" rel="noopener">Ver e avaliar no Google</a>` : ''}
    </div>
    <div class="review-list">${list.map((x) => `
      <figure class="review reveal" style="margin:0">
        ${stars(x.rating)}
        ${x.comment ? `<blockquote>“${esc(x.comment)}”</blockquote>` : ''}
        <footer><strong>${esc(x.author)}</strong>${src[x.source] ? ` · via ${src[x.source]}` : ''}</footer>
      </figure>`).join('')}</div>`;
}

function renderInsta() {
  const s = S.store.settings;
  const user = s.instagram_user;
  if (!user) { $('#instagram').hidden = true; return; }
  const url = `https://www.instagram.com/${encodeURIComponent(user)}/`;
  $('#ig-user').textContent = user;
  $('#ig-follow').href = url;
  const g = S.store.gallery;
  $('#insta-grid').innerHTML = g.length
    ? g.map((x) => `<a href="${esc(x.link_url || url)}" target="_blank" rel="noopener"><img src="${esc(x.image_url)}" alt="${esc(x.caption || 'Foto do Instagram')}" loading="lazy" decoding="async">${x.caption ? `<span class="cap">${esc(x.caption)}</span>` : ''}</a>`).join('')
    : `<div class="insta-empty" style="grid-column:1/-1">As fotos da casa estão no Instagram. <a href="${url}" target="_blank" rel="noopener" style="color:var(--cheese)">Abrir @${esc(user)}</a></div>`;
}

function fullAddress(s) {
  return `${s.address_street}, ${s.address_number}${s.address_neighborhood ? ' - ' + s.address_neighborhood : ''}, ${s.address_city} - ${s.address_state}${s.address_zip ? ', ' + s.address_zip : ''}`;
}

function hoursTable(hours) {
  const today = new Date().getDay();
  return `<table class="hours"><tbody>${[1, 2, 3, 4, 5, 6, 0].map((d) => {
    const r = (hours?.[d] || []).map((x) => `${x[0]} às ${x[1]}`).join(', ') || 'Fechado';
    return `<tr class="${d === today ? 'today' : ''}"><td>${WEEKDAYS[d]}${d === today ? ' (hoje)' : ''}</td><td>${r}</td></tr>`;
  }).join('')}</tbody></table>`;
}

function renderLocation() {
  const s = S.store.settings;
  const addr = fullAddress(s);
  const q = encodeURIComponent(`${s.store_name}, ${addr}`);
  const dest = s.latitude && s.longitude ? `${s.latitude},${s.longitude}` : encodeURIComponent(addr);
  // O mapa só carrega quando a seção chega perto da tela
  const mb = $('#map-box');
  const io = new IntersectionObserver((es) => {
    if (es[0].isIntersecting) {
      mb.innerHTML = `<iframe title="Mapa: ${esc(s.store_name)}" src="https://maps.google.com/maps?q=${q}&z=16&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>`;
      io.disconnect();
    }
  }, { rootMargin: '400px' });
  io.observe(mb);
  $('#info-card').innerHTML = `
    <div class="info-row">${icon('pin')}<div><strong>Endereço</strong><span>${esc(addr)}</span></div></div>
    <div class="info-actions">
      <a class="btn btn-green" href="https://www.google.com/maps/dir/?api=1&destination=${dest}" target="_blank" rel="noopener">${icon('route')}Como chegar</a>
      ${s.maps_url ? `<a class="btn btn-light" href="${esc(s.maps_url)}" target="_blank" rel="noopener">Abrir no Google Maps</a>` : ''}
    </div>
    <div class="info-row">${icon('clock')}<div style="flex:1"><strong>Horário de funcionamento</strong>${hoursTable(s.hours_json)}</div></div>
    ${s.phone ? `<div class="info-row">${icon('phone')}<div><strong>Telefone e WhatsApp</strong><a href="tel:+${esc(String(s.whatsapp || s.phone).replace(/\D/g, ''))}">${esc(s.phone)}</a></div></div>` : ''}
    ${s.whatsapp ? `<a class="btn btn-primary" href="${waLink(s.whatsapp, `Olá, ${s.store_name}!`)}" target="_blank" rel="noopener">${icon('whatsapp')}Chamar no WhatsApp</a>` : ''}`;
}

function renderFooter() {
  const s = S.store.settings;
  const hrs = hoursSummary(s.hours_json).map((h) => `<p>${esc(h.label)}: ${esc(h.text)}</p>`).join('');
  $('#footer-grid').innerHTML = `
    <div>
      <a class="brand" href="#inicio" style="margin-bottom:12px"><img src="${esc(s.logo_url || 'assets/img/logo-rivoly.jpg')}" onerror="this.remove()" alt="" width="44" height="44" loading="lazy"><span class="brand-name" style="color:#fff">${esc(s.store_name)}<small>${esc(s.tagline || '')}</small></span></a>
      <p>${esc(fullAddress(s))}</p>
    </div>
    <div><h4>Horário</h4>${hrs || '<p>Consulte pelo telefone.</p>'}</div>
    <div><h4>Contato</h4>
      ${s.phone ? `<p><a href="tel:+${esc(String(s.whatsapp || s.phone).replace(/\D/g, ''))}">${esc(s.phone)}</a></p>` : ''}
      ${s.whatsapp ? `<p><a href="${waLink(s.whatsapp)}" target="_blank" rel="noopener">WhatsApp</a></p>` : ''}
      ${s.instagram_user ? `<p><a href="https://www.instagram.com/${encodeURIComponent(s.instagram_user)}/" target="_blank" rel="noopener">@${esc(s.instagram_user)}</a></p>` : ''}
      <p><a href="pedido.html">Acompanhar meu pedido</a></p>
    </div>`;
}

function setupReveal() {
  if (!('IntersectionObserver' in window)) { $$('.reveal').forEach((el) => el.classList.add('in')); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  $$('.reveal').forEach((el) => io.observe(el));
}

function bindHeader() {
  const tog = $('#menu-toggle'), nav = $('#mobile-nav');
  tog.addEventListener('click', () => {
    const open = !nav.classList.contains('open');
    nav.classList.toggle('open', open);
    tog.setAttribute('aria-expanded', String(open));
    tog.innerHTML = icon(open ? 'close' : 'menu');
  });
  $$('a', nav).forEach((a) => a.addEventListener('click', () => { nav.classList.remove('open'); tog.setAttribute('aria-expanded', 'false'); tog.innerHTML = icon('menu'); }));
  $('#open-cart').addEventListener('click', () => openCart());
  $('#cart-bar').addEventListener('click', () => openCart());
  document.addEventListener('click', (e) => {
    const t = e.target.closest('[data-open]');
    if (t && !e.target.closest('dialog')) openProduct(Number(t.dataset.open));
  });
  document.addEventListener('keydown', (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('[data-open][role="button"]')) { e.preventDefault(); openProduct(Number(e.target.dataset.open)); }
  });
}

/* ============================ Produto ============================ */

let P = null; // estado do produto aberto

function effective(price, promo) { return promo && promo > 0 && promo < price ? promo : price; }

function pizzaFlavorsFor(sizeName, exceptId) {
  const out = [];
  S.menu.categories.filter((c) => PIZZA_TYPES.includes(c.type)).forEach((c) => c.products.forEach((p) => {
    if (p.id === exceptId) return;
    const s = p.sizes.find((x) => x.name.toLowerCase() === sizeName.toLowerCase());
    if (s) out.push({ id: p.id, name: p.name, ingredients: p.ingredients, price: effective(s.price, s.promo_price), cat: c.name });
  }));
  return out;
}

function calcUnit() {
  const p = S.products.get(P.id);
  let base;
  if (p.sizes.length) {
    const size = p.sizes.find((s) => s.id === P.sizeId);
    if (!size) return null;
    const prices = [effective(size.price, size.promo_price)];
    P.flavors.forEach((fid) => {
      const f = S.products.get(fid);
      const fs = f?.sizes.find((x) => x.name.toLowerCase() === size.name.toLowerCase());
      if (fs) prices.push(effective(fs.price, fs.promo_price));
    });
    base = S.store.settings.pizza_price_rule === 'avg' ? Math.round((prices.reduce((a, b) => a + b, 0) / prices.length) * 100) / 100 : Math.max(...prices);
  } else {
    base = effective(p.price, p.promo_price);
  }
  let extra = 0;
  P.addons.forEach((id) => { extra += S.addons.get(id)?.price || 0; });
  p.options.forEach((g, gi) => (P.options[gi] || []).forEach((ci) => { extra += Number(g.choices[ci]?.price || 0); }));
  return Math.round((base + extra) * 100) / 100;
}

function openProduct(id, editIndex = null) {
  const p = S.products.get(id);
  if (!p) return;
  const prev = editIndex !== null ? S.cart[editIndex] : null;
  P = {
    id,
    editIndex,
    sizeId: prev?.size_id ?? (p.sizes.length === 1 ? p.sizes[0].id : (p.sizes[1]?.id ?? p.sizes[0]?.id ?? null)),
    flavors: prev?.flavor_ids ? [...prev.flavor_ids] : [],
    addons: new Set(prev?.addon_ids || []),
    options: prev?.options ? JSON.parse(JSON.stringify(prev.options)) : {},
    qty: prev?.quantity || 1,
    notes: prev?.notes || '',
    flavorQuery: '',
  };
  renderProduct();
  const dlg = $('#product-dialog');
  if (!dlg.open) dlg.showModal();
  history.replaceState(null, '', `?produto=${id}${location.hash}`);
}

function renderProduct() {
  const p = S.products.get(P.id);
  const dlg = $('#product-dialog');
  const isPizza = PIZZA_TYPES.includes(p.category.type) && p.sizes.length;
  const size = p.sizes.find((s) => s.id === P.sizeId);
  const maxExtra = size ? size.max_flavors - 1 : 0;
  if (P.flavors.length > maxExtra) P.flavors = P.flavors.slice(0, maxExtra);
  const addons = (p.addon_ids || []).map((i) => S.addons.get(i)).filter(Boolean);
  const unit = calcUnit();
  const scrollTop = $('.sheet-body', dlg)?.scrollTop || 0;

  let html = `<div class="sheet-head"><h2 id="pd-title">${esc(p.name)}</h2><button class="icon-btn" type="button" data-close aria-label="Fechar">${icon('close')}</button></div>
  <div class="sheet-body">
    ${p.image_url ? `<div class="p-hero"><img src="${esc(p.image_url)}" alt="${esc(p.name)}"></div>` : ''}
    <div class="p-pad">
      <span class="pill">${esc(p.category.name)}</span>
      ${p.ingredients ? `<p class="p-ing" style="margin-top:8px">${esc(p.ingredients)}</p>` : ''}
      ${p.description ? `<p class="p-desc">${esc(p.description)}</p>` : ''}
    </div>`;

  if (p.sizes.length) {
    html += `<div class="p-group" role="radiogroup" aria-labelledby="g-size"><div class="p-group-head"><h3 id="g-size">Tamanho</h3><span class="req">Obrigatório</span></div>
      ${p.sizes.map((s) => `<label class="choice"><input type="radio" name="size" value="${s.id}" ${s.id === P.sizeId ? 'checked' : ''}>
        <span class="c-main"><strong>${esc(s.name)}</strong><small>${[s.slices ? `${s.slices} fatias` : '', isPizza && s.max_flavors > 1 ? `até ${s.max_flavors} sabores` : ''].filter(Boolean).join(' · ')}</small></span>
        ${s.promo_price && s.promo_price < s.price ? `<span class="old" style="text-decoration:line-through;color:var(--ink-3);font-size:13px">${moneyText(s.price)}</span>` : ''}${priceHTML(effective(s.price, s.promo_price))}</label>`).join('')}
    </div>`;
  }

  if (isPizza && size && size.max_flavors > 1) {
    const avail = pizzaFlavorsFor(size.name, p.id);
    const q = P.flavorQuery.toLowerCase();
    const full = P.flavors.length >= maxExtra;
    html += `<div class="p-group"><div class="p-group-head"><h3>Quer mais sabores?</h3><span class="req opt">Até ${maxExtra} ${maxExtra === 1 ? 'extra' : 'extras'}</span></div>
      <div class="chips" style="margin-bottom:10px"><span class="chip main">${esc(p.name)}</span>${P.flavors.map((fid) => `<span class="chip">${esc(S.products.get(fid)?.name || '')}<button type="button" data-rm-flavor="${fid}" aria-label="Remover sabor">×</button></span>`).join('')}</div>
      <div class="flavor-picker">
        <input class="search" type="search" placeholder="Buscar sabor" value="${esc(P.flavorQuery)}" data-flavor-search aria-label="Buscar sabor">
        <div class="flavor-scroll">${avail.filter((f) => !q || f.name.toLowerCase().includes(q)).map((f) => {
          const on = P.flavors.includes(f.id);
          return `<label class="choice ${!on && full ? 'disabled' : ''}"><input type="checkbox" data-flavor="${f.id}" ${on ? 'checked' : ''} ${!on && full ? 'disabled' : ''}>
            <span class="c-main"><strong>${esc(f.name)}</strong><small>${esc(f.cat)}</small></span>${priceHTML(f.price)}</label>`;
        }).join('')}</div>
      </div>
      <p class="hint">${S.store.settings.pizza_price_rule === 'avg' ? 'Com mais de um sabor, o preço é a média dos sabores escolhidos.' : 'Com mais de um sabor, vale o preço do sabor mais caro.'}</p>
    </div>`;
  }

  p.options.forEach((g, gi) => {
    const sel = P.options[gi] || [];
    const multi = g.max > 1;
    const full = sel.length >= g.max;
    html += `<div class="p-group"><div class="p-group-head"><h3>${esc(g.name)}</h3><span class="req ${g.min ? '' : 'opt'}">${g.min ? (g.min === g.max ? `Escolha ${g.min}` : `Mín. ${g.min}, máx. ${g.max}`) : `Até ${g.max}`}</span></div>
      ${g.choices.map((c, ci) => {
        const on = sel.includes(ci);
        return `<label class="choice ${multi && !on && full ? 'disabled' : ''}"><input type="${multi ? 'checkbox' : 'radio'}" name="opt-${gi}" data-opt="${gi}" value="${ci}" ${on ? 'checked' : ''} ${multi && !on && full ? 'disabled' : ''}>
          <span class="c-main"><strong>${esc(c.name)}</strong></span>${c.price ? `<span class="price">+ ${moneyText(c.price)}</span>` : ''}</label>`;
      }).join('')}</div>`;
  });

  if (addons.length) {
    html += `<div class="p-group"><div class="p-group-head"><h3>Adicionais</h3><span class="req opt">Opcional</span></div>
      ${addons.map((a) => `<label class="choice"><input type="checkbox" data-addon="${a.id}" ${P.addons.has(a.id) ? 'checked' : ''}><span class="c-main"><strong>${esc(a.name)}</strong>${a.description ? `<small>${esc(a.description)}</small>` : ''}</span><span class="price">+ ${moneyText(a.price)}</span></label>`).join('')}</div>`;
  }

  html += `<div class="p-group"><div class="p-group-head"><h3><label for="p-notes">Observações</label></h3><span class="req opt">Opcional</span></div>
      <textarea id="p-notes" maxlength="200" placeholder="Ex.: sem cebola, bem assada">${esc(P.notes)}</textarea></div>
  </div>
  <div class="sheet-foot"><div class="qty-row">
    <div class="stepper"><button type="button" data-qty="-1" ${P.qty <= 1 ? 'disabled' : ''} aria-label="Diminuir">−</button><output aria-live="polite">${P.qty}</output><button type="button" data-qty="1" aria-label="Aumentar">+</button></div>
    <button class="btn btn-primary" type="button" data-add ${unit === null ? 'disabled' : ''}>${P.editIndex !== null ? 'Atualizar' : 'Adicionar'} · ${unit === null ? 'escolha o tamanho' : moneyText(unit * P.qty)}</button>
  </div></div>`;
  dlg.innerHTML = html;
  const body = $('.sheet-body', dlg);
  if (body) body.scrollTop = scrollTop;
}

function bindProductDialog() {
  const dlg = $('#product-dialog');
  dlg.addEventListener('click', (e) => {
    if (e.target === dlg || e.target.closest('[data-close]')) { dlg.close(); return; }
    const rm = e.target.closest('[data-rm-flavor]');
    if (rm) { P.flavors = P.flavors.filter((f) => f !== Number(rm.dataset.rmFlavor)); renderProduct(); return; }
    const q = e.target.closest('[data-qty]');
    if (q) { P.qty = Math.max(1, Math.min(50, P.qty + Number(q.dataset.qty))); renderProduct(); return; }
    if (e.target.closest('[data-add]')) addToCart();
  });
  dlg.addEventListener('change', (e) => {
    const t = e.target;
    if (t.name === 'size') { P.sizeId = Number(t.value); renderProduct(); }
    else if (t.dataset.flavor) { const id = Number(t.dataset.flavor); P.flavors = t.checked ? [...P.flavors, id] : P.flavors.filter((f) => f !== id); renderProduct(); }
    else if (t.dataset.addon) { const id = Number(t.dataset.addon); t.checked ? P.addons.add(id) : P.addons.delete(id); renderProduct(); }
    else if (t.dataset.opt !== undefined) {
      const gi = Number(t.dataset.opt), ci = Number(t.value);
      const g = S.products.get(P.id).options[gi];
      let sel = P.options[gi] || [];
      if (g.max > 1) sel = t.checked ? [...sel, ci] : sel.filter((x) => x !== ci); else sel = [ci];
      P.options[gi] = sel;
      renderProduct();
    }
  });
  dlg.addEventListener('input', (e) => {
    if (e.target.id === 'p-notes') P.notes = e.target.value;
    if (e.target.matches('[data-flavor-search]')) {
      P.flavorQuery = e.target.value;
      const pos = e.target.selectionStart;
      renderProduct();
      const inp = $('[data-flavor-search]', dlg);
      inp.focus();
      inp.setSelectionRange(pos, pos);
    }
  });
  dlg.addEventListener('close', () => { history.replaceState(null, '', location.pathname + location.hash); });
}

function addToCart() {
  const p = S.products.get(P.id);
  if (p.sizes.length && !P.sizeId) { toast('Escolha o tamanho.', 'err'); return; }
  for (const [gi, g] of p.options.entries()) {
    const n = (P.options[gi] || []).length;
    if (n < g.min) { toast(`Escolha ${g.min === g.max ? g.min : 'pelo menos ' + g.min} em "${g.name}".`, 'err'); return; }
  }
  const size = p.sizes.find((s) => s.id === P.sizeId);
  const optText = p.options.map((g, gi) => (P.options[gi] || []).length ? `${g.name}: ${(P.options[gi]).map((ci) => g.choices[ci].name).join(', ')}` : '').filter(Boolean);
  const item = {
    product_id: p.id,
    size_id: P.sizeId,
    flavor_ids: P.flavors,
    addon_ids: [...P.addons],
    options: P.options,
    quantity: P.qty,
    notes: P.notes.trim().slice(0, 200),
    view: {
      name: p.name,
      size: size?.name || null,
      flavors: P.flavors.map((f) => S.products.get(f)?.name).filter(Boolean),
      addons: [...P.addons].map((a) => S.addons.get(a)?.name).filter(Boolean),
      options: optText,
      unit: calcUnit(),
    },
  };
  if (P.editIndex !== null) S.cart[P.editIndex] = item; else S.cart.push(item);
  saveCart();
  $('#product-dialog').close();
  toast(P.editIndex !== null ? 'Item atualizado.' : `${p.name} no carrinho.`);
  if (P.editIndex !== null) openCart();
}

/* ============================ Carrinho ============================ */

function saveCart() { store.set('rv_cart', S.cart); S.quote = null; updateCartUI(); }

function pruneCart() {
  const before = S.cart.length;
  S.cart = S.cart.filter((i) => S.products.has(i.product_id));
  // atualiza preços exibidos com o cardápio atual
  S.cart.forEach((i) => {
    P = { id: i.product_id, sizeId: i.size_id, flavors: i.flavor_ids || [], addons: new Set(i.addon_ids || []), options: i.options || {} };
    const u = calcUnit();
    if (u !== null) i.view.unit = u;
  });
  P = null;
  if (S.cart.length !== before) toast('Alguns itens saíram do cardápio e foram removidos do carrinho.', 'err', 5000);
  store.set('rv_cart', S.cart);
}

function cartTotals() {
  const count = S.cart.reduce((a, i) => a + i.quantity, 0);
  const subtotal = S.cart.reduce((a, i) => a + (i.view.unit || 0) * i.quantity, 0);
  return { count, subtotal };
}

function updateCartUI() {
  const { count, subtotal } = cartTotals();
  const b = $('#cart-count');
  b.hidden = count === 0;
  b.textContent = count;
  $('#cart-bar').classList.toggle('show', count > 0 && !$('#cart-dialog').open);
  $('#cart-bar-qty').textContent = `${count} ${count === 1 ? 'item' : 'itens'}`;
  $('#cart-bar-total').textContent = moneyText(subtotal);
  if ($('#cart-dialog').open) renderCart();
}

function openCart() {
  S.step = 'cart';
  renderCart();
  const dlg = $('#cart-dialog');
  if (!dlg.open) dlg.showModal();
  $('#cart-bar').classList.remove('show');
  refreshQuote();
}

let quoteTimer = null;
let quoteCtrl = null;
function refreshQuote(delay = 0) {
  clearTimeout(quoteTimer);
  quoteTimer = setTimeout(async () => {
    if (!S.cart.length) { S.quote = null; renderCart(); return; }
    if (quoteCtrl) quoteCtrl.abort();
    quoteCtrl = new AbortController();
    try {
      S.quote = await api('/public/quote', { method: 'POST', signal: quoteCtrl.signal, body: {
        items: S.cart.map(({ view, ...rest }) => rest),
        order_type: S.orderType,
        neighborhood: S.orderType === 'delivery' ? (S.customer.neighborhood || '') : '',
        coupon: S.coupon,
      } });
      S.quoteError = null;
      // sincroniza preço unitário mostrado com o do servidor
      S.quote.lines.forEach((l, i) => { if (S.cart[i]) S.cart[i].view.unit = l.unit_price; });
      store.set('rv_cart', S.cart);
    } catch (e) {
      if (e.name === 'AbortError') return;
      S.quote = null;
      S.quoteError = e;
      if (e.fields?.coupon) { toast(e.message, 'err'); S.coupon = ''; store.del('rv_coupon'); refreshQuote(); return; }
    }
    renderCart();
    updateCartUIOnly();
  }, delay);
}
function updateCartUIOnly() {
  const { count } = cartTotals();
  $('#cart-count').textContent = count;
}

function totalsHTML() {
  const q = S.quote;
  const { subtotal } = cartTotals();
  if (!q) return `<div class="totals"><div><span>Subtotal</span><span class="num">${moneyText(subtotal)}</span></div><div class="muted"><span>Calculando entrega e descontos…</span></div></div>`;
  return `<div class="totals">
    <div><span>Subtotal</span><span class="num">${moneyText(q.subtotal)}</span></div>
    ${q.order_type === 'delivery' ? `<div><span>Taxa de entrega${q.delivery_zone ? ` (${esc(q.delivery_zone)})` : ''}</span><span class="num">${q.delivery_fee ? moneyText(q.delivery_fee) : 'Grátis'}</span></div>` : `<div class="muted"><span>Retirada no balcão</span><span>sem taxa</span></div>`}
    ${q.discount ? `<div class="disc"><span>Desconto${q.promotion ? ` · ${esc(q.promotion.code || q.promotion.name)}` : ''}</span><span class="num">− ${moneyText(q.discount)}</span></div>` : ''}
    <div class="grand"><span>Total</span><span class="num">${moneyText(q.total)}</span></div>
  </div>`;
}

function renderCart() {
  const dlg = $('#cart-dialog');
  const st = S.store?.status;
  const titles = { cart: 'Seu carrinho', details: 'Entrega e contato', payment: 'Pagamento' };
  const stepIdx = { cart: 0, details: 1, payment: 2 }[S.step];
  let body = '', foot = '';

  if (!S.cart.length) {
    body = `<div class="cart-empty">${icon('bag')}<p><strong>Seu carrinho está vazio.</strong></p><p>Escolha uma pizza no cardápio para começar.</p><button class="btn btn-primary" type="button" data-close data-goto-menu>Ver cardápio</button></div>`;
  } else if (S.step === 'cart') {
    body = S.cart.map((i, idx) => `
      <div class="cart-line">
        <div class="l-main">
          <strong>${esc(i.view.name)}${i.view.size ? ` · ${esc(i.view.size)}` : ''}</strong>
          ${i.view.flavors.length ? `<div class="l-meta">Com ${esc(i.view.flavors.join(', '))}</div>` : ''}
          ${i.view.options.length ? `<div class="l-meta">${i.view.options.map(esc).join('<br>')}</div>` : ''}
          ${i.view.addons.length ? `<div class="l-meta">+ ${esc(i.view.addons.join(', '))}</div>` : ''}
          ${i.notes ? `<div class="l-note">“${esc(i.notes)}”</div>` : ''}
          <div class="l-actions">
            <div class="stepper"><button type="button" data-line-qty="${idx}" data-d="-1" aria-label="Diminuir">−</button><output>${i.quantity}</output><button type="button" data-line-qty="${idx}" data-d="1" aria-label="Aumentar">+</button></div>
            <button class="link-btn" type="button" data-edit="${idx}" style="color:var(--green-2)">Editar</button>
            <button class="link-btn" type="button" data-remove="${idx}">Remover</button>
          </div>
        </div>
        <span class="num" style="font-weight:700">${moneyText((i.view.unit || 0) * i.quantity)}</span>
      </div>`).join('') + `
      <div style="padding:14px 18px 6px;font-weight:700">Cupom de desconto</div>
      <form class="coupon" data-coupon-form><input name="coupon" placeholder="Digite o cupom" value="${esc(S.coupon)}" maxlength="40" aria-label="Cupom" autocomplete="off"><button class="btn btn-light" type="submit">${S.coupon ? 'Trocar' : 'Aplicar'}</button></form>
      ${totalsHTML()}
      ${S.quote?.below_minimum ? `<div class="notice warn">${esc(S.quote.warnings[0])} Adicione mais itens para continuar.</div>` : ''}
      ${S.quoteError ? `<div class="notice err">${esc(S.quoteError.message)}</div>` : ''}`;
    foot = `<button class="btn btn-primary btn-block" type="button" data-next="details" ${!S.quote || S.quote.below_minimum ? 'disabled' : ''}>Continuar · ${S.quote ? moneyText(S.quote.total) : '...'}</button>`;
  } else if (S.step === 'details') {
    const s = S.store.settings, c = S.customer;
    const zones = S.store.delivery_zones;
    body = `<form class="co-pad" id="details-form" novalidate>
      <div class="seg" role="radiogroup" aria-label="Como quer receber">
        ${s.delivery_enabled ? `<label><input type="radio" name="order_type" value="delivery" ${S.orderType === 'delivery' ? 'checked' : ''}>${icon('bike')}<span>Entrega</span><small>${s.delivery_time ? esc(s.delivery_time) : 'no seu endereço'}</small></label>` : ''}
        ${s.pickup_enabled ? `<label><input type="radio" name="order_type" value="pickup" ${S.orderType === 'pickup' ? 'checked' : ''}>${icon('store')}<span>Retirada</span><small>${s.pickup_time ? esc(s.pickup_time) : 'no balcão, sem taxa'}</small></label>` : ''}
      </div>
      <p class="co-title">Seus dados</p>
      <label class="field"><span>Nome</span><input name="name" autocomplete="name" required minlength="2" maxlength="120" value="${esc(c.name || '')}"><em class="err">Informe seu nome.</em></label>
      <label class="field"><span>Telefone (WhatsApp)</span><input name="phone" type="tel" inputmode="tel" autocomplete="tel-national" required placeholder="(71) 90000-0000" value="${esc(maskPhone(c.phone || ''))}"><em class="err">Informe um telefone com DDD.</em></label>
      ${S.orderType === 'delivery' ? `
      <p class="co-title" style="margin-top:18px">Endereço de entrega</p>
      <div class="field-row r-1-2">
        <label class="field"><span>CEP</span><input name="zip" inputmode="numeric" autocomplete="postal-code" placeholder="00000-000" value="${esc(c.zip || '')}"><em class="err">CEP inválido.</em></label>
        <label class="field"><span>Bairro</span><input name="neighborhood" required list="zones" autocomplete="address-level3" maxlength="100" value="${esc(c.neighborhood || '')}"><em class="err">Informe o bairro.</em></label>
      </div>
      <datalist id="zones">${zones.map((z) => `<option value="${esc(z.neighborhood)}">`).join('')}</datalist>
      <div class="field-row r-2-1">
        <label class="field"><span>Rua</span><input name="street" required autocomplete="address-line1" maxlength="160" value="${esc(c.street || '')}"><em class="err">Informe a rua.</em></label>
        <label class="field"><span>Número</span><input name="number" required inputmode="numeric" maxlength="20" value="${esc(c.number || '')}"><em class="err">Informe o número.</em></label>
      </div>
      <label class="field"><span>Complemento <small class="muted">(opcional)</small></span><input name="complement" autocomplete="address-line2" maxlength="120" value="${esc(c.complement || '')}" placeholder="Apto, bloco, casa"></label>
      <label class="field"><span>Ponto de referência <small class="muted">(opcional)</small></span><input name="reference" maxlength="160" value="${esc(c.reference || '')}"></label>
      ${s.delivery_only_zones && zones.length ? `<p class="hint">Entregamos em: ${zones.map((z) => esc(z.neighborhood)).join(', ')}.</p>` : ''}
      ` : `<div class="notice" style="margin:14px 0 0">Retire na ${esc(s.address_street)}, ${esc(s.address_number)}, ${esc(s.address_neighborhood)}. Avisamos quando estiver pronto.</div>`}
    </form>${totalsHTML()}${S.quoteError ? `<div class="notice err">${esc(S.quoteError.message)}</div>` : ''}`;
    foot = `<div style="display:flex;gap:8px"><button class="btn btn-light" type="button" data-next="cart">Voltar</button><button class="btn btn-primary" style="flex:1" type="button" data-submit-details>Continuar para pagamento</button></div>`;
  } else {
    const pms = S.store.payment_methods;
    const c = S.customer;
    const sel = pms.find((m) => m.id === c.payment_method_id) || null;
    body = `<form class="co-pad" id="pay-form" novalidate>
      <p class="co-title">Como vai pagar?</p>
      ${pms.map((m) => `<label class="choice"><input type="radio" name="payment_method_id" value="${m.id}" ${sel?.id === m.id ? 'checked' : ''}><span class="c-main"><strong>${esc(m.name)}</strong>${m.instructions ? `<small>${esc(m.instructions)}</small>` : ''}</span></label>`).join('')}
      ${sel?.accepts_change ? `<label class="field" style="margin-top:6px"><span>Troco para quanto? <small class="muted">(deixe vazio se não precisar)</small></span><input name="change_for" inputmode="decimal" placeholder="Ex.: 100,00" value="${esc(c.change_for || '')}"><em class="err">O valor precisa ser maior que o total.</em></label>` : ''}
      <label class="field" style="margin-top:10px"><span>Observações do pedido <small class="muted">(opcional)</small></span><textarea name="notes" maxlength="500" placeholder="Ex.: interfone quebrado, ligar ao chegar">${esc(c.notes || '')}</textarea></label>
      <p class="co-title" style="margin-top:14px">Resumo</p>
      <div class="summary-box">
        <div><span>${S.orderType === 'delivery' ? 'Entrega em' : 'Retirada por'}</span><strong style="text-align:right">${S.orderType === 'delivery' ? esc(`${c.street}, ${c.number} · ${c.neighborhood}`) : esc(c.name)}</strong></div>
        <div><span>Contato</span><strong>${esc(maskPhone(c.phone || ''))}</strong></div>
        <div><span>Itens</span><strong>${S.cart.reduce((a, i) => a + i.quantity, 0)}</strong></div>
      </div>
    </form>${totalsHTML()}
    ${!st.open ? `<div class="notice warn">${esc(S.store.settings.closed_message || 'Estamos fechados agora.')} ${esc(statusText(st))}.</div>` : ''}
    ${S.quoteError ? `<div class="notice err">${esc(S.quoteError.message)}</div>` : ''}`;
    foot = `<div style="display:flex;gap:8px"><button class="btn btn-light" type="button" data-next="details">Voltar</button><button class="btn btn-green" style="flex:1" type="button" data-place ${!st.open || !S.quote ? 'disabled' : ''}>Confirmar${S.quote ? ' · ' + moneyText(S.quote.total) : ' pedido'}</button></div>`;
  }

  const scroll = $('.sheet-body', dlg)?.scrollTop || 0;
  dlg.innerHTML = `
    <div class="sheet-head">${S.step !== 'cart' && S.cart.length ? `<button class="icon-btn" type="button" data-next="${S.step === 'payment' ? 'details' : 'cart'}" aria-label="Voltar">${icon('back')}</button>` : ''}<h2 id="cd-title">${titles[S.step]}</h2><button class="icon-btn" type="button" data-close aria-label="Fechar">${icon('close')}</button></div>
    ${S.cart.length ? `<div class="steps" aria-hidden="true">${[0, 1, 2].map((i) => `<span class="${i <= stepIdx ? 'on' : ''}"></span>`).join('')}</div>` : ''}
    <div class="sheet-body">${body}</div>
    ${foot ? `<div class="sheet-foot">${foot}</div>` : ''}`;
  const b = $('.sheet-body', dlg);
  if (b) b.scrollTop = scroll;
}

function readDetails() {
  const f = $('#details-form');
  const data = Object.fromEntries(new FormData(f).entries());
  let ok = true;
  const mark = (name, bad) => { const el = f.elements[name]?.closest('.field'); if (el) el.classList.toggle('invalid', bad); if (bad) ok = false; };
  mark('name', (data.name || '').trim().length < 2);
  const digits = (data.phone || '').replace(/\D/g, '');
  mark('phone', digits.length < 10 || digits.length > 11);
  if (S.orderType === 'delivery') {
    mark('street', !(data.street || '').trim());
    mark('number', !(data.number || '').trim());
    mark('neighborhood', !(data.neighborhood || '').trim());
    const z = (data.zip || '').replace(/\D/g, '');
    mark('zip', z.length > 0 && z.length !== 8);
  }
  if (!ok) { const first = $('.field.invalid input', f); first?.focus(); return null; }
  return { ...data, phone: digits, order_type: S.orderType };
}

function bindCartDialog() {
  const dlg = $('#cart-dialog');
  dlg.addEventListener('close', () => updateCartUI());
  dlg.addEventListener('click', async (e) => {
    const t = e.target;
    if (t === dlg || t.closest('[data-close]')) {
      dlg.close();
      if (t.closest('[data-goto-menu]')) $('#cardapio').scrollIntoView();
      return;
    }
    const lq = t.closest('[data-line-qty]');
    if (lq) {
      const i = Number(lq.dataset.lineQty);
      S.cart[i].quantity = Math.max(1, Math.min(50, S.cart[i].quantity + Number(lq.dataset.d)));
      saveCart(); refreshQuote(250); return;
    }
    const rm = t.closest('[data-remove]');
    if (rm) { S.cart.splice(Number(rm.dataset.remove), 1); saveCart(); refreshQuote(); return; }
    const ed = t.closest('[data-edit]');
    if (ed) { const i = Number(ed.dataset.edit); dlg.close(); openProduct(S.cart[i].product_id, i); return; }
    const nx = t.closest('[data-next]');
    if (nx) { persistPayForm(); S.step = nx.dataset.next; renderCart(); return; }
    if (t.closest('[data-submit-details]')) {
      const d = readDetails();
      if (!d) return;
      Object.assign(S.customer, d);
      store.set('rv_customer', S.customer);
      S.step = 'payment';
      S.quote = null;
      renderCart();
      refreshQuote();
      return;
    }
    const place = t.closest('[data-place]');
    if (place) placeOrder(place);
  });
  dlg.addEventListener('submit', (e) => {
    if (e.target.matches('[data-coupon-form]')) {
      e.preventDefault();
      S.coupon = e.target.elements.coupon.value.trim().toUpperCase();
      store.set('rv_coupon', S.coupon);
      S.quote = null; renderCart(); refreshQuote();
      if (S.coupon) setTimeout(() => { if (S.quote?.discount) toast('Cupom aplicado.'); }, 700);
    } else e.preventDefault();
  });
  dlg.addEventListener('change', (e) => {
    const t = e.target;
    if (t.name === 'order_type') {
      Object.assign(S.customer, Object.fromEntries(new FormData($('#details-form')).entries()));
      S.orderType = t.value; S.customer.order_type = t.value; store.set('rv_customer', S.customer);
      S.quote = null; renderCart(); refreshQuote();
    }
    if (t.name === 'neighborhood') { S.customer.neighborhood = t.value.trim(); refreshQuote(); }
    if (t.name === 'payment_method_id') { persistPayForm(); renderCart(); }
  });
  dlg.addEventListener('input', async (e) => {
    const t = e.target;
    if (t.name === 'phone') t.value = maskPhone(t.value);
    if (t.name === 'change_for') t.value = t.value.replace(/[^\d,.]/g, '');
    if (t.name === 'zip') {
      t.value = maskCep(t.value);
      const d = t.value.replace(/\D/g, '');
      if (d.length === 8) {
        const f = $('#details-form');
        try {
          const r = await api('/public/cep/' + d);
          if (r.street && !f.elements.street.value) f.elements.street.value = r.street;
          if (r.neighborhood) { f.elements.neighborhood.value = r.neighborhood; S.customer.neighborhood = r.neighborhood; refreshQuote(); }
          f.elements.number.focus();
        } catch (err) { toast(err.message, 'err'); }
      }
    }
  });
}

function persistPayForm() {
  const f = $('#pay-form');
  if (!f) return;
  const d = Object.fromEntries(new FormData(f).entries());
  if (d.payment_method_id) S.customer.payment_method_id = Number(d.payment_method_id);
  S.customer.change_for = d.change_for || '';
  S.customer.notes = d.notes || '';
  store.set('rv_customer', S.customer);
}

async function placeOrder(btn) {
  persistPayForm();
  const c = S.customer;
  const pm = S.store.payment_methods.find((m) => m.id === c.payment_method_id);
  if (!pm) { toast('Escolha a forma de pagamento.', 'err'); return; }
  let change = null;
  if (pm.accepts_change && c.change_for) {
    change = parseFloat(String(c.change_for).replace(/\./g, '').replace(',', '.'));
    if (!(change > 0) || (S.quote && change < S.quote.total)) {
      $('#pay-form [name=change_for]')?.closest('.field')?.classList.add('invalid');
      toast('O troco precisa ser para um valor maior que o total.', 'err');
      return;
    }
  }
  btn.classList.add('is-loading');
  try {
    const r = await api('/public/orders', { method: 'POST', body: {
      name: c.name, phone: c.phone, order_type: S.orderType, payment_method_id: pm.id, change_for: change,
      notes: c.notes || null, coupon: S.coupon || null,
      address: S.orderType === 'delivery' ? { zip: c.zip || null, street: c.street, number: c.number, complement: c.complement || null, neighborhood: c.neighborhood, city: 'Salvador', reference: c.reference || null } : null,
      items: S.cart.map(({ view, ...rest }) => rest),
    } });
    const mine = store.get('rv_orders', []);
    mine.unshift({ code: r.tracking_code, number: r.number, total: r.total, at: new Date().toISOString() });
    store.set('rv_orders', mine.slice(0, 20));
    S.cart = []; store.set('rv_cart', []); store.del('rv_coupon');
    location.href = `pedido.html?c=${encodeURIComponent(r.tracking_code)}&novo=1`;
  } catch (e) {
    btn.classList.remove('is-loading');
    toast(e.message, 'err', 5000);
    if (e.status === 409) { await refreshStatus(); renderCart(); }
  }
}

bindProductDialog();
bindCartDialog();
init();


};
__req("site");
})();
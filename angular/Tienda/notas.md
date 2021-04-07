- Componente ShopComponent
- Ruta para acceder a ShopComponent
- Servicio ProductosService
    - Incluir HttpClientModule dentro de AppModule
        @angular/common/http
    - Incluir HttpClient dentro de ProductosService
    - Método para recuperar todos los productos
- Mostrar los productos en ShopComponent
    - Inyectar servicio

- Método en el servicio que recupere las categorías
GET https://neolandshop.ngrok.io/items/categorias
- Cuando recuperamos las categorias en ShopComponent, generar un desplegable con dichas categorías

- En función de la categoría seleccionada, hacer la petición al servidor para recuperar los productos


## GESTIÓN CARRITO

- Cuando pulso sobre el botón Add Cart
    - Tengo que comprobar si ya he creado el carrito -> Si está en localStorage
        - Si no está creado
            - Lanzo la petición para crear el carrito
            - Cuando responda guardo el carrito en LocalStorage
        - Si está creado no hago nada
    - Agrego el producto al carrito

# BORRAR PRODUCTO CARRITO

DELETE http://neolandshop.ngrok.io/items/delete/IDPRODUCTO
Body -> NOOO
headers -> cart-token: IDCARRITO

# RECUPERAR UN ÚNICO PRODUCTO

GET http://neolandshop.ngrok.io/items/id/IDPRODUCTO

- Crear componente Detalle X
- Definir la ruta sobre nuestra app localhost:4200/shop/IDPRODUCTO X
- Cuando cargue el componente Detalle
    1 - Recupero el IDPRODUCTO de la url X
    2 - Pido al servidor el producto en función del IDPRODUCTO
class Carrito{

    constructor(productos){
        this.productos=productos;
    }

    addProducto(producto)
    {   
        this.productos.push(producto);
        console.log(this.productos);
    }
   
    guardar()
    {
        localStorage.setItem("MI_CARRITO",JSON.stringify(this.productos));
    }




}
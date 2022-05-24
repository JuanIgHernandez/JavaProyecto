const categorias = [

    {id:1,nombre:"Vinos"},
    {id:2,nombre:"Bebidas Blancas"},
    {id:3,nombre:"Bebidas Negras"},
    {id:4,nombre:"Cervezas"}
    

]
const productos = [
    {id:1, nombre:"Trumpeter", precio:500, Categoria:1, stock:3 },
    {id:2, nombre:"Capriccio", precio:300, Categoria:1, stock:2 },
    {id:3, nombre:"Vodka", precio:1600, Categoria:2, stock:5 },
    {id:4, nombre:"Gancia", precio:700, Categoria:2, stock:4 },
    {id:5, nombre:"Fernet", precio:1200, Categoria:3, stock:1 },
    {id:6, nombre:"Jagger", precio:2000, Categoria:3, stock:0 },
    {id:7, nombre:"Amstel", precio:120, Categoria:4, stock:6 }
    ]

 
    localStorage.setItem("MIS_PRODUCTOS", JSON.stringify(productos));
    
    
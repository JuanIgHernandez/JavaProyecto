function init()
{
    actualizarCarrito();
    creaTotal();
}
// boton dark mode
let color = localStorage.getItem("mode");
    const myBtn = document.querySelector("#myBtn");

    if(!color)
    {
        color= "white";
        myBtn.innerHTML="LIGHT MODE";
    }
    else{
        document.body.style=`background-color:${color}`;
        if(color==="white")
        {
            myBtn.innerHTML="DARK MODE";
        }
        else{
            myBtn.innerHTML="LIGHT MODE";
        }
    }

    
    myBtn.addEventListener("click", ()=>{

        if(color==="white")
        {
            color="black"
            myBtn.innerHTML="LIGHT MODE";
        }
        else{
            color="white";
            myBtn.innerHTML="DARK MODE";
        }
        localStorage.setItem("mode", color);
        document.body.style=`background-color:${color}`;

    })

// carga de datos con fetch


    fetch("./data/productos.json")
    .then((result)=>result.json())
    .then((data)=>{
        mostrarDatos(data)
    })
    .catch(error=>console.log(error))
// CARRITO *//
const data = JSON.parse(localStorage.getItem("MI_CARRITO"))
miCarrito= new Carrito([]);
if(!miCarrito)
{
  miCarrito= new Carrito([]);
}
else{
  miCarrito= new Carrito(data);
}

console.log(miCarrito.productos.reduce((acc,producto)=>acc+=producto.precio,0))

// FUNCION PARA MOSTRAR LOS DATOS EN LA PAG
function mostrarDatos(data)
     {
         const nodo = document.querySelector("#Bebidas");
         nodo.setAttribute("style", "display:flex;flex-direction:column;align-items:center");
         data.forEach(element=>{

             const div = document.createElement("h2");
             const categoria = categorias.find(cat=>cat.id===element.categoria)
             div.innerHTML=`<br>${element.nombre}<br>$${element.precio}<br>${categoria.nombre}<br>`
             nodo.appendChild(div);
             const img = document.createElement("div")
             img.innerHTML=`<img src=${element.imagen} width="100px">`
             nodo.appendChild(img)
             const addBtn = document.createElement("button")
             addBtn.addEventListener("click",()=>{ 
                creaTotal();
                Toastify({
                text: "PRODUCTO AGREGADO AL CARRITO ",
                duration: 3000,
                gravity: 'top',
                position: 'right',
                style: {
                    background: "violet",
                    width: "300px",
                    height:"50px",
                 }
                }).showToast();})
             addBtn.innerHTML=`${getProductButton(element)}`
             nodo.appendChild(addBtn)             
         })
     }


function getProductButton(element)
     {
         if(element.stock>0)
         {
           return `<button class="styledBtn" onclick="agregarAlCarrito(${element.id})">Agregar al Carrito</button>`
         }
         else{
           return `<button class="notBuyBtn">No Disponible</button>`;
         }
     }


// AGREGAR Y BORRAR COSAS DEL CARRITO
function actualizarCarrito()
     {
        let contenedor = document.getElementById("carrito");
        contenedor.innerHTML="";
        let prods = miCarrito.productos;
        let nuevoContenedor=document.createElement("div");
        nuevoContenedor.setAttribute("style", "display:flex;flex-direction:column");
        prods.forEach(producto=>{
          let nodoLi = document.createElement("div");
          nodoLi.innerHTML=`
          <div id="seccionCarrito">
            <div class="carritoNombre">
                 ${producto.nombre}
            </div>
            <div class="carritoPrecio">
                 $${producto.precio}
            </div>
            <button id="borrarBtn"onClick="borrarElemento(${producto.id})">X</button>
            </div>`
          
          nuevoContenedor.appendChild(nodoLi)
        })
      
        contenedor.appendChild(nuevoContenedor);
        
        miCarrito.guardar();
     }

function agregarAlCarrito(productId)
     {
       let products = productos.map(el=>el.id);
       let index = products.findIndex(el=>el===productId);
       let product = productos[index];
       miCarrito.addProducto(product);
       actualizarCarrito();
       
     
     }

function borrarElemento(id)
{
    let mapped = miCarrito.productos.map((element)=>element.id)
    let index = mapped.indexOf(id)
    miCarrito.productos.splice(index,1);

    actualizarCarrito();
    creaTotal();
}
// boton de pago
const pagoBtn = document.querySelector("#pagoBtn")
pagoBtn.addEventListener("click",()=>realizarPago () )
// Calcular el total
function creaTotal(){
const totalProductos = document.querySelector("#total")
totalProductos.innerHTML=`TOTAL: ${CalcularTotal()}`
}

function CalcularTotal()
{
    return miCarrito.productos.reduce((acc,producto)=>acc+=producto.precio,0)
}
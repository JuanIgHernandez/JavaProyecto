

function cuotizar(){
    let tarjeta = parseInt(prompt("Monto a abonar con tarjeta de credito(TIENE INTERES)"))
    const recargo = [1.15, 1.19, 1.20, 1.25]
    const cuotas = parseInt(prompt("En cuantas cuotas desea realizar la compra. (3) (6) (12) (18)"))
    if(cuotas==="FIN"){
        alert("muchas Gracias por su compra")
    }
    else if(cuotas===3){
        const mul = recargo[0]*tarjeta;
        alert("Su total quedaria "+ mul)
    }
    else if(cuotas===6){
        const mul = recargo[1]*tarjeta;
        alert("Su total quedaria "+ mul)
    }
    else if(cuotas===12){
        const mul = recargo[2]*tarjeta;
        alert("Su total quedaria "+ mul)
    }
    else if(cuotas===18){
        const mul = recargo[3]*tarjeta;
        alert("Su total quedaria "+ mul)
    }
    Pregunta();
}

function Pregunta(){
    const pregunta = prompt("Desea confirmar su compra? (Si) (No)")
if(pregunta==="Si")
{
    alert("Gracias por su compra");
    

}
else if (pregunta==="No"){
    cuotizar();
    Pregunta();
}
}


function realizarPago () {
    cuotizar();
}


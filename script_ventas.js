const nombre_producto = document.getElementById("nombre_producto");
const cantidad_producto    = document.getElementById("cantidad_producto");
const precio             = document.getElementById("precio");
const ganancia_esperada  = document.getElementById("ganancia_esperada");
const descuento    = document.getElementById("descuento");
const iva          = document.getElementById("iva");
const resultado    = document.getElementById("resultado");
const calcular     = document.getElementById("calcular").value;
const todos        = document.getElementById("container");

 function scroll(){
   window.scrollTo(0,1000);
 }

 function borrar(){
    
    document.getElementById("nombre_producto").value ="";
    document.getElementById("cantidad_producto").value ="";
    document.getElementById("precio").value ="";
    document.getElementById("ganancia_esperada").value ="";
    document.getElementById("descuento").value ="";
    document.getElementById("iva").value ="";
    document.getElementById("resultado").value ="";
 }
 function venta(){
    
    let producto = (nombre_producto.value);
    let cantidades = Number(cantidad_producto.value);
    let precio_inicial = Number(precio.value);
    let ganancia = Number(ganancia_esperada.value);
    let descuento_precio = Number(descuento.value);
    let iva1 = Number(iva.value);
    let iva2 = iva1 / 100;
    scroll();
    if (producto == "" || cantidades == "" || precio_inicial == "" || ganancia == "" || iva == ""){
        resultado.textContent = "Rellena Todos los Campos";
        scroll();
    
    }else{

    let impuesto;
    let impuesto1;
    let descuento1;
    let descuento2;
    let descuento3;
    let precio_finalisimo;
    let precio_a_venta;
    let puedeborrar = false;    
    let aumento;
    let operacion_ganancia2;
    let operacion_precio_final;
    let venta;
    let cantidad;

    cantidad = cantidades * precio_inicial;

    aumento = (ganancia * cantidad ) / 100;
    operacion_ganancia2 = cantidad  + aumento;

    descuento1 = ( cantidad  * descuento_precio)  / 100;
             
    impuesto = iva2 * operacion_ganancia2;
    operacion_precio_final = (operacion_ganancia2 - impuesto - descuento1).toFixed(2);
    
    
    resultado.textContent = `El Precio de ${producto} es: ${operacion_precio_final}$`;
    scroll();
    borrar();
    
    }
    }
    


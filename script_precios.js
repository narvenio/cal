const nombre_producto = document.getElementById("nombre_producto");
const cantidad_producto    = document.getElementById("cantidad_producto");
const precio             = document.getElementById("precio");
const ganancia_esperada  = document.getElementById("ganancia_esperada");
const descuento    = document.getElementById("descuento");
const iva          = document.getElementById("iva");
const resultados    = document.getElementById("resultado-todos");
const resultado    = document.getElementById("resultado-individual");
const calcular     = document.getElementById("calcular").value;


  function lineas(){
    const lineas = document.querySelector(".linea");
    const anclas = document.querySelector(".anclas");
    anclas.classList.toggle("active");
  }

  function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function mostrar_scroll() {
    console.log("inicio");
  
    // espera 2 segundos
    await delay(500)
  
    console.log("despues de 2 segundos")
  
    // continuar con el resto del codigo
    
    window.scrollTo(0, 1000);
  }


 function borrar(){
    document.getElementById("nombre_producto").value ="";
    document.getElementById("cantidad_producto").value ="";
    document.getElementById("precio").value ="";
    document.getElementById("ganancia_esperada").value ="";
 }

 function venta(){

    let producto = String(nombre_producto.value);
    let cantidades = Number(cantidad_producto.value);
    let precio_inicial = Number(precio.value);
    let ganancia = Number(ganancia_esperada.value);
    
    if (producto == "" || cantidades == "" || precio_inicial == "" || ganancia == "" || iva == ""){
        mostrar_scroll();
        resultado.textContent = "Rellena Todos los Campos";
       
        
           
    }else{
    
    let aumento;
    let operacion_ganancia2;
    let operacion_precio_final;
    let cantidad;
    let precio_final_individual;

    // Calculos
    cantidad = cantidades * precio_inicial;
    aumento = (ganancia * cantidad ) / 100;
    operacion_ganancia2 = cantidad  + aumento;
    operacion_precio_final = (operacion_ganancia2).toFixed(2);
    precio_final_individual =   operacion_ganancia2 / cantidades.toFixed(2);

    // Resultado en Pantalla
    //resultados.textContent = 
    resultado.textContent = `Cada ${producto} esta: ${precio_final_individual}$`;
    mostrar_scroll();
    borrar();
   
    }
    
}

    borrar();
   
    }
    
}

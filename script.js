//const textbox1  = document.getElementById("textbox1");
//const textbox2  = document.getElementById("textbox2");
//const textbox3  = document.getElementById("textbox3");
//const textbox4  = document.getElementById("textbox4");
//const textbox5  = document.getElementById("textbox5");
//const textbox6  = document.getElementById("textbox6");
//const textbox7  = document.getElementById("textbox7");
//const textbox8  = document.getElementById("textbox8");
//const textbox9  = document.getElementById("textbox9");
//const textbox10 = document.getElementById("textbox10");
const boton     = document.getElementById("boton").value;
const boton_descuento = document.getElementById("boton_descuento").value;
const boton_aumento = document.getElementById("boton_aumento").value;
const precio_aumentado = document.getElementById("precio_aumentado").value;
const precio_caido = document.getElementById("precio_caido").value;
const resultado = document.getElementById("resultado");
const descuento = document.getElementById("descuento");
const porcentaje = document.getElementById("porcentaje");


let porcentaje_deseado;
let numero_total;
let porcentaje_final;
let descuento_final;
let aumento;



function scroll(){
   
      window.scrollTo(0, 1000);
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
    document.getElementById("textbox1").value="";
    document.getElementById("textbox2").value="";
    document.getElementById("textbox3").value="";
    document.getElementById("textbox4").value="";
    document.getElementById("textbox5").value="";
    document.getElementById("textbox6").value="";
    document.getElementById("textbox7").value="";
    document.getElementById("textbox8").value="";
    document.getElementById("textbox9").value="";
    document.getElementById("textbox10").value="";
}


function calcular_porcentaje(){
    
    porcentaje_deseado = Number(textbox1.value);
    numero_total = Number(textbox2.value);

    
    
    if(textbox1.value.length == 0 || textbox2.value.length == 0){
        resultado.textContent = ("Escribe un numero");
        


        
    }else{
        porcentaje_final = porcentaje_deseado * numero_total / 100;
        resultado.textContent = `El ${porcentaje_deseado}% de ${numero_total} es ${porcentaje_final}`; 
    }
    mostrar_scroll();
    
    borrar();
}

function calcular_descuento(){
    
    porcentaje_deseado = Number(textbox3.value);
    numero_total = Number(textbox4.value);

    porcentaje_final = porcentaje_deseado * numero_total / 100;
    descuento_final =   numero_total - porcentaje_final ;
    resultado.textContent = `Su precio final es: ${descuento_final}`;

    if(textbox3.value.length == 0 || textbox4.value.length == 0){
        resultado.textContent = ("Escribe un numero");
        mostrar_scroll();
        scroll();
    }
    mostrar_scroll();
    scroll();
    borrar();
}
  
function calcular_aumento(){

    porcentaje_deseado = Number(textbox5.value);
    numero_total = Number(textbox6.value);
    porcentaje_final = porcentaje_deseado * numero_total / 100;
    aumento = numero_total + porcentaje_final;
    resultado.textContent = `Su precio final es: ${aumento}`;
    if(textbox5.value.length == 0 || textbox6.value.length == 0){
        resultado.textContent = ("Escribe un numero");
        mostrar_scroll();
        scroll();
    }
    mostrar_scroll();
    scroll();
    borrar();
}   

function calcular_precio_aumentado(){
    let precio1 = Number(textbox7.value);
    let precio2 = Number(textbox8.value);
    let precio_final;
    let porcentaje;

    precio_final = (precio2 - precio1);
    porcentaje = (precio_final / precio1 * 100).toFixed(2);
    
    resultado.textContent = `Aumento en un ${porcentaje}%`
    if(textbox7.value.length == 0 || textbox8.value.length == 0){
        resultado.textContent = ("Escribe un numero");
        mostrar_scroll();
        scroll();
    }
    mostrar_scroll();
    scroll();
    borrar();
}

function calcular_precio_caido(){
    let precio_inicial = Number(textbox9.value);
    let precio_bajado = Number(textbox10.value);
    let resta;
    let porcentaje;

    resta = precio_inicial - precio_bajado;
    porcentaje = (resta / precio_inicial * 100).toFixed(2);
    resultado.textContent = `El Precio Decayo un ${porcentaje}%`;
    if(textbox9.value.length == 0 || textbox10.value.length == 0){
        resultado.textContent = ("Escribe un numero");
        mostrar_scroll();
        scroll();
    }
    mostrar_scroll();
    scroll();
    borrar();
     
}

    
                
        
    

    

   
    

   


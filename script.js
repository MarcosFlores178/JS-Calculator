// const calc = function calculadora(tecla) {
//     const tecla = document.getElementById

    
// }
let flag = true;
console.log("en el script");
const pantalla = document.getElementById("pantalla-display")
const teclas = document.getElementById("teclas");
teclas.addEventListener("click", (e)=>{
    // console.log(e.target.value); Value sólo sirve para input, textarea o select
    let numeros = e.target.textContent;
    console.log("flag:",flag);
    console.log(e.target.innerText);
    // pantalla.value+=numeros;
    if (numeros === 'C') {
        pantalla.value = ''; // Limpia la pantalla
        flag=false;
      } else if (numeros === '=') {
        try {
           
          flag = true;
          console.log("true?", flag);
          pantalla.value = eval(pantalla.value); // Calcula el resultado
        } catch (error) {
          pantalla.value = 'Error'; // Maneja errores
        }
      } else if (e.target.tagName==="P") {
        if (flag===true){
        pantalla.value="";
            pantalla.value += numeros; // Agrega el número a la pantalla
            flag = false;
        }
        else{
            
            pantalla.value += numeros; // Agrega el número a la pantalla
            flag = false;
        }  
    }


})


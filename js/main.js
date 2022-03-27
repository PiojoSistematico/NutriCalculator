
function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function tabNavigation(tagClicked,formId) {
    let x = document.getElementsByClassName("fm");
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(formId).style.display = "flex"

    let y = document.getElementsByClassName("nav-link");
    for (let i = 0; i < x.length; i++) {
      y[i].style.background = "black";
    }
    document.getElementById(tagClicked).style.background = "rgba(72,61,139,1)";
}

function calculaIMC(e){
    
    e.preventDefault();
    let altura = parseFloat(document.querySelector("#altura").value);
    let peso = parseFloat(document.querySelector("#peso").value);
    let imc = round(peso/altura**2,1);

    document.getElementById("imc-respuesta").innerHTML = ` IMC = ${imc}`;
}
  

const calcularIMC = document.querySelector("#submit").addEventListener("click",calculaIMC);


//document.getElementsByClassName("btn-imc").addEventListener("click",tabNavigation("form-imc"));
//document.getElementsByClassName("btn-prueba2").addEventListener("click",tabNavigation("form-prueba2"));
//document.getElementsByClassName("btn-prueba3").addEventListener("click",tabNavigation("form-prueba3"));
//document.getElementsByClassName("btn-prueba4").addEventListener("click",tabNavigation("form-prueba4"));
//document.getElementsByClassName("btn-prueba5").addEventListener("click",tabNavigation("form-prueba5"));







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


function calculaTalla(e){
    
  e.preventDefault();
  const generoTalla = document.querySelector('input[name="genderTalla"]:checked').value;
  const edadTalla = parseFloat(document.querySelector("#edadTalla").value);
  const alturaPierna = parseFloat(document.querySelector("#alturaPierna").value);
  const longitudAntebrazo = parseFloat(document.querySelector("#longitudAntebrazo").value);
  const alturaTalonRodilla = parseFloat(document.querySelector("#alturaTalonRodilla").value);
  const alturaMaleoloRodilla = parseFloat(document.querySelector("#alturaMaleoloRodilla").value);

  console.log(generoTalla, typeof generoTalla)
  
  let tallaAlturaPierna
  let tallaLongitudAntebrazo
  let tallaAlturaTalonRodilla
  let tallaAlturaMaleoloRodilla

  if(generoTalla == "Hombre"){
    tallaAlturaPierna = 2.02*alturaPierna + (64.19-0.04*edadTalla);
    tallaLongitudAntebrazo = 97.252 + 2.645*longitudAntebrazo;
    tallaAlturaTalonRodilla = 2.02*alturaTalonRodilla + (64.19-0.04*edadTalla);
    tallaAlturaMaleoloRodilla = 1.121*alturaMaleoloRodilla - 0.117*edadTalla + 119.6;
  } else {
    tallaAlturaPierna = 1.83*alturaPierna + (84.80-0.24*edadTalla);
    tallaLongitudAntebrazo = 68.777 + 3.536*longitudAntebrazo;
    tallaAlturaTalonRodilla = 1.83*alturaTalonRodilla + (84.80-0.24*edadTalla);
    tallaAlturaMaleoloRodilla = 1.263*alturaMaleoloRodilla - 0.159*edadTalla + 107.7;
  }

  const tallaPromedio = 0.25 * (tallaAlturaPierna + tallaLongitudAntebrazo + tallaAlturaTalonRodilla + tallaAlturaMaleoloRodilla)
  
  document.getElementById("tallaAlturaPierna").innerHTML = ` Talla (altura de pierna) = ${tallaAlturaPierna.toFixed(1)}`;
  document.getElementById("tallaLongitudAntebrazo").innerHTML = ` Talla (Longitud de antebrazo) = ${tallaLongitudAntebrazo.toFixed(1)}`;
  document.getElementById("tallaAlturaTalonRodilla").innerHTML = ` Talla (Altura Talon-Rodilla) = ${tallaAlturaTalonRodilla.toFixed(1)}`;
  document.getElementById("tallaAlturaMaleoloRodilla").innerHTML = ` Talla (Altura Maleolo-Rodilla) = ${tallaAlturaMaleoloRodilla.toFixed(1)}`;
  document.getElementById("tallaPromedio").innerHTML = ` Talla (Promedio) = ${tallaPromedio.toFixed(1)}`;

}
  
const calcularIMC = document.querySelector("#submitIMC").addEventListener("click",calculaIMC);
const calcularTalla = document.querySelector("#submitTalla").addEventListener("click",calculaTalla);


//document.getElementsByClassName("btn-imc").addEventListener("click",tabNavigation("form-imc"));
//document.getElementsByClassName("btn-prueba2").addEventListener("click",tabNavigation("form-prueba2"));
//document.getElementsByClassName("btn-prueba3").addEventListener("click",tabNavigation("form-prueba3"));
//document.getElementsByClassName("btn-prueba4").addEventListener("click",tabNavigation("form-prueba4"));
//document.getElementsByClassName("btn-prueba5").addEventListener("click",tabNavigation("form-prueba5"));






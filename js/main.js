
//function round(value, precision) {
//    let multiplier = Math.pow(10, precision || 0);
//    return Math.round(value * multiplier) / multiplier;
//}

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

function borraCampos(e) {
  const formCollection = document.getElementsByClassName("fm");
  for (let i = 0; i < formCollection.length; i++) {
    formCollection[i].reset();
  }
}

//function cambiaEdad(e) {
//  let edad = parseFloat(e.target.value);
//  const edadCollection = document.getElementsByClassName("edad");
//  for (let i = 0; i < edadCollection.length; i++) {
//    edadCollection[i].value = edad;
//  }
//}

function calculateIMC(peso,talla,edad) {
  let imc = peso/talla**2
  if(edad >= 65){
    if(imc <= 23.0){
      clasificacion="Enflaquecido";
      riesgo = "Moderado";
    } else if(imc < 28.0) {
      clasificacion="Normal";
      riesgo = " ";
    } else if(imc < 32.0) {
      clasificacion="Sobrepeso";
      riesgo = "Incrementado";
    } else {
      clasificacion="Obesidad";
      riesgo = "Severo";
    }
  } else{
    if(imc <= 16.0){
      clasificacion="Deficiencia Energética Grado 3";
      riesgo = "Muy Severo";
    } else if(imc < 17.0) {
      clasificacion="Deficiencia Energética Grado 2";
      riesgo = "Severo";
    } else if(imc < 18.5) {
      clasificacion="Deficiencia Energética Grado 1";
      riesgo = "Moderado";
    } else if(imc < 25) {
      clasificacion="Normal";
      riesgo = "Normal";
    } else if(imc < 30) {
      clasificacion="Sobrepeso";
      riesgo = "Incrementado";
    } else if(imc < 35) {
      clasificacion="Obesidad Grado 1";
      riesgo = "Moderado";
    } else if(imc < 40) {
      clasificacion="Obesidad Grado 2";
      riesgo = "Severo";
    } else {
      clasificacion="Obesidad Grado 3";
      riesgo = "Muy Severo";
    }
  }
  return [imc,clasificacion,riesgo]
}


function calculaRCC(circunferenciaCintura,circunferenciaCadera,genero,edad){
  let relacionCinturaCadera=circunferenciaCintura/circunferenciaCadera
  let riesgoRCC
  if(genero == "Hombre"){
    if(edad <= 29){
      if(relacionCinturaCadera <= 0.83){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.88){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.94){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }
    } else if(edad <= 39){
      if(relacionCinturaCadera <= 0.84){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.91){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.96){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }
    } else if(edad <= 49){
      if(relacionCinturaCadera <= 0.88){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.95){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 1.00){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }
    } else if(edad <= 59){
      if(relacionCinturaCadera <= 0.90){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.96){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 1.02){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }        
    } else {
      if(relacionCinturaCadera <= 0.91){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.98){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 1.03){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }     
    }
  } else{
    if(edad <= 29){
      if(relacionCinturaCadera <= 0.71){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.77){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.82){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }
    } else if(edad <= 39){
      if(relacionCinturaCadera <= 0.72){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.78){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.84){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }
    } else if(edad <= 49){
      if(relacionCinturaCadera <= 0.73){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.79){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.87){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }
    } else if(edad <= 59){
      if(relacionCinturaCadera <= 0.74){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.81){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.88){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }        
    } else {
      if(relacionCinturaCadera <= 0.75){
        riesgoRCC = "Bajo"
      } else if(relacionCinturaCadera <= 0.83){
        riesgoRCC = "Moderado"
      } else if(relacionCinturaCadera <= 0.90){
        riesgoRCC = "Alto"
      } else {
        riesgoRCC = "Muy Alto"
      }     
    }
  }
  return riesgoRCC
}

function calcula(e){
    
    e.preventDefault();

    let edad = parseFloat(document.querySelector("#edad").value);
    let talla = parseFloat(document.querySelector("#talla").value);
    let peso = parseFloat(document.querySelector("#peso").value);

    const genero = document.querySelector('input[name="gender"]:checked').value;
    const raza = document.querySelector('input[name="raza"]:checked').value;
  
    const largoBrazo = parseFloat(document.querySelector("#largoBrazo").value);
    const longitudAntebrazo = parseFloat(document.querySelector("#longitudAntebrazo").value);
    const alturaTalonRodilla = parseFloat(document.querySelector("#alturaTalonRodilla").value);
    const alturaMaleoloRodilla = parseFloat(document.querySelector("#alturaMaleoloRodilla").value);
    const edadPeso = parseFloat(document.querySelector("#edadPeso").value);
    const alturaRodilla = parseFloat(document.querySelector("#alturaRodilla").value);
    const circunferenciaBraquial = parseFloat(document.querySelector("#circunferenciaBraquial").value);
    const circunferenciaCarpio = parseFloat(document.querySelector("#circunferenciaCarpio").value);
    //const talla = parseFloat(document.querySelector("#talla").value);


    //IMC
    let arrayIMC = calculateIMC(peso,talla,edad);
    document.getElementById("imc-respuesta").innerHTML = `${arrayIMC[0].toFixed(1)}`;
    document.getElementById("imc-clasificacion").innerHTML = `${arrayIMC[1]}`;
    document.getElementById("imc-riesgo").innerHTML = `${arrayIMC[2]}`;

    //Relacion Cintura Cadera (RCC)
    let rcc = calculaRCC(circunferenciaCintura,circunferenciaCadera,genero,edad)
    document.getElementById("rcc").innerHTML = `${rcc}`;

    let tallaLargoBrazo
    let tallaLongitudAntebrazo
    let tallaAlturaTalonRodilla
    let tallaAlturaMaleoloRodilla

    if(generoTalla == "Hombre"){
      tallaLargoBrazo = 2.0*largoBrazo;
      tallaLongitudAntebrazo = 97.252 + 2.645*longitudAntebrazo;
      tallaAlturaTalonRodilla = 2.02*alturaTalonRodilla + (64.19-0.04*edadTalla);
      tallaAlturaMaleoloRodilla = 1.121*alturaMaleoloRodilla - 0.117*edadTalla + 119.6;
    } else {
      tallaLargoBrazo = 1.83*alturaPierna + (84.80-0.24*edadTalla);
      tallaLongitudAntebrazo = 68.777 + 3.536*longitudAntebrazo;
      tallaAlturaTalonRodilla = 1.83*alturaTalonRodilla + (84.80-0.24*edadTalla);
      tallaAlturaMaleoloRodilla = 1.263*alturaMaleoloRodilla - 0.159*edadTalla + 107.7;
    }

    const tallaPromedio = 0.25 * (tallaLargoBrazo + tallaLongitudAntebrazo + tallaAlturaTalonRodilla + tallaAlturaMaleoloRodilla)
    
    document.getElementById("tallaLargoBrazo").innerHTML = `${tallaLargoBrazo.toFixed(1)}`;
    document.getElementById("tallaLongitudAntebrazo").innerHTML = `${tallaLongitudAntebrazo.toFixed(1)}`;
    document.getElementById("tallaAlturaTalonRodilla").innerHTML = `${tallaAlturaTalonRodilla.toFixed(1)}`;
    document.getElementById("tallaAlturaMaleoloRodilla").innerHTML = `${tallaAlturaMaleoloRodilla.toFixed(1)}`;
    document.getElementById("tallaPromedio").innerHTML = `${tallaPromedio.toFixed(1)}`;


    
    const r = (talla/circunferenciaCarpio);
    let pesoARCB;
    let pesoIdealLorenz;
    let pesoEstructuraOsea;
    
    
    

    if(generoPeso == "Hombre"){
      pesoIdealLorenz = talla - 100 - (talla-150)/4.0 + (edadPeso-20)/4.0;
      pesoIdealOB = 62.7 + 0.54*talla - 159.6;
      if(razaPeso == "Blanca"){
        if(edadPeso < 60.0){
          pesoARCB = 1.19*alturaRodilla + 3.21*circunferenciaBraquial - 86.82;
        } else{
          pesoARCB = 1.10*alturaRodilla + 3.07*circunferenciaBraquial - 75.81;
        }
      } else {
        if(edadPeso < 60.0){
          pesoARCB = 1.09*alturaRodilla + 3.14*circunferenciaBraquial - 83.72;
        } else{
          pesoARCB = 0.44*alturaRodilla + 2.86*circunferenciaBraquial - 39.21;
        }
      }
    } else {
      pesoIdealLorenz = talla - 100 - (talla-150)/2.5 + (edadPeso-20)/2.5;
      pesoIdealOB = 54.0 + 0.54*talla - 152.0;
      if(razaPeso == "Blanca"){
        if(edadPeso < 60.0){
          pesoARCB = 1.01*alturaRodilla + 2.81*circunferenciaBraquial - 66.04;
        } else{
          pesoARCB = 1.09*alturaRodilla + 2.68*circunferenciaBraquial - 65.51;
        }
      } else {
        if(edadPeso < 60.0){
          pesoARCB = 1.24*alturaRodilla + 2.97*circunferenciaBraquial - 82.48;
        } else{
          pesoARCB = 1.50*alturaRodilla + 2.58*circunferenciaBraquial - 84.22;
        }
      }
    }

    if(generoPeso == "Hombre"){
      if(edadPeso < 65.0){
        if(r>10.4){
          pesoEstructuraOsea = 20*(talla/100)**2;
        } else if(r>9.6) {
          pesoEstructuraOsea = 23*(talla/100)**2;
        } else {
          pesoEstructuraOsea = 25*(talla/100)**2;
        }
      } else {
        if(r>10.4){
          pesoEstructuraOsea = 23*(talla/100)**2;
        } else if(r>9.6) {
          pesoEstructuraOsea = 26*(talla/100)**2;
        } else {
          pesoEstructuraOsea = 28*(talla/100)**2;
        }
      }
    } else {
      if(edadPeso < 65.0){
        if(r>11.0){
          pesoEstructuraOsea = 20*(talla/100)**2;
        } else if(r>10.1) {
          pesoEstructuraOsea = 23*(talla/100)**2;
        } else {
          pesoEstructuraOsea = 25*(talla/100)**2;
        }
      } else {
        if(r>11.0){
          pesoEstructuraOsea = 23*(talla/100)**2;
        } else if(r>10.1) {
          pesoEstructuraOsea = 26*(talla/100)**2;
        } else {
          pesoEstructuraOsea = 28*(talla/100)**2;
        }
      }
    }

    const pesoPromedio = (pesoARCB + pesoIdealLorenz + pesoEstructuraOsea)/3;
    
    document.getElementById("pesoARCB").innerHTML = `${pesoARCB.toFixed(1)}`;
    document.getElementById("pesoIdealLorenz").innerHTML = `${pesoIdealLorenz.toFixed(1)}`;
    document.getElementById("pesoEstructuraOsea").innerHTML = `${pesoEstructuraOsea.toFixed(1)}`;
    document.getElementById("pesoPromedio").innerHTML = `${pesoPromedio.toFixed(1)}`;  

}

const calcular = document.querySelector("#submit").addEventListener("click",calcula);
const borrarCampos = document.querySelector("#borrarCampos").addEventListener("click",borraCampos);


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

function calculaIMC(peso,talla,edad) {
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

function calculaPesoIdealOB(talla,genero) {
  let pesoIdealOB
  if(genero == "Hombre"){
    pesoIdealOB = 62.7 + 0.54*talla - 159.6;
  } else {
    pesoIdealOB = 54.0 + 0.54*talla - 152.0;
  }
  return pesoIdealOB
}

function calculaPesoIdealLorentz(genero,talla,edad){
  let pesoIdealLorenz
  if(genero == "Hombre"){
    pesoIdealLorenz = talla - 100 - (talla-150)/4.0 + (edad-20)/4.0;
  } else {
    pesoIdealLorenz = talla - 100 - (talla-150)/2.5 + (edad-20)/2.5;
  }
  return pesoIdealLorenz
}

function calculaPesoEstimado(genero,circunferenciaPantorrilla,alturaRodilla,circunferenciaBrazo,PCSE,edad){
  let pesoEstimado
  if(edad >= 60.0) {
    if(genero == "Hombre"){
      pesoEstimado = 0.98*circunferenciaPantorrilla + 1.16*alturaRodilla + 0.37*PCSE - 81.69;
    } else {
      pesoEstimado = 1.27*circunferenciaPantorrilla + 0.87*alturaRodilla + 0.40*PCSE - 62.35;
    }
  } else {

  }
  return pesoEstimado
} 

function calculaICT(circunferenciaCintura,talla){
  let ict = circunferenciaCintura/talla
  if(ict<0.50){
    return "Riesgo Mínimo"
  } else if(ict<0.54) {
    return "Riesgo Moderado"
  } else {
    return "Riesgo Alto"
  }
}

function calculaTallaAR(edad,genero,alturaRodilla){
  let tallaAR
  if(edad >= 60.0) {
    if(genero == "Hombre"){
      tallaAR = 2.02*alturaRodilla + 64.19 - 0.04*edad;
    } else {
      tallaAR = 1.83*alturaRodilla + 84.88 - 0.24*edad;
    }
  } else {

  }
  return tallaAR
}

function calculaTallaLRM(edad,genero,longitudRodillaMaleolo){
  let tallaLRM
  if(edad >= 60.0) {
    if(genero == "Hombre"){
      tallaLRM = 1.121*longitudRodillaMaleolo + 119.6 - 0.117*edad;
    } else {
      tallaLRM = 1.263*longitudRodillaMaleolo + 107.7 - 0.159*edad;
    }
  } else {

  }
  return tallaLRM
}

function calculaTallaLA(edad,genero,longitudAntebrazo){
  if(edad > 65.0) {
    if(longitudAntebrazo >= 32.0){
      return (genero = "Hombre") ? 1.87 : 1.84
    } else if (longitudAntebrazo >= 31.5) {
      return (genero = "Hombre") ? 1.86 : 1.83
    } else if (longitudAntebrazo >= 31.0) {
      return (genero = "Hombre") ? 1.84 : 1.81
    } else if (longitudAntebrazo >= 30.5) {
      return (genero = "Hombre") ? 1.82 : 1.79
    } else if (longitudAntebrazo >= 30.0) {
      return (genero = "Hombre") ? 1.81 : 1.76
    } else if (longitudAntebrazo >= 29.5) {
      return (genero = "Hombre") ? 1.79 : 1.76
    } else if (longitudAntebrazo >= 29.0) {
      return (genero = "Hombre") ? 1.78 : 1.75
    } else if (longitudAntebrazo >= 28.5) {
      return (genero = "Hombre") ? 1.76 : 1.73
    } else if (longitudAntebrazo >= 28.0) {
      return (genero = "Hombre") ? 1.75 : 1.71
    } else if (longitudAntebrazo >= 27.5) {
      return (genero = "Hombre") ? 1.73 : 1.70
    } else if (longitudAntebrazo >= 27.0) {
      return (genero = "Hombre") ? 1.71 : 1.68
    } else if (longitudAntebrazo >= 26.5) {
      return (genero = "Hombre") ? 1.70 : 1.66
    } else if (longitudAntebrazo >= 26.0) {
      return (genero = "Hombre") ? 1.68 : 1.65
    } else if (longitudAntebrazo >= 25.5) {
      return (genero = "Hombre") ? 1.67 : 1.63
    } else if (longitudAntebrazo >= 25.0) {
      return (genero = "Hombre") ? 1.65 : 1.61
    } else if (longitudAntebrazo >= 24.5) {
      return (genero = "Hombre") ? 1.63: 1.60
    } else if (longitudAntebrazo >= 24.0) {
      return (genero = "Hombre") ? 1.62 : 1.58
    } else if (longitudAntebrazo >= 23.5) {
      return (genero = "Hombre") ? 1.60 : 1.56
    } else if (longitudAntebrazo >= 23.0) {
      return (genero = "Hombre") ? 1.59 : 1.55
    } else if (longitudAntebrazo >= 22.5) {
      return (genero = "Hombre") ? 1.57 : 1.53
    } else if (longitudAntebrazo >= 22.0) {
      return (genero = "Hombre") ? 1.56 : 1.52
    } else if (longitudAntebrazo >= 21.5) {
      return (genero = "Hombre") ? 1.54 : 1.50
    } else if (longitudAntebrazo >= 21.0) {
      return (genero = "Hombre") ? 1.52 : 1.48
    } else if (longitudAntebrazo >= 20.5) {
      return (genero = "Hombre") ? 1.51 : 1.47
    } else if (longitudAntebrazo >= 20.0) {
      return (genero = "Hombre") ? 1.49 : 1.45
    } else if (longitudAntebrazo >= 19.5) {
      return (genero = "Hombre") ? 1.48 : 1.44
    } else if (longitudAntebrazo >= 19.0) {
      return (genero = "Hombre") ? 1.46 : 1.42
    } else {
      return (genero = "Hombre") ? 1.45 : 1.40
    }
  } else {

  }
}

function calculaTallaMB(largoBrazo){
  return 2.0*largoBrazo;
}

function calculaPesoEO(genero,talla,edad,circunferenciaCarpio) {
  let pesoEstructuraOsea
  let r = (talla/circunferenciaCarpio);
  if(genero == "Hombre"){
    if(edad < 65.0){
      if(r>10.4){
        pesoEstructuraOsea = 20*talla**2;
      } else if(r>9.6) {
        pesoEstructuraOsea = 23*talla**2;
      } else {
        pesoEstructuraOsea = 25*talla**2;
      }
    } else {
      if(r>10.4){
        pesoEstructuraOsea = 23*talla**2;
      } else if(r>9.6) {
        pesoEstructuraOsea = 26*talla**2;
      } else {
        pesoEstructuraOsea = 28*talla**2;
      }
    }
  } else {
    if(edad < 65.0){
      if(r>11.0){
        pesoEstructuraOsea = 20*talla**2;
      } else if(r>10.1) {
        pesoEstructuraOsea = 23*talla**2;
      } else {
        pesoEstructuraOsea = 25*talla**2;
      }
    } else {
      if(r>11.0){
        pesoEstructuraOsea = 23*talla**2;
      } else if(r>10.1) {
        pesoEstructuraOsea = 26*talla**2;
      } else {
        pesoEstructuraOsea = 28*talla**2;
      }
    }
  }
}

function calculaPesoARCB(genero,raza,edad,alturaRodilla,circunferenciaBraquial){
  let pesoARCB
  if(genero == "Hombre"){
    if(raza == "Blanca"){
      if(edad < 60.0){
        pesoARCB = 1.19*alturaRodilla + 3.21*circunferenciaBraquial - 86.82;
      } else{
        pesoARCB = 1.10*alturaRodilla + 3.07*circunferenciaBraquial - 75.81;
      }
    } else {
      if(edad < 60.0){
        pesoARCB = 1.09*alturaRodilla + 3.14*circunferenciaBraquial - 83.72;
      } else{
        pesoARCB = 0.44*alturaRodilla + 2.86*circunferenciaBraquial - 39.21;
      }
    }
  } else {
    if(raza == "Blanca"){
      if(edad < 60.0){
        pesoARCB = 1.01*alturaRodilla + 2.81*circunferenciaBraquial - 66.04;
      } else{
        pesoARCB = 1.09*alturaRodilla + 2.68*circunferenciaBraquial - 65.51;
      }
    } else {
      if(edad < 60.0){
        pesoARCB = 1.24*alturaRodilla + 2.97*circunferenciaBraquial - 82.48;
      } else{
        pesoARCB = 1.50*alturaRodilla + 2.58*circunferenciaBraquial - 84.22;
      }
    }
  }
  return pesoARCB
}


function calcula(e){
    
    e.preventDefault();

    const edad = parseFloat(document.querySelector("#edad").value);
    const talla = parseFloat(document.querySelector("#talla").value);
    const peso = parseFloat(document.querySelector("#peso").value);

    const genero = document.querySelector('input[name="gender"]:checked').value;
    const raza = document.querySelector('input[name="raza"]:checked').value;
  
    const largoBrazo = parseFloat(document.querySelector("#largoBrazo").value);
    const longitudAntebrazo = parseFloat(document.querySelector("#longitudAntebrazo").value);
    const longitudRodillaMaleolo = parseFloat(document.querySelector("#longitudRodillaMaleolo").value);
    const alturaRodilla = parseFloat(document.querySelector("#alturaRodilla").value);
    const circunferenciaBraquial = parseFloat(document.querySelector("#circunferenciaBraquial").value);
    const circunferenciaCarpio = parseFloat(document.querySelector("#circunferenciaCarpio").value);
    const circunferenciaCintura = parseFloat(document.querySelector("#circunferenciaCintura").value);
    const circunferenciaCadera = parseFloat(document.querySelector("#circunferenciaCadera").value);

    //IMC
    let arrayIMC = calculaIMC(peso,talla,edad);
    document.getElementById("imc-respuesta").innerHTML = `${arrayIMC[0].toFixed(1)}`;
    document.getElementById("imc-clasificacion").innerHTML = `${arrayIMC[1]}`;
    document.getElementById("imc-riesgo").innerHTML = `${arrayIMC[2]}`;

    //Relacion Cintura Cadera (RCC)
    let rcc = calculaRCC(circunferenciaCintura,circunferenciaCadera,genero,edad)
    document.getElementById("rcc").innerHTML = `${rcc}`;

    //Peso Ideal Obesidad
    let pesoIdealOB = calculaPesoIdealOB(talla,genero)
    document.getElementById("pesoIdealOB").innerHTML = `${pesoIdealOB}`;
    
    //Peso Ideal Lorentz
    let pesoIdealLorentz = calculaPesoIdealLorentz(genero,talla,edad)
    document.getElementById("pesoIdealLorentz").innerHTML = `${pesoIdealLorentz}`;

    //Peso Estructura Osea
    let pesoEstructuraOsea = calculaPesoEO(genero,talla,edad,circunferenciaCarpio)
    document.getElementById("pesoEstructuraOsea").innerHTML = `${pesoEstructuraOsea}`;

    //Peso ARCB
    let pesoARCB = calculaPesoARCB(genero,raza,edad,alturaRodilla,circunferenciaBraquial)
    document.getElementById("pesoARCB").innerHTML = `${pesoARCB}`;
    
    //Indice Cintura Talla (ICT)
    let ict = calculaICT(circunferenciaCintura,talla)
    document.getElementById("ict").innerHTML = `${ict}`;

    //Talla Estimada Altura de Rodilla (AR)
    let tallaAlturaRodilla = calculaTallaAR(edad,genero,alturaRodilla)
    document.getElementById("tallaAlturaRodilla").innerHTML = `${tallaAlturaRodilla}`;
    
    //Talla Estimada Longitud Rodilla Maleolo (LRM)
    let tallaRodillaMaleolo = calculaTallaLRM(edad,genero,longitudRodillaMaleolo)
    document.getElementById("tallaAlturaRodilla").innerHTML = `${tallaRodillaMaleolo}`;
        
    //Talla Estimada Largo Antebrazo (LA)
    let tallaLargoAntebrazo = calculaTallaLA(edad,genero,longitudAntebrazo)
    document.getElementById("tallaLargoAntebrazo").innerHTML = `${tallaLargoAntebrazo}`;
    
    //Talla Estimada Media Brazada (MB)
    let tallaMediaBrazada = calculaTallaMB(largoBrazo)
    document.getElementById("tallaMediaBrazada").innerHTML = `${tallaMediaBrazada}`;


/* 
    let tallaLargoBrazo
    let tallaLongitudAntebrazo
    let tallaAlturaTalonRodilla
    let tallaAlturaMaleoloRodilla */
/*     if(generoTalla == "Hombre"){
      tallaLongitudAntebrazo = 97.252 + 2.645*longitudAntebrazo;
      tallaAlturaTalonRodilla = 2.02*alturaTalonRodilla + (64.19-0.04*edadTalla);
      tallaAlturaMaleoloRodilla = 1.121*alturaMaleoloRodilla - 0.117*edadTalla + 119.6;
    } else {
      tallaLargoBrazo = 1.83*alturaPierna + (84.80-0.24*edadTalla);
      tallaLongitudAntebrazo = 68.777 + 3.536*longitudAntebrazo;
      tallaAlturaTalonRodilla = 1.83*alturaTalonRodilla + (84.80-0.24*edadTalla);
      tallaAlturaMaleoloRodilla = 1.263*alturaMaleoloRodilla - 0.159*edadTalla + 107.7;
    } */
/*     const tallaPromedio = 0.25 * (tallaLargoBrazo + tallaLongitudAntebrazo + tallaAlturaTalonRodilla + tallaAlturaMaleoloRodilla)
    document.getElementById("tallaLargoBrazo").innerHTML = `${tallaLargoBrazo.toFixed(1)}`;
    document.getElementById("tallaLongitudAntebrazo").innerHTML = `${tallaLongitudAntebrazo.toFixed(1)}`;
    document.getElementById("tallaAlturaTalonRodilla").innerHTML = `${tallaAlturaTalonRodilla.toFixed(1)}`;
    document.getElementById("tallaAlturaMaleoloRodilla").innerHTML = `${tallaAlturaMaleoloRodilla.toFixed(1)}`;
    document.getElementById("tallaPromedio").innerHTML = `${tallaPromedio.toFixed(1)}`; */
/* 
    const pesoPromedio = (pesoARCB + pesoIdealLorenz + pesoEstructuraOsea)/3;
    
    document.getElementById("pesoARCB").innerHTML = `${pesoARCB.toFixed(1)}`;
    document.getElementById("pesoIdealLorenz").innerHTML = `${pesoIdealLorenz.toFixed(1)}`;
    document.getElementById("pesoEstructuraOsea").innerHTML = `${pesoEstructuraOsea.toFixed(1)}`;
    document.getElementById("pesoPromedio").innerHTML = `${pesoPromedio.toFixed(1)}`;  
 */
}

const calcular = document.querySelector("#submit").addEventListener("click",calcula);
const borrarCampos = document.querySelector("#borrarCampos").addEventListener("click",borraCampos);

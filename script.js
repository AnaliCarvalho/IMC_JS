function calcular() {
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let texto = document.getElementById("resultado");
    let resultado = (peso / (altura * altura));
    let resultadoFinal = resultado.toFixed(1)

    document.getElementById("resultado").innerHTML = "O resultado é: " + resultadoFinal

    if (resultadoFinal <= 18.5) {
        texto.innerHTML = "Abaixo do peso normal, o valor do seu IMC é de: " + resultadoFinal;
    } else if (resultadoFinal >= 18.5 && resultadoFinal <= 24.9) {
        texto.innerHTML = "Peso normal. Seu IMC é no valor de: " + resultadoFinal
    } else if (resultadoFinal => 25 && resultadoFinal <= 29.9) {
        texto.innerHTML = "Excesso de peso. O seu valor de IMC é de: " + resultadoFinal
    } else if (resultadoFinal => 30 && resultadoFinal <= 34.9) {
        texto.innerHTML = "Obesidade Classe I. O seu valor de IMC é de: " + resultadoFinal
    } else if (resultadoFinal => 35 && resultadoFinal <= 39.9) {
        texto.innerHTML = "Obesidade Classe II. O seu valor de IMC é de: " + resultadoFinal
    } else {
        texto.innerHTML = "Obesidade classe III. O seu valor de IMC é de: " + resultadoFinal
    }
}
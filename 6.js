
let peso =Number (prompt("digite seu peso").replaceAll(',',','))
let altura =Number (prompt("digite seu peso").replaceAll(',',','))
let imc= peso / altura ** 2
//analise do imc
// menor que 18: abaixo do peso
if (imc< 18){
    alert(`seu imc ${imc.toFixed(2)}esta numa faixa abaixo do peso`)
}

// criando variaveis
let peso
let altura 
let imc
// pedido de informacoes
peso = Number(prompt(" Qual seu peso ").replaceAll(',','.'))
altura = Number (prompt(" qual sua altura"));
// algoritimo para responder
{
    imc = peso/ (altura*altura)
}
alert("seu imc é " +imc.toFixed(2))
//exibir que o imc esta acima do ideal
if(imc<=30){
    alert ("sei imc esta estavel")
}else{

    alert(" seu imc nao esta estavel")
}
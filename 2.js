// entrada de dados
let idade= Number(prompt("digite sua idade"))
if(idade <16){
    alert(" voce nao pode voltar")
}
else if((idade>=16 && idade <=17) || idade >= 70){
    alert(" seu voto é opcional")
}
else{
    alert(" seu voto e obrigatorio")
}

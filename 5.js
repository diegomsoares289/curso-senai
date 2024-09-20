//calculo de media de notas
let nota1,nota2,nota3,soma
nota1= Number(prompt('digte sua nota 1'))
nota2= Number(prompt('digte sua nota 2'))
nota3= Number(prompt('digte sua nota 3'))
soma= nota1+nota2+nota3
// avaliar a media
soma=soma/3
if (soma>=7){
    alert (`voce esta aprovado" ${soma.toFixed(2)})

}
else{
    alert(`voce esta reprovado" ${soma.toFixed(2)})
}


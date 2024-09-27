// Calculadora de média

const nota1 = Number(prompt("Informe a primeira nota:"))
const nota2 = Number(prompt("Informe a segunda nota:"))
const nota3 = Number(prompt("Informe a terceira nota:"))
const nota4 = Number(prompt("Informe a quarta nota:"))

const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagem = ""

if (media >= 7) {
    mensagem = `A média é ${media}, portanto o aluno foi aprovado.`
}
else {
    if (media >= 5) {
        mensagem = `A média é ${media}, portanto o aluno está em recuperação.`
    }
    else {
        mensagem = `A média é ${media}, portanto o aluno está reprovado.`
    }
}


document.body.appendChild(document.createTextNode(mensagem))
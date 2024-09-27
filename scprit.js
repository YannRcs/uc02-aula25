// Crie um programa que leia dois valores numéricos do usuário e em seguida, calcule a sua soma. Em seguida valide se o resultado da soma for maior que 5 retorne "Passou do limite". Senão, escreva a mensagem "Dentro do Limite".

//ENTRADA

const valor1 = Number(prompt("Digite um valor:"))
const valor2 = Number(prompt("Digite outro valor:"))
console.log(valor1, valor2)

//PROCESSAMENTO
const resultado = valor1 + valor2
console.log(resultado)

let mensagem = ""

if (resultado > 5) {
    mensagem = "Passou do limite"
}
else {
    mensagem = "Continua aí irmão"
}

const percentual = (valor1 * 0.10) / valor2;

if (percentual >= 10) {
    mensagem = "MAIOR QUE 10%"
}
else {
    mensagem = "MENOR QUE 10%"
}

//SAÍDA

const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode(mensagem))
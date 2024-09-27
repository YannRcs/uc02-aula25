const divRoot = document.getElementById("root")

const numero = Number(prompt("Informe um valor:"))

const resto = numero % 2

console.log(resto)

let mensagem = ""

if(resto === 0){
    mensagem = `${numero} é par.`
}
else {
    mensagem = `${numero} é ímpar`
}

divRoot.appendChild(document.createTextNode(mensagem))


console.log("Teste em JavaScript")

var animal = "galo"
console.log(animal)

let nomeCompleto = 'Lucas Alexandre'
console.log(nomeCompleto)

var valor1
const valor0 = 10;
console.log(valor0)

valor1 = 12
valor1 = 15

// const não permite reatribuição : valor0 = 14

//verificação de tipos?
console.log(typeof valor1)

// algoritmo: entrada + processamento + saida
//var nome = window.prompt("Nome: ")
// console.log("Seja bem vindo " + nome)
// console.log(`Seja bem vindo ${nome}, Aproveite:`) // template literal
// document.writeln(`Seja bem vindo ${nome}, Aproveite:`)

console.log(5 == '5')
console.log(5 === '5')

var num1 = parseFloat(window.prompt("Numero 1: "))
var num2 = parseFloat(window.prompt("Numero 2: "))

var soma = num1 + num2
console.log(soma)

var idade = 10
if (idade >=18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

var hora = 10
if(hora < 12) {
    console.log("Bom dia")
} else if(hpra < 18) {
    console.log("Boa Tarde")
} else {
    console.log("Boa noite")
}

for (let i=0; i<5; i++){
    console.log("iteração: " + i)
}

while(i=5){
    console.log("iteração: " + i)
    i++;
}

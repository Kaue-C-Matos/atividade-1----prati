const prompt = require("prompt-sync")()
//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.
/*const num = 8
if (num%2 == 0){
    console.log(`O número ${num} é par`)
} else{
    console.log(`O número ${num} é ímpar`)
}*/


//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
/*const idade = 70
if (idade <=13){
    console.log("Você é criança")
} else if(idade<=17){
    console.log("Você é adolescente")
} else if(idade<=59){
    console.log("Você é adulto")
} else {
    console.log("Você é idoso")
}*/


//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
/*const nota = 5
if (nota <4){
    console.log("Reprovado")
} else if (nota<7){
    console.log("Recuperação")
} else {
    console.log("Aprovado")
}*/


//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
/*let opcao = Number(prompt("Selecione uma opção de 1 a 3: "))
switch (opcao) {
    case 1:
        console.log("Você selecionou a opção 1")
        break;
    case 2:
        console.log("Você selecionou a opção 2")
        break;
    case 3:
        console.log("Você selecionou a opção 3")
        break;    
    default:
        console.log("Você não selecionou uma opção válida")
        break;
}*/


//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
/*const peso = 70
const altura = 1.85
const imc = peso/(altura*altura)
if(imc < 18.5){
    console.log("baixo peso")
} else if (imc < 25){
    console.log("peso normal")
} else if (imc < 30){
    console.log("sobrepeso")
} else if(imc < 35){
    console.log("obesidade")
} else {
    console.log("obesidade extrema")
}*/

//6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
/*const a = 10
const b = 10
const c = 10
if (a<b+c && b<a+c && c<a+b){
    if (a==b && b==c){
        console.log("Triângulo equilátero")
    } else if (a==b || b==c || a==c){
        console.log("Triângulo isósceles")
    } else {
        console.log("Triângulo escaleno")
    }
} else {
    console.log("Não é um triângulo")
}*/


//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
/*const macas = 15
let valorTotal
if (macas < 12){
    valorTotal = macas * 0.3
} else {
    valorTotal = macas * 0.25
}
console.log("Valor total: R$", valorTotal)*/


//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
/*const a = 50
const b = 15
if (a > b) {
    console.log(b, "-", a)
} else{
    console.log(a, "-", b)
}*/


//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.
/*for(let i = 10; i >= 1; i--){
    console.log(i)
}*/


//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
/*const num = 10
for(let i = 0; i < 10; i++){
    console.log(num)
}*/


//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
/*let total = 0
for(let i = 0; i < 5; i++){
    let num = Number(prompt("Digite um número: "))
    total += num
}
console.log("A soma dos números é:", total)*/


//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
/*let num = Number(prompt("Digite um número: "))
for(let i = 1; i<=10; i++){
    console.log(num * i)
}*/


//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
/*let num = 0
let quant = -1
let soma = 0
do {
    num = Number(prompt("Digite um número qualquer ou digite 0 para realizar a média dos números anteriores: "))
    soma += num
    quant++
} while(num !==0)
console.log("Média: ", soma/quant)*/

//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
/*let num = Number(prompt("Digite um número para ser calculada a fatorial: "))
let total = num
num -= 1
for (num; num > 0; num--){
    total = total * num
}
console.log(total)*/

//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let num1 = 1
let num2 = 1
let num3 = 0
console.log(num1)
console.log(num2)
for(let i = 2; i < 10; i++){
    num3 = num1 + num2
    console.log(num3)
    num1 = num2
    num2 = num3
}
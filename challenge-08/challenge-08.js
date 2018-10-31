/*
Declare uma variável chamada `sum` e atribua a ela uma função chamada
`calculateSum`. A função deve receber dois parâmetros e retornar a soma
desses parâmetros.
*/
// ?
var sum = {};
sum.calcula = function calcula(num1, num2){
    return num1 + num2;
}
/*
Invoque a função criada acima, passando dois números que serão somados, e mostre
o resultado no console, com a frase:
"A soma de [VALOR 1] e [VALOR2] é igual a [RESULTADO]."
*/
// ?
var num1 = 5
var num2 = 10
var somado = sum.calcula(num1,num2);

console.log('Soma de '+num1+' e '+num2 + ' é '+sum.calcula(num1,num2));

/*
Mostre no console o nome da função criada acima, com a frase:
"O nome da função que faz a soma é [NOME DA FUNÇÃO]."
*/
// ?
console.log('Nome da função '+ sum.calcula.name)

/*
Crie uma função literal chamada `showName`. Essa função deve retornar o
seu nome.
*/
// ?
function showName(nome){
    return nome;
}

/*
Declare uma variável chamada `varShowName` que recebe a função criada acima.
*/
// ?
var nome = 'Deivisson'
var varShowName = showName;
/*
Usando a variável criada acima, mostre no console o nome e o retorno da função
atribuída a ela, com a seguinte frase:
"A função [NOME DA FUNÇÃO] retorna [RETORNO DA FUNÇÃO]."
*/
// ?
console.log(varShowName.name+' retorna '+varShowName(nome))
/*
Crie uma função literal chamada `calculator`, que funcione assim:
- A função deve receber um parâmetro que dirá qual operação matemática ela
vai efetuar. Será uma string com os valores `+`, `-`, `*`, `/` ou `%`;
- Essa função deve retornar uma segunda função que fará o seguinte:
  - Essa segunda função deve receber dois parâmetros;
  - Esses dois parâmetros serão os operandos usados na operação matemática;
  - O retorno dessa segunda função é a operação matemática completa, com a frase:
  "Resultado da operação: [NUMERO1] [OPERADOR] [NUMERO2] = [RESULTADO]."
  - Se o operador não for válido, retornar a frase:
  "Operação inválida."
*/
// ?
function calculadora(v1, v2, oper ){
    switch(oper){
        case '+':
        return v1 + v2;
        break;
        
        case '-':
        return v1 - v2;
        break;
        
        case '*':
        return v1 * v2;
        break;
        
        case '/':
        if(v2 === 0){
            return 'divisor não pode ser zero'}
        else {
            return v1 / v2;
        }
        break;
        
        case '%':
        return v1 %v2;
        break;

        default:
        return 'Operador inválido!'
    } 
    // if(oper != '+' && oper != '-' && oper != '*'&&oper != '/' && oper != '%'){
    //     return 'Operador inválido!'
    // }else {
    //     function calc(v1, v2, oper){
    //         return v1+oper+v2;
    //     }
    //     return calc(v1, v2 ,oper);
    // }
}
console.log(calculadora(5,0,'/'))
console.log(calculadora(5,1,'-'))

/*
Declare uma variável chamada `sum`, que receberá a função acima, passando como
parâmetro o operador de soma.
*/
// ?
var sum = calculadora;

/*
Agora `sum` é uma função. Mostre no console a soma de dois números, usando ela.
*/
// ?
console.log(sum(30,8,'+'));
/*
Agora, declare algumas variáveis com os nomes `subtraction`, `multiplication`,
`division` e `mod`, e atribua a elas a função `calculator`, passando o operador
correto por parâmetro para cada uma delas.
*/
var sub = calculadora;
var div = calculadora;
var mult = calculadora;
var mod = calculadora;
/*
Faça uma operação com cada uma das funções criadas acima, mostrando o resultado
no console.
*/
// ?
console.log(sum(30,8,'+'));
console.log(div(30,8,'/'));
console.log(sub(30,8,'-'));
console.log(mult(30,8,'*'));
console.log(mod(30,8,'%'));

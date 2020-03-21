// let texto = 'TEXTO'
// var global = 123;
// const paralelepipedo = 'teste'
// let texto3 = 'dsadasdas'
// if(texto === 'TEXTO'){
//   texto3 = 'laranja';
//   var texto4 = 'AZUL';
//   console.log(texto);
//   console.log(texto3);
//   console.log(global);
//   if(texto4 === 'AZUL'){
//     console.log(texto3)
//   }
// }
// console.log(texto3);
// console.log(global);
// console.log(texto4);
// paralelepipedo = 123;
// console.log(paralelepipedo);

// ////////////
// /////Array//////

// let frutas = ['banana','maçã','pêra'];

// let variavelArray = ['banana',123,['macaco','girafa'],{nome:'Marcelo'}]
                                         
//         if(frutas[2] == 'pêra'){

//         }



let profissionais = [
  {
    Nome:'Jose',
    Idade: 50,
    Profissao: 'Porteiro',
    ESaude: false
  },
  {
    Nome:'Zuleika',
    Idade: 12,
    Profissao: 'Neuro Cirurgião',
    ESaude: true
  },
  {
    Nome: 'Betania',
    Idade: 30,
    Profissao: 'Uber',
    ESaude: false
  },
  {
    Nome: 'Roberto',
    Idade: 40,
    Profissao: 'Medico',
    ESaude: true
  },
  {
    Nome: 'Aline',
    Idade: 22,
    Profissao: 'Enfermeira',
    ESaude: true
  },
]

// console.log(profissionais.length)

for(let index = 0;index < 5;index ++){
  if(profissionais[index].ESaude === true){
    console.log('O '+ profissionais[index].Nome +' pode trabalhar');
  }else{
    console.log('O ' + profissionais[index].Nome + ' tem que ficar em casa');
  }
}









// for(let index = 0; index <= 2;index++){
//     console.log(frutas[index]);
// }
































// //Concatenando strings
// var one = 'PALMEIRAS, ';
// var two = 'NÃO TEM MUNDIAL!!';
// var joined = one + two;
// console.log(joined);

// var multiple = one + one + one + one + two;
// console.log(multiple);

// var response = one + 'REALMENTE ' + two;
// console.log(response);

// //Números x strings

// var myString = '123';
// var myNum = Number(myString);
// console.log(typeof myNum);

// var myString = '123';
// var myNum = Number(myString);
// console.log(typeof myNum);

// var myNum = 123;
// var myString = myNum.toString();
// console.log(typeof myString);

// //Descobrindo o comprimento de uma string

// var browserType = 'mozilla';
// browserType.length;

// //Recuperando um caractere de string específico

// console.log(browserType[0]);

// console.log(browserType[browserType.length-1])


// //Encontrando uma substring dentro de uma string e extraindo-a
// console.log(browserType.indexOf('zilla'));


// console.log(browserType.indexOf('vanilla'));

// if(browserType.indexOf('mozilla') !== -1) {
//     // faz coisas com a string
//   }



//   //Mudando entre maiúsculas e minúsculas
//   var radData = 'PalMeiras Nao Tem MundiAaallllLL';
// radData.toLowerCase();
// radData.toUpperCase();


// //Atualizando partes de uma string
// browserType.replace('moz','van');
// ///////////////////////////////////////////
// //////////DIFERENCA DE LET E VAR CONST//////////
// /////////////////////////////////////////
// let n1 = 0;
// var n2 = 1;
// const ff = 99;
// if(n2 == 1){
//     console.log(n1,'n1');
//     console.log(n2,'n2');
//     let n3 = 3;
//     var n4 = 4;
// }
// console.log(n3,'n3');
// console.log(n4,'n4');

// ///////////////////////////////////////////
// //////////IF(SE)//////////////////////////
// /////////////////////////////////////////

// if(n1 == 0){

// }

// if(n1 != 1){

// }
// else{

// }

// if(n1 <= 0){

// }else if(n1 > 0 && n1 < 27){

// }
// else if(n1 == 30  && n2 != 20){

// }
// else if(n3 == 10 || n3 == 20) {

// }
// else{

// }

// ///////////////////////////////////////////
// //////////OPERADOR TERNARIO///////////////
// /////////////////////////////////////////

// //condition ? expr1 : expr2 
// //n1 > 0 ? 'é maior que zero' : 'é menor que zero'


// ///////////////////////////////////////////
// //////////DESAFIOS IF//////////////////////////
// /////////////////////////////////////////

// //1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor.
// //Consegue criar mais de uma solução?

//2. Escreva um programa  que recebe um inteiro e diga se é par ou ímpar.
//Use o operador matemático % (resto da divisão ou módulo) e o teste condicional if.

//3. Escreva um programa que pergunte o raio de uma circunferência, 
//e sem seguida mostre o diâmetro, comprimento e área da circunferência.

//4. Para doar sangue é necessário ter entre 18 e 67 anos. 
//Faça um aplicativo na  que pergunte a idade de uma pessoa 
//e diga se ela pode doar sangue ou não. 
//Use alguns dos operadores lógicos OU (||) e E (&&).

//5. Escreva um programa que pergunte o dia, mês e ano do aniversário de uma pessoa e diga se a data é válida ou não. Caso não seja, diga o motivo. Suponha que todos os meses tem 31 dias e que estejamos no ano de 2013.

//6. Faça um programa que peça para o usuário inserir uma idade e mostre na tela se ele é maior de idade ou não.





// switch (expressão) {
//     case valor1:
//       //Instruções executadas quando o resultado da expressão for igual á valor1
//       break;
//     case valor2:
//       //Instruções executadas quando o resultado da expressão for igual á valor2
//       break;
//     ...
//     case valueN:
//       //Instruções executadas quando o resultado da expressão for igual á valorN
//       break;
//     default:
//       //Instruções executadas quando o valor da expressão é diferente de todos os cases
//       break;
//   }



//1-Elabore um algoritmo que leia dois valores do usuário e a operação que ele deseja executar (Operações: soma, subtração, divisão, multiplicação). Execute a operação desejada e imprima na tela.
//2-Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
//Faça um programa que calcule o valor total a ser pago por uma pessoa. 
//O programa deverá ler o valor total da compra efetuada e um código que identifique 
//se o comprador é um cliente comum (1), funcionário (2) ou vip (3).
//3-Escreva um programa utilizando o comando switch que imprima um mês de acordo com o número digitado pelo usuário.
//4-A taxa de natalidade e a taxa de mortalidade são indicadores estatísticos de fundamental importância 
//por ajudar a compreender aquilo que os especialistas chamam de dinâmica populacional 
//e a entender sua relação com variáveis que influenciam o desenvolvimento, 
//como qualidade de vida, migrações, , fatores socioeconômicos e localização. 
//Sabendo disso, crie um programa que calcule os dois indicadores utilizando o comando switch.
//5-Victor é um estudante do curso de Química que pretende calcular o 
//volume dos principais sólidos geométricos conhecidos como cubo, 
//paralelepípedo e cilindro  de forma ágil e eficiente utilizando um software. 
//Com base nisso, construa um programa que gentilmente atenda a necessidade deste usuário.
//6-Crie um algoritmo que imprima o gênero de uma pessoa utilizando um dos caracteres(M ou F) como entrada.
//7-Faça um programa de conversão de base numérica. 
//O programa deverá apresentar uma tela de entrada com as seguintes opções:

//< Conversão de base >

//1: decimal para hexadecimal
//2: hexadecimal para decimal
//3: decimal para octal
//4: octal para decimal
//5: Encerra



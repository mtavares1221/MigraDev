// //exercicio 1
// // let numero1 = 1000;
// // let numero2 = 50000;
// // let numero3 = 1;

// // //AQUI TA FORA DO IF
// // if(numero1 > numero2 && numero1 > numero3){
// //     if(numero2 < numero3){
// //         console.log('NUMERO 1 É O MAIOR e NUMERO 2 é O MENOR')
// //     }else{
// //         onsole.log('NUMERO 1 É O MAIOR e NUMERO3 é O MENOR')
// //     }
// // }
// // else if (numero2 > numero1 && numero2 > numero3){
// //     if(numero1 < numero3){
// //         console.log('NUMERO 2 É O MAIOR e NUMERO 1 é O MENOR')
// //     }else{
// //         onsole.log('NUMERO 2 É O MAIOR e NUMERO 3 é O MENOR')
// //     }
// // }
// // else{  
// //     if(numero1 < numero2){
// //         console.log('NUMERO 3 É O MAIOR e NUMERO 1 é O MENOR')
// //     }else{
// //         onsole.log('NUMERO 3 É O MAIOR e NUMERO 2 é O MENOR')
// //     }
// // }
// //AQUI TA FORA DO IF




// // // exercicio 2
// // let numero = 55;

// // if(numero % 2 != 0){
// //     console.log('IMPAR');
// // }
// // else{
// //     console.log('PAR')
// // }





// let raio = 10;
// let diametro = 2 * raio;
// let comprimento = Math.PI * diametro
// let area = Math.PI * Math.pow(raio,2);

// console.log('diametro:' + diametro);
// console.log('comprimento:' + comprimento)
// console.log('area:' + area)









// // //exercicio 3
// // let raio = 10;
// // let diametro = 2 * raio;
// // let comprimento = 2 * Math.PI * raio
// // let area = Math.PI * Math.pow(raio,2)

// // console.log(diametro)
// // console.log(comprimento)
// // console.log(area)

// // //exercicio 4

// // let idade = 10

// // if(idade >= 18 && idade <= 67){
// //     console.log('PODE DOAR')
// // }
// // else{
// //     console.log('NÃO PODE DOAR')
// // }

// // // exercicio 5
// // let dia = 10;
// // let mes = 10;
// // let ano = 2020;

// // if((dia >= 1 && dia <= 31) && (mes >=1 && mes <= 12) && (ano >= 1 && ano <= 2013)){
// //     console.log('DATA VALIDA')
// // }
// // else{
// //     console.log('DATA INVALIDA')
// // }

// // //exercicio 6

// // let maiorIdade= 18

// // if(maiorIdade >= 18){
// //     console.log('JA PODE SER PRESO')
// // }
// // else{
// //     console.log('VC É UM BB')
// // }


// let carro = 'celta';

// switch (carro) {
//     case 'fusca':
//       //Instruções executadas quando o resultado da expressão for igual á valor1
//       console.log('É UM FUSCA')
//       break;
//     case 'celta':
//       //Instruções executadas quando o resultado da expressão for igual á valor2
//       console.log('É UM CELTA')
//       break;
//     case 'civic':
//       //Instruções executadas quando o resultado da expressão for igual á valorN
//       console.log('É UM CIVIC')
//       break;
//     default:
//       //Instruções executadas quando o valor da expressão é diferente de todos os cases
//       console.log('É OUTRO CARRO')
//       break;
//   }








if(1 + 1){
    console.log('o resultado é dois');
}

if(1 == 1){
    console.log('um é igaul a um');
}


switch(1 + 1 ){
    case 0:
        console.log('O resultado é zero');
        break;
    case 10:
        console.log('O resultado é um');
        break;
    case 2:
        console.log('o resultado é dois');
        break;
    default:
        console.log('eh qualquer outro resultado');
        break;
}


















// let n1 = 0;
// let n2 = 1;
// let expressao = 'divisão'

// switch(expressao){
//     case 'soma':
//         console.log(n1 + n2);
//         break;
//     case 'subtração':
//         console.log(n1 - n2);
//         break;
//     case 'multiplicacao':
//         console.log(n1 * n2);
//         break;
//     case 'divisão':
//         console.log(n1  / n2);
//         break;
// }

// //exercicio 3

// let valorTotal = 300;
// let codigo = 2;

// switch(codigo){
//     case 1:
//         console.log('Valor final: R$ ' + valorTotal);
//         break;
//     case 2:
//         console.log('Valor final: R$ ' + (valorTotal - (valorTotal * 0.10)));
//         break;
//     case 3:
//         console.log('Valor final: R$ ' + (valorTotal - (valorTotal * 0.05)));
//         break;
// }
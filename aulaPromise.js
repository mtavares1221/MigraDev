async function somar(n1, n2) {
  console.log(n1 + n2);
}

async function teste() {
  somar(1, 2); // 3
  somar(3, 4); // 7
  somar(4, 5);
  somar(5, 6);
  somar(7, 8);
}

teste();
// function somar(n1, n2) {
//   try {
//     return n1 + n2;
//   } catch (erro) {
//     console.log(erro);
//   }
// }

// // function buscarN3(n2) {
// //   try {
// //     return n2 + n4;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

// // console.log(somar(1, 2));

// // console.log("PRIMEIRO");
// // setTimeout(function () {
// //   console.log("SEGUNDO");
// // }, 5000);

// // console.log("TERCEIRO");
// // console.log("QUARTO");
// // console.log("QUINTO");

// // // PENDENTE
// // // REALIZADA
// // // REJEITADO
// // // ESTABELECIDA

// // async function promise() {
// //   try {
// //     return 2;
// //   } catch (error) {
// //     return "erro no código";
// //   }
// // }

// // function somar() {
// //   return Promise.resolve(2, 2);
// // }

// // somar().then(function (n1) {
// //   console.log("numero", n1);
// // });

// // function erro() {
// //   return Promise.reject("erro no código");
// // }

// // erro().catch(function (erro) {
// //   console.log(erro);
// // });

// // function promiseTrabalhada() {
// //   return new Promise(function (resolve, reject) {
// //     reject("Olá Programador");
// //   });
// // }

// function promisseComDois() {
//   return new Promise(function (resolve, reject) {
//     try {
//       resolve("Olá mundo");
//     } catch (error) {
//       reject("DEU RUIM");
//     }
//   });
// }

// promisseComDois().then(function (texto) {
//   console.log(texto);
// });

// // promisseComDois().catch(function (erro) {
// //   console.log(erro);
// // });

// // function realizada() {
// //   return Promise.resolve(20);
// // }

// // realizada().then(function (numero) {
// //   console.log("O numero é:", numero);
// // });

// // // function realiazada() {
// // //   return Promise.resolve(20);
// // // }

// // // realiazada().then(function (numero) {
// // //   console.log("Promise Resolvida", numero);
// // // });

// // // function rejeitada() {
// // //   return Promise.reject();
// // // }
// // // rejeitada().catch(function () {
// // //   console.log("REJEITADO");
// // // });

// // // function promiseTrabalhada() {
// // //   return new Promise(function (resolve, reject) {
// // //     resolve("Olá Programador");
// // //   });
// // // }

// // //

// // // // promiseTrabalhada().then(function (message) {
// // // //   console.log(message);
// // // // });
// // // // promiseTrabalhada().catch(function (message) {
// // // //   console.log(message);
// // // // });

// // // function promiseSetTimeout() {
// // //   return new Promise(function (resolve, reject) {
// // //     setTimeout(function () {
// // //       resolve("Olá mundo");
// // //     }, 1000);
// // //   });
// // // }

// // // promiseSetTimeout().then(function (mensagem) {
// // //   console.log(mensagem);
// // // });

// // // UTILIZANDO FUNCOES QUE RETORNAM PROMISES

// // // function promiseCEP(cep) {
// // //   return Promise.resolve(cep);
// // // }

// // // function buscarCEP(cep) {
// // //   return Window.fetch("https://viacep.com.br/ws/" + cep + "json");
// // // }

// // // function extraitCEP(data) {
// // //   return data.json();
// // // }

// // // function impimirEndereco(endereco) {
// // //   console.log(endereco);
// // // }

// // // function tratarErro(erro) {
// // //   console.log("Aconteceu um erro", erro);
// // // }

// // // promiseCEP("03729250")
// // //   .then(buscarCEP)
// // //   .then(extraitCEP)
// // //   .then(impimirEndereco)
// // //   .catch(tratarErro)
// // //   .finally(function () {
// // //     console.log("Final de tudo!!");
// //   });

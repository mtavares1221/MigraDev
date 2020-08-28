// // console.log("Primeiro");

// // setTimeout(function () {
// //   console.log("Segundo");
// // }, 1000);

// // console.log("Tereceiro");
// // console.log("Quarto");
// // console.log("Quinto");

// // PROMISE

// function realiazada() {
//   return Promise.resolve(20);
// }

// realiazada().then(function (numero) {
//   console.log("Promise Resolvida", numero);
// });

// function rejeitada() {
//   return Promise.reject();
// }
// rejeitada().catch(function () {
//   console.log("REJEITADO");
// });

// function promiseTrabalhada() {
//   return new Promise(function (resolve, reject) {
//     resolve("Olá Programador");
//   });
// }

// // function promiseTrabalhada() {
// //   return new Promise(function (resolve, reject) {
// //     reject("Olá Programador");
// //   });
// // }

// // promiseTrabalhada().then(function (message) {
// //   console.log(message);
// // });
// // promiseTrabalhada().catch(function (message) {
// //   console.log(message);
// // });

// function promiseSetTimeout() {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve("Olá mundo");
//     }, 1000);
//   });
// }

// promiseSetTimeout().then(function (mensagem) {
//   console.log(mensagem);
// });

// UTILIZANDO FUNCOES QUE RETORNAM PROMISES

// function promiseCEP(cep) {
//   return Promise.resolve(cep);
// }

// function buscarCEP(cep) {
//   return Window.fetch("https://viacep.com.br/ws/" + cep + "json");
// }

// function extraitCEP(data) {
//   return data.json();
// }

// function impimirEndereco(endereco) {
//   console.log(endereco);
// }

// function tratarErro(erro) {
//   console.log("Aconteceu um erro", erro);
// }

// promiseCEP("03729250")
//   .then(buscarCEP)
//   .then(extraitCEP)
//   .then(impimirEndereco)
//   .catch(tratarErro)
//   .finally(function () {
//     console.log("Final de tudo!!");
//   });

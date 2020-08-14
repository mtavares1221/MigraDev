let materias = [
  {
    id: 1,
    nome: "Matemática",
    mediaParaPassar: 7,
    notas: [7, 8, 4, 9],
    passou: false,
  },
  {
    id: 2,
    nome: "Portugues",
    mediaParaPassar: 6,
    notas: [4, 6, 5, 8],
    passou: false,
  },
  {
    id: 3,
    nome: "Biologia",
    mediaParaPassar: 5,
    notas: [8, 2, 3, 9],
    passou: false,
  },
  {
    id: 4,
    nome: "Fisica",
    mediaParaPassar: 8,
    notas: [4, 5, 7, 7],
    passou: false,
  },
  {
    id: 5,
    nome: "Quimica",
    mediaParaPassar: 7,
    notas: [6, 7, 5, 4],
    passou: false,
  },
];

function calcularMedia(notas, media) {
  let valorTotal = 0;
  for (let index = 0; index < notas.length; index++) {
    const nota = notas[index];
    valorTotal = nota + valorTotal;
  }
  let mediaNota = valorTotal / notas.length;
  if (mediaNota >= media) {
    return true;
  } else {
    return false;
  }
}

materias.map((materia) => {
  materia.passou = calcularMedia(materia.notas, materia.mediaParaPassar);
});

console.log(materias);

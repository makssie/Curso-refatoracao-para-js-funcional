const calculeSalarioPorHora = ( empregado ) => ({
  nome: empregado.nome,
  total: empregado.valor * empregado.horas
})

const calculeSalario = ( empregados ) => empregados.map( calculeSalarioPorHora )

const empregados = [
  { nome: 'A', valor: 30, horas: 140 },
  { nome: 'B', valor: 45, horas: 100 },
  { nome: 'C', valor: 23, horas: 180 },
]
const salariosDosEmpregados = calculeSalario( empregados )

console.log( "salariosDosEmpregados: \n", salariosDosEmpregados )

/**
 
salariosDosEmpregados: 
 [ { nome: 'A', total: 4200 },
  { nome: 'B', total: 4500 },
  { nome: 'C', total: 4140 } ]

*/
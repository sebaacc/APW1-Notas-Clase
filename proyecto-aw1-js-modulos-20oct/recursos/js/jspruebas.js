const numeros = [5, 12, 8, 45, 3, 20, 15, 7, 10, 99]

const resultado = numeros.filter((n) => n % 2 === 0);
//console.log(numeros);

//console.log(resultado);


const primerValorEncontrado = numeros.find((n) => n > 10);
//console.log(primerValorEncontrado);


const duplicados = numeros.map((x) => 
    x * 2
);

console.log(duplicados);

function somaArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }
    return soma;
}
// Exemplo:
console.log("Soma do array [1, 2, 3, 4, 5]:", somaArray([1, 2, 3, 4, 5]));

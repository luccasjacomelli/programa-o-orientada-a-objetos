function maiorNumero(numeros) {
    let maior = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maior) {
            maior = numeros[i];
        }
    }
    return maior;
}
// Exemplo:
console.log("Maior número do array [10, 20, 5, 30, 25]:", maiorNumero([10, 20, 5, 30, 25]));


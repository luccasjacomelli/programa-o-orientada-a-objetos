function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}
// Exemplo:
console.log("O número 7 é:", parOuImpar(7));
console.log("O número 8 é:", parOuImpar(8));
const biciDaCorsa = [
    { nome: "Rossa", peso: 5 },
    { nome: "Blu", peso: 10 },
    { nome: "Verde", peso: 15 },
]

let biciLeggera = biciDaCorsa[0]

for (const bici of biciDaCorsa) {
    if (bici.peso < biciLeggera.peso) {
        biciLeggera = bici
    }
}

console.log(`La bici da corsa più leggera è ${biciLeggera.nome}`)

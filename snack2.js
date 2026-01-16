const squadre = [
    { nome: "Roma", punti: 0, falliSubiti: 0 },
    { nome: "Napoli", punti: 0, falliSubiti: 0 },
    { nome: "Milan", punti: 0, falliSubiti: 0 },
]

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (const squadra of squadre) {
    squadra.punti = randomNumber(0, 6)
    squadra.falliSubiti = randomNumber(0, 4)
}

console.table(squadre)
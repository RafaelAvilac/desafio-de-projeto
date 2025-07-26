// Desafio Classificador de nível de Herói

// Criando variáveis
let nomeDoHeroi = "Roi"
let xp = 8365
let nivel = ""

// Estrutura de decisão
if (xp <= 1000) {
    nivel = "Ferro"
} else if (xp <= 2000) {
    nivel = "Bronze"
} else if (xp <= 5000) {
    nivel = "Prata"
} else if (xp <= 7000) {
    nivel = "Ouro"
} else if (xp <= 8000) {
    nivel = "Platina"
} else if (xp <= 9000) {
    nivel = "Ascendente"
} else if (xp <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

// Saída final
console.log(`Nosso herói ${nomeDoHeroi} atualmente está no nível ${nivel} com um XP de ${xp}`)
console.log("Continue o excelente trabalho para alcançar níveis maiores!")

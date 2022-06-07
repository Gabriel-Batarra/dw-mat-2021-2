function quadrado(x) {
    return x * x
}

const quadrado2 = x => x * x

console.log('Quadrado: ', quadrado(6))
console.log('Quadrado2: ', quadrado2(6))

function imc(peso, altura) {
    return peso / (altura ** 2)
}

const imc2 = (peso, altura) => peso / (altura ** 2)

console.log('IMC: ' , imc(62, 1.66))
console.log('IMC2: ' , imc2(62, 1.66))
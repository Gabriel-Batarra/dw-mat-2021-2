function areaForma(base, altura, tipo) {
    let area 

    switch(tipo) {
        case 'R' :
            area = base*altura
            break
        case 'T':
            area = base * altura / 2
            break
        case 'E':
            area =(base /2) * (altura / 2) * Math.PI
            break
          default:
              area = null
    }
    return area  

}

console.log(`A área de um terreno com 16m x 27m é ${areaForma(16, 27, 'R')}m².`)
console.log(`A área de um triângulo de 4,75cm de altura por 2,5cm de base é de ${areaForma(2.5, 4.75, 'T')}cm.`)
console.log(`A área de um círculo de 2.8m de raio é ${areaForma(2.8, 2.8, 'E')}m²`)
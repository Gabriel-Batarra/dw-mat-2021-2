let nota = 8
let situacao

/*if(nota >= 6) {
    situacao = 'APROVADO'
}
else {
    situacao = 'REPROVADO'
}
*/

situacao = nota >= 6 ? 'APROVADO' : 'REPROVADO'

console.log(`Nota ${nota}, sitação ${situacao}`)

let user = 'admin' , msg

msg = user === 'admin' ? 'Pode logar' : 'Proibido logar'

console.log(msg)
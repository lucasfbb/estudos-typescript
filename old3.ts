// const num: number = 13

// if(num > 15) {
//     console.log('Num maior que 15')
// } else {
//     console.log('Num menor que 15')
// }

// USO DE OBJETOS LITERAIS

const typeUser = {
    admin: 'Seja bem vindo admin',
    student: 'Voce é um estudante',
    viewer: 'Voce pode visualizar'
}

function validateUser(user: string) {
    console.log(typeUser[user as keyof typeof typeUser])
}

const usuario = 'student'

validateUser(usuario)
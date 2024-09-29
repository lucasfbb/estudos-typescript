interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string // opcional
}

const pessoa: Pessoa = {
    nome: "Lucas",
    idade: 22
}

const outraPessoa: Pessoa = {
    nome: 'ALou',
    idade: 222,
    profissao: 'Dev'
}

const arrayPessoas: Pessoa[] = [
    pessoa,
    outraPessoa
]

const arrayPessoas2: Array<Pessoa> = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1,2,3,4,5,6,7,8,9,10
]

const arrayStr: Array<string> = [
    '1', '2'
]
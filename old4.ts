const array: Array<number> = [1, 2, 3, 4]

const stringArray: string[] = ['a', 'b', 'c']

const buscaNum = array.find(num => num > 2)

console.log(buscaNum)

array.forEach(num => {
    if (num > 2) {
        console.log(num)
    }
})

array.map(num => console.log(num))
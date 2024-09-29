class User {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user : User = new User('Lucas', 22)
const user2 : User = new User('Vasco', 125)
user.showName()
user2.showName()
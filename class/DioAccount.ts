export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number // nao consigo alterá-la
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number) {
        this.name = name
        this.accountNumber = accountNumber
    }

    // setName = (name: string): void => {
    //     this.name = name
    //     console.log('Nome alterado com sucesso')
    // }

    getName = (): string => {
        return this.name
    }

    getBalance(): number {
        return this.balance
    }

    getStatus(): boolean {
        return this.status
    }

    setStatus(value: boolean) {
        this.status = value
    }

    deposit = (value: number): void => {
        if(this.validateStatus()){
            this.balance += value
            console.log('Você depositou '+value+' com sucesso!!')
        }
    }

    withdraw = (value: number): void => {
        if(this.validateStatus() && this.balance > value){
            this.balance -= value
            console.log('Você sacou '+value+' do seu saldo com sucesso!!')
        } else if(!this.validateStatus()){
            throw new Error('Sua conta está invalida')
        } else {
            throw new Error('Você não possui saldo suficiente')
        }
    }

    private validateStatus = (): boolean => {
        if(this.status){
            return this.status
        }

        throw new Error('Conta inválida')
    }

}
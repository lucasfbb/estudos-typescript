import { DioAccount } from "./DioAccount"

export class OtherAccount extends DioAccount{
    
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    depositar = (value: number): void => {
         this.deposit(value+10)
    }

}
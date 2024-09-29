import { DioAccount } from './class/DioAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { OtherAccount } from './class/OtherAccount'

const account : PeopleAccount = new PeopleAccount(111111,'Lucas', 1)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
const otherAccount: OtherAccount = new OtherAccount('Conta', 4)

otherAccount.depositar(100)
console.log(otherAccount.getBalance())


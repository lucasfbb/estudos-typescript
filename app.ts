import { DioAccount } from './class/DioAccount'
import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'

const account : PeopleAccount = new PeopleAccount(111111,'Lucas', 1)
const adminAccount : PeopleAccount = new PeopleAccount(2222,'Firmino', 2)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log(account)
console.log(adminAccount)
console.log(companyAccount)
import { User } from './user';

class Customer extends User {
    taxNumber: number = 3;
    
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName);
    }
   
}

const account: User | Customer = undefined;

if (account instanceof Customer) {
    const taxNo = account.taxNumber;
} else {
    const name = account.getFullname();
    // const name = account.taxNumber;
}
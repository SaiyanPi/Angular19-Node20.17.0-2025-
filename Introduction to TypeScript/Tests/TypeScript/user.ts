export class User {
    firstName: string = '';
    lastName: string = '';
    private isActive: boolean = false;

    constructor(firstName: string, lastName: string, isActive: boolean = true){
        this.firstName = firstName;
        this.lastName = lastName;
        this.isActive = isActive;
    }

    getFullname(){
        return `${this.firstName} ${this.lastName}`;
    }

    get active(){
        return this.isActive;
    }
}

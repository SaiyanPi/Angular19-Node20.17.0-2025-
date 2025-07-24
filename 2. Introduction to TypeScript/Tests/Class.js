class User {
    firstName = "";   // public property member
    lastName = "";
    #isActive = false;    // private property member

    // constructor
    constructor(firstName, lastName, isActive = true) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.#isActive = isActive;
    }

    // method/function
    getFullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    // property accessor
    get active() {
        return this.#isActive;
    }
}

class Customer extends User {
    taxNumber = "";
    constructor(firstName, lastName) {
        super(firstName, lastName);
    }
}
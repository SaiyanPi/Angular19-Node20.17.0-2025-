import {User} from './user';

class Customer extends User {
  taxNumber = "";
  constructor(firstName, lastName) {
    super(firstName, lastName);
  }
}

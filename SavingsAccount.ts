import BankAccount from './BankAccount';
import ISavingsAccount from './ISavingsAccount'

export default class SavingsAccount extends BankAccount implements ISavingsAccount {
  constructor(private interestRate: number, initialBalance: number) {
    super(initialBalance);
    this.interestRate = interestRate;
  }

  // Method to add interest to the balance
  public addInterest(): void {
    this.deposit(this.getBalance() * this.interestRate / 100);
  }
}

import IBankAccount from './IBankAccount';

export default class BankAccount implements IBankAccount {
  // Private variable to store the balance of the account
  private balance: number;

  // Constructor to initialize the balance of the account
  constructor(balance: number) {
    this.balance = balance;
  }

  // Method to get the current balance of the account
  public getBalance(): number {
    return this.balance;
  }

  // Method to deposit a certain amount into the account
  public deposit(amount: number): void {
    this.balance += amount;
  }

  // Method to withdraw a certain amount from the account
  // Returns true if the withdrawal was successful, false otherwise
  public withdraw(amount: number): boolean {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }
    return false;
  }
}


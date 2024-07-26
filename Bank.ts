import BankAccount from './BankAccount';
import IBank from './IBank';

export class Bank implements IBank {
  private accounts: BankAccount[] = [];

  // Method to create a new bank account with an initial balance
  public createAccount(initialBalance: number): BankAccount {
    const newAccount = new BankAccount(initialBalance);
    this.accounts.push(newAccount);
    return newAccount;
  }

  // Method to get a bank account by its index
  public getAccount(index: number): BankAccount {
    return this.accounts[index];
  }

  // Method to get all bank accounts
  public getAccounts(): BankAccount[] {
    return this.accounts;
  }

  // Method to close a bank account by its index
  public closeAccount(index: number): void {
    this.accounts.splice(index, 1);
  }

  // Method to get the total balance of all bank accounts
  public getTotalBalance(): number {
    return this.accounts.reduce((total, account) => total + account.getBalance(), 0);
  }

}

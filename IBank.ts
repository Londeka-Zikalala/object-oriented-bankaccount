import BankAccount from './BankAccount';

export default interface IBank {
  // Method to create a new bank account
  createAccount(initialBalance: number): BankAccount;

  // Method to get a bank account by index
  getAccount(index: number): BankAccount;

  // Method to get all bank accounts
  getAccounts(): BankAccount[];

  // Method to close a bank account by index
  closeAccount(index: number): void;

  // Method to get the total balance of all bank accounts
  getTotalBalance(): number;

}

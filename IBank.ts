import BankAccount from "./BankAccount";
export default interface IBank {
    // Method to create a new bank account
    createAccount(initialBalance: number): BankAccount;
  
    // Method to get a bank account 
    getAccount(index: number): BankAccount;
  
    // Method to get all bank
    getAccounts(): BankAccount;

}
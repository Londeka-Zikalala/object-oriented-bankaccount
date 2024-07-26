import assert from 'assert';
import { Bank } from '../Bank';
import { BankAccount } from '../BankAccount';

describe('Bank', () => {
  let bank: Bank;

  // Before each test, create a new Bank instance
  beforeEach(() => {
    bank = new Bank();
  });

  it('should create a new bank account with an initial balance', () => {
    const account = bank.createAccount(1000);
    assert.strictEqual(account.getBalance(), 1000);
  });

  it('should retrieve a bank account by its index', () => {
    const account1 = bank.createAccount(1000);
    const account2 = bank.createAccount(500);
    assert.strictEqual(bank.getAccount(0).getBalance(), 1000); 
    assert.strictEqual(bank.getAccount(1).getBalance(), 500);  
  });

  it('should get all bank accounts', () => {
    const account1 = bank.createAccount(1000);
    const account2 = bank.createAccount(500);
    const accounts = bank.getAccounts();
    assert.strictEqual(accounts.length, 2); 
    assert.strictEqual(accounts[0].getBalance(), 1000); 
    assert.strictEqual(accounts[1].getBalance(), 500); 
  });

  // Test case: should close a bank account by its index
  it('should close a bank account by its index', () => {
    const account1 = bank.createAccount(1000);
    const account2 = bank.createAccount(500);
    bank.closeAccount(0); // Close the first account
    const accounts = bank.getAccounts();
    assert.strictEqual(accounts.length, 1); 
    assert.strictEqual(accounts[0].getBalance(), 500); 
  });


  it('should get the total balance of all bank accounts', () => {
    const account1 = bank.createAccount(1000);
    const account2 = bank.createAccount(500);
    const totalBalance = bank.getTotalBalance();
    assert.strictEqual(totalBalance, 1500); 
  });
});


import assert from 'assert';
import BankAccount from '../BankAccount';

describe('BankAccount Tests', () => {
    //Test for the getBalance Method
  it('should create a bank account with a given balance', () => {
    const account = new BankAccount(543);
    assert.strictEqual(account.getBalance(), 543); // Check if the initial balance is correct
  });

    //Test for the deposit method
  it('should deposit money into the bank account', () => {
    const account = new BankAccount(543);
    account.deposit(150); 
    account.deposit(40);  
    assert.strictEqual(account.getBalance(), 733); // Check if the final balance is correct
  });
//Test for the withdraw method
  it('should withdraw money from the bank account', () => {
    const account = new BankAccount(543);
    const success = account.withdraw(100); 
    assert.strictEqual(success, true); 
    assert.strictEqual(account.getBalance(), 443); // Check if the final balance is correct
  });

  it('should not allow withdrawal of more money than available in the account', () => {
    const account = new BankAccount(543);
    const success = account.withdraw(600); 
    assert.strictEqual(success, false); 
    assert.strictEqual(account.getBalance(), 543); // Check if the balance remains unchanged
  });
});


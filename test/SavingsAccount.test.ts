import assert from 'assert';
import SavingsAccount  from '../SavingsAccount';

describe('SavingsAccount', () => {
  it('should create a SavingsAccount with the initial balance and interest rate', () => {
    const account = new SavingsAccount(7.5, 1000);
    assert.strictEqual(account.getBalance(), 1000); 
  });

  it('should add interest to the balance', () => {
    const account = new SavingsAccount(7.5, 1000);
    account.addInterest();
    assert.strictEqual(account.getBalance(), 1075); 
  });

  it('should deposit an amount to the account', () => {
    const account = new SavingsAccount(7.5, 1000);
    account.deposit(500);
    assert.strictEqual(account.getBalance(), 1500); 
  });

  it('should withdraw amount from the account if the balance is enough', () => {
    const account = new SavingsAccount(7.5, 1000);
    const result = account.withdraw(500);
    assert.strictEqual(result, true); 
    assert.strictEqual(account.getBalance(), 500); 
  });

  it('should not withdraw amount from the account if the balance is lower than the amount', () => {
    const account = new SavingsAccount(7.5, 1000);
    const result = account.withdraw(1500);
    assert.strictEqual(result, false); 
    assert.strictEqual(account.getBalance(), 1000); 
  });
});


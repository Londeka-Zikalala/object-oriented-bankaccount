import assert from 'assert';
import TransferBankAccount from '../TransferBankAccount';
import BankAccount from '../BankAccount';

describe('TransferBankAccount', () => {
  it('should transfer funds successfully between accounts', () => {
    const transferAccount = new TransferBankAccount(100);
    const receivingAccount = new BankAccount(50);

    const result = transferAccount.transferTo(receivingAccount, 50);

    assert.strictEqual(result.success, true);
    assert.strictEqual(result.message, 'Transfer successful');
   
  });

  it('should fail to transfer funds due to insufficient balance', () => {
    const transferAccount = new TransferBankAccount(100);
    const receivingAccount = new BankAccount(50);

    const result = transferAccount.transferTo(receivingAccount, 150);


    assert.strictEqual(result.success, false);
    assert.strictEqual(result.message, 'Transfer failed: Insufficient funds');
  });
});

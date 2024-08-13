import BankAccount from "./BankAccount";
import ITransferable from "./ITranferable";
import TransferResult from "./ITransferResult";

export default class TransferBankAccount extends BankAccount implements ITransferable {
    constructor(balance: number) {
      super(balance);
    }
  
    public transferTo(destination: BankAccount, amount: number): TransferResult {
      if (this.withdraw(amount)) {
        destination.deposit(amount);
        return { success: true, message: 'Transfer successful' };
      }
      return { success: false, message: 'Transfer failed: Insufficient funds' };
    }
  }
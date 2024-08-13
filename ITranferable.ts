import TransferResult from "./ITransferResult";
import IBankAccount from "./IBankAccount";

export default interface ITransferable {
    transferTo(destination: IBankAccount, amount: number): TransferResult;
}
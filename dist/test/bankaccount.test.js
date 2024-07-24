"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const BankAccount_1 = __importDefault(require("../BankAccount"));
describe('BankAccount Tests', () => {
    //Test for the getBalance Method
    it('should create a bank account with a given balance', () => {
        const account = new BankAccount_1.default(543);
        assert_1.default.strictEqual(account.getBalance(), 543); // Check if the initial balance is correct
    });
    //Test for the deposit method
    it('should deposit money into the bank account', () => {
        const account = new BankAccount_1.default(543);
        account.deposit(150);
        account.deposit(40);
        assert_1.default.strictEqual(account.getBalance(), 733); // Check if the final balance is correct
    });
    //Test for the withdraw method
    it('should withdraw money from the bank account', () => {
        const account = new BankAccount_1.default(543);
        const success = account.withdraw(100);
        assert_1.default.strictEqual(success, true);
        assert_1.default.strictEqual(account.getBalance(), 443); // Check if the final balance is correct
    });
    it('should not allow withdrawal of more money than available in the account', () => {
        const account = new BankAccount_1.default(543);
        const success = account.withdraw(600);
        assert_1.default.strictEqual(success, false);
        assert_1.default.strictEqual(account.getBalance(), 543); // Check if the balance remains unchanged
    });
});

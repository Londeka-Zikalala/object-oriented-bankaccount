"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    // Constructor to initialize the balance of the account
    constructor(balance) {
        this.balance = balance;
    }
    // Method to get the current balance of the account
    getBalance() {
        return this.balance;
    }
    // Method to deposit a certain amount into the account
    deposit(amount) {
        this.balance += amount;
    }
    // Method to withdraw a certain amount from the account
    // Returns true if the withdrawal was successful, false otherwise
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
exports.default = BankAccount;

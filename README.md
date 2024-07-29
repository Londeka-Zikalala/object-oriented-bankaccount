[![Node.js CI](https://github.com/Londeka-Zikalala/object-oriented-bankaccount/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/Londeka-Zikalala/object-oriented-bankaccount/actions/workflows/node.js.yml)

# Object Oriented Bank Account 

This project is bank account management system in TypeScript. It includes a `BankAccount` class, a `SavingsAccount` class that extends `BankAccount`, and a `Bank` class to manage multiple accounts. There are also unit tests to check everything works correctly.

## Code Structure
- ./BankAccount.ts: Contains the   implementation of the BankAccount class.
- ./SavingsAccount.ts: Contains the implementation of the SavingsAccount class.
- ./Bank.ts: Contains the implementation of the Bank class.
- ./IBank.ts: Contains the IBank interface.
- test/BankAccount.test.ts: Contains unit tests for the BankAccount class.
- test/SavingsAccount.test.ts: Contains unit tests for the SavingsAccount class.
- test/Bank.test.ts: Contains unit tests for the Bank class.

# Implementation Details
## BankAccount Class
The BankAccount class has depositing and withdrawing funds, and retrieving the balance functions.

## SavingsAccount Class
Using inheritencem, the SavingsAccount class extends the BankAccount class and applies interest to the balance. 

## Bank Class
Uses an array to store BankAccount instances and provides methods to create new accounts, retrieve accounts by index, get all accounts, close accounts, transfer funds, and calculate the total balance of all accounts.

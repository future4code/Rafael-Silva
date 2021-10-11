import { Transaction } from "./Transaction";

export class UserAccount {
    private name: string;
    private age: number;
    private balance: number = 0;
    private document: string;
    private transactions: Transaction

    constructor(name: string, age: number, document: string, transactions: Transaction) {
        console.log("Chamando o construtor da classe UserAccount");
        this.name = name;
        this.age = age;
        this.document = document;
        this.balance;
        this.transactions = transactions;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public getDocument(): string {
        return this.document;
    }

    public getTransactionDescription(): string {
        return this.transactions.getDescription();
    }
    public getTransactionValue(): number {
        return this.transactions.getValue();
    }
    public getTransactionDate(): string {
        return this.transactions.getDate();
    }
}

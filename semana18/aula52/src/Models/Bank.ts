import { UserAccount } from './UserAccount';

export class Bank {
    private accounts: UserAccount[]


    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

    public getAccountUser = (): UserAccount[] => {
        return this.accounts
    }

    public setAccountUser(account: UserAccount[]): void {
        this.accounts = account;
    }
}
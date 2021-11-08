import { Result } from '../models/result-interface';
import { Casino, LOCATION, NATIONALITY, User } from '../models/user-interface';

export default class UserBusiness {

    // performPurchase(user: User, value: number): User| boolean{
    //     if(user.balance >= value){
    //         return {
    //             ...user,
    //             balance: user.balance - value
    //         }
    //     }
    //     return false;
    // }

    verifyAge(casino: Casino, users: User[]): Result {
        const allowed: User[] = [];
        const notAllowed: User[] = [];

        for (let i = 0; i < users.length; i += 1) {
            if (casino.location === LOCATION.EUA) {
                if (users[i].age >= 21) {
                    allowed.push(users[i]);
                } else {
                    notAllowed.push(users[i]);
                }
            } else if (casino.location === LOCATION.BRAZIL) {
                if (users[i].age >= 18) {
                    allowed.push(users[i]);
                } else {
                    notAllowed.push(users[i]);
                }
            }
        }

        return {
            brazilians: {
                allowed: allowed
                    .filter((user: User) => user.nationality === NATIONALITY.BRAZILIAN)
                    .map((user: User) => user.name),
                notAllowed: notAllowed
                    .filter((user: User) => user.nationality === NATIONALITY.BRAZILIAN)
                    .map((user: User) => user.name)
            },
            americans: {
                allowed: allowed
                    .filter((user: User) => user.nationality === NATIONALITY.AMERICAN)
                    .map((user: User) => user.name),
                notAllowed: notAllowed
                    .filter((user: User) => user.nationality === NATIONALITY.AMERICAN)
                    .map((user: User) => user.name)
            }
        };
    }
}
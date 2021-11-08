import User from '../models/User';

export default class UserBusiness{

    performPurchase(user: User, value: number): User| undefined{
        if(user.balance >= value){
            return {
                ...user,
                balance: user.balance - value
            }
        }
        return undefined;
    }

}
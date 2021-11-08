import UserBusiness from '../../src/business/user.business';
import User from '../../src/models/User';

describe("PerformPurchase", () => {

    test("Testing when balance greater than value", () => {
        const user: User = {
            name: "Rafael",
            balance: 100
        };

        const result = new UserBusiness().performPurchase(user, 50);

        expect(result).toEqual({
            name: "Rafael",
            balance: 50
        });
    });

    test("Testing when balance is equal than value", () => {
        const user: User = {
            name: "Rafael",
            balance: 60
        };

        expect(new UserBusiness().performPurchase(user, 60))
            .toEqual({
                name: "Rafael",
                balance: 0
            });
    });

    test("Testing when balance is less than value", () => {
        const user: User = {
            name: "Rafael",
            balance: 10
        };

        expect(new UserBusiness().performPurchase(user, 50)).not.toBeDefined();
    });
});


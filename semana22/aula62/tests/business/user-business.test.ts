import UserBusiness from '../../src/business/user.business';
import { Casino, LOCATION, NATIONALITY, User } from '../../src/models/user-interface';

// describe("PerformPurchase", () => {

//     test("Testing when balance greater than value", () => {
//         const user: User = {
//             name: "Rafael",
//             balance: 100
//         };

//         const result = new UserBusiness().performPurchase(user, 50);

//         expect(result).toEqual({
//             name: "Rafael",
//             balance: 50
//         });
//     });

//     test("Testing when balance is equal than value", () => {
//         const user: User = {
//             name: "Rafael",
//             balance: 60
//         };

//         expect(new UserBusiness().performPurchase(user, 60))
//             .toEqual({
//                 name: "Rafael",
//                 balance: 0
//             });
//     });

//     test("Testing when balance is less than value", () => {
//         const user: User = {
//             name: "Rafael",
//             balance: 10
//         };

//         expect(new UserBusiness().performPurchase(user, 50)).toBeFalsy();
//     });
// });


describe("Testing UserBusiness", () => {

    test("Testing user age", () => {
        const user: User[] = [
            {
                name: "Rafael",
                age: 20,
                nationality: NATIONALITY.BRAZILIAN
            },
            {
                name: "John",
                age: 19,
                nationality: NATIONALITY.AMERICAN
            }
        ];

        const casino: Casino = {
            name: "Las Vegas Cassino",
            location: LOCATION.EUA
        };

        expect(new UserBusiness().verifyAge(casino, user)).toEqual({
            brazilians: {
                allowed: [],
                notAllowed: [
                    "Rafael"
                ],
            },
            americans: {
                allowed: [],
                notAllowed: [
                     "John"
                ]
            }
        });
    });

});

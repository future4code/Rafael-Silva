## Exercício 1:

-   a)

    ```
    export interface User {
        nome: string;
        balance: number;
    }
    ```

-   b)

    ```
    performPurchase(user: User, value: number): User| undefined{
            if(user.balance >= value){
                return {
                    ...user,
                    balance: user.balance - value
                }
            }
            return undefined;
        }
    ```

---

## Exercício 2:

-   a)

    ```
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
    ```

-   b)

    ```
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
    ```

-   c)

    ```
    test("Testing when balance is less than value", () => {
        const user: User = {
            name: "Rafael",
            balance: 10
        };

        expect(new UserBusiness().performPurchase(user, 50)).toBeFalsy();
    });
    ```

import { UserBusiness } from '../src/business/UserBusiness';
import UserData from '../src/data/UserData';
import TokenManager from '../src/services/TokenManager';
import { HashManagerMock } from './mocks/HashManagerMock';
import { IdGeneratorMock } from './mocks/IdGeneratorMock';
import { TokenManagerMock } from './mocks/TokenManagerMock';
import { UserDatabaseMock } from './mocks/UserDatabaseMock';
import { userNormalMock } from './mocks/userMock';

const userBusinessMock = new UserBusiness(
    new IdGeneratorMock(),
    new HashManagerMock(),
    new TokenManagerMock() as unknown as TokenManager,
    new UserDatabaseMock() as unknown as UserData
);


describe("Testing SignupBusiness", () => {
    test("Should return error when name is empty", async() => {
        expect.assertions(2);
        try {
            const newUser = {
                ...userNormalMock,
                name: ""
            };

            await userBusinessMock.signupBusiness(newUser);
        } catch (error) {
            expect(error.message).toEqual("Todos os campos são obrigatórios");
            expect(error.statusCode).toBe(422)
        }
    });

});
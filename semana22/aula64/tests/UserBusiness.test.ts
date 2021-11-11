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
    new TokenManagerMock(),
    new UserDatabaseMock() as UserData
);


describe("Testing SignupBusiness", () => {
    test("Should return error if name is empty", async () => {
        expect.assertions(2);
        try {
            const newUser = {
                name: "",
                email: "rafael.email.com",
                password: "12345678",
                role: "normal"
            };

            await userBusinessMock.signupBusiness(newUser);
        } catch (error) {
            expect(error.message).toEqual("Todos os campos são obrigatórios");
            expect(error.statusCode).toBe(422);
        }
    });

    test("Should return error if email is invalid", async () => {
        expect.assertions(2);
        try {
            const newUser = {
                name: "Rafael",
                email:"rafael.email.com",
                password: "12345678",
                role: "normal"
            };


            await userBusinessMock.signupBusiness(newUser);
        } catch (error) {
            expect(error.message).toEqual("'email' Inválido.");
            expect(error.statusCode).toBe(422);
        }
    });

    test("Should return error if password is invalid", async () => {
        expect.assertions(2);
        try {
            const newUser = {
                name: "Rafael",
                email: "rafael@email.com",
                password: 321,
                role: "normal"
            };

            await userBusinessMock.signupBusiness(newUser);
        } catch (error) {
            expect(error.message).toEqual("É necessário um 'password' entre 8 e 40 caracteres.");
            expect(error.statusCode).toBe(406);
        }
    });

    // test("Deve retornar erro quando receber uma role não existente", async () => {
    //     expect.assertions(2);
    //     try {
    //         await userBusinessMock.signup("Bruno", "bruno@bruno.com", "123456", "guest");
    //     } catch (error) {
    //         expect(error.message).toEqual("Invalid user role");
    //         expect(error.statusCode).toBe(422);
    //     }
    // });

    // test("Sucesso no cadastro", async () => {
    //     expect.assertions(1);
    //     try {
    //         const { accessToken } = await userBusinessMock.signup(
    //             "Bruno",
    //             "bruno@bruno.com",
    //             "123456",
    //             "NORMAL"
    //         );

    //         expect(accessToken).toEqual("token_mock");

    //     } catch (error) {
    //         console.log(error);
    //     }

    // });
});
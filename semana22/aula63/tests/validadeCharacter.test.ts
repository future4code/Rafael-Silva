import UserBusiness from '../src/business/UserBusiness';
import Character from '../src/models/Character';
import characterMock from './mocks/characterMock';


describe("Validating Characters", () => {
    test("Should return false if the character name is empty", () => {
        const validateCharacter: Character = {
            ...characterMock,
            name: ""
        };

        const result = new UserBusiness().validateCharacter(validateCharacter);

        expect(result).toBe(false);
    });

    test("Should return false if the character life is 0", () => {
        const validateCharacter: Character = {
            ...characterMock,
            life: 0
        };

        const result = new UserBusiness().validateCharacter(validateCharacter);

        expect(result).toBe(false);
    });

    test("Should return false if the character defense is 0", () => {
        const validateCharacter: Character = {
            ...characterMock,
            defense: 0
        };

        const result = new UserBusiness().validateCharacter(validateCharacter);

        expect(result).toBe(false);
    });

    test("Should return false if the character strength is 0", () => {
        const validateCharacter: Character = {
            ...characterMock,
            strength: 0
        };

        const result = new UserBusiness().validateCharacter(validateCharacter);

        expect(result).toBe(false);
    });

    test("Should return false if the character is invalid", () => {
        const validateCharacter: Character = {
            ...characterMock,
            life: -100,
            defense: -10,
            strength: -90
        };

        const result = new UserBusiness().validateCharacter(validateCharacter);

        expect(result).toBe(false);
    });

    test("Should return true if the character is valid", () => {
        const validateCharacter: Character = { ...characterMock };

        const result = new UserBusiness().validateCharacter(validateCharacter);


        expect(result).toBe(true);
    });
});
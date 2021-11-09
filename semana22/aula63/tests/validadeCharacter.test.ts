import UserBusiness from '../src/business/UserBusiness';
import Character from '../src/models/Character';


describe("Validating Characters", () => {
    test("Should return false if the character name is empty", () => {
        const character: Character = {
            name: "",
            life: 100,
            defense: 10,
            strength: 90
        };


        expect(new UserBusiness().validateCharacter(character)).toBe(false);
    });

    test("Should return false if the character life is 0", () => {
        const character: Character = {
            name: "Test",
            life: 0,
            defense: 10,
            strength: 90
        };


        expect(new UserBusiness().validateCharacter(character)).toBe(false);
    });
});
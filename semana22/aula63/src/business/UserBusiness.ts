import Character from '../models/Character';

export default class UserBusiness {
    validateCharacter(input: Character): boolean {
        const { name, life, strength, defense } = input;

        if (!name || life === undefined || strength === undefined || defense === undefined) {
            return false;
        }

        if (life <= 0 || strength <= 0 || defense <= 0) {
            return false;
        }

        return true;
    }
}
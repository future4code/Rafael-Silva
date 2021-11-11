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


    calculateAttack(character: Character, target: Character, validator: (input: Character) => boolean): Character {

        if(validator(character) && validator(target)) {
            const { strength } = character;
            const { defense } = target;

            const damage = strength - defense;

            if (damage > 0) {
                target.life -= damage;
            }  

            return target;
        } 
            throw new Error('Invalid character');
        
    }
}
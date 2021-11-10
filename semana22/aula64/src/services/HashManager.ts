import dotenv from 'dotenv';
import * as bcrypt from 'bcryptjs';

dotenv.config();

export default class HashManager {
    generateHash(password: string): string {
        const rounds = Number(process.env.BCRYPT_COST);
        const salt = bcrypt.genSaltSync(rounds);
        const hash = bcrypt.hashSync(password, salt);

        return hash;
    };

    compareHash(password: string, hash: string): boolean {
        if (
            password.toString().length < Number(process.env.PASSWD_MIN) ||
            password.toString().length > Number(process.env.PASSWD_MAX)
        ) {
            return false;
        }

        return bcrypt.compareSync(password, hash);
    }
}
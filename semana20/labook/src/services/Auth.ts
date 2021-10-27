import dotenv from 'dotenv';
import { JwtPayload, sign, verify } from 'jsonwebtoken';
import authInterface from '../models/interfaces/AuthInterface';

dotenv.config();

export default class Auth {
    public static generateToken(payload: authInterface): string {
        const token = sign(payload, process.env.JWT_KEY as string, {
            expiresIn: '24h',
        });

        return token;
    }

    public static getTokenData(token: string): authInterface | boolean {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string,
            ) as JwtPayload;

            return {
                id: tokenData.id
            };
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
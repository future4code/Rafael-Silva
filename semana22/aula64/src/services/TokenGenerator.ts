import dotenv from 'dotenv';
import { JwtPayload, sign, verify } from 'jsonwebtoken';

dotenv.config();

export enum USER_ROLES {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL',
}

export interface AuthInterfaceData {
    id: string;
    role: USER_ROLES;
}


export default class TokenGenerator {
    private static expiresIn = '1200';


    generate(input: AuthInterfaceData): string {
        const newToken = sign(
            {
                id: input.id,
                role: input.role
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: TokenGenerator.expiresIn
            }
        );

        return newToken;
    }

    verify(token: string): AuthInterfaceData | boolean {
        try {
            const tokenData = verify(
                token,
                process.env.JWT_KEY as string,
            ) as JwtPayload;

            return {
                id: tokenData.id,
                role: tokenData.role
            };
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}
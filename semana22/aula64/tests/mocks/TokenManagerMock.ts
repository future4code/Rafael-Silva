import { AuthInterfaceData } from "../../src/services/TokenManager";
import { USER_ROLES } from "../../src/models/UserModel";

export class TokenManagerMock {
    generateToken(input: AuthInterfaceData): string {
        return `token_mock`;
    }

    verifyToken(token: string): AuthInterfaceData {
        return {
            id: "id_mock",
            role: USER_ROLES.NORMAL
        };
    }
}
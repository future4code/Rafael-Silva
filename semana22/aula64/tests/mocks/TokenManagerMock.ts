import { AuthInterfaceData } from "../../src/services/TokenManager";
import { USER_ROLES } from "../../src/models/UserModel";

export class TokenManagerMock {
    generate(input: AuthInterfaceData): string {
        return `token_mock`;
    }

    verify(token: string): AuthInterfaceData | boolean {
        return {
            id: "id_mock",
            role: USER_ROLES.NORMAL
        };
    }
}
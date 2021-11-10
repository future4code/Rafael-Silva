export class HashManagerMock {
    generateHash(password: string): string {
        return password;
    }

    compareHash(password: string, hash: string): boolean {
        return password === hash;
    }
}
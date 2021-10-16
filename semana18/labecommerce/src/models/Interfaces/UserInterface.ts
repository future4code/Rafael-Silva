export default interface UserInterface {
    name: string;
    email: string;
    age: number;
    getName(): string;
    getEmail(): string;
    getAge(): number;
}

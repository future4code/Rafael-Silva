import { User } from '../../models/User';

export default interface UserRepository {
    findAll(): Promise<User[] | boolean>;
    findById(id: string): Promise<User | boolean>;
    findByEmail(email: string): Promise<User | boolean>;
    create(user: User): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
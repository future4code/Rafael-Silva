import { UserInterface } from '../../models/interfaces/UserInterface';
import { User } from '../../models/User';

export default interface UserRepository {
    findAll(): Promise<UserInterface[] | boolean>;
    findById(id: string): Promise<UserInterface | boolean>;
    findByEmail(email: string): Promise<UserInterface | boolean>;
    create(user: User): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
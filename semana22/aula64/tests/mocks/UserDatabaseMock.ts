import UserModel from "../../src/models/UserModel";
import { userAdminMock, userNormalMock } from "./userMock";

export class UserDatabaseMock {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public async createUser(user: UserModel): Promise<void> {}

    public async getUserByEmail(email: string): Promise<UserModel | undefined> {
        switch (email) {
            case "user1@gmail.com":
                return userNormalMock;
            case "user2@gmail.com":
                return userAdminMock;
            default:
                return undefined;
        }
    }


    public async getUserById(id: string): Promise<UserModel | undefined> {
        switch (id) {
            case "id_user_1":
                return userNormalMock;
            case "id_user_2":
                return userAdminMock;
            default:
                return undefined;
        }
    }

    public async getAllUsers(): Promise<UserModel[]> {
        return [userNormalMock, userAdminMock];
    }

}
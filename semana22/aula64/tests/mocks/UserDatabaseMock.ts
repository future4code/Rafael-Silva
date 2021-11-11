import UserModel from "../../src/models/UserModel";
import { userAdminMock, userNormalMock } from "./userMock";

export class UserDatabaseMock {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    public async create(user: UserModel): Promise<boolean> {
        if (user.getEmail()) {
            return true;
        }

        return false;
    }

    public async findByEmail(email: string): Promise<UserModel | undefined> {
        switch (email) {
            case "user1@gmail.com":
                return userNormalMock;
            case "user2@gmail.com":
                return userAdminMock;
            default:
                return undefined;
        }
    }


    public async findById(id: string): Promise<UserModel | undefined> {
        switch (id) {
            case "id_user_1":
                return userNormalMock;
            case "id_user_2":
                return userAdminMock;
            default:
                return undefined;
        }
    }


    async findAll(): Promise<UserModel[] | boolean> {
        return [userNormalMock, userAdminMock];
    }


    async delete(id: string): Promise<boolean> {
        return true;
    }

}
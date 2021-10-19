import UserRoles from '../enums/UserRoles';

export default interface authInterface {
    id: string;
    role: UserRoles;
}

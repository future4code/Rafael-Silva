export enum USER_ROLES {
    ADMIN = 'ADMIN',
    NORMAL = 'NORMAL',
}

export default interface authInterface {
    id: string;
    role: USER_ROLES;
}

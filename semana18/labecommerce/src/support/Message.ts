export default class Message extends Error {
    private statusCode: number;

    constructor(message: string | undefined, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
    }
}

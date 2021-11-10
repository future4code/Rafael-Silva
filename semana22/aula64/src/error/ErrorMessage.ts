export default class ErrorMessage extends Error {
    constructor(
        private statusCode: number = 400,
        message: string
    ) {
        super(message);
    }
}

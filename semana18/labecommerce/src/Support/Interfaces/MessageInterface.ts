export default interface MessageInterface {
    text: string;
    type: string;

    success(): Promise<void>;
    warning(): Promise<void>;
    error(): Promise<void>;
}

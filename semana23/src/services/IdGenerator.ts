import {v4 as uuid} from 'uuid';

export default class IdGenerator {
    generate(): string {
        return uuid();
    }
}
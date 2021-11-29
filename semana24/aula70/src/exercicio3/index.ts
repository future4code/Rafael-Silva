import { LinkedListNode } from '../exercicio1';

class Queue {
    constructor(
        public items: any[] = []
    ) { }

    public isEmpty = (): boolean => this.items.length === 0;

    public enqueue = (
        value: any
    ): void => {
        const index = this.items.length;
        this.items[index] = value;
    };

    public dequeue = (): LinkedListNode | null => {

        const removedItem = this.items[0];

        for (let i = 0; i < this.items.length; i++) {
            this.items[i] = this.items[i + 1];
        }

        this.items.length--;

        return removedItem;
    };
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue);
myQueue.dequeue();
console.log(myQueue);

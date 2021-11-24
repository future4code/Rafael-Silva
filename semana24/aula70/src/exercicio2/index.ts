import { LinkedList, LinkedListNode } from '../exercicio1';

class Stack {
    constructor(
        public frames: LinkedList = new LinkedList()
    ) { }

    public isEmpty = (): boolean => this.frames.start === null;

    public push = (
        value: any
    ): void => {
        this.frames.appendToTail(value);
    };

    public pop = (): any => {

        if (!this.isEmpty()) return null;

        let previousNode: LinkedListNode | null | undefined = null;
        let currentNode: LinkedListNode | null| undefined = this.frames.start;

        while (currentNode!.getNext()) {
            previousNode = currentNode;
            currentNode = currentNode!.getNext();
        }

        previousNode!.next = null;

        return currentNode;

    };
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack);
const lastItem = myStack.pop();
console.log(myStack);
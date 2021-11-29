export class LinkedListNode {
    constructor(
        public value: any,
        public next: any = null
    ) { }

    public getNext():any {
        return this.next;
    }

    public setNext(next: any): void {
        this.next = next;
    }

    public getData(): any {
        return this.value;
    }
}

export class LinkedList {
    constructor(public start?: LinkedListNode) { }

    public appendToTail(value: number) {
        if (!this.start) {
            this.start = new LinkedListNode(value);
        } else {
            let node: LinkedListNode = this.start;
            while (node && node.getNext() !== undefined) {
                node = node.getNext()!;
            }
            node.setNext(new LinkedListNode(value));
        }
    }

    public print(): void {
        let node: LinkedListNode | undefined = this.start;
        let i = 1;
        while (node !== undefined) {
            console.log(`Elemento ${i}: `, node!.getData());
            node = node!.getNext();
            i++;
        }
    }
}

const myList = new LinkedList();
myList.appendToTail(1);
myList.appendToTail(2);
myList.appendToTail(3);
console.log(myList.print());
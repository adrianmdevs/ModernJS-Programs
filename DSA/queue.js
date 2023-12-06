//Progran to implement queue data structure

class Queue{
    constructor(){
        this.items = {};
        this.headIndex = 0;
        this. tailIndex = 0;
    }

    //Add a new element
    enqueue(element){
        this.items[this.tailIndex] = element;
        this.tailIndex++;
    }
    //Remove an element from head of the queue
    denqueue(){
        let removedElement = this.items[this.headIndex];
        delete this.items[this.headIndex];
        this.headIndex++;
        return removedElement;
    }
    //Show the head element of the Queue
    peek(){
        let peekElement = this.items[this.headIndex];
        return peekElement;
    }
    //Show the number of Items in the Queue
    size(){
        return this.tailIndex - this.headIndex;
    }
    //Check If Queue is empty or not
    isEmpty(){
        if(this.tailIndex - this.headIndex == 0){
            return true;
        }
        else{
            return false;
        }
    }
    //Empty the Queue
    clear(){
        this.items = {};
        this.headIndex = 0;
        this.tailIndex = 0;
    }
}
//Instantiating a Queue Object
let queue = new Queue();
//Add Items to queue
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

console.log('Queue after adding Items: ');
console.log(queue.items);

//Remove the first Item
queue.denqueue();

console.log('Queue after removing the first item: ');
console.log(queue.items);

//Show the first item
console.log('First Item of the queue = ' +queue.peek());

//Empty the queue
queue.clear();
console.log('After clearing the queue: ');
console.log(queue.items);
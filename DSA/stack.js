//Program to Implement a stack
class Stack{
    constructor(){
        this.items= [];
    }
    //Add Element to stack
    add(Element){
        return this.items.push(Element);
    }
    //Remove element from stack
    remove(){
        if(this.items.length > 0){
            return this.items.pop();
        }
    }
    //View the last Element
    peek(){
        return this.items[this.items.length -1];
    }
    //Check if stack is Emipty
    isEmpty(){
        return this.items.length ==0;
    }
    //Size of the stacki
    size(){
        return this.items.length;
    }
    //Empty the stack
    clear(){
        this.items = [];
    }
}
let stack = new Stack();

 stack.add(1);
 stack.add(3);
 stack.add(6);
 stack.add(8);
 stack.add(9);
 console.log(stack.items);

 stack.remove();
 console.log(stack.items);

 console.log(stack.peek());

 console.log(stack.isEmpty());

 console.log(stack.size());

 stack.clear();
 console.log(stack.items);

const {Node} = require('./node-class');

class LinkedList{
    constructor(){
        this.first = null;
        this.last = null;
    }


    append(value){
        const node = new Node(value);
        if (!this.first){
            this.first = node;
            this.last = node;
        }
        else {
            this.last.nextNode = node;
            this.last = node;
    
        }
    }

    prepend(value){
        const node = new Node(value);
        node.nextNode = this.first;
        this.first = node;
    }

    size(){
        let head = this.first;
        let length = 0;
        while (head){
            length++;
            head = head.nextNode
        }
        return length;
    } 
    
    head(){
        if (!this.first){
            return "none";
        }
        console.log("head is " + this.first.value);
        return this.first;
    }

    tail(){
        if (!this.last){
            return "none";
        }
        console.log("tail is " + this.last.value)
        return this.last;
    }

    at(index){
        let head = this.first;
        let node = index;
        for (let i = 0; i < node; i++){
            head = head.nextNode;
        }
        return head;
    }

    pop(){
        let head = this.first;
        let previous = "";
        while (head.nextNode){
            previous = head;
            head = head.nextNode;
        }
        this.last = previous;
        this.last.nextNode = null;
    }

    contains(value){
        let head = this.first;
        while (head){
            if (head.value == value)
            {return true}
            head = head.nextNode
        }
        return false;
    }

    find(value){
        let head = this.first;
        while (head){
            if (head.value == value)
            {return head}
            head = head.nextNode
        }
        return null;
    }

    toString(){
        let string = "";
        let head = this.first;
        while (head){
            string += `( ${head.value} ) -> `
            head = head.nextNode
        }
        string += null
        return string;
    }

    insertAt(value, index){
        if (index == 0){
            this.prepend(value)
        }

        const newNode = new Node(value);
        let head = this.first;
        let priorNode = "";

        for (let i = 0; i < index; i++){
            if (head.nextNode == null){
                this.append(value);
                return;
            }
            priorNode = head;
            head = head.nextNode;
        }

        newNode.nextNode = head;
        priorNode.nextNode = newNode;
    }

    removeAt(index){
        let head = this.first;
        let priorNode = "";

        for (let i = 0; i < index; i++){
            if (head.nextNode == null){
                console.log("No Such Index");
                return;
            }
            priorNode = head;
            head = head.nextNode;
        }
        priorNode.nextNode = head.nextNode;

    }


}



module.exports = {LinkedList};
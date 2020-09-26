class Queue{
    constructor(arr){
        this.arr=arr;
    }
    enqueue(el){
        this.arr.unshift(el);
    }
    dequeue(){
        this.arr.shift();
    }
}

const Node = require('./node');

class LinkedList {

 constructor() {
   this.length = 0;
   this._head = new Node("", "", "");
   this._tail = this._head;
 }

 append(data) {
   if (!this.length) {
     this._head = new Node(data, "", "");
     this._tail = this._head;
     this._head.data = data;
   } else {
     let newNode = new Node(data, "", "");
     if (this._tail.next) {
       this._tail = newNode;
       this._head.next = newNode;
       this._tail.prev = this._head;
     }
     this._tail.next = newNode;
     newNode.prev = this._tail;
     this._tail = newNode;
   }
   this.length++;
 return this;
 }

 head() {
   return this._head.data;
 }

 tail() {
   return this._tail.data;
 }

 _at(index) {
   let neededNode = this._head;
 if (this.length) {
   while (index) {
     neededNode = neededNode.next;
     index--;
   }
 }
   return neededNode;
 }

 at(index) {    
   return this._at(index).data;
 }

 insertAt(index, data) {
 if (this.length) {
   let nodeAtIndex = this._at();
   let newNode = new Node(data, nodeAtIndex, nodeAtIndex.next);
   nodeAtIndex.next = newNode;
   newNode.next.prev = newNode;
 } else {
   this.append(data);
 }
   this.length++;
 return this;
 }

 isEmpty() {
   return this.length == 0;
 }

 clear() {
   this.length = 0;
   this._head = new Node(null, "", "");
 this._tail = this._head;
 return this;
 }

 deleteAt(index) {
 if (!this.length) {
   return this;
 } else if (this.length == 1 && !index) {
   return this.clear();
 }
   this.length--;
   let removingNode = this._at(index);
   removingNode.prev.next = removingNode.next;
   removingNode.next.prev = removingNode.prev;
 return this;
 }

 reverse() {
 if (!this.length) {
   return this;
 } else if (this.length == 1) {
   return this;
 }
   
   let index = 0;
   let tmpNode = this._head;
   while (tmpNode.next) {
     tmpNode = tmpNode.next;
     index++;
   }

   tmpNode = this._tail;
   this._tail.next = this._tail.prev;
   this._tail = this._head;
   tmpNode.next = tmpNode.prev
   tmpNode.prev = "";
   this._head = tmpNode;
   for (let i = index; i > 0; i--) {
     let tmp = tmpNode;
     tmpNode = tmpNode.next;
     tmpNode.next = tmpNode.prev;
     index--;
   }
   tmpNode.next = "";
   tmpNode = this._head.next;
   let tmp = this._head;
   while (tmpNode.next) {
     tmpNode.prev = tmp;
     tmp = tmpNode;
     tmpNode = tmpNode.next;
   }
   tmpNode.prev = tmp;
   return this;
 }

 indexOf(data) {
   let neededNode = this._head;
   let index = 0;
   while (neededNode) {
     if (neededNode.data === data) {
       return index;
     }
     neededNode = neededNode.next;
     index++;
   }
   return -1;
 }
}

module.exports = LinkedList;
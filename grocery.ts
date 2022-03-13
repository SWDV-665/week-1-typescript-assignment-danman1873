class Grocery{
    name: string;
    price: number;
    quantity: number;

    constructor(n: string, p: number, q: number){
        this.name = n;
        this.price = p;
        this.quantity = q;
    }
    
    format(){
        return 'You have ${this.name} price ${this.price} quantity ${this.quantity}';
    }
}

const itemOne = new Grocery('Banana', 2.99, 10);
const itemTwo = new Grocery('Bread', 1.99, 3);
const itemThree = new Grocery('Milk',2.49, 12);
const itemFour = new Grocery('Eggs',3.69, 15);

let GroceryItem: Grocery[] = [];
GroceryItem.push(itemOne);
GroceryItem.push(itemTwo);
GroceryItem.push(itemThree);
GroceryItem.push(itemFour);

console.log(GroceryItem);

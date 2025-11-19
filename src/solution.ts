function formatValue(input: string | number | boolean): string | number | boolean {

    switch (typeof input) {
        case 'string':
            return input.toUpperCase();
        case 'number':
            return input * 10;
        case 'boolean':
            return !input;
        default:
            throw new Error('Nice input but we do not format it');
    }
}


function getLength(input: string | unknown[]): number {
    if (typeof input === 'string' || Array.isArray(input)) {
        return input.length;
    }

    throw new Error('Ah! Again an invalid input');
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}

const person1 = new Person('John Doe', 30);
const person2 = new Person('Alice', 25);
const person3 = new Person('Hasan', 24);


type IItem = {
    title: string;
    rating: number;
}

function filterByRating(items: IItem[]): IItem[] {

    return items.filter(item => (item.rating >= 4 && item.rating <= 5)); // filter does not mutate the original array
}

const books = [
    { title: 'Book A', rating: 4.5 },
    { title: 'Book B', rating: 3.6 },
    { title: 'Book C', rating: 5.0 },
    { title: 'Book D', rating: 4.0 },
];


type TUser = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

function isValidUser(user: unknown): user is TUser {
    return (typeof user === 'object' && user !== null &&
        'id' in user && typeof user.id === 'number' &&
        'name' in user && typeof user.name === 'string' &&
        'email' in user && typeof user.email === 'string' &&
        'isActive' in user && typeof user.isActive === 'boolean');
}

function filterActiveUsers(users: TUser[]): TUser[] {
    return users.filter(user => (isValidUser(user) && user.isActive));
}

const users = [
    { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
    { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
    { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
    { id: 4, name: 'Hasan', email: 'hasan@example.com', isActive: true },
];



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
}

const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};



type TArray = string[] | number[];

function getUniqueValues(arr1: TArray, arr2: TArray): TArray {
    const uniqueVals: (string | number)[] = [];

    for (const val of arr1) {
        if (!uniqueVals.includes(val)) {
            uniqueVals.push(val);
        }
    }

    for (const val of arr2) {
        if (!uniqueVals.includes(val)) {
            uniqueVals.push(val);
        }
    }

    return uniqueVals as TArray;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];


interface IProduct {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

function calculateTotalPrice(items: IProduct[]): number {
    return items.reduce((subtotal, item) => {
        const itemTotal = item.price * item.quantity;
        return subtotal + (itemTotal - (itemTotal * (item.discount ?? 0) / 100)); // since discount is in percentage
    }, 0);
}

const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

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


type IItem = {
    title: string;
    rating: number;
}

function filterByRating(items: IItem[]): IItem[] {

    return items.filter(item => (item.rating >= 4 && item.rating <= 5)); // filter does not mutate the original array
}


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


interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): string {
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`;
}


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

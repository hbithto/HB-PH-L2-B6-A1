## Differences Between Interfaces and Types in TypeScript

TypeScript-এ, interface এবং type alias উভয়ই আপনাকে ডেটার shape ডিফাইন করতে সাহায্য করে। এগুলি দেখতে প্রায় একই রকম, তবে এদের মাঝে পার্থক্য আছে। এখানে মূল পার্থক্যগুলি সহজভাবে ব্যাখ্যা করা হয়েছে।

***interface এক্সটেন্ড করার জন্য তৈরি এবং type হলো আরও ফ্লেক্সিবল যা ইন্টারসেকশন ব্যবহার করে:***

Example:
```typescript
interface User {
  id: number;
}

interface Admin extends User {
  role: string;
}
```

```typescript
type User = { id: number };
type Admin = User & { role: string };
```

***interface ডিক্লেয়ারেশন মার্জিং সাপোর্ট করে; কিন্তু type করে না:***

একটি interface একাধিকবার ডিক্লেয়ার করলে ডিক্লারেশনগুলি মার্জ হয়; কিন্তু type কে একাধিকবার ডিক্লেয়ার করলে error থ্রো করে।
Example:
```typescript
interface User {
  id: number;
}

interface User {
  name: string;
}
//Merged result:
//{ id: number; name: string }
```

***type আরও ফ্লেক্সিবল এবং object-এর চেয়ে বেশি রিপ্রেজেন্ট করতে পারে:***
যেমন:
- Unions
- Primitives
- Functions
- Tuples
- Intersections
- Literal types

Example:
```typescript

type Status = "success" | "error" | "loading";
type Coordinates = [number, number];
```
interface এই ফর্মগুলি প্রকাশ করতে পারে না।

***interface class এর সাথে ভাল কাজ করে:***

```typescript
interface Vehicle {
  start(): void;
}

class Car implements Vehicle {
  start() {}
}
```
এখানে type ও ব্যবহার করা যেতে পারে, তবে OOP প্যাটার্নের জন্য interface ক্লিনার।

***পারফরম্যান্স এর পার্থক্য:***

interface গুলো টাইপস্ক্রিপ্ট কম্পাইলারের জন্য প্রসেস করা কিছুটা সহজ, বিশেষ করে বড় প্রজেক্টে।
ছোট বা মাঝারি আকারের কোডবেসে এর তেমন কোনো প্রভাব পড়ে না।

## What is the use of the keyof keyword in TypeScript?

TypeScript-এ, keyof কীওয়ার্ড আপনাকে একটি অবজেক্ট টাইপের সমস্ত কী এক্সট্র্যাক্ট করতে এবং স্ট্রিং লিটারেল টাইপের একটি ইউনিয়নে রূপান্তর করতে সহায়তা করে। এটি নিশ্চিত করে যে কেবলমাত্র object-এ বিদ্যমান key গুলি অ্যাক্সেস করা হচ্ছে এবং তা আরও নিরাপদ অনুমানযোগ্য কোড লিখতে সহায়তা করে।

Example:

```typescript
type User = {
  id: number;
  name: string;
  email: string;
};

// "UserKeys" will be: "id" | "name" | "email"
type UserKeys = keyof User;

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const u: User = { id: 1, name: "HB", email: "hb@example.com" };

getValue(u, "name"); // Valid
getValue(u, "age"); // Error: because "age" is not a valid key
```

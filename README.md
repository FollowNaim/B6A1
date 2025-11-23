## এসাইনমেন্ট ১ এর উত্তর।

### ইন্টারফেইস এবং টাইপ এর মধ্যে কি পার্থক্য?

ইন্টারফেইস এবং টাইপ এর ভিতর মৌলিক কিছু পার্থক্য রয়েছে।

1. ইন্টারফেস মূলত অবজেক্ট এর ক্ষেত্রে ইউজ করা হয়। কিন্তু টাইপ জটিল সব টাইপের ক্ষেত্রেই ইউজ করা যায় যেমনঃ প্রিমিটিভ, ইউনিয়ন, টুপল, ফাংশন।

```
type Id = string | number;
type coordinates = [number, number];
```

2. বার ইন্টারফেস ডিক্লেয়ার করলে সেটা মার্জ হয়ে যায়। কিন্তু টাইপের ক্ষেত্রে আমরা সেটা দেখি না।

```
interface Person {name: string};
interface Person {age: string};
```

3. ইন্টারফেস কে আমরা আরেকটি ইন্টারফেস এর সাথে এক্সটেন্ড করতে পারি। আর টাইপকে এক্সটেন্ড করতে হলে & ব্যবহার করতে হয়।

```
interface Employee extends Person{}
type PersonType = { name: string; age: number };
type EmployeeType = PersonType & { salary: number };
```

### keyof টাইপস্ক্রিপ্ট এ কিভাবে কাজ করে?

keyof মুলত একটা ইন্টারফেস এর key গুলোকে ইউনিয়ন টাইপ আকারে রিটার্ন করে। যেমনঃ

```
interface Person {
    name: string,
    age: number,
    isStudent: boolean
}
type KeysOfPerson = keyof Person;
// KeysOfPerson টাইপ হবে ঃ "name" | "age" | "isStudent";
```

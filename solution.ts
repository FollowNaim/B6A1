function formatValue(
  param: number | string | boolean
): string | number | boolean {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else if (typeof param === "number") {
    return param * 10;
  } else {
    return !param;
  }
}

function getLength(param1: string | (string | number)[]): number {
  if (typeof param1 === "string") {
    return param1.length;
  } else if (Array.isArray(param1)) {
    return param1.length;
  } else return 0;
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    (this.name = name), (this.age = age);
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type FilterByRating = { title: string; rating: number };

function filterByRating(items: FilterByRating[]): FilterByRating[] {
  const filtered = items.filter((item: FilterByRating) => {
    return item.rating >= 4;
  });
  return filtered;
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  const filtered = users.filter((user: User) => {
    return user.isActive;
  });
  return filtered;
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
}

function getUniqueValues(
  items: (string | number)[],
  items2: (string | number)[]
): (string | number)[] {
  const filtered: (string | number)[] = [];
  for (let i = 0; i < items.length; i++) {
    if (!filtered.includes(items[i])) {
      filtered.push(items[i]);
    }
  }
  for (let j = 0; j < items2.length; j++) {
    if (!filtered.includes(items2[j])) {
      filtered.push(items2[j]);
    }
  }
  return filtered;
}

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

function calculateTotalPrice(products: Product[]) {
  const totalPrice = products.reduce((total: number, product: Product) => {
    const discount =
      product.price * product.quantity * (Number(product.discount) / 100) || 0;
    total += discount
      ? product.price * product.quantity - discount
      : product.price * product.quantity;
    return total;
  }, 0);
  return totalPrice;
}

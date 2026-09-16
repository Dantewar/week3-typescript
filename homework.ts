// ========================================
// Week 3 - TypeScript Homework
// ========================================

// ========================================
// Skill 1 - Union Types
// ========================================

// ID Card

type IDType = number | string;

const showID = (id: IDType): string => {
  return `Your ID is: ${id}`;
};

console.log(showID(12345));
console.log(showID("AB123"));


// Fruit Basket

type Fruit = "apple" | "banana" | "orange";

const eatFruit = (fruit: Fruit): string => {
  return `You ate an ${fruit}.`;
};

console.log(eatFruit("apple"));
console.log(eatFruit("orange"));
// ========================================
// Week 3 - TypeScript Homework Part 2
// ========================================

// Skill 1: Union Types

type IDType = number | string;

const showID = (id: IDType): string => {
  return `Your ID is: ${id}`;
};

console.log(showID(12345));
console.log(showID("AB123"));


type Fruit = "apple" | "banana" | "orange";

const eatFruit = (fruit: Fruit): string => {
  return `You ate an ${fruit}.`;
};

console.log(eatFruit("apple"));
console.log(eatFruit("orange"));


type Result = true | false;

const printResult = (result: Result): string => {
  return result ? "Pass" : "Fail";
};

console.log(printResult(true));
console.log(printResult(false));
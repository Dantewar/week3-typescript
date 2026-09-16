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


// Skill 2: Interfaces & Type Aliases

interface Book {
  title: string;
  pages: number;
}

const book: Book = {
  title: "Dune",
  pages: 412
};

const describeBook = (book: Book): string => {
  return `The book ${book.title} has ${book.pages} pages.`;
};

console.log(describeBook(book));


interface Teacher {
  name: string;
  subject: string;
}

interface Employee {
  id: number;
  email: string;
}

type SchoolTeacher = Teacher & Employee;

const teacher: SchoolTeacher = {
  name: "Michelle",
  subject: "TypeScript",
  id: 1,
  email: "teacher@example.com"
};

const printTeacherInfo = (teacher: SchoolTeacher): void => {
  console.log(
    `Teacher: ${teacher.name}, Subject: ${teacher.subject}, ID: ${teacher.id}, Email: ${teacher.email}`
  );
};

printTeacherInfo(teacher);


interface Car {
  brand: string;
  year: number;
}

const car: Car = {
  brand: "Toyota",
  year: 2022
};

const printCar = (car: Car): string => {
  return `Brand: ${car.brand}, Year: ${car.year}`;
};

console.log(printCar(car));
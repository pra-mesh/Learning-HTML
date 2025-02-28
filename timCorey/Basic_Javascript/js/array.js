const people = ["Pramesh", "Binesh", "Ramesh", "Mukesh", "Mumit", "Bikesh"];

people.push("Binisha");

console.log(people);

const lastPerson = people.pop();

console.log(people);

console.log(people.indexOf("Pramesh"));

console.log(Array.isArray(lastPerson));

console.log(lastPerson.startsWith("Bini")); // using string method stars with

console.log(lastPerson.substring(0, 2));

const Brothers = people.filter((person) => person.startsWith("M"));
console.log(Brothers);
const first2Letter = people.map((person) => person.substring(0, 2));
console.log(first2Letter);

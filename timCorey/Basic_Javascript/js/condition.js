const firstName = "Pramesh";
const lastName = "Pradhan";

const checkUser = (usrName = "") => {
  if (usrName.toLowerCase() === "pramesh") {
    console.log(`Hello ${usrName}`);
  } else {
    console.log(`hi ${usrName}`);
  }
  return;
};
checkUser(firstName);
checkUser(checkUser("Ram"));

//ES6 Ternary condtion

const checkFullName = ({ firstName = "", lastName = "" }) =>
  firstName === "Pramesh" && lastName === "Pradhan"
    ? `Hello Pramesh Pradhan`
    : firstName.includes("ramesh")
    ? "Are you Pramesh"
    : "Hi other guy";
console.log(checkFullName({ firstName: firstName, lastName: "lastName" }));

// === checks both type and value comparsion where as == checks only value

const returDay = (val = 0) => {
  switch (val) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday"; // if you don't write a break a fall through can occur
      break;
    default:
      return "Invalid Date";
  }
};

console.log(returDay(+prompt("Enter day 1 to 7")));

var employeeName = "Alex Morgan";
console.log("1. Employee Name:", employeeName);

let employeeAge = 25;
console.log("2. Employee Age:", employeeAge);

const company = "Stackly";
console.log("3. Company:", company);

var salary = 50000;
console.log("4. Initial Salary:", salary);

salary = 65000;
console.log("   Salary after 1st update:", salary);

salary = 80000;
console.log("   Salary after 2nd update:", salary);

let city = "New York";
console.log("5. Initial City:", city);

city = "San Francisco";
console.log("   Reinitialized City:", city);

var course = "Web Development";
console.log("6. Initial Course:", course);

var course = "Full Stack JavaScript";
console.log("   Redeclared Course:", course);

let student = "Sarah";
console.log("7. Declared: let student =", student);

try {
  eval("let student = 'Sarah'; let student = 'John';");
} catch (error) {
  console.log("   Result / Error caught:", error.toString());
}

const country = "United States";
console.log("8. Declared: const country =", country);

try {
  country = "Canada";
} catch (error) {
  console.log("   Result / Error caught:", error.toString());
}

var itemVar = "Laptop";
let itemLet = "Laptop";
const itemConst = "Laptop";

console.log("10. Variables with the same value:");
console.log("    itemVar   (var)   :", itemVar);
console.log("    itemLet   (let)   :", itemLet);
console.log("    itemConst (const) :", itemConst);

console.log("Full Name: John Doe");
console.log("Date of Birth: January 15, 2000");
document.writeln("Company: Stackly Technologies");
console.warn("Designation: Software Engineer");
console.error("Department: Engineering");
console.log("Favourite Food: Biryani");
let productPrice = 499.99;
console.log("Product Price:", productPrice);
let isStudent = false;
console.log("Is Student:", isStudent);

let fullName = prompt("Enter your full name:");
console.log("Full Name:", fullName);

let favLanguage = prompt("Enter your favourite programming language:");
document.writeln("<p>Favourite Programming Language: " + favLanguage + "</p>");

let userAge = prompt("Enter your age:");
console.log("User Age:", userAge);

let mobileBrand = prompt("Enter your mobile brand:");
document.writeln("<p>Mobile Brand: " + mobileBrand + "</p>");

let userCompany = prompt("Enter your company name:");
console.log("Company Name:", userCompany);

let favColor = prompt("Enter your favourite colour:");
document.writeln("<p>Favourite Colour: " + favColor + "</p>");

let userCity = prompt("Enter your city:");
let userCityAge = prompt("Enter your age:");
document.writeln("<p>City: " + userCity + ", Age: " + userCityAge + "</p>");

alert("Welcome to JavaScript Training");
let isReady = confirm("Are you ready to start learning?");
console.log("Ready to start learning:", isReady);
let knowsHtml = confirm("Do you know HTML?");
console.log("Knows HTML:", knowsHtml);
alert("Please enter your name");
let wantsToContinue = confirm("Do you want to continue?");
console.log("Wants to continue:", wantsToContinue);

console.log("Task Started");
console.warn("Low Battery");
console.error("Invalid Username");

console.log("Name: John Doe");
console.log("Age: 25");
console.log("City: New York");

console.clear();
console.log("Console Cleared");

let trainingStatus = "In Progress";
console.log("Training Status:", trainingStatus);

let batchNumber = "Batch-42";
console.warn("Batch Number:", batchNumber);

let errorMessage = "404: Resource Not Found";
console.error("Error Message:", errorMessage);

console.log("Message 1 (log): Application loaded successfully.");
console.warn("Message 2 (warn): Disk space running low.");
console.error("Message 3 (error): Connection timeout occurred.");

var candidateName = "Alex";
let candidateRole = "Frontend Developer";
const candidateLocation = "India";
const candidateStatus = "Active";

console.log("Candidate Name (var):", candidateName);
console.log("Candidate Role (let):", candidateRole);
console.warn("Candidate Location (const):", candidateLocation);
console.error("Candidate Status (const):", candidateStatus);

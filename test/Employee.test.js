const Employee = require("../lib/Employee");

test("Can test Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set name from constructor arguments", () => {
  const name = "Alexa";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id from constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Jon", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email from constructor argument", () => {
  const testValue = "example@example.com";
  const e = new Employee("Jon", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get name from getName()", () => {
  const testValue = "Alexa";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Can get id from getId()", () => {
  const testValue = 100;
  const e = new Employee("Jon", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email from getEmail()", () => {
  const testValue = "example@example.com";
  const e = new Employee("Jon", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alexa", 1, "example@example.com");
  expect(e.getRole()).toBe(testValue);
});

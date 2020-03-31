const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number from constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Jon", 1, "example@example.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Jon", 1, "example@example.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number from getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Jon", 1, "example@example.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
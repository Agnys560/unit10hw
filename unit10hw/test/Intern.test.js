const Intern = require("../lib/Intern");

test("Can set school from constructor", () => {
  const testValue = "UCLA";
  const e = new Intern("Jon", 1, "example@example.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Jon", 1, "example@example.com", "UCLA");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school from getSchool()", () => {
  const testValue = "UCLA";
  const e = new Intern("Jon", 1, "example@example.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
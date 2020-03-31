const Engineer = require("../lib/Engineer");

test("Can set GitHUb account from constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jon", 1, "example@example.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Jon", 1, "example@example.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username from getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Jon", 1, "example@example.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
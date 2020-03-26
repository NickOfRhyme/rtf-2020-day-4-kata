const { expect } = require("chai");
const herdTheBabies = require("../herd-the-babies");

describe("herdTheBabies", () => {
  it("when passed nothing or an empty string, returns an empty string", () => {
    const input = "";
    let actual = herdTheBabies(input);
    const expected = "";
    expect(actual).to.equal(expected);
    actual = herdTheBabies();
    expect(actual).to.equal(expected);
  });
  it("when passed a string of letters of only one case, returns those letters in alphabetical order", () => {
    let input = "bcfedsa";
    let actual = herdTheBabies(input);
    let expected = "abcdefs";
    expect(actual).to.equal(expected);
    input = "BCFEDSA";
    actual = herdTheBabies(input);
    expected = "ABCDEFS";
    expect(actual).to.equal(expected);
  });
  it("when passed a string consisting of the same letter multiple times but in mixed cases, returns the string with the upper-case letters moved to the front", () => {
    const input = "AaAaA";
    const actual = herdTheBabies(input);
    const expected = "AAAaa";
    expect(actual).to.equal(expected);
  });
  it("when passed a string consisting of several different letters and a mix of cases, alphabetises the string and moves upper-case letters to the start of their letter groups", () => {
    const input = "AAsdsazZzyXxX";
    const actual = herdTheBabies(input);
    const expected = "AAadssXXxyZzz";
    expect(actual).to.equal(expected);
  });
});

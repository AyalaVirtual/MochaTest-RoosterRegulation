const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      const expected = "cock-a-doodle-doo!";
      const actual = Rooster.announceDawn();
      assert.ok(actual == expected);
    });
  });
  describe("Rooster", () => {
    describe(".timeAtDawn", () => {
      it("returns argument as a string", () => {
        const input = 7;
        const expected = "7";
        const actual = Rooster.timeAtDawn(input);

        assert.strictEqual(actual, expected);
      });
      it("throws an error if passed a number less than 0", () => {
        const input = -4;
        const expected = RangeError;

        assert.throws(() => {
          Rooster.timeAtDawn(input)
        }, expected);
      });
      it("throws an error if passed a number greater than 23", () => {
        const input = 24;
        const expected = RangeError;

        assert.throws(() => {
          Rooster.timeAtDawn(input);
        })
      });
    });
  });
});


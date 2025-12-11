import { describe, expect, test } from "vitest";
import { cleanInput } from "./repl";

describe("cleanInput", () => {
  test('should clean " hello world " to ["hello", "world"]', () => {
    const input = " hello world ";
    const expected = ["hello", "world"];
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });

  // TODO: Ajoutez plus de cas de test ici
  test('should clean "  test  " to ["test"]', () => {
    const input = "  test  ";
    const expected = ["test"];
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });

  test('should handle empty string', () => {
    const input = "";
    const expected = 0;
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected);
  });

  test('should handle multiple spaces between words', () => {
    const input = "  hello   world  test  ";
    const expected = ["hello", "world", "test"];
    const actual = cleanInput(input);

    expect(actual).toHaveLength(expected.length);
    for (const i in expected) {
      expect(actual[i]).toBe(expected[i]);
    }
  });
});

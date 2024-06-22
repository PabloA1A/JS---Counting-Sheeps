import { describe, expect, it } from "vitest";
import { countSheep } from "../src/booleans";

test('farm 1: list with 17 sheep', () => {
    const list = [ true,  true,  true,  false, true,  true,  true,  true , true,  false, true,  false, true,  false, false, true , true,  true,  true,  true , false, false, true,  true ];
    expect(countSheep(list)).toBe('There are 17 sheep in total');
});
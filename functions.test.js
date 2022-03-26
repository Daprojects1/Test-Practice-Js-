import { expect, it, test } from "@jest/globals"
import utilities from "./index"

test("capitalize", () => {
    expect(utilities.capitalize("monica")).toBe("Monica")
})

test("reverse a string", () => {
    expect(utilities.reverse("joshua")).toBe("auhsoj")
})

test("add", () => {
    expect(utilities.Calculator.add(11,11)).toBe(22)
})

test("subtract", () => {
    expect(utilities.Calculator.subtract(11,11)).toBe(0)
})

test("divide", () => {
    expect(utilities.Calculator.divide(12,2)).toBe(6)
})

test("multiply", () => {
    expect(utilities.Calculator.multiply(11,11)).toBe(121)
})

test("ceaserCipher", () => {
    expect(utilities.caesersCipher("maiLman")).toBe("nbjmnbo");
})

test("analyze Array", () => {
    expect(utilities.analyzeArray([1,2,3,4,5])).toEqual({average:3,min:1,max:5,length:5})
})

it("cap", () => {
    expect(utilities.capitalize("mail")).toBe("Mail")
})
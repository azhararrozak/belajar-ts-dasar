import { helloWorld } from "../src/hello-world";

describe("helloWorld", () => {
    it("should return a string", () => {
        const result = helloWorld("John Doe");
        expect(result).toBe("Hello World, hai John Doe!");
    });
});
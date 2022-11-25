"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../index"));
describe("suite description", () => {
    it("expect myFunc(5) toBe 25", () => {
        expect((0, index_1.default)(8.7)).toBeCloseTo(43.5, 1);
    });
});

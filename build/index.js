"use strict";
// let count = 0;
// count += 1;
// count = "테스트";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calendar_1 = __importDefault(require("./components/Calendar"));
// const message: string = "hello world!";
// console.log(message);
// const done: boolean = true;
// const numbers: number[] = [1, 2, 3];
// const messages: string[] = ["hello", "world"];
// messages.push(1);
// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number | null = null;
// let color: "red" | "orange" | "yellow" = "red";
// color = "yellow";
// color = "green";
const calendar = new Calendar_1.default("kimson", 2022, 6);
const date = calendar.getCalendar();
const formatted = calendar.format('yyyy-MM-dd', true);
console.log(formatted);

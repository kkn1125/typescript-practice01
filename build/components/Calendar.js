"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Calendar {
    constructor(name, year, month) {
        this.name = name;
        this.year = year;
        this.month = month;
        if (!this.year || !this.month) {
            throw new Error("Invalid year or month");
        }
        this.calendar = new Date(this.year, this.month - 1);
    }
    format(format, isPad = false) {
        return format.replace(/yyyy|MM|dd|HH|mm|ss|SSS|AP/g, ($1) => {
            switch ($1) {
                case "yyyy":
                    return this.calendar
                        .getFullYear()
                        .toString()
                        .padStart(isPad ? 4 : 0, "0");
                case "MM":
                    return (this.calendar.getMonth() + 1)
                        .toString()
                        .padStart(isPad ? 2 : 0, "0");
                case "dd":
                    return this.calendar
                        .getDate()
                        .toString()
                        .padStart(isPad ? 2 : 0, "0");
                case "HH":
                    return this.calendar
                        .getHours()
                        .toString()
                        .padStart(isPad ? 2 : 0, "0");
                case "mm":
                    return this.calendar
                        .getMinutes()
                        .toString()
                        .padStart(isPad ? 2 : 0, "0");
                case "ss":
                    return this.calendar
                        .getSeconds()
                        .toString()
                        .padStart(isPad ? 2 : 0, "0");
                case "SSS":
                    return this.calendar
                        .getMilliseconds()
                        .toString()
                        .padStart(isPad ? 3 : 0, "0");
                default:
                    return $1;
            }
        });
    }
    getAllDays() {
        const years = this.calendar.getFullYear();
        const months = this.calendar.getMonth();
        const maxDay = new Date(years, months + 1, 0).getDate();
        return new Array(maxDay).fill(0).map((e, i) => i + 1);
    }
    getCalendar() {
        console.log(this.getAllDays());
        return this.calendar;
    }
}
exports.default = Calendar;

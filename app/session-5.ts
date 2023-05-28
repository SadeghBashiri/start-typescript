// Enum
enum FlightClass {
    ECONOMY, // ECONOMY = 3 بعدی از 4 شروع میشه(عضو قبلی برای عضو بعدی مهم است)
    BUSINESS,
    FIRST
}
const passenger1 = FlightClass.ECONOMY;
// bestpractice
const enum FlightClass2 {
    ECONOMY,
    BUSINESS,
    FIRST
}

// Unknown
let var1: unknown
var1 = 'hello';
let str1: string = var1; // uncorrect
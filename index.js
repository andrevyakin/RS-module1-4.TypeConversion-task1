//task 1

//String
let name = "Андрей";
//Number
let age = 46;
//Boolean
let studiesJavaScript = true;
//Null
let x = null;
//Undefined
let y = undefined;
//Object
let settingData = {
    name : "Андрей",
    age : 46
};
//Symbol
let id = Symbol("id");
//BigInt
let bigNumber = 10n;

//Явное преобразование
console.log(`Пребразование String к String: ${String(name)}, к Number: ${Number(name)}, к Boolean: ${Boolean(name)}`);
console.log(`Пребразование Number к String: ${String(age)}, к Number: ${Number(age)}, к Boolean: ${Boolean(age)}`);
console.log(`Пребразование Boolean к String: ${String(studiesJavaScript)}, к Number: ${Number(studiesJavaScript)}, к Boolean: ${Boolean(studiesJavaScript)}`);
console.log(`Пребразование NULL к String: ${String(x)}, к Number: ${Number(x)}, к Boolean: ${Boolean(x)}`);
console.log(`Пребразование Undefined к String: ${String(y)}, к Number: ${Number(y)}, к Boolean: ${Boolean(y)}`);
console.log(`Пребразование Object к String: ${String(settingData)}, к Number: ${Number(settingData)}, к Boolean: ${Boolean(settingData)}`);
//Symbol нельзя преобразовывать в Number выдает ошибку.
console.log(`Пребразование Symbol к String: ${String(id)}, Symbol нельзя преобразовывать в Number, к Boolean: ${Boolean(id)}`);
console.log(`Пребразование BigInt к String: ${String(bigNumber)}, к Number: ${Number(BigInt)}, к Boolean: ${Boolean(BigInt)}`);

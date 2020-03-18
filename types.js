// Lesson 23. Types in JS

// -------------------------- Number

// console.log("About Numbers:");
// let number1 = 1;
// let number2 = 2.2;
// let number3 = NaN;
// let number4 = +Infinity;
// let number5 = -Infinity;
// console.log("number1 = ", number1, "is", typeof number1);
// console.log("number2 = ", number2, "is", typeof number2);
// console.log("number3 = ", number3, "is", typeof number3);
// console.log("number4 = ", number4, "is", typeof number4);
// console.log("number5 = ", number5, "is", typeof number5);
// let number6 = 1 / 0;
// let number7 = -1 / 0;
// console.log("number6 = ", number6, "is", typeof number6);
// console.log("number7 = ", number7, "is", typeof number7);
// let number8 = NaN + 2;
// let number9 = +Infinity / 2;
// console.log("number8 = ", number8, "is", typeof number8);
// console.log("number9 = ", number9, "is", typeof number9);

// -------------------------- String

// console.log("About Strings:");
// let string1 = "One";
// let string2 = "Two";
// let string3 = `Three`;
// let string4 = string1 + ", " + string2 + ", " + string3;
// console.log("string1 = ", string1, "is", typeof string1);
// console.log("string2 = ", string2, "is", typeof string2);
// console.log("string3 = ", string3, "is", typeof string3);
// console.log("string4 = ", string4, "is", typeof string4);

// -------------------------- indefined

// console.log("About undefined:");
// let undef1;
// let undef2 = undefined;
// console.log("undef1 = ", undef1, "is", typeof undef1);
// console.log("undef2 = ", undef2, "is", typeof undef2);

// -------------------------- null

// console.log("About null:");
// // Значення null позначає навмисну відсутність будь-якого значення об'єкта
// let null1 = null;
// console.log("null1 = ", null1, "is", typeof null1);

// -------------------------- Boolean

// console.log("About Booleans:");

// let bool1 = true;
// let bool2 = false;
// console.log("bool1 = ", bool1, "is", typeof bool1);
// console.log("bool2 = ", bool2, "is", typeof bool2);

// -------------------------- Type transform to Number

// let toNum1 = Number("12345");
// let toNum2 = Number("Не число це");
// let toNum3 = Number("50/2");
// let toNum4 = +"100500";
// let toNum5 = Number(false);
// let toNum6 = Number(true);
// let toNum7 = +"23" + 27;
// console.log("toNum1 = ", toNum1, "is", typeof toNum1);
// console.log("toNum2 = ", toNum2, "is", typeof toNum2);
// console.log("toNum3 = ", toNum3, "is", typeof toNum3);
// console.log("toNum4 = ", toNum4, "is", typeof toNum4);
// console.log("toNum5 = ", toNum5, "is", typeof toNum5);
// console.log("toNum6 = ", toNum6, "is", typeof toNum6);
// console.log("toNum7 = ", toNum7, "is", typeof toNum7);

// -------------------------- Type transform to String

// let toStr1 = String(1558);
// let toStr2 = String(false);
// let toStr3 = String(true);
// let toStr4 = "" + 1558;
// console.log("toStr1 = ", toStr1, "is", typeof toStr1);
// console.log("toStr2 = ", toStr2, "is", typeof toStr2);
// console.log("toStr3 = ", toStr3, "is", typeof toStr3);
// console.log("toStr4 = ", toStr4, "is", typeof toStr4);

// -------------------------- Type transform to Boolean

// let toBool1 = Boolean(1524);
// let toBool2 = Boolean(+Infinity);
// let toBool3 = Boolean(NaN);
// let toBool4 = Boolean(0);
// let toBool5 = Boolean(-100);
// let toBool6 = Boolean("Text text");
// let toBool7 = Boolean(""); // Empty string
// let toBool8 = Boolean(null);
// let toBool9 = Boolean(undefined);

// console.log("Boolean(1524) = ", toBool1, "is", typeof toBool1);
// console.log("Boolean(+Infinity) = ", toBool2, "is", typeof toBool2);
// console.log("Boolean(NaN) = ", toBool3, "is", typeof toBool3);
// console.log("Boolean(0) = ", toBool4, "is", typeof toBool4);
// console.log("Boolean(-100) = ", toBool5, "is", typeof toBool5);
// console.log('Boolean("Text text") = ', toBool6, "is", typeof toBool6);
// console.log('Boolean("") = ', toBool7, "is", typeof toBool7);
// console.log("Boolean(null) = ", toBool8, "is", typeof toBool8);
// console.log("Boolean(undefined) = ", toBool9, "is", typeof toBool9);

// -------------------------- Compare

// let comp1 = 500 > 100;
// let comp2 = 200 < 100;
// let comp3 = 500 >= 500;
// let comp4 = 500 <= 500;
// let comp5 = 500 != 10;
// console.log("500 > 100 = ", comp1, "is", typeof comp1);
// console.log("200 < 100 = ", comp2, "is", typeof comp2);
// console.log("500 >= 500 = ", comp3, "is", typeof comp3);
// console.log("500 <= 500 = ", comp4, "is", typeof comp4);
// console.log("500 != 10 = ", comp5, "is", typeof comp5);
// let comp6 = "John" > "Andrew";
// let comp7 = "A" < "B";
// console.log('"John" > "Andrew" = ', comp6, "is", typeof comp6);
// console.log('"A" < "B" = ', comp7, "is", typeof comp7);

// -------------------------- Logical operators

// let girlDatingWithBoys = true;
// let girlDatingWithGirls = false;

// let sheIsActive = girlDatingWithBoys || girlDatingWithGirls;
// let sheIsPassive = !sheIsActive;
// let sheIsBisexual = girlDatingWithBoys && girlDatingWithGirls;
// let sheIsNatural = sheIsActive && girlDatingWithBoys && !sheIsBisexual;
// let sheIsLesbian = sheIsActive && girlDatingWithGirls && !sheIsBisexual;

// console.log("sheIsActive = ", sheIsActive, "is", typeof sheIsActive);
// console.log("sheIsPassive = ", sheIsPassive, "is", typeof sheIsPassive);
// console.log("sheIsNatural = ", sheIsNatural, "is", typeof sheIsNatural);
// console.log("sheIsLesbian = ", sheIsLesbian, "is", typeof sheIsLesbian);
// console.log("sheIsBisexual = ", sheIsBisexual, "is", typeof sheIsBisexual);

// -------------------------- Equal

// console.log(`1 == 2 `, 1 == 2);
// console.log(`1 == 1 `, 1 == 1);
// console.log(`1 === 1 `, 1 == 1);
// console.log(`"1" == 1 `, "1" == 1);
// console.log(`"1" === 1 `, "1" === 1);
// console.log(`0.2 == 0.2 `, 0.2 == 0.2);
// console.log(`0.2 === 0.2 `, 0.2 === 0.2);
// console.log(`0.2 + 0.2 == 0.4 `, 0.2 + 0.2 == 0.4);
// console.log(`0.2 + 0.2 === 0.4 `, 0.2 + 0.2 === 0.4);
// console.log(`"seven" == 7 `, "seven" == 7);
// console.log(`"seven" == "seven" `, "seven" == "seven");
// console.log(`"seven" === "seven" `, "seven" === "seven");
// console.log(`null == undefined `, null == undefined);
// console.log(`null === undefined `, null === undefined);

// -------------------------- if

// if (true) {
//     console.log("Always true");
// } else {
//     console.log("Never happends");
// }

// let name = "Ivan";
// if (name == "Ivan") {
//     console.log(`You are Ivan!`);
// } else {
//     console.log(`You aren't Ivan`);
// }

// let time = 21;
// if (time > 18 && time <= 23) {
//     console.log("This is evening now");
// } else if (time > 23 || time <= 6) {
//     console.log("This is night time");
// } else if (time > 6 && time <= 10) {
//     console.log("Good morning!");
// } else {
//     console.log("Day time");
// }

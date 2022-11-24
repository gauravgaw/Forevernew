// let js ="amazing";
// if (js==="amazing") alert ("js is fun")
// let x = 10 ;
// x += 10; //20
// x -= 5;  //20-5 =15
// ++x ;  //16

// console.log(x);

//coding challenge 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heighJohn = 1.95;

// const bmiMark = massMark / heighJohn ** 2;
// const bmiJohn = massJohn / heighJohn ** 2;
// const markhigherBmi = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn,markhigherBmi);

// //if else
// const age = 15 ;

// if (age >= 18){
//     console.log('Sarah can start driving lincence test');
// }else{
// const yearLeft = 18 - age;
// console.log(`Sarah is too young. wait another :${yearLeft}
// years `)}

// //coding challege 2 compare bmi and tell whos bmi  greater
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heighJohn = 1.95;

// const bmiMark = massMark / heighJohn ** 2;
// const bmiJohn = massJohn / heighJohn ** 2;
// const markhigherBmi = bmiMark > bmiJohn;

// console.log(bmiMark, bmiJohn,markhigherBmi);

// if(bmiMark > bmiJohn){
//     console.log(`Marks bmi ${bmiMark} is higher than Johns bmi ${bmiJohn} `);
// }else{
//     console.log(`Johns bmi ${bmiJohn} is higher than Marks bmi${bmiMark} `);

// }

//type coertion
// let n='1' + 1;
// n=n-1;
// console.log(n);  //awnser n=11 concate happens

// //truthy and falsy value
// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean("john"));

// const money = 0;
// if (money) {
//   console.log(" Don't spend it all");
// } else {
//   console.log("Search job");
// }

// let height=6;
// if(height){
//     console.log('Yay height is defined');
// }else{
//     console.log('Height is undefined');
// }

// //==vs ===
// console.log("18" == 18); //true type coersion
// console.log("18" === 18); //false

// const fav = Number(prompt("Insert fav number?"));
// console.log(fav);
// console.log(typeof fav);

// if (fav === 7) {
//   console.log("cool amazing no");
// } else if (fav === 9) {
//   console.log("cool 9 another amzing no");
// } else {
//   console.log("Inserted no is not 7 or 9");
// }

// if (fav !== 7) {
//   console.log("Why not 7");
// }

//Boolean logic
//(&&)and only true*true=true rest false
//(||)or one ture=true
//(!) not has higher precedence  than & and |)

// const hasDrivingLicense=true; //a
// const hasGoodVision=true; //b
// console.log(hasDrivingLicense && hasGoodVision);
// console.log(hasDrivingLicense || hasGoodVision);
// console.log(!hasDrivingLicense);

// if(hasDrivingLicense && hasGoodVision){
//     console.log('Sam is able to drive');
// }else{
//     console.log('Some one else should drive..');
//     }

//     const isTired=false;
//     console.log(hasDrivingLicense && hasGoodVision && isTired);

//    if(hasDrivingLicense && hasGoodVision && !isTired){
// console.log('sam will able to drive');
//    }else{
//     console.log('someone else should drive..');
//    }

//coding challeage 3
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// const dolphineScore1=96;
// const dolphineScore2=108;
// const dolphineScore3=89;

// const dolphineAvg=(dolphineScore1+dolphineScore2+dolphineScore3)/3;
// console.log(dolphineAvg);

// const koalaScore1=88;
// const koalaScore2=91;
// const koalaScore3=110;

// const koalaAvg=(koalaScore1+koalaScore2+koalaScore3)/3;
// console.log(koalaAvg);

// if(dolphineAvg>koalaAvg){
//     console.log(`Dolphins wins with score ${dolphineAvg}`);
//     }
//     else if(dolphineAvg==koalaAvg){
//         console.log(`its Draw Dolphins score ${dolphineAvg} = Koala score ${koalaAvg} `);
//     }
//     else{
//         console.log(`Koala wins with score ${koalaAvg} `);
//     }

//bounus 3. BONUS 1: Include a requirement for a minimum score of 100.With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
// BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

// const dolphineAvg = (97 + 112 + 101) / 3;
// console.log(dolphineAvg);

// const koalaAvg = (109 + 95 + 123) / 3;
// console.log(koalaAvg);

// if (dolphineAvg > koalaAvg && dolphineAvg >= 100) {
//   console.log(`Dolphins wins with score ${dolphineAvg}`);
// } else if(koalaAvg > dolphineAvg && koalaAvg >= 100){
//   console.log(`Koala wins with score ${koalaAvg} `);
// }else if(dolphineAvg === koalaAvg && dolphineAvg >= 100 && koalaAvg >= 100){
// console.log(`its Draw Dolphins score ${dolphineAvg} = Koala score ${koalaAvg} Both wins`);
// }
// else{
//     console.log('no one wins');
// }

//ternary operator
// const age=19;

// // age >=18 ? console.log("you can drive")
// // : console.log("you cant drive");

// const drive = age>=18 ? 'Gear Bike' : 'moped';
// console.log(drive);

// Coding Challenge #4
/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. 
In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. 
Create a variable called 'tip' for this. 
It's not allowed to use an if/else statement 😅 
(If it's easier for you, you can start with an if/else statement,
 and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip).
 Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉 */

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ?  bill*0.15 : bill*0.2;

// const totBill=(` tip : ${tip}, bill : ${'', bill}, total bill: ${ bill+tip }`);
// console.log(totBill);


//strict mode
'use strict';
let hasDriversLicense=false;
const passTest =true;

if(passTest) hasDriversLicense=true;
if(hasDriversLicense) console.log('I can drive');

// // Function Declarations vs. Expressions

// // Function declaration    //can hoisted
// function calcAge1(birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age1 = calcAge1(1991);

//   // Function expression  //hoisting  not possible
//   const calcAge2 = function (birthYeah) {
//     return 2037 - birthYeah;
//   }
//   const age2 = calcAge2(1991);

//   console.log(age1, age2);

//functions calling another function
// function cutFruit(fruit){
//     return fruit*4;
// }

// function fruitProcessor(apples,oranges){
//     const applePeices=cutFruit(apples);
//     const orangePeices=cutFruit(oranges);

//     const juice =`juice with ${applePeices} apples and ${orangePeices} oranges.`;
//     return juice;
// }
// console.log(fruitProcessor (2,3));

// //functions
// const calcAge = function (birthYeah) {
//   return 2022 - birthYeah;

// };

// const yearsUntilRetirement = function (birthYeah, firstName) {
//     const age = calcAge(birthYeah);
// const retirement = 57 - age;

// if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//   return retirement;
// } else {
//   console.log(`${firstName} is already retired`);
// return '';
// }
// }

// console.log(yearsUntilRetirement(1997, "Gaurav"));
// console.log(yearsUntilRetirement(1940, "Sam"));

//Coding challange 1 functions
// const calcAvg = (a, b, c) => (a + b + c) / 3;
// console.log(calcAvg(1,2,3));
// //test 1
// let avgDolphins = calcAvg(44, 23, 71);
// let avgKoalas = calcAvg(65, 54, 41);
// console.log(avgDolphins, avgKoalas);

// const cheackWinner = function (avgDolphins, avgKoalas)
// {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphis are winner with ${avgDolphins} > ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas are winner with ${avgKoalas} > ${avgDolphins}`);
//   } else {
//     console.log("it is tie");
//   }
// }
// cheackWinner(avgDolphins, avgKoalas);
// cheackWinner(500, 400);

// //test2
//  avgDolphins = calcAvg(85, 54, 41);
//  avgKoalas = calcAvg(23, 34, 27);
// console.log(avgDolphins, avgKoalas);
// cheackWinner(avgDolphins, avgKoalas);

// // Introduction to Arrays
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = 'Jonas';
// const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
// console.log(jonas);
// console.log(jonas.length);

// // Basic Array Operations (Methods)
// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('John');
// console.log(friends);

// // Remove elements
// friends.pop(); // Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // First
// console.log(friends);

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob'));

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes(23));

// if (friends.includes('Steven')) {
//   console.log('You have a friend called Steven');
// }

//coding challange
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// // Dot vs. Bracket Notation
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
//   };
//   console.log(jonas);

//   console.log(jonas.lastName);
//   console.log(jonas['lastName']);

//   const nameKey = 'Name';
//   console.log(jonas['first' + nameKey]);
//   console.log(jonas['last' + nameKey]);

//   const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
// }
// jonas.location = 'Portugal';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// //coding challange 3 jsObject
// const mark = {
//   fullName: "mark m",
//   mass: 78,
//   height: 1.69,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "john j",
//   mass: 92,
//   height: 1.95,
//   calcBmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcBmi();
// john.calcBmi();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//   console.log(
//     `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`
//   );
// } else if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`
//   );
// }

//for l0op
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// // Looping Arrays, Breaking and Continuing
// const john=[
//     'john',
//     'j',
//     1197,
//     'youtuber',
//     ['hydra','soul','gdlk'],
//     true
// ];

// const types = [];

// // for (let i=0;i<john.length;i++){
// //     console.log(john[i],typeof john[i]);
// // }

// for (let i = 0; i < john.length; i++) {
//     // Reading from jonas array
//     console.log(john[i], typeof john[i]);

//     // Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof john[i]);
//   }
//   console.log(types);

// // continue and break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] !== 'string') continue;

//   console.log(john[i], typeof john[i]);
// }

// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < john.length; i++) {
//   if (typeof john[i] === 'number') break;

//   console.log(john[i], typeof john[i]);
// }

///////////////////////////////////////
// // Looping Backwards and Loops in Loops
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

//The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
//   }

//   let rep = 1;
//   while (rep <= 10) {
//     //console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
//     rep++;
//   }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/

//
//control d to use multiple cursors 
//control d to use multiple cursors 
//control d to use multiple cursors 
//control d to use multiple cursors 
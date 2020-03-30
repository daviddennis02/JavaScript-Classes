const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Using For loop
// for (let i = 0; i < companies.length; i++) {
//     console.log(companies[i])   ;
// }

// Using ForEach() method
// companies.forEach(function (company) {
//     console.log(company);
// })

// Using Arrow function here
// companies.forEach(company = (company) => {
//     console.log(company);
// });

// Using Filter Method to filter through the array and return result based on the condition
// Use For Loop to explain filter first
// let canDrink = [];
// for (let i = 0; i < companies.length; i++) {
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }    
// }
// console.log(canDrink);

// let canDrink = [];
// for (let i = 0; i < companies.length; i++) {
    // using Ternary operator from es6
    // ages[i] >= 21 ? canDrink.push(ages[i]) : 'Your condition was not satisfied...'; 
// }
// console.log(canDrink);

// Filter method
// create a variable and assign the filtered arrray to it
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink, `Ages above and equal 21 are ${canDrink.length}`);

// Filter based on company category as Retail
// const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies, retailCompanies.length);

// Filter based on company in the 80's
// const eightiesCompanies = companies.filter(company => (company.start >=
//     1980 && company.start < 1990));
// console.log(eightiesCompanies);

// Filter based on company lasted ten years
// const lastedTenYears = companies.filter(company => (company.end -
//    company.start >= 10));
// console.log(lastedTenYears);

// Using map method: creates a new array from an old array by executing a function on elements of the array

// create array of company names and duration put them into their own array
// const companyNames = companies.map(function (company) {
//     return `${company.name}: [${company.start} - ${company.end}]` 
// });
// console.log(companyNames);
// const companyNames = companies.map(company => `${company.name}: [${company.start} - ${company.end}]`
// );
// console.log(companyNames);

// const agesSquare = ages.map(age => Math.sqrt(age));
// console.log(agesSquare);

// Using Sort method to compare 2 values and return them in a asc or desc order
// const sortedCompanies = companies.sort(function(c1, c2) {
//     if (c1.start > c2.start) {
//         return 1;
//     } else {
//         return -1;
//     }
// });
// sort companies by start year
// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(sortedCompanies);

// sort companies by start year
// const sortAges = ages.sort((a, b) => (a-b));
// console.log(sortAges); 

// using Reduce - add all element in an array and return a single value
// Reduce by using for loop
// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//      ageSum += ages[i];
// }
// console.log(ageSum);

// const ageSum = ages.reduce(function(total, age) {
//     return total + age;
// }, 0);
// console.log(ageSum);

// const ageSum = ages.reduce((total, age) => total + age, 0);
// console.log(ageSum);

// Get total years for all companies
// const totalYears = companies.reduce((total, company) =>
//     total + (company.end - company.start), 0);
// console.log(totalYears);

// using all the array method together
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => (a - b))
    .reduce((a, b) => a + b, 0);
console.log(combined);


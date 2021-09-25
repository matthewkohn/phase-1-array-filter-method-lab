// Code your solution here
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];

function findMatching(driverArray, name) {
  return driverArray.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
// console.log(findMatching(drivers, 'BObby'));

function fuzzyMatch(driverArray, partialName) {
  return driverArray.filter(driver => driver.slice(0, partialName.length).toLowerCase() === partialName.toLowerCase());
}

// console.log(drivers);
// console.log(fuzzyMatch(drivers, 'Bobby'));
// console.log(fuzzyMatch(drivers, 'bby'));

function matchName(driverArray, driverName) {
  return driverArray.filter(driver => driver.name.toLowerCase() === driverName.toLowerCase());
}
const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log(now);
console.log(typeof now);

console.log(before.getTime());

//year, months, days, times
console.log('getFullYear: ', now.getFullYear());
console.log('getMonth: ', now.getMonth());
console.log('getDate: ', now.getDate());
console.log('getDay: ', now.getDay());
console.log('getHours: ', now.getHours());
console.log('getMinutes: ', now.getMinutes());
console.log('getSeconds: ', now.getSeconds());

//timestamps
console.log('timestamp: ', now.getTime());

//date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());


const diff = now.getTime() - before.getTime();

console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins);
console.log(hours);
console.log(days);

//converting timestamp to date object
const timestamp = 40108186205;
console.log(new Date(timestamp));
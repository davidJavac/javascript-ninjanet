import {styleBody, addTitle, contact} from './dom';
import users, {getPremiumUsers} from './data';

console.log('index file');

styleBody();
addTitle('David developer');

console.log(contact);

console.log(users);

const premUsers = getPremiumUsers(users);

console.log(premUsers);

console.log('test 2');
console.log('test 3');
console.log('test 4');
console.log('test 5');
console.log('test 6');
// import * as R from 'ramda';
import { union as joinAll, uniq } from 'ramda';

import soma, { sub, multiply, div, PI } from './utils';

const arr1 = [ 1, 1, 1, 2, 2, 3, 4, 5, 6, 6 ];
const arr2 = [ 5, 6, 6, 6, 7, 7, 8, 9, 10, 1 ];

const arr3 = joinAll(arr1, arr2);

const arr4 = uniq(arr1);

console.log(arr3);
console.log(arr4);

console.log(soma(2, 3));
console.log(sub(3, 2));
console.log(multiply(3, 2));
console.log(div(3, 2));
console.log(PI);
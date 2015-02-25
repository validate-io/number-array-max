'use strict';

var isValid = require( './../lib' );

console.log( isValid( [1,2,3], 4 ) );
// returns true

console.log( isValid( [], 4 ) );
// returns true

console.log( isValid( [1,2,3], 2 ) );
// returns false

console.log( isValid( [1,NaN,3], 4 ) );
// returns false

/**
*
*	VALIDATE: number-array-max
*
*
*	DESCRIPTION:
*		- Validates if a value is a numeric array in which no element exceeds a maximum value.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2015.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isNumber = require( 'validate.io-number' );


// NUMERIC ARRAY MAX //

/**
* FUNCTION: isArrayWithMax( value )
*	Validates if a value is a numeric array in which no element exceeds a maximum value.
*
* @param {*} value - value to be validated
* @param {Number} max - maximum allowed value
* @returns {Boolean} boolean indicating if a value is a numeric array in which no element exceeds a maximum value
*/
function isArrayWithMax( value, max ) {
	var len,
		val;
	if ( !isNumber( max ) ) {
		throw new TypeError( 'isArrayWithMax()::invalid input argument. Maximum allowed value must be numeric. Value: `' + max + '`.' );
	}
	if ( !isArray( value ) ) {
		return false;
	}
	len = value.length;
	if ( !len ) {
		return true;
	}
	for ( var i = 0; i < len; i++ ) {
		val = value[ i ];
		if ( !isNumber( val ) || val > max ) {
			return false;
		}
	}
	return true;
} // end FUNCTION isArrayWithMax()


// EXPORTS //

module.exports = isArrayWithMax;

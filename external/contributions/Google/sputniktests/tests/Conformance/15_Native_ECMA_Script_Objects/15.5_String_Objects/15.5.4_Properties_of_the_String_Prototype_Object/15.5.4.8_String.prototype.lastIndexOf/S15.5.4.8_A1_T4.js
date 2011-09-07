// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A1_T4;
* @section: 15.5.4.8;
* @assertion: String.prototype.lastIndexOf(searchString, position);
* @description: Call lastIndexOf(searchString, position) function without arguments of string;
*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" lastIndexOf() evaluates to lastIndexOf("",0)
if ("".lastIndexOf() !== -1) {
  $ERROR('#1: "".lastIndexOf() === -1. Actual: '+("".lastIndexOf()) );
}
//
//////////////////////////////////////////////////////////////////////////////
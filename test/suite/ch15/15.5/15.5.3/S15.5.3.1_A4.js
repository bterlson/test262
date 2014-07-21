// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype property has the attribute ReadOnly
description: Checking if varying the String.prototype property fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.hasOwnProperty('prototype'))) {
  $FAIL('#1: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////

var __obj = String.prototype;

String.prototype = function(){return "shifted";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype !== __obj) {
  $ERROR('#2: __obj = String.prototype; String.prototype = function(){return "shifted";}; String.prototype === __obj. Actual: String.prototype ==='+String.prototype ); 
}
//
//////////////////////////////////////////////////////////////////////////////

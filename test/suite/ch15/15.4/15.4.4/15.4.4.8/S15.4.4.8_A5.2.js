// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of reverse has the attribute DontDelete
es5id: 15.4.4.8_A5.2
description: Checking use hasOwnProperty, delete
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.prototype.reverse.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.reverse.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.reverse.hasOwnProperty('length')));
}

delete Array.prototype.reverse.length;

//CHECK#2
if (Array.prototype.reverse.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.reverse.length; Array.prototype.reverse.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.reverse.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.reverse.length === undefined) {
  $ERROR('#3: delete Array.prototype.reverse.length; Array.prototype.reverse.length !== undefined');
}

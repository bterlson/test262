// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of slice has the attribute DontDelete
description: Checking use hasOwnProperty, delete
includes: [$FAIL.js]
---*/

//CHECK#1
if (Array.prototype.slice.hasOwnProperty('length') !== true) {
  $FAIL('#1: Array.prototype.slice.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.slice.hasOwnProperty('length')));
}

delete Array.prototype.slice.length;

//CHECK#2
if (Array.prototype.slice.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete Array.prototype.slice.length; Array.prototype.slice.hasOwnProperty(\'length\') === true. Actual: ' + (Array.prototype.slice.hasOwnProperty('length')));
}

//CHECK#3
if (Array.prototype.slice.length === undefined) {
  $ERROR('#3: delete Array.prototype.slice.length; Array.prototype.slice.length !== undefined');
}

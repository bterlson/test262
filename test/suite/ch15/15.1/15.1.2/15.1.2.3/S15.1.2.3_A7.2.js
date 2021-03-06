// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of parseFloat has the attribute DontDelete
es5id: 15.1.2.3_A7.2
description: Checking use hasOwnProperty, delete
flags: [noStrict]
includes: [$FAIL.js]
---*/

//CHECK#1
if (parseFloat.hasOwnProperty('length') !== true) {
  $FAIL('#1: parseFloat.hasOwnProperty(\'length\') === true. Actual: ' + (parseFloat.hasOwnProperty('length')));
}

delete parseFloat.length;

//CHECK#2
if (parseFloat.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete parseFloat.length; parseFloat.hasOwnProperty(\'length\') === true. Actual: ' + (parseFloat.hasOwnProperty('length')));
}

//CHECK#3
if (parseFloat.length === undefined) {
  $ERROR('#3: delete parseFloat.length; parseFloat.length !== undefined');
}

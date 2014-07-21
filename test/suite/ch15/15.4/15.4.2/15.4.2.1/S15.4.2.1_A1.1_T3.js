// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The [[Prototype]] property of the newly constructed object
    is set to the original Array prototype object, the one that
    is the initial value of Array.prototype
description: Checking use isPrototypeOf
---*/

//CHECK#1
if (Array.prototype.isPrototypeOf(new Array()) !== true) {
  $ERROR('#1: Array.prototype.isPrototypeOf(new Array()) === true. Actual: ' + (Array.prototype.isPrototypeOf(new Array())));
}

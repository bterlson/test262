// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The value of the internal [[Prototype]] property of
    the Array constructor is the Function prototype object
description: Checking use isPrototypeOf
---*/

//CHECK#1
if (Function.prototype.isPrototypeOf(Array) !== true) {
  $ERROR('#1: Function.prototype.isPrototypeOf(Array) === true. Actual: ' + (Function.prototype.isPrototypeOf(Array)));
}

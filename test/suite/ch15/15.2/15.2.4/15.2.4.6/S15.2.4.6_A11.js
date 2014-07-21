// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the hasOwnProperty method is 1
description: Checking the Object.prototype.hasOwnProperty.length
---*/

//CHECK#1
if (!(Object.prototype.isPrototypeOf.hasOwnProperty("length"))) {
  $ERROR('#1: the Object.prototype.isPrototypeOf has length property');
}

//CHECK#2
if (Object.prototype.isPrototypeOf.length !== 1) {
  $ERROR('#2: The length property of the toObject method is 1');
}

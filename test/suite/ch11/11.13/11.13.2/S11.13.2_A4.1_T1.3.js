// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The production x *= y is the same as the production x = x * y
description: Type(x) and Type(y) vary between primitive string and String object
---*/

//CHECK#1
x = "1";
x *= "1";
if (x !== 1) {
  $ERROR('#1: x = "1"; x *= "1"; x === 1. Actual: ' + (x));
}

//CHECK#2
x = new String("1");
x *= "1";
if (x !== 1) {
  $ERROR('#2: x = new String("1"); x *= "1"; x === 1. Actual: ' + (x));
}

//CHECK#3
x = "1";
x *= new String("1");
if (x !== 1) {
  $ERROR('#3: x = "1"; x *= new String("1"); x === 1. Actual: ' + (x));
}

//CHECK#4
x = new String("1");
x *= new String("1");
if (x !== 1) {
  $ERROR('#4: x = new String("1"); x *= new String("1"); x === 1. Actual: ' + (x));
}

//CHECK#5
x = "x";
x *= "1";
if (isNaN(x) !== true) {
  $ERROR('#5: x = "x"; x *= "1"; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#6
x = "1";
x *= "x";
if (isNaN(x) !== true) {
  $ERROR('#6: x = "1"; x *= "x"; x === Not-a-Number. Actual: ' + (x));
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator +x returns ToNumber(x)
description: Type(x) is string primitive or String object
---*/

//CHECK#1
if (+"1" !== 1) {
  $ERROR('#1: +"1" === 1. Actual: ' + (+"1"));
}

//CHECK#2
if (isNaN(+"x") !== true) {
  $ERROR('#2: +"x" === Not-a-Number. Actual: ' + (+"x"));
}

//CHECK#3
if (+new Number("-1") !== -1) {
  $ERROR('#3: +new String("-1") === -1. Actual: ' + (+new String("-1")));
}

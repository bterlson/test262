// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: If comparefn is undefined, use SortCompare operator
description: Checking sort() and sort(undefined)
---*/

var x = new Array(1,0);
x.sort();

//CHECK#1
if (x.length !== 2) {
  $ERROR('#1: var x = new Array(1,0);  x.sort(); x.length === 2. Actual: ' + (x.length));
}

//CHECK#2
if (x[0] !== 0) {
  $ERROR('#2: var x = new Array(1,0);  x.sort(); x[0] === 0. Actual: ' + (x[0]));
}    

//CHECK#3
if (x[1] !== 1) {
  $ERROR('#3: var x = new Array(1,0);  x.sort(); x[1] === 1. Actual: ' + (x[1]));
}

var x = new Array(1,0);
x.sort(undefined);

//CHECK#4
if (x.length !== 2) {
  $ERROR('#4: var x = new Array(1,0);  x.sort(undefined); x.length === 2. Actual: ' + (x.length));
}

//CHECK#5
if (x[0] !== 0) {
  $ERROR('#5: var x = new Array(1,0);  x.sort(undefined); x[0] === 0. Actual: ' + (x[0]));
}    

//CHECK#6
if (x[1] !== 1) {
  $ERROR('#6: var x = new Array(1,0);  x.sort(undefined); x[1] === 1. Actual: ' + (x[1]));
}

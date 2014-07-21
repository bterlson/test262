// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: First expression is evaluated first, and then second expression
description: Checking with "throw"
---*/

//CHECK#1
var x = function () { throw "x"; };
var y = function () { throw "y"; };
try {
   x() in y();
   $ERROR('#1.1: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() in y() throw "x". Actual: ' + (x() in y()));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: First expression is evaluated first, and then second expression');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = function () { throw "x"; }; var y = function () { throw "y"; }; x() in y() throw "x". Actual: ' + (e));
     }
   }
}

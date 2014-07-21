// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x !== y uses GetValue
description: If GetBase(x) is null, throw ReferenceError
---*/

//CHECK#1
try {
  x !== 1;
  $ERROR('#1.1: x !== 1 throw ReferenceError. Actual: ' + (x !== 1));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x !== 1 throw ReferenceError. Actual: ' + (e));  
  }
}

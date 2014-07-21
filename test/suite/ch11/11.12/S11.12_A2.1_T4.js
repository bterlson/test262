// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: "Operator x ? y : z uses GetValue"
description: >
    If ToBoolean(x) is false and GetBase(z) is null, throw
    ReferenceError
---*/

//CHECK#1
try {
  false ? true : z;
  $ERROR('#1.1: false ? true : z throw ReferenceError. Actual: ' + (false ? true : z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: false ? true : z throw ReferenceError. Actual: ' + (e));  
  }
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Operator x && y uses GetValue
description: If ToBoolean(x) is false and GetBase(y) is null, return false
---*/

//CHECK#1
if ((false && x) !== false) {
  $ERROR('#1: (false && x) === false');
}

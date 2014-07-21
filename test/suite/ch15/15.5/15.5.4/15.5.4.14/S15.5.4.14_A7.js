// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.split can't be used as constructor
description: Checking if creating the String.prototype.split object fails
includes:
    - $FAIL.js
    - Test262Error.js
---*/

var __FACTORY = String.prototype.split;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.split; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
    if (e instanceof Test262Error) throw e;
}

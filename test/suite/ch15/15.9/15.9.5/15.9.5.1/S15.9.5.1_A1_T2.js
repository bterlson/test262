// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "constructor" has { DontEnum } attributes
description: Checking absence of DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.constructor  === false) {
  $ERROR('#1: The Date.prototype.constructor property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('constructor')) {
  $FAIL('#2: The Date.prototype.constructor property has not the attributes DontDelete');
}

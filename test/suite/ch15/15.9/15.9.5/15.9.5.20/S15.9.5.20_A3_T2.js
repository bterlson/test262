// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getMinutes property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking DontDelete attribute
includes: [$FAIL.js]
---*/

if (delete Date.prototype.getMinutes.length  !== false) {
  $ERROR('#1: The Date.prototype.getMinutes.length property has the attributes DontDelete');
}

if (!Date.prototype.getMinutes.hasOwnProperty('length')) {
  $FAIL('#2: The Date.prototype.getMinutes.length property has the attributes DontDelete');
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getFullYear property "length" has { ReadOnly,
    DontDelete, DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.getFullYear.length;
Date.prototype.getFullYear.length = 1;
if (Date.prototype.getFullYear.length !== x) {
  $ERROR('#1: The Date.prototype.getFullYear.length has the attribute ReadOnly');
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The Date.prototype.getTime property "length" has { ReadOnly, DontDelete,
    DontEnum } attributes
description: Checking ReadOnly attribute
---*/

x = Date.prototype.getTime.length;
Date.prototype.getTime.length = 1;
if (Date.prototype.getTime.length !== x) {
  $ERROR('#1: The Date.prototype.getTime.length has the attribute ReadOnly');
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "getMinutes" has { DontEnum } attributes
description: Checking absence of ReadOnly attribute
---*/

x = Date.prototype.getMinutes;
if(x === 1)
  Date.prototype.getMinutes = 2;
else
  Date.prototype.getMinutes = 1;
if (Date.prototype.getMinutes === x) {
  $ERROR('#1: The Date.prototype.getMinutes has not the attribute ReadOnly');
}

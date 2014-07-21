// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The decodeURIComponent property has not prototype property
description: Checking decodeURIComponent.prototype
---*/

//CHECK#1
if (decodeURIComponent.prototype !== undefined) {
  $ERROR('#1: decodeURIComponent.prototype === undefined. Actual: ' + (decodeURIComponent.prototype));
}

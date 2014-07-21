// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of encodeURI is 1
description: encodeURI.length === 1
---*/

//CHECK#1
if (encodeURI.length !== 1) {
  $ERROR('#1: encodeURI.length === 1. Actual: ' + (encodeURI.length));
}

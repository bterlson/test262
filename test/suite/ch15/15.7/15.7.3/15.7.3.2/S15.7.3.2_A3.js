// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Number.MAX_VALUE is DontDelete
description: Checking if deleting Number.MAX_VALUE fails
flags: [noStrict]
---*/

// CHECK#1
if (delete Number.MAX_VALUE !== false) {
  $ERROR('#1: delete Number.MAX_VALUE === false');
}

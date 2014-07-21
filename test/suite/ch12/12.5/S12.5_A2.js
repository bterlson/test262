// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: In the "if" Statement eval in Expression is admitted
description: Checking by using eval "eval("true")"
flags: [negative]
includes: [$FAIL.js]
---*/

if (eval("true")) $FAIL('#1: In the "if" Statement eval as Expression is admitted');

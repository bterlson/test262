// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Appearing of "return" without a function body leads to syntax error
description: >
    Checking if execution of "return x" with no function, placed into
    a loop, fails
flags: [negative]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
do {
    var x=1;
    return x;
    var y=2;
} while(0);
//
//////////////////////////////////////////////////////////////////////////////

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    TryStatement: "try Block Catch" or "try Block Finally" or "try Block
    Catch Finally"
description: >
    Catch: "catch (Identifier ) Block". Checking if execution of
    "catch" with no Block fails
flags: [negative]
---*/

// CHECK#1
try{}
catch()

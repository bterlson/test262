// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Check Postfix Increment Operator for automatic semicolon insertion
description: Try use Variable \n ++ construction
flags: [negative]
---*/

//CHECK#1
var x = 0;
x
++;
$ERROR('#1: Check Postfix Increment Operator for automatic semicolon insertion');

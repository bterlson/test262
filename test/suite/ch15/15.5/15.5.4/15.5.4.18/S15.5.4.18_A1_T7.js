// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toUpperCase()
description: Call toUpperCase() function of NaN
---*/

Number.prototype.toUpperCase = String.prototype.toUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toUpperCase()!== "NAN") {
  $ERROR('#1: Number.prototype.toUpperCase = String.prototype.toUpperCase; NaN.toUpperCase()=== "NAN". Actual: '+NaN.toUpperCase());
}
//
//////////////////////////////////////////////////////////////////////////////

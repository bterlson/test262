// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase()
description: Call toLowerCase() function of NaN
---*/

Number.prototype.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toLowerCase()!== "nan") {
  $ERROR('#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; NaN.toLowerCase()=== "nan". Actual: '+NaN.toLowerCase());
}
//
//////////////////////////////////////////////////////////////////////////////

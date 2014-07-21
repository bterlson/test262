// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.indexOf(searchString, position)
description: >
    Call indexOf(searchString, position) function without arguments of
    string
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" indexOf() evaluates to indexOf("",0)
if ("".indexOf() !== -1) {
  $ERROR('#1: "".indexOf() === -1. Actual: '+("".indexOf()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

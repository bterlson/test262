// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The length property of the toLowerCase method is 0
description: Checking String.prototype.toLowerCase.length
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toLowerCase.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.toLowerCase.hasOwnProperty("length") return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toLowerCase.length !== 0) {
  $ERROR('#2: String.prototype.toLowerCase.length === 0. Actual: '+String.prototype.toLowerCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

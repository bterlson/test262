// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.match.length property has the attribute DontDelete
description: >
    Checking if deleting the String.prototype.match.length property
    fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.match.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.match.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.match.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.match.length) {
  $ERROR('#1: delete String.prototype.match.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.match.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.match.length; String.prototype.match.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.match.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

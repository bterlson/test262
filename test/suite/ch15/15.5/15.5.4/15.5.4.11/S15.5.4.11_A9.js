// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The String.prototype.replace.length property has the attribute DontDelete
description: >
    Checking if deleting the String.prototype.replace.length property
    fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.replace.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.replace.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.replace.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.replace.length) {
  $ERROR('#1: delete String.prototype.replace.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.replace.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.replace.length; String.prototype.replace.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.replace.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

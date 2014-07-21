// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The String.prototype.toLowerCase.length property has the attribute
    DontDelete
description: >
    Checking if deleting the String.prototype.toLowerCase.length
    property fails
includes: [$FAIL.js]
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toLowerCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.toLowerCase.length) {
  $ERROR('#1: delete String.prototype.toLowerCase.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.toLowerCase.hasOwnProperty('length'))) {
  $FAIL('#2: delete String.prototype.toLowerCase.length; String.prototype.toLowerCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

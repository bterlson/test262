// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The RegExp.prototype.test.length property has the attribute DontDelete
es5id: 15.10.6.3_A9
description: Checking if deleting RegExp.prototype.test.length property fails
includes: [$FAIL.js]
---*/

//CHECK#0
if ((RegExp.prototype.exec.hasOwnProperty('length') !== true)) {
  $FAIL('#0: RegExp.prototype.exec.hasOwnProperty(\'length\') === true');
}

//CHECK#1
if (delete RegExp.prototype.exec.length !== false) {
  $ERROR('#1: delete RegExp.prototype.exec.length === false');
}

//CHECK#2
if (RegExp.prototype.exec.hasOwnProperty('length') !== true) {
  $ERROR('#2: delete RegExp.prototype.exec.length; RegExp.prototype.exec.hasOwnProperty(\'length\') === true');
}

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Function.prototype.call can't be used as [[create]] caller
description: Checking if creating "new Function.prototype.call()" fails
---*/

try {
  var FACTORY = Function.prototype.call;
  var obj = new FACTORY();
  $ERROR('#1: Function.prototype.call can\'t be used as [[create]] caller');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#1.1: Function.prototype.call can\'t be used as [[create]] caller');
  }
}

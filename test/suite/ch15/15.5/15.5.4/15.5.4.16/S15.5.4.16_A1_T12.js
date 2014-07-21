// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.toLowerCase()
description: >
    Override toString and valueOf functions, valueOf throw exception,
    then call toLowerCase() function for this object
includes: [$FAIL.js]
---*/

var __obj = {toString:function(){return {};},valueOf:function(){throw "intostr";}}
__obj.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.toLowerCase();
 	$FAIL('#1: "var x = __obj.toLowerCase()" lead to throwing exception');
} catch (e) {
  if (e!=="intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: String.prototype.replace (searchValue, replaceValue)
description: >
    Call replace (searchValue, replaceValue) function with regular
    expression and void 0 arguments of String object
---*/

var __obj = {toString:function(){}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String(__obj).replace(/e/g,void 0) !== "undundefinedfinundefinedd") {
  $ERROR('#1: __obj = {toString:function(){}}; String(__obj).replace(/e/g,void 0) === "undundefinedfinundefinedd". Actual: '+String(__obj).replace(/e/g,void 0) );
}
//
//////////////////////////////////////////////////////////////////////////////

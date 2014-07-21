// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
    a function call using the [[Call]] property of the object
description: >
    Argunemts of call function is (this, arguments,"",2), inside
    function declaration used
---*/

function FACTORY(){
  Function("a1,a2,a3","this.shifted=a1.length+a2+a3;").call(this,arguments,"",2);
}

var obj=new FACTORY("",4,2,"A");

//CHECK#1
if (obj["shifted"] !== "42") {
  $ERROR('#1: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}

//CHECK#2
if (typeof this["shifted"] !== "undefined") {
  $ERROR('#2: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}

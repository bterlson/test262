// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: >
    "try" with "catch" or "finally" statement within/without an "do while"
    statement
description: Loop within a "try" Block, from where exception is thrown
---*/

// CHECK#1
var i=0;
try{
  do{
    if(i===5) throw i;
    i++;
  }
  while(i<10);
}
catch(e){
  if(e!==5)$ERROR('#1: Exception ===5. Actual:  Exception ==='+ e  );
}

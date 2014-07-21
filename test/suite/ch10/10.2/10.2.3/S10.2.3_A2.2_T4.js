// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Global object properties have attributes { DontEnum }
description: Function execution context - Other Properties
---*/

function test() {
  //CHECK#1
  for (var x in this) {
    if ( x === 'Math' ) {
      $ERROR("#1: 'Math' have attribute DontEnum");
    }
  }
}

test();

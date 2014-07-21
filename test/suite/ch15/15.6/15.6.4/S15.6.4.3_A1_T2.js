// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Boolean.prototype.valueOf() returns this boolean value
description: calling with argument
---*/

//CHECK#1
if(Boolean.prototype.valueOf(true) !== false){
  $ERROR('#1: Boolean.prototype.valueOf(true) === false');
}

//CHECK#2
if((new Boolean()).valueOf(true) !== false){
  $ERROR('#2: (new Boolean()).valueOf(true) === false');
}

//CHECK#3
if((new Boolean(0)).valueOf(true) !== false){
  $ERROR('#3: (new Boolean(0)).valueOf(true) === false');
}

//CHECK#4
if((new Boolean(-1)).valueOf(false) !== true){
  $ERROR('#4: (new Boolean(-1)).valueOf(false) === true');
}

//CHECK#5
if((new Boolean(1)).valueOf(false) !== true){
  $ERROR('#5: (new Boolean(1)).valueOf(false) === true');
}

//CHECK#6
if((new Boolean(new Object())).valueOf(false) !== true){
  $ERROR('#6: (new Boolean(new Object())).valueOf(false) === true');
}

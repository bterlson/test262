// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: Do not crash with pefixincrement custom property
description: Try to implement pefixincrement for custom property
---*/

var __map={foo:'bar'};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1

++__map.foo;
if (!isNaN(__map.foo)) {
  $ERROR('#1:  var __map={foo:"bar"}; ++__map.foo; __map.foo === Not-a-Number. Actual: ' + (__map.foo));
}

//
//////////////////////////////////////////////////////////////////////////////

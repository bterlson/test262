// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    JSON.stringify treats numeric space arguments less than 1
    (0.999999)the same as emptry string space argument.
includes: [runTestCase.js]
---*/

function testcase() {
  var obj = {a1: {b1: [1,2,3,4], b2: {c1: 1, c2: 2}},a2: 'a2'};
  return JSON.stringify(obj,null, 0.999999)=== JSON.stringify(obj);  /* emptry string should be same as no space arg */
  }
runTestCase(testcase);

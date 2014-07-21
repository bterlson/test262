// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.forEach doesn't call callbackfn if 'length' is 0
    (empty array)
includes: [runTestCase.js]
---*/

function testcase() {
  var callCnt = 0;
  function cb(){callCnt++}
  var i = [].forEach(cb);
  if (callCnt === 0) {
    return true;
  }
 }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    JSON.stringify converts Number wrapper objects returned from
    replacer functions to literal numbers.
includes: [runTestCase.js]
---*/

function testcase() {
  return JSON.stringify([42], function(k,v) {return v===42? new Number(84):v}) === '[84]';
  }
runTestCase(testcase);

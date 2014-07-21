// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.lastIndexOf - value of 'length' is a string
    containing a number with leading zeros
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 1: 1, 2: 2, length: "0002.0" };

        return Array.prototype.lastIndexOf.call(obj, 1) === 1 &&
            Array.prototype.lastIndexOf.call(obj, 2) === -1;
    }
runTestCase(testcase);

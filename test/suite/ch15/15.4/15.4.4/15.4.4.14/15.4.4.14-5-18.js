// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.4.4.14-5-18
description: >
    Array.prototype.indexOf - value of 'fromIndex' is a string
    containing an exponential number
includes: [runTestCase.js]
---*/

function testcase() {
        var targetObj = {};
        return [0, 1, targetObj, 3, 4].indexOf(targetObj, "3E0") === -1 &&
            [0, 1, 2, targetObj, 4].indexOf(targetObj, "3E0") === 3;
    }
runTestCase(testcase);

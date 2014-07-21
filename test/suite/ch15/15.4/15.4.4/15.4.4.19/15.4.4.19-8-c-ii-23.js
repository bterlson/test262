// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.map - callbackfn called with correct parameters
    (this object O is correct)
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = { 0: 11, length: 2 };

        function callbackfn(val, idx, o) {
            return obj === o;
        }

        var testResult = Array.prototype.map.call(obj, callbackfn);

        return testResult[0] === true;
    }
runTestCase(testcase);

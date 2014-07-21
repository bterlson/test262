// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.reduceRight - callbackfn is called with 2 formal
    parameter
includes: [runTestCase.js]
---*/

function testcase() {

        var testResult = false;

        function callbackfn(prevVal, curVal) {
            if (prevVal === 100) {
                testResult = true;
            }
            return curVal > 10;
        }

        return [11].reduceRight(callbackfn, 100) === true && testResult;
    }
runTestCase(testcase);

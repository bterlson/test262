// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.lastIndexOf -  added properties in step 5 are
    visible here on an Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];
        arr.length = 30;
        var targetObj = function () { };

        var fromIndex = {
            valueOf: function () {
                arr[4] = targetObj;
                return 11;
            }
        };

        return 4 === arr.lastIndexOf(targetObj, fromIndex);
    }
runTestCase(testcase);

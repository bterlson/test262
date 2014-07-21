// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.lastIndexOf - element to be retrieved is own
    accessor property that overrides an inherited data property on an
    Array
includes: [runTestCase.js]
---*/

function testcase() {

        var arr = [];
        try {
            Array.prototype[0] = false;
            Object.defineProperty(arr, "0", {
                get: function () {
                    return true;
                },
                configurable: true
            });

            return 0 === arr.lastIndexOf(true);
        } finally {
            delete Array.prototype[0]; 
        }
    }
runTestCase(testcase);

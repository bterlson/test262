// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.lastIndexOf -  properties added into own object
    after current position are visited on an Array-like object
includes: [runTestCase.js]
---*/

function testcase() {
    
        var arr = { length: 8 };

        Object.defineProperty(arr, "4", {
            get: function () {
                Object.defineProperty(arr, "1", {
                    get: function () {
                        return 1;
                    },
                    configurable: true
                });
                return 0;
            },
            configurable: true
        });

        return Array.prototype.lastIndexOf.call(arr, 1) === 1;
    }
runTestCase(testcase);

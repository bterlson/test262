// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.filter - properties can be added to prototype
    after current position are visited on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return true;
        }
        var arr = [0, , 2];

        try {
            Object.defineProperty(arr, "0", {
                get: function () {
                    Object.defineProperty(Array.prototype, "1", {
                        get: function () {
                            return 6.99;
                        },
                        configurable: true
                    });
                    return 0;
                },
                configurable: true
            });

            var newArr = arr.filter(callbackfn);

            return newArr.length === 3 && newArr[1] === 6.99;
        } finally {
            delete Array.prototype[1];
        }
    }
runTestCase(testcase);

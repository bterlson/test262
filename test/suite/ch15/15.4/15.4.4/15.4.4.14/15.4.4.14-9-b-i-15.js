// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.indexOf - element to be retrieved is inherited
    accessor property on an Array
includes: [runTestCase.js]
---*/

function testcase() {
        try {
            Object.defineProperty(Array.prototype, "0", {
                get: function () {
                    return 10;
                },
                configurable: true
            });

            Object.defineProperty(Array.prototype, "1", {
                get: function () {
                    return 20;
                },
                configurable: true
            });

            Object.defineProperty(Array.prototype, "2", {
                get: function () {
                    return 30;
                },
                configurable: true
            });

            return 0 === [, , , ].indexOf(10) &&
                1 === [, , , ].indexOf(20) && 
                2 === [, , , ].indexOf(30);
        } finally {
            delete Array.prototype[0];
            delete Array.prototype[1]; 
            delete Array.prototype[2];
        }
    }
runTestCase(testcase);

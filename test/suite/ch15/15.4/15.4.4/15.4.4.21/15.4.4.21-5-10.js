// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.reduce - if exception occurs, it occurs after any
    side-effects that might be produced by step 2
includes: [runTestCase.js]
---*/

function testcase() {

        function callbackfn(prevVal, curVal, idx, obj) {
            return (curVal > 10);
        }

        var obj = { 0: 11, 1: 12 };

        var accessed = false;

        Object.defineProperty(obj, "length", {
            get: function () {
                accessed = true;
                return 0;
            },
            configurable: true
        });

        try {
            Array.prototype.reduce.call(obj, callbackfn);
            return false;
        } catch (ex) {
            return (ex instanceof TypeError) && accessed;
        }
    }
runTestCase(testcase);

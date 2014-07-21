// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.some applied to number primitive
includes: [runTestCase.js]
---*/

function testcase() {
        function callbackfn(val, idx, obj) {
            return obj instanceof Number;
        }

        try {
            Number.prototype[1] = true;
            Number.prototype.length = 2;

            return Array.prototype.some.call(5, callbackfn);
        } finally {
            delete Number.prototype[1];
            delete Number.prototype.length;
        }
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.forEach - Error Object can be used as thisArg
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var objError = new RangeError();

        function callbackfn(val, idx, obj) {
            result = (this === objError);
        }

        [11].forEach(callbackfn, objError);
        return result;
    }
runTestCase(testcase);

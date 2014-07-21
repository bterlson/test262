// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Array.prototype.forEach - element changed by callbackfn on
    previous iterations is observed
includes: [runTestCase.js]
---*/

function testcase() {

        var result = false;
        var obj = { 0: 11, 1: 12, length: 2 };

        function callbackfn(val, idx, o) {
            if (idx === 0) {
                obj[idx + 1] = 8;
            }
            
            if (idx === 1) {
                result = (val === 8);
            }
        }

        Array.prototype.forEach.call(obj, callbackfn);
        return result;
    }
runTestCase(testcase);

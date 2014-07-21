// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property, 'P' property doesn't exist in 'O', test TypeError
    is thrown when 'O' is not extensible  (15.4.5.1 step 4.c)
includes: [runTestCase.js]
---*/

function testcase() {
        var arr = [];
        Object.preventExtensions(arr);

        try {
            Object.defineProperties(arr, {
                "0": {
                    value: 1
                }
            });
            return false;
        } catch (e) {
            return (e instanceof TypeError) && (arr.hasOwnProperty("0") === false);
        }
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'O' is an Array, 'P' is an array index
    named property that already exists on 'O' is accessor property and
    'desc' is accessor descriptor, test setting the [[Set]] attribute
    value of 'P' as undefined  (15.4.5.1 step 4.c)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var arr = [];

        Object.defineProperty(arr, "0", {
            set: function () { },
            configurable: true
        });

        Object.defineProperties(arr, {
            "0": {
                set: undefined
            }
        });
        return accessorPropertyAttributesAreCorrect(arr, "0", undefined, undefined, undefined, false, true);
    }
runTestCase(testcase);

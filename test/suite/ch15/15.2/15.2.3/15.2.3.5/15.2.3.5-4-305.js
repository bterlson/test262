// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.create defines a data property when one property in
    'Properties' is generic descriptor (8.12.9 step 4.a)
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            var newObj = Object.create({}, {
                prop: {
                    enumerable: true
                }
            });
            return newObj.hasOwnProperty("prop");
        } catch (e) {
            return false;
        }
    }
runTestCase(testcase);

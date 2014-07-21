// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - value of 'enumerable' property in
    'Attributes' is a Boolean Object (8.10.5 step 3.b)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        var accessed = false;

        Object.defineProperty(obj, "property", { enumerable: new Boolean() });

        for (var prop in obj) {
            if (prop === "property") {
                accessed = true;
            }
        }
        return accessed;
    }
runTestCase(testcase);

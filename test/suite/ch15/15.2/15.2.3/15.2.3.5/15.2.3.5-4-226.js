// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.create - 'writable' property of one property in
    'Properties' is an Arguments object (8.10.5 step 6.b)
includes: [runTestCase.js]
---*/

function testcase() {

        var argObj = (function () { return arguments; })();

        var newObj = Object.create({}, {
            prop: {
                writable: argObj
            }
        });
        var hasProperty = newObj.hasOwnProperty("prop");

        newObj.prop = 121;

        return hasProperty && newObj.prop === 121;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'P' doesn't exist in 'O', test [[Value]]
    of 'P' is set as undefined value if absent in data descriptor
    'desc' (8.12.9 step 4.a.i)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        Object.defineProperties(obj, {
            prop: {
                writable: true
            }
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return desc.hasOwnProperty("value") && typeof desc.value === "undefined" &&
            desc.hasOwnProperty("writable") && desc.writable === true &&
            desc.hasOwnProperty("configurable") && desc.configurable === false &&
            desc.hasOwnProperty("enumerable") && desc.enumerable === false;
    }
runTestCase(testcase);

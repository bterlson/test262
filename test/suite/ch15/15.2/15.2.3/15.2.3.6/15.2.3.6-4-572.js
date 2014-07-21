// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    ES5 Attributes - [[Set]] attribute is a function which has zero
    argument
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var setFunc = function () { };

        Object.defineProperty(obj, "prop", {
            set: setFunc
        });

        var desc = Object.getOwnPropertyDescriptor(obj, "prop");

        return obj.hasOwnProperty("prop") && desc.set === setFunc;
    }
runTestCase(testcase);

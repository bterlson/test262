// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'Properties' is the Arguments object
    which implements its own [[Get]] method to get enumerable own
    property
includes: [runTestCase.js]
---*/

function testcase() {

        var obj = {};
        var arg;

        (function fun() {
            arg = arguments;
        }());

        Object.defineProperty(arg, "prop", {
            value: {
                value: 17
            },
            enumerable: true
        });

        Object.defineProperties(obj, arg);

        return obj.hasOwnProperty("prop") && obj.prop === 17;
    }
runTestCase(testcase);

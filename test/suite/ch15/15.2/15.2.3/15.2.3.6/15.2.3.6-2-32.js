// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - argument 'P' is a number that converts to
    a string (value is 123.1234567)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};
        Object.defineProperty(obj, 123.1234567, {});

        return obj.hasOwnProperty("123.1234567");

    }
runTestCase(testcase);

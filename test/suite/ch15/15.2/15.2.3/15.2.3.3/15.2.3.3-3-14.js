// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.getOwnPropertyDescriptor applied to a String object which
    implements its own property get method
includes: [runTestCase.js]
---*/

function testcase() {

        var str = new String("123");

        var desc = Object.getOwnPropertyDescriptor(str, "2");

        return desc.value === "3";
    }
runTestCase(testcase);

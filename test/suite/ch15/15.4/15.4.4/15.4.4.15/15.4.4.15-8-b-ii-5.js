// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: Array.prototype.lastIndexOf - search element is -NaN
includes: [runTestCase.js]
---*/

function testcase() {
        return [+NaN, NaN, -NaN].lastIndexOf(-NaN) === -1;
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Date.prototype.toISOString - TypeError is thrown when this is any
    primitive values
includes: [runTestCase.js]
---*/

function testcase() {

        try {
            Date.prototype.toISOString.call(15);
            return false;
        } catch (ex) {
            return ex instanceof TypeError;
        }
    }
runTestCase(testcase);

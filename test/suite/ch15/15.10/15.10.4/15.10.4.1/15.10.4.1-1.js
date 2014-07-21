// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    RegExp - the thrown error is TypeError instead of RegExpError when
    pattern is an object whose [[Class]] property is 'RegExp' and
    flags is not undefined
includes: [runTestCase.js]
---*/

function testcase() {
        var regObj = new RegExp();
        try {
            var regExpObj = new RegExp(regObj, true);

            return false;
        } catch (e) {
            return e instanceof TypeError;
        }
    }
runTestCase(testcase);

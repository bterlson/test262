// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - desc.enumerable and name.enumerable are
    boolean negation of each other (8.12.9 step 6)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { enumerable: false, configurable: true });

        Object.defineProperty(obj, "foo", { enumerable: true });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, false, true, true);
    }
runTestCase(testcase);

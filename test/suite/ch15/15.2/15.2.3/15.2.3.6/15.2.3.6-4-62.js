// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-62
description: >
    Object.defineProperty - both desc.value and name.value are null
    (8.12.9 step 6)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        Object.defineProperty(obj, "foo", { value: null });

        Object.defineProperty(obj, "foo", { value: null });
        return dataPropertyAttributesAreCorrect(obj, "foo", null, false, false, false);
    }
runTestCase(testcase);

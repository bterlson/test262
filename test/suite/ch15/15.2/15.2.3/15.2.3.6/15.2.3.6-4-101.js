// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - 'name' and 'desc' are data properties,
    name.value is present and desc.value is undefined (8.12.9 step 12)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        obj.foo = 100; // default value of attributes: writable: true, configurable: true, enumerable: true

        Object.defineProperty(obj, "foo", { value: undefined });
        return dataPropertyAttributesAreCorrect(obj, "foo", undefined, true, true, true);
    }
runTestCase(testcase);

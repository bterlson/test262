// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperty - Update [[Configurable]] attribute of
    'name' property to false successfully when [[Configurable]]
    attribute of 'name' property is true,  the 'desc' is a generic
    descriptor which contains [[Configurable]] attribute as false,
    'name' property is an index data property (8.12.9 step 8)
includes:
    - runTestCase.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {
    
        var obj = {};

        Object.defineProperty(obj, "0", {
            value: 1001,
            writable: true,
            enumerable: true,
            configurable: true
        });

        Object.defineProperty(obj, "0", {
            configurable: false
        });

        return dataPropertyAttributesAreCorrect(obj, "0", 1001, true, true, false);
    }
runTestCase(testcase);

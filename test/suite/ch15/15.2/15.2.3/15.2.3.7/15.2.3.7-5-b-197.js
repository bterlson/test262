// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'get' property of 'descObj' is own
    accessor property (8.10.5 step 7.a)
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = {};

        var descObj = {};

        Object.defineProperty(descObj, "get", {
            get: function () {
                return function () {
                    return "ownAccessorProperty";
                };
            }
        });

        Object.defineProperties(obj, {
            property: descObj
        });

        return obj.property === "ownAccessorProperty";
    }
runTestCase(testcase);

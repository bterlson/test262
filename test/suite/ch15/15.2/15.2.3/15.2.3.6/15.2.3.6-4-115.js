// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-115
description: >
    Object.defineProperty - 'name' and 'desc' are accessor properties,
    several attributes values of 'name' and 'desc' are different
    (8.12.9 step 12)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var obj = {};

        function getFunc1() {
            return 10;
        }
        function setFunc1() {}

        Object.defineProperty(obj, "foo", {
            get: getFunc1,
            set: setFunc1,
            enumerable: true,
            configurable: true
        });

        function getFunc2() {
            return 20;
        }
        function setFunc2(value) {
            obj.setVerifyHelpProp = value;
        }
        Object.defineProperty(obj, "foo", {
            get: getFunc2,
            set: setFunc2,
            enumerable: false
        });
        return accessorPropertyAttributesAreCorrect(obj, "foo", getFunc2, setFunc2, "setVerifyHelpProp", false, true);
    }
runTestCase(testcase);

// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-24
description: >
    Object.defineProperties - 'O' is the global object which
    implements its own [[GetOwnProperty]] method to get 'P' (8.12.9
    step 1 )
includes:
    - runTestCase.js
    - fnGlobalObject.js
    - dataPropertyAttributesAreCorrect.js
---*/

function testcase() {

        try {
            Object.defineProperty(fnGlobalObject(), "prop", {
                value: 11,
                writable: true,
                enumerable: true,
                configurable: true
            });

            Object.defineProperties(fnGlobalObject(), {
                prop: {
                    value: 12
                }
            });
            return dataPropertyAttributesAreCorrect(fnGlobalObject(), "prop", 12, true, true, true);
        }  finally {
            delete fnGlobalObject().prop;
        }
    }
runTestCase(testcase);

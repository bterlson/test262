// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Object.defineProperties - 'O' is an Arguments object, 'P' is own
    accessor property of 'O' which is also defined in [[ParameterMap]]
    of 'O', test TypeError is thrown when updating the [[Enumerable]]
    attribute value of 'P' which is defined as non-configurable (10.6
    [[DefineOwnProperty]] step 4)
includes:
    - runTestCase.js
    - accessorPropertyAttributesAreCorrect.js
---*/

function testcase() {

        var arg;

        (function fun(a, b, c) {
            arg = arguments;
        }(0, 1, 2));

        function get_func() {
            return 0;
        }

        Object.defineProperty(arg, "0", {
            get: get_func,
            enumerable: true,
            configurable: false
        });

        try {
            Object.defineProperties(arg, {
                "0": {
                    enumerable: false
                }
            });

            return false;
        } catch (e) {
            return (e instanceof TypeError) && accessorPropertyAttributesAreCorrect(arg, "0", get_func, undefined, undefined, true, false);
        }
    }
runTestCase(testcase);

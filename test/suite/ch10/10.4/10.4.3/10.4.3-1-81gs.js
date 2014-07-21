// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
description: >
    Strict - checking 'this' from a global scope (non-strict function
    declaration called by strict function declaration)
flags: [noStrict]
---*/

function f() { return this!==undefined;};
function foo() { "use strict"; return f();}
if (! foo()){
    throw "'this' had incorrect value!";
}

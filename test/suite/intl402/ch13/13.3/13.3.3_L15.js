// Copyright 2012 Mozilla Corporation. All rights reserved.
// This code is governed by the license found in the LICENSE file.

/*---
description: >
    Tests that Date.prototype.toLocaleTimeString  meets the
    requirements for built-in objects defined by the introduction of
    chapter 15 of the ECMAScript Language Specification.
author: Norbert Lindenberg
includes: [testBuiltInObject.js]
---*/

testBuiltInObject(Date.prototype.toLocaleTimeString, true, false, [], 0);

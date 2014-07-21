// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: CARRIAGE RETURN (U+000D) within strings is not allowed
description: Insert CARRIAGE RETURN (\u000D) into string
flags: [negative]
---*/

// CHECK#1
if (eval("'\u000Dstr\u000Ding\u000D'") === "\u000Dstr\u000Ding\u000D") {
  $ERROR('#1: eval("\'\\u000Dstr\\u000Ding\\u000D\'") === "\\u000Dstr\\u000Ding\\u000D"');
}
